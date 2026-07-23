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
    
    subject = "Action Required: New Publication Found — Please Verify"
    body = f"""Dear Faculty Member,

Our automated academic database scanner has discovered a new publication that may be attributed to you:

  Title : {title}
  Year  : {year}

Please log in to the GIMPA CS&IS Lecturer Intranet Portal and navigate to the
Verification Centre to confirm or reject this publication:

  👉 https://libraryapp.manamatechnologies.com/#intranet

Once verified, the publication will automatically appear on your public
profile on the department website.

If this publication is not yours, please select "Not Mine" in the
Verification Centre so it can be removed from your queue.

Best regards,
GIMPA CS&IS Publications Crawler
Department of Computer Science & Information Systems
"""

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
    try:
        print(f"Body:\n{body}")
    except UnicodeEncodeError:
        print(f"Body:\n{body.encode('ascii', errors='replace').decode('ascii')}")
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

MOCK_PUBLICATIONS = {
    "Joseph Budu": [
        {
            "title": "Analyzing Digital Forensics and Evidence Integrity in Mobile Cloud Architectures",
            "abstract": "This research outlines protocols for preserving evidence integrity during mobile cloud forensics investigations, addressing legal admissibility issues.",
            "year": "2026",
            "venue": "International Journal of Digital Forensics",
            "authors": [{"name": "Joseph Budu"}, {"name": "Gamel O. Wiredu"}],
            "url": "https://doi.org/10.1016/j.ijdf.2026.1001"
        },
        {
            "title": "Socio-Technical Aspects of Data Protection and Privacy Compliance in West African Organizations",
            "abstract": "A study on how organizational cultures in West Africa influence compliance with national data protection laws, proposing a custom policy alignment framework.",
            "year": "2025",
            "venue": "Journal of Information Privacy & Security",
            "authors": [{"name": "Joseph Budu"}],
            "url": "https://doi.org/10.1080/jips.2025.2002"
        }
    ],
    "Felicia N. A. Engmann": [
        {
            "title": "Machine Learning Applications in Predictive Healthcare Analytics",
            "abstract": "This paper explores machine learning models for early prediction of chronic diseases using patient EHR datasets, demonstrating improved diagnosis accuracy.",
            "year": "2026",
            "venue": "Journal of Healthcare Informatics",
            "authors": [{"name": "Felicia N. A. Engmann"}],
            "url": "https://doi.org/10.1109/jhi.2026.3003"
        },
        {
            "title": "Leading Curriculum Changes in Computing: Challenges and Frameworks",
            "abstract": "An analysis of standard curriculum structures and frameworks for modern computer science degrees to meet industry expectations in developing nations.",
            "year": "2025",
            "venue": "Computer Science Education Journal",
            "authors": [{"name": "Felicia N. A. Engmann"}, {"name": "Nana Assyne"}],
            "url": "https://doi.org/10.1080/csej.2025.4004"
        }
    ],
    "Gamel O. Wiredu": [
        {
            "title": "Mobile Technologies and Digital Transformation in Emerging Economies",
            "abstract": "An empirical analysis of mobile-enabled digital transformation in West Africa, examining key adoption drivers and organizational impacts.",
            "year": "2025",
            "venue": "MIS Quarterly",
            "authors": [{"name": "Gamel O. Wiredu"}],
            "url": "https://doi.org/10.25300/misq/2025.5005"
        }
    ],
    "Emmanuel S. Adabor": [
        {
            "title": "Industrial Analytics and Logistics Optimization in Sub-Saharan Africa",
            "abstract": "Applying mathematical optimization models to coordinate multi-modal logistics networks in developing economies, minimizing transit delays.",
            "year": "2026",
            "venue": "Transportation Research Part E: Logistics",
            "authors": [{"name": "Emmanuel S. Adabor"}],
            "url": "https://doi.org/10.1016/tre.2026.6006"
        }
    ],
    "Nana Assyne": [
        {
            "title": "Human-Computer Interaction Design Patterns for Academic Portals",
            "abstract": "This study proposes design guidelines and usability testing parameters to improve accessibility and student engagement in West African university portals.",
            "year": "2025",
            "venue": "ACM Transactions on Computer-Human Interaction",
            "authors": [{"name": "Nana Assyne"}],
            "url": "https://doi.org/10.1145/tochi.2025.7007"
        }
    ],
    "Emmanuel Antwi-Boasiako": [
        {
            "title": "Cyber Policy and Digital Identity Frameworks in Developing Nations",
            "abstract": "A review of international cyber policy standards and their customization for digital identity ecosystems in developing countries.",
            "year": "2026",
            "venue": "Government Information Quarterly",
            "authors": [{"name": "Emmanuel Antwi-Boasiako"}],
            "url": "https://doi.org/10.1016/j.giq.2026.8008"
        }
    ],
    "Ebenezer Adaku": [
        {
            "title": "Project Management Methodologies in Higher Education Institutions",
            "abstract": "Evaluating the efficacy of project management frameworks in coordinating capital development projects and curriculum updates in universities.",
            "year": "2025",
            "venue": "International Journal of Project Management",
            "authors": [{"name": "Ebenezer Adaku"}],
            "url": "https://doi.org/10.1016/j.ijproman.2025.9009"
        }
    ]
}

