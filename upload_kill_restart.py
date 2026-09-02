import sys, io
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')
import paramiko

HOST = '46.62.214.146'
REMOTE_PUB = '/home/admin/web/libraryapp.manamatechnologies.com/public_html'

transport = paramiko.Transport((HOST, 22))
transport.connect(username='admin', password='PsasaqecmCFNgu43wfkRgxMKR')
sftp = paramiko.SFTPClient.from_transport(transport)

sh_script = """#!/bin/bash
DIR="/home/admin/web/libraryapp.manamatechnologies.com/public_html"
cd "$DIR" || exit 1
export PYTHONPATH="$DIR"

# Clean up port 8000
pkill -9 -f "uvicorn" 2>/dev/null || true
fuser -k 8000/tcp 2>/dev/null || true
sleep 1

# Start fresh
nohup "$DIR/.venv/bin/python3" -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 >> "$DIR/uvicorn.log" 2>&1 &
PID=$!
echo "Started uvicorn fresh PID: $PID" >> "$DIR/uvicorn.log"
"""

sftp.putfo(io.BytesIO(sh_script.encode('utf-8')), REMOTE_PUB + '/run_server.sh')
sftp.chmod(REMOTE_PUB + '/run_server.sh', 0o777)
print('Updated run_server.sh to kill old processes on port 8000 and restart cleanly')

sftp.close()
transport.close()
