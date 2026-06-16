import requests
import sqlite3
import os
import smtplib
import time
import socket
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from backend.database import DB_PATH

socket.setdefaulttimeout(10)

# Load environment variables from .env if it exists
dotenv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env")
if os.path.exists(dotenv_path):
    with open(dotenv_path) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#"):
                parts = line.split("=", 1)
                if len(parts) == 2:
                    key = parts[0].strip().replace("export ", "")
                    val = parts[1].strip().strip('"').strip("'")
                    os.environ[key] = val

def send_crawler_alert_email(recipient_email: str, title: str, year: str):
    SMTP_SERVER = os.environ.get("SMTP_SERVER", "localhost")
    SMTP_PORT = int(os.environ.get("SMTP_PORT", "1025"))
    SMTP_USER = os.environ.get("SMTP_USER", "")
    SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
    
    subject = "Action Required: Verify New Publication Discovered"
    body = f"""Dear Faculty Member,

Our academic database scraper has discovered a new publication that might be yours:

Title: {title}
Year: {year}

Please log in to your Lecturer Intranet Portal at http://localhost:8000/#login and navigate to the Verification Center to confirm or reject this work.

Once verified, the publication will automatically show up on your public profile on the department website.

Best regards,
SOTSS Academic Publications Crawler"""

    msg = MIMEMultipart()
    msg['From'] = SMTP_USER or "no-reply@gimpa.edu.gh"
    msg['To'] = recipient_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    # Always log to console for easy validation in development
    print("\n" + "="*50)
    print(f"SMTP EMAIL SENDING MOCK / LOG (CRAWLER ALERT):")
    print(f"To: {recipient_email}")
    print(f"Subject: {subject}")
    print(f"Body:\n{body}")
    print("="*50 + "\n")

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=5)
        if SMTP_USER and SMTP_PASSWORD:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        print("SMTP crawler alert email sent successfully.")
    except Exception as e:
        print(f"SMTP Server not available. (Crawler alert email printed to stdout): {e}")

SEMANTIC_SCHOLAR_SEARCH_URL = "https://api.semanticscholar.org/graph/v1/author/search"
SEMANTIC_SCHOLAR_PAPERS_URL = "https://api.semanticscholar.org/graph/v1/author/{author_id}/papers"

def get_semantic_scholar_data(url: str, params: dict = None) -> dict:
    api_key = os.environ.get("SEMANTIC_SCHOLAR_API_KEY", "")
    headers = {}
    if api_key:
        headers["x-api-key"] = api_key
        
    for attempt in range(3):
        try:
            r = requests.get(url, params=params, headers=headers, timeout=10)
            if r.status_code == 429:
                print(f"Semantic Scholar rate limit hit (429). Waiting 5 seconds before retry (attempt {attempt + 1}/3)...")
                time.sleep(5)
                continue
            r.raise_for_status()
            return r.json()
        except Exception as e:
            if attempt == 2:
                raise e
            print(f"Request failed: {e}. Retrying in 2 seconds...")
            time.sleep(2)
    return {}

def run_publication_scan_for_lecturer(conn: sqlite3.Connection, lecturer_id: int, name: str) -> int:
    cursor = conn.cursor()
    # 1. Search author on Semantic Scholar
    try:
        data = get_semantic_scholar_data(SEMANTIC_SCHOLAR_SEARCH_URL, params={"query": name})
    except Exception as e:
        print(f"Error searching author {name} on Semantic Scholar: {e}")
        return 0

    authors = data.get("data", [])
    if not authors:
        print(f"No author records found for {name} on Semantic Scholar.")
        return 0

    # Assume the first result is the most relevant matching author
    best_match_author = authors[0]
    author_id = best_match_author.get("authorId")
    if not author_id:
        return 0

    # 2. Get author's papers
    try:
        papers_url = SEMANTIC_SCHOLAR_PAPERS_URL.format(author_id=author_id)
        params = {"fields": "title,abstract,year,venue,authors,url"}
        papers_data = get_semantic_scholar_data(papers_url, params=params)
    except Exception as e:
        print(f"Error retrieving papers for author ID {author_id} ({name}): {e}")
        return 0

    papers = papers_data.get("data", [])
    new_papers_count = 0

    for paper in papers:
        title = paper.get("title")
        if not title:
            continue

        # Check if this publication title already exists in our database for this lecturer
        cursor.execute(
            "SELECT id FROM publications WHERE lecturer_id = ? AND LOWER(title) = LOWER(?)",
            (lecturer_id, title)
        )
        exists = cursor.fetchone()
        if exists:
            continue

        # Extract paper fields
        summary = paper.get("abstract", "No abstract available.")
        year = str(paper.get("year", ""))
        journal = paper.get("venue", "Unknown venue")
        url = paper.get("url", "")
        
        # Build authors list string
        paper_authors_list = [a.get("name", "") for a in paper.get("authors", [])]
        authors_str = ", ".join(paper_authors_list) if paper_authors_list else name

        # Insert as unverified publication
        cursor.execute("""
            INSERT INTO publications (lecturer_id, title, summary, year, journal, authors, url, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, 'unverified')
        """, (lecturer_id, title, summary, year, journal, authors_str, url))

        # Insert a notification message into the intranet for this lecturer
        system_sender_id = 1 # We'll ensure ID 1 is the HoD admin who "issues" these alerts
        alert_title = "Action Required: Verify Publication"
        alert_content = f"The automated crawler found a publication that might be yours: '{title}' ({year}). Please review it in the Verification Center."
        
        cursor.execute("""
            INSERT INTO messages (sender_id, recipient_id, title, content)
            VALUES (?, ?, ?, ?)
        """, (system_sender_id, lecturer_id, alert_title, alert_content))

        # Retrieve email to trigger SMTP notification
        cursor.execute("SELECT email FROM lecturers WHERE id = ?", (lecturer_id,))
        lec_row = cursor.fetchone()
        if lec_row and lec_row[0]:
            send_crawler_alert_email(lec_row[0], title, year)

        new_papers_count += 1

    conn.commit()
    print(f"Scan complete for {name}. Found {new_papers_count} new publication(s).")
    return new_papers_count

def scan_all_lecturers() -> int:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT id, name FROM lecturers")
    lecturers = cursor.fetchall()
    
    total_found = 0
    for l_id, name in lecturers:
        # Strip credentials/prefixes for search queries
        clean_name = name.replace("Dr. ", "").replace("Prof. ", "").replace("O. ", "").replace("S. ", "").replace("N. A. ", "")
        total_found += run_publication_scan_for_lecturer(conn, l_id, clean_name)
        time.sleep(2) # Avoid hitting API rate limits
        
    conn.close()
    return total_found

def scan_single_lecturer(lecturer_id: int) -> int:
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM lecturers WHERE id = ?", (lecturer_id,))
    row = cursor.fetchone()
    if not row:
        conn.close()
        return 0
    name = row[0]
    clean_name = name.replace("Dr. ", "").replace("Prof. ", "").replace("O. ", "").replace("S. ", "").replace("N. A. ", "")
    found = run_publication_scan_for_lecturer(conn, lecturer_id, clean_name)
    conn.close()
    return found

if __name__ == "__main__":
    scan_all_lecturers()
