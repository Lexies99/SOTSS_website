import sys, os, io
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
if ! pgrep -f "uvicorn backend.main" > /dev/null 2>&1; then
    nohup "$DIR/.venv/bin/python3" -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 > /tmp/uvicorn.log 2>&1 &
fi
"""

sftp.putfo(io.BytesIO(sh_script.encode('utf-8')), REMOTE_PUB + '/run_server.sh')
sftp.chmod(REMOTE_PUB + '/run_server.sh', 0o755)
print('Uploaded run_server.sh with 755 permissions')

sftp.close()
transport.close()
