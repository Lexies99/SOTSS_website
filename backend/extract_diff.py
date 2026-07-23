import os
import json

log_dir = r"C:\Users\15406\AppData\Roaming\Code\User\History"
# Wait, let's find the transcript logs first
transcript_path = r"C:\Users\15406\.gemini\antigravity-ide\brain\89354951-0e7d-40ca-b08e-4288f3b9b914\.system_generated\logs\transcript_full.jsonl"

if os.path.exists(transcript_path):
    print("Found transcript_full.jsonl!")
    with open(transcript_path, "r", encoding="utf-8") as f:
        for line in f:
            try:
                data = json.loads(line)
                # Look for git diff app.js command output
                tool_calls = data.get("tool_calls", [])
                for tc in tool_calls:
                    if tc.get("name") == "run_command" and "git diff app.js" in tc.get("args", {}).get("CommandLine", ""):
                        print("Found tool call!")
                
                content = data.get("content", "")
                if "diff --git a/app.js" in content:
                    print("Found diff in content! Writing to app_js.diff")
                    # Extract diff block
                    # Let's extract the actual string from the content
                    with open("app_js.diff", "w", encoding="utf-8") as out:
                        out.write(content)
                    print("Successfully wrote app_js.diff!")
            except Exception as e:
                pass
else:
    print("transcript_full.jsonl not found at path:", transcript_path)
