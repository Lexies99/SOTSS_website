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

# 1. Login to Hestia
resp = opener.open('https://46.62.214.146:8083/login/')
html = resp.read().decode('utf-8', errors='ignore')
token = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html).group(1)

login_data = urllib.parse.urlencode({
    'user': 'admin',
    'password': 'PsasaqecmCFNgu43wfkRgxMKR',
    'token': token
}).encode('utf-8')
opener.open(urllib.request.Request('https://46.62.214.146:8083/login/', data=login_data))

# 2. Get edit page for job=3
req_edit = urllib.request.Request('https://46.62.214.146:8083/edit/cron/?job=3', headers={
    'Referer': 'https://46.62.214.146:8083/list/cron/',
    'User-Agent': 'Mozilla/5.0'
})
resp_edit = opener.open(req_edit)
html_edit = resp_edit.read().decode('utf-8', errors='ignore')
form_tok = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html_edit).group(1)

# 3. Save with EXACT command --port 8000
correct_cmd = 'cd /home/admin/web/libraryapp.manamatechnologies.com/public_html && .venv/bin/uvicorn backend.main:app --host 127.0.0.1 --port 8000'

post_data = urllib.parse.urlencode({
    'token': form_tok,
    'save': 'Save',
    'v_job': '3',
    'v_min': '*',
    'v_hour': '*',
    'v_day': '*',
    'v_month': '*',
    'v_wday': '*',
    'v_cmd': correct_cmd
}).encode('utf-8')

req_save = urllib.request.Request('https://46.62.214.146:8083/edit/cron/?job=3', data=post_data, headers={
    'Referer': 'https://46.62.214.146:8083/edit/cron/?job=3',
    'Origin': 'https://46.62.214.146:8083',
    'User-Agent': 'Mozilla/5.0',
    'Content-Type': 'application/x-www-form-urlencoded'
})
resp_save = opener.open(req_save)
print('Updated Job 3 with --port 8000, status:', resp_save.status)
