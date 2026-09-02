import sys, io
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')
import paramiko

HOST = '46.62.214.146'
CGI_DIR = '/home/admin/web/libraryapp.manamatechnologies.com/cgi-bin'

transport = paramiko.Transport((HOST, 22))
transport.connect(username='admin', password='PsasaqecmCFNgu43wfkRgxMKR')
sftp = paramiko.SFTPClient.from_transport(transport)

cgi_script = b"#!/bin/bash\necho \"Content-Type: text/plain\"\necho \"\"\necho \"=== CGI LAUNCHER ===\"\n\nDIR=\"/home/admin/web/libraryapp.manamatechnologies.com/public_html\"\ncd \"$DIR\" || exit 1\nexport PYTHONPATH=\"$DIR\"\n\nnohup \"$DIR/.venv/bin/python3\" -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 > /tmp/uvicorn.log 2>&1 &\nPID=$!\necho \"Started uvicorn PID: $PID\"\nsleep 2\n"

sftp.putfo(io.BytesIO(cgi_script), CGI_DIR + '/start.cgi')
sftp.chmod(CGI_DIR + '/start.cgi', 0o755)
print('Uploaded start.cgi to cgi-bin with 755 permissions')

sftp.close()
transport.close()
