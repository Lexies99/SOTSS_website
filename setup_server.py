import sys
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')
import paramiko, io

HOST = '46.62.214.146'

# Connect SFTP
transport = paramiko.Transport((HOST, 22))
transport.connect(username='admin', password='PsasaqecmCFNgu43wfkRgxMKR')
sftp = paramiko.SFTPClient.from_transport(transport)

# Write a start script to /home/admin/start_backend.sh
start_sh = b"""#!/bin/bash
cd /home/admin/web/libraryapp.manamatechnologies.com/public_html
source .venv/bin/activate 2>/dev/null || true
PYTHONPATH=/home/admin/web/libraryapp.manamatechnologies.com/public_html
export PYTHONPATH
nohup python3 -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 >> /home/admin/uvicorn.log 2>&1 &
echo $! > /home/admin/uvicorn.pid
echo "Started uvicorn with PID $(cat /home/admin/uvicorn.pid)"
"""

sftp.putfo(io.BytesIO(start_sh), '/home/admin/start_backend.sh')
# Make it executable (chmod 755)
sftp.chmod('/home/admin/start_backend.sh', 0o755)
print('Uploaded start_backend.sh')

# Write the systemd service file to home dir (we can't write to /etc/systemd from sftp usually)
# But try anyway
service_content = b"""[Unit]
Description=SOTSS FastAPI Backend
After=network.target

[Service]
Type=simple
User=admin
WorkingDirectory=/home/admin/web/libraryapp.manamatechnologies.com/public_html
Environment=PYTHONPATH=/home/admin/web/libraryapp.manamatechnologies.com/public_html
ExecStart=/home/admin/web/libraryapp.manamatechnologies.com/public_html/.venv/bin/uvicorn backend.main:app --host 127.0.0.1 --port 8000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
"""

# Try to write systemd service
try:
    sftp.putfo(io.BytesIO(service_content), '/etc/systemd/system/sotss-backend.service')
    print('Uploaded systemd service file to /etc/systemd/system/sotss-backend.service')
except Exception as e:
    print('Could not write to /etc/systemd/system (permission denied - need root):', e)
    # Save it to home dir instead for manual installation
    sftp.putfo(io.BytesIO(service_content), '/home/admin/sotss-backend.service')
    print('Saved service file to /home/admin/sotss-backend.service')

# Also check what python/venv is available
try:
    for item in sftp.listdir('/home/admin/web/libraryapp.manamatechnologies.com/public_html/.venv/bin'):
        if 'python' in item or 'uvicorn' in item:
            print('Found in .venv/bin:', item)
except Exception as e:
    print('.venv check:', e)
    # Try to list .venv directory
    try:
        items = sftp.listdir('/home/admin/web/libraryapp.manamatechnologies.com/public_html/.venv')
        print('.venv contents:', items)
    except Exception as e2:
        print('No .venv found:', e2)

sftp.close()
transport.close()
print('\nDone.')
