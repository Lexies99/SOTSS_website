import os
import json

transcript_path = r"C:\Users\15406\.gemini\antigravity-ide\brain\89354951-0e7d-40ca-b08e-4288f3b9b914\.system_generated\logs\transcript_full.jsonl"

if os.path.exists(transcript_path):
    print("Scanning transcript...")
    with open("matched_lines.jsonl", "w", encoding="utf-8") as out:
        with open(transcript_path, "r", encoding="utf-8") as f:
            for idx, line in enumerate(f):
                if "diff --git a/app.js" in line:
                    print(f"Match at line {idx}")
                    out.write(line)
else:
    print("Transcript not found")