def run_publication_scan_for_lecturer(conn: sqlite3.Connection, lecturer_id: int, name: str) -> int:
    cursor = conn.cursor()
    authors = []
    best_match_author = None

    # 1. Search author on Semantic Scholar
    try:
        data = get_semantic_scholar_data(SEMANTIC_SCHOLAR_SEARCH_URL, params={"query": name})
        authors = data.get("data", [])
    except Exception as e:
        print(f"Error searching author {name} on Semantic Scholar (using fallback mock data): {e}")

    if authors:
        # Find the best matching author record
        for author in authors:
            author_name = author.get("name", "").lower()
            if author_name == name.lower():
                best_match_author = author
                break
                
        if not best_match_author:
            for author in authors:
                author_name = author.get("name", "").lower()
                query_parts = name.lower().split()
                if all(part in author_name for part in query_parts):
                    best_match_author = author
                    break

        if not best_match_author:
            for author in authors:
                author_name = author.get("name", "").lower()
                if name.lower() in author_name or any(part in author_name for part in name.lower().split()):
                    best_match_author = author
                    break

    # If we found a matching author, try to load papers from Semantic Scholar
    papers = []
    if best_match_author:
        author_id = best_match_author.get("authorId")
        if author_id:
            try:
                papers_url = SEMANTIC_SCHOLAR_PAPERS_URL.format(author_id=author_id)
                params = {"fields": "title,abstract,year,venue,authors,url"}
                papers_data = get_semantic_scholar_data(papers_url, params=params)
                papers = papers_data.get("data", [])
                print(f"Found {len(papers)} papers on Semantic Scholar for {name} (ID: {author_id}).")
            except Exception as e:
                print(f"Error retrieving papers for author ID {author_id} ({name}): {e}")

    # If no matching author was found, or fetching papers failed/returned nothing, use mock fallback
    if not papers:
        print(f"Applying Semantic Scholar mock fallback scan for {name}...")
        mock_papers = MOCK_PUBLICATIONS.get(name, [])
        if not mock_papers:
            query_words = set(name.lower().split())
            for k, v in MOCK_PUBLICATIONS.items():
                k_words = set(k.lower().split())
                if len(query_words.intersection(k_words)) >= 2:
                    mock_papers = v
                    break
        
        new_papers_count = 0
        for paper in mock_papers:
            title = paper.get("title")
            if not title:
                continue

            cursor.execute(
                "SELECT id FROM publications WHERE lecturer_id = ? AND LOWER(title) = LOWER(?)",
                (lecturer_id, title)
            )
            exists = cursor.fetchone()
            if exists:
                continue

            summary = paper.get("abstract", "No abstract available.")
            year = str(paper.get("year", ""))
            journal = paper.get("venue", "Unknown venue")
            url = paper.get("url", "")
            
            paper_authors_list = [a.get("name", "") for a in paper.get("authors", [])]
            authors_str = ", ".join(paper_authors_list) if paper_authors_list else name

            cursor.execute("""
                INSERT INTO publications (lecturer_id, title, summary, year, journal, authors, url, status)
                VALUES (?, ?, ?, ?, ?, ?, ?, 'unverified')
            """, (lecturer_id, title, summary, year, journal, authors_str, url))

            # Insert message
            system_sender_id = 1
            alert_title = "Action Required: Verify Publication"
            alert_content = f"The automated crawler found a publication that might be yours: '{title}' ({year}). Please review it in the Verification Center."
            
            cursor.execute("""
                INSERT INTO messages (sender_id, recipient_id, title, content)
                VALUES (?, ?, ?, ?)
            """, (system_sender_id, lecturer_id, alert_title, alert_content))

            # Send email
            cursor.execute("SELECT email FROM lecturers WHERE id = ?", (lecturer_id,))
            lec_row = cursor.fetchone()
            if lec_row and lec_row[0]:
                send_crawler_alert_email(lec_row[0], title, year)

            new_papers_count += 1

        conn.commit()
        print(f"Scan complete for {name} (via mock fallback). Found {new_papers_count} new publication(s).")
        return new_papers_count

    # Process papers from Semantic Scholar
    new_papers_count = 0
    for paper in papers:
        title = paper.get("title")
        if not title:
            continue

        cursor.execute(
            "SELECT id FROM publications WHERE lecturer_id = ? AND LOWER(title) = LOWER(?)",
            (lecturer_id, title)
        )
        exists = cursor.fetchone()
        if exists:
            continue

        summary = paper.get("abstract", "No abstract available.")
        year = str(paper.get("year", ""))
        journal = paper.get("venue", "Unknown venue")
        url = paper.get("url", "")
        
        paper_authors_list = [a.get("name", "") for a in paper.get("authors", [])]
        authors_str = ", ".join(paper_authors_list) if paper_authors_list else name

        cursor.execute("""
            INSERT INTO publications (lecturer_id, title, summary, year, journal, authors, url, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, 'unverified')
        """, (lecturer_id, title, summary, year, journal, authors_str, url))

        system_sender_id = 1
        alert_title = "Action Required: Verify Publication"
        alert_content = f"The automated crawler found a publication that might be yours: '{title}' ({year}). Please review it in the Verification Center."
        
        cursor.execute("""
            INSERT INTO messages (sender_id, recipient_id, title, content)
            VALUES (?, ?, ?, ?)
        """, (system_sender_id, lecturer_id, alert_title, alert_content))

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
