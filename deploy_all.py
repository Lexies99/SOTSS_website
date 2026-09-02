import sys, os, io
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')
import paramiko

HOST = '46.62.214.146'
PORT = 22
REMOTE_PUB = '/home/admin/web/libraryapp.manamatechnologies.com/public_html'

transport = paramiko.Transport((HOST, PORT))
transport.connect(username='admin', password='PsasaqecmCFNgu43wfkRgxMKR')
sftp = paramiko.SFTPClient.from_transport(transport)

# 1. Upload start_backend.php
php_code = """<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$dir = '/home/admin/web/libraryapp.manamatechnologies.com/public_html';
$python = $dir . '/.venv/bin/python3';
$uvicorn = $dir . '/.venv/bin/uvicorn';

// Check if running
$check = @shell_exec('pgrep -f "uvicorn backend.main"');
if (!empty(trim($check))) {
    echo json_encode(['status' => 'already_running', 'pid' => trim($check)]);
    exit;
}

$cmd = "cd $dir && $python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 > /tmp/uvicorn_sotss.log 2>&1 &";

// Multi-method spawn
@shell_exec($cmd);
@exec($cmd);
@pclose(@popen($cmd, "r"));

$descriptorspec = array(
   0 => array("pipe", "r"),
   1 => array("file", "/tmp/uvicorn_sotss.log", "a"),
   2 => array("file", "/tmp/uvicorn_sotss.log", "a")
);
@proc_open("cd $dir && $python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000", $descriptorspec, $pipes, $dir, array('PYTHONPATH' => $dir));

sleep(2);
$verify = @shell_exec('pgrep -f "uvicorn backend.main"');
echo json_encode(['status' => 'started', 'running_pid' => trim($verify), 'cmd' => $cmd]);
?>"""

sftp.putfo(io.BytesIO(php_code.encode('utf-8')), REMOTE_PUB + '/start_backend.php')
print('1. Uploaded start_backend.php')

# 2. Upload app.js
sftp.put(r'd:\NSS\SOTSS_website\SOTSS_website\app.js', REMOTE_PUB + '/app.js')
print('2. Uploaded app.js (' + str(os.path.getsize(r'd:\NSS\SOTSS_website\SOTSS_website\app.js')) + ' bytes)')

# 3. Upload index.html
sftp.put(r'd:\NSS\SOTSS_website\SOTSS_website\index.html', REMOTE_PUB + '/index.html')
print('3. Uploaded index.html')

sftp.close()
transport.close()
print('Deployment finished successfully.')
