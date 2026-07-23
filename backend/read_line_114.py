import os
import json

transcript_path = r"C:\Users\15406\.gemini\antigravity-ide\brain\89354951-0e7d-40ca-b08e-4288f3b9b914\.system_generated\logs\transcript_full.jsonl"

if os.path.exists(transcript_path):
    with open(transcript_path, "r", encoding="utf-8") as f:
        for idx, line in enumerate(f):
            if idx == 114:
                print("Line 114 found!")
                data = json.loads(line)
                print("Keys:", list(data.keys()))
                print("source:", data.get("source"))
                print("type:", data.get("type"))
                content = data.get("content", "")
                print("content length:", len(content))
                # Write content to app_js.diff
                with open("app_js.diff", "w", encoding="utf-8") as out:
                    out.write(content)
                print("Wrote content to app_js.diff!")
                break
else:
    print("Transcript not found")
