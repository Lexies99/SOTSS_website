import sys
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')

import paramiko
import os

HOST = '46.62.214.146'
PORT = 22
LOCAL_FILES = [
    r'd:\NSS\SOTSS_website\SOTSS_website\app.js',
    r'd:\NSS\SOTSS_website\SOTSS_website\index.html',
]

USERS = [
    ('admin', 'PsasaqecmCFNgu43wfkRgxMKR'),
    ('Admin', 'PsasaqecmCFNgu43wfkRgxMKR'),
    ('root', 'PsasaqecmCFNgu43wfkRgxMKR'),
]

# SFTP-only connection
transport = None
sftp = None
for user, password in USERS:
    try:
        print(f'Trying SFTP as {user}@{HOST}:{PORT}...')
        transport = paramiko.Transport((HOST, PORT))
        transport.connect(username=user, password=password)
        sftp = paramiko.SFTPClient.from_transport(transport)
        print(f'Connected as {user}!')
        break
    except Exception as e:
        print(f'  Failed: {e}')
        if transport:
            transport.close()
        transport = None

if not sftp:
    print('Could not connect via SFTP with any credentials.')
    sys.exit(1)

# Search for the site directory by listing known paths
REMOTE_DIRS = [
    '/home/admin/web/libraryapp.manamatechnologies.com/public_html',
    '/home/Admin/web/libraryapp.manamatechnologies.com/public_html',
    '/var/www/libraryapp.manamatechnologies.com/public_html',
    '/var/www/html',
]

# Also enumerate /home to find user dirs
try:
    homes = sftp.listdir('/home')
    print('Users in /home:', homes)
    for h in homes:
        candidate = f'/home/{h}/web/libraryapp.manamatechnologies.com/public_html'
        if candidate not in REMOTE_DIRS:
            REMOTE_DIRS.insert(0, candidate)
except Exception as e:
    print('Could not list /home:', e)

remote_dir = None
for d in REMOTE_DIRS:
    try:
        sftp.stat(d)
        remote_dir = d
        print(f'Found site directory: {remote_dir}')
        break
    except FileNotFoundError:
        pass
    except Exception as e:
        print(f'  Checking {d}: {e}')

if not remote_dir:
    # Try to find app.js anywhere
    def find_file(sftp, start, name, depth=0):
        if depth > 4:
            return None
        try:
            for entry in sftp.listdir_attr(start):
                path = start + '/' + entry.filename
                if entry.filename == name:
                    return path
                if hasattr(entry, 'st_mode') and entry.st_mode and (entry.st_mode & 0o40000):
                    result = find_file(sftp, path, name, depth+1)
                    if result:
                        return result
        except:
            pass
        return None

    print('Searching for app.js in common directories...')
    for search_start in ['/home', '/var/www']:
        found = find_file(sftp, search_start, 'app.js')
        if found:
            remote_dir = os.path.dirname(found)
            print(f'Found via search: {remote_dir}')
            break

if not remote_dir:
    print('ERROR: Could not find site directory. Listing / and /home:')
    try:
        print('/ :', sftp.listdir('/'))
        print('/home:', sftp.listdir('/home'))
    except Exception as e:
        print(e)
    sftp.close()
    transport.close()
    sys.exit(1)

# Upload files
for local_path in LOCAL_FILES:
    filename = os.path.basename(local_path)
    remote_path = remote_dir + '/' + filename
    print(f'Uploading {filename} -> {remote_path} ...')
    sftp.put(local_path, remote_path)
    print(f'  Done! ({os.path.getsize(local_path):,} bytes)')

sftp.close()
transport.close()
print('\n✅ Deployment complete! Files uploaded successfully.')


# Try common Hestia/Linux user paths
REMOTE_DIRS = [
    '/home/admin/web/libraryapp.manamatechnologies.com/public_html',
    '/home/Admin/web/libraryapp.manamatechnologies.com/public_html',
    '/var/www/libraryapp.manamatechnologies.com/public_html',
    '/var/www/html',
]

USERS = [
    ('admin', 'PsasaqecmCFNgu43wfkRgxMKR'),
    ('Admin', 'PsasaqecmCFNgu43wfkRgxMKR'),
    ('root', 'PsasaqecmCFNgu43wfkRgxMKR'),
]

client = paramiko.SSHClient()
client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

connected = False
for user, password in USERS:
    try:
        print(f'Trying SSH as {user}@{HOST}:{PORT}...')
        client.connect(HOST, port=PORT, username=user, password=password, timeout=15)
        print(f'Connected as {user}!')
        connected = True
        break
    except Exception as e:
        print(f'  Failed: {e}')

if not connected:
    print('Could not connect via SSH with any credentials.')
    sys.exit(1)

# Find the correct remote directory
remote_dir = None
for d in REMOTE_DIRS:
    stdin, stdout, stderr = client.exec_command(f'test -d {d} && echo EXISTS || echo MISSING')
    result = stdout.read().decode().strip()
    if result == 'EXISTS':
        remote_dir = d
        print(f'Found remote directory: {remote_dir}')
        break

if not remote_dir:
    # Fallback: find it
    stdin, stdout, stderr = client.exec_command('find /home /var/www -name "app.js" 2>/dev/null | head -5')
    found = stdout.read().decode().strip()
    print('Search result for app.js on server:', found)
    if found:
        remote_dir = os.path.dirname(found.splitlines()[0])
        print(f'Using directory from search: {remote_dir}')
    else:
        print('Could not find site directory on server!')
        client.close()
        sys.exit(1)

# Upload files via SFTP
sftp = client.open_sftp()
for local_path in LOCAL_FILES:
    filename = os.path.basename(local_path)
    remote_path = remote_dir + '/' + filename
    print(f'Uploading {filename} -> {remote_path}...')
    sftp.put(local_path, remote_path)
    print(f'  Done! ({os.path.getsize(local_path):,} bytes)')

sftp.close()
client.close()
print('\nDeployment complete! Files uploaded successfully.')
