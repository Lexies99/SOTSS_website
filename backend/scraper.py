import requests
import sqlite3
from backend.database import DB_PATH

SEMANTIC_SCHOLAR_SEARCH_URL = "https://api.semanticscholar.org/graph/v1/author/search"
SEMANTIC_SCHOLAR_PAPERS_URL = "https://api.semanticscholar.org/graph/v1/author/{author_id}/papers"

def run_publication_scan_for_lecturer(conn: sqlite3.Connection, lecturer_id: int, name: str) -> int:
    cursor = conn.cursor()
    # 1. Search author on Semantic Scholar
    try:
        r = requests.get(SEMANTIC_SCHOLAR_SEARCH_URL, params={"query": name}, timeout=10)
        r.raise_for_status()
        data = r.json()
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
        r = requests.get(papers_url, params=params, timeout=10)
        r.raise_for_status()
        papers_data = r.json()
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
        
    conn.close()
    return total_found

if __name__ == "__main__":
    scan_all_lecturers()
