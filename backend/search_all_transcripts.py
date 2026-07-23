import os
import json

transcript_path = r"C:\Users\15406\.gemini\antigravity-ide\brain\89354951-0e7d-40ca-b08e-4288f3b9b914\.system_generated\logs\transcript_full.jsonl"

if os.path.exists(transcript_path):
    print("Scanning transcript for git diff...")
    with open(transcript_path, "r", encoding="utf-8") as f:
        for idx, line in enumerate(f):
            if "git diff" in line.lower():
                print(f"Match at line {idx}:")
                try:
                    data = json.loads(line)
                    print("  step_index:", data.get("step_index"))
                    print("  source:", data.get("source"))
                    print("  type:", data.get("type"))
                    content = data.get("content", "")
                    print("  content (first 100):", str(content)[:100])
                except Exception as e:
                    print("  Error parsing JSON:", e)
else:
    print("Transcript not found")
