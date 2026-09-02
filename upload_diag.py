import sys, io
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')
import paramiko

HOST = '46.62.214.146'
pub = '/home/admin/web/libraryapp.manamatechnologies.com/public_html'

transport = paramiko.Transport((HOST, 22))
transport.connect(username='admin', password='PsasaqecmCFNgu43wfkRgxMKR')
sftp = paramiko.SFTPClient.from_transport(transport)

diag = """<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: text/plain');
echo "=== PHP DIAGNOSTICS ===\n";
echo "User: " . get_current_user() . "\n";
echo "Whoami: " . @shell_exec('whoami') . "\n";
echo "Disabled functions: " . ini_get('disable_functions') . "\n";

$dir = '/home/admin/web/libraryapp.manamatechnologies.com/public_html';
echo "Directory exists: " . (is_dir($dir) ? 'YES' : 'NO') . "\n";
echo ".venv uvicorn exists: " . (file_exists($dir . '/.venv/bin/uvicorn') ? 'YES' : 'NO') . "\n";

$py = $dir . '/.venv/bin/python3';
echo "Python exists: " . (file_exists($py) ? 'YES' : 'NO') . "\n";

// Start uvicorn
$cmd = 'cd ' . escapeshellarg($dir) . ' && ' . escapeshellarg($dir . '/.venv/bin/uvicorn') . ' backend.main:app --host 127.0.0.1 --port 8000 > /tmp/uvicorn_out.log 2>&1 &';
echo "Running CMD: " . $cmd . "\n";
$res = @shell_exec($cmd);
echo "Exec output: " . var_export($res, true) . "\n";

sleep(2);
$ps = @shell_exec('ps aux | grep uvicorn');
echo "PS output:\n" . $ps . "\n";
echo "Log file content:\n" . @file_get_contents('/tmp/uvicorn_out.log') . "\n";
?>"""

sftp.putfo(io.BytesIO(diag.encode('utf-8')), pub + '/diag.php')
print('Uploaded diag.php')

sftp.close()
transport.close()
