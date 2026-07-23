import requests
import json

SEMANTIC_SCHOLAR_SEARCH_URL = "https://api.semanticscholar.org/graph/v1/author/search"

def test_search(name):
    print(f"Searching for: {name}")
    try:
        r = requests.get(SEMANTIC_SCHOLAR_SEARCH_URL, params={"query": name}, timeout=10)
        print(f"Status code: {r.status_code}")
        if r.status_code == 200:
            data = r.json()
            authors = data.get("data", [])
            print(f"Found {len(authors)} authors.")
            for author in authors[:5]:
                print(f"Author: {author.get('name')} (ID: {author.get('authorId')})")
                # Let's get papers
                papers_url = f"https://api.semanticscholar.org/graph/v1/author/{author.get('authorId')}/papers"
                rp = requests.get(papers_url, params={"fields": "title,year"}, timeout=10)
                if rp.status_code == 200:
                    pdata = rp.json()
                    print(f"  Papers count: {len(pdata.get('data', []))}")
                    for paper in pdata.get('data', [])[:3]:
                        print(f"    - {paper.get('title')} ({paper.get('year')})")
                else:
                    print(f"  Failed to get papers: {rp.status_code}")
        else:
            print(r.text)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    test_search("Joseph Budu")
