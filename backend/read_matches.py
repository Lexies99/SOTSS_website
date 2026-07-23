import json

with open("matched_lines.jsonl", "r", encoding="utf-8") as f:
    for idx, line in enumerate(f):
        data = json.loads(line)
        print(f"--- MATCH {idx} ---")
        print("Keys:", list(data.keys()))
        print("source:", data.get("source"))
        print("type:", data.get("type"))
        print("status:", data.get("status"))
        # Print first 200 chars of content
        content = data.get("content", "")
        print("content (first 200):", str(content)[:200])
        tool_calls = data.get("tool_calls", [])
        if tool_calls:
            print("Tool calls count:", len(tool_calls))
            for tc in tool_calls:
                print("  Tool name:", tc.get("name"))
                # Print first 200 chars of tool output if it exists
                output = tc.get("output", "")
                if output:
                    print("  Tool output (first 200):", str(output)[:200])
