import sys, io
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')
import paramiko

HOST = '46.62.214.146'
REMOTE_PUB = '/home/admin/web/libraryapp.manamatechnologies.com/public_html'

transport = paramiko.Transport((HOST, 22))
transport.connect(username='admin', password='PsasaqecmCFNgu43wfkRgxMKR')
sftp = paramiko.SFTPClient.from_transport(transport)

# Unix LF only (\n, NOT \r\n)
sh_script_unix = b"#!/bin/bash\nDIR=\"/home/admin/web/libraryapp.manamatechnologies.com/public_html\"\ncd \"$DIR\" || exit 1\nexport PYTHONPATH=\"$DIR\"\n\"$DIR/.venv/bin/python3\" -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 > /tmp/uvicorn.log 2>&1 &\n"

sftp.putfo(io.BytesIO(sh_script_unix), REMOTE_PUB + '/run_server.sh')
sftp.chmod(REMOTE_PUB + '/run_server.sh', 0o777)
print('Uploaded run_server.sh with strict Unix LF and 777 permissions')

sftp.close()
transport.close()
