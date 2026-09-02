import sys, io
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')
import paramiko

HOST = '46.62.214.146'
pub = '/home/admin/web/libraryapp.manamatechnologies.com/public_html'

transport = paramiko.Transport((HOST, 22))
transport.connect(username='admin', password='PsasaqecmCFNgu43wfkRgxMKR')
sftp = paramiko.SFTPClient.from_transport(transport)

# Write PHP script that will start uvicorn
php_lines = [
    "<?php\n",
    "$dir = '/home/admin/web/libraryapp.manamatechnologies.com/public_html';\n",
    "$uvicorn = $dir . '/.venv/bin/uvicorn';\n",
    "$check = shell_exec('pgrep -f \"uvicorn backend.main\" 2>&1');\n",
    "if (trim($check)) {\n",
    "    echo json_encode(['status' => 'already_running', 'pid' => trim($check)]);\n",
    "    exit;\n",
    "}\n",
    "$log = '/tmp/uvicorn_sotss.log';\n",
    "$cmd = 'cd ' . escapeshellarg($dir) . ' && nohup ' . escapeshellarg($uvicorn) . ' backend.main:app --host 127.0.0.1 --port 8000 >> ' . $log . ' 2>&1 &';\n",
    "shell_exec($cmd);\n",
    "sleep(3);\n",
    "$check2 = shell_exec('pgrep -f \"uvicorn backend.main\" 2>&1');\n",
    "echo json_encode(['status' => 'done', 'running_pid' => trim($check2), 'cmd' => $cmd]);\n",
    "?>\n",
]

php_content = ''.join(php_lines).encode('utf-8')
sftp.putfo(io.BytesIO(php_content), pub + '/start_backend.php')
print('Uploaded start_backend.php successfully')

sftp.close()
transport.close()
