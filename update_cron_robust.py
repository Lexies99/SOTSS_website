import urllib.request
import urllib.parse
import http.cookiejar
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

cj = http.cookiejar.CookieJar()
opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(cj), urllib.request.HTTPSHandler(context=ctx))

# Login
resp = opener.open('https://46.62.214.146:8083/login/')
html = resp.read().decode('utf-8', errors='ignore')
token = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html).group(1)

login_data = urllib.parse.urlencode({
    'user': 'admin',
    'password': 'PsasaqecmCFNgu43wfkRgxMKR',
    'token': token
}).encode('utf-8')
opener.open(urllib.request.Request('https://46.62.214.146:8083/login/', data=login_data))

# List cron
req_cron = urllib.request.Request('https://46.62.214.146:8083/list/cron/', headers={
    'Referer': 'https://46.62.214.146:8083/list/user/',
    'User-Agent': 'Mozilla/5.0'
})
resp_cron = opener.open(req_cron)
html_cron = resp_cron.read().decode('utf-8', errors='ignore')

# Find all cron edit/delete links
edit_jobs = re.findall(r'href=["\'](/edit/cron/\?job=(\d+)&amp;token=([a-f0-9]+))["\']', html_cron)
print('Found cron jobs:', edit_jobs)

# Add robust cron command
req_add = urllib.request.Request('https://46.62.214.146:8083/add/cron/', headers={
    'Referer': 'https://46.62.214.146:8083/list/cron/',
    'User-Agent': 'Mozilla/5.0'
})
resp_add = opener.open(req_add)
html_add = resp_add.read().decode('utf-8', errors='ignore')
form_tok = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html_add).group(1)

cmd = '/bin/bash -c "cd /home/admin/web/libraryapp.manamatechnologies.com/public_html && export PYTHONPATH=/home/admin/web/libraryapp.manamatechnologies.com/public_html && .venv/bin/python3 -m uvicorn backend.main:app --host 127.0.0.1 --port 8000 > /tmp/uvicorn.log 2>&1"'

post_data = urllib.parse.urlencode({
    'token': form_tok,
    'ok': 'Add',
    'v_min': '*',
    'v_hour': '*',
    'v_day': '*',
    'v_month': '*',
    'v_wday': '*',
    'v_cmd': cmd
}).encode('utf-8')

req_save = urllib.request.Request('https://46.62.214.146:8083/add/cron/', data=post_data, headers={
    'Referer': 'https://46.62.214.146:8083/add/cron/',
    'Origin': 'https://46.62.214.146:8083',
    'User-Agent': 'Mozilla/5.0',
    'Content-Type': 'application/x-www-form-urlencoded'
})
resp_save = opener.open(req_save)
print('Added robust cron job, status:', resp_save.status)
