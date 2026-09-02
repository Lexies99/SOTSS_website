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

# List cron with headers
req_cron = urllib.request.Request('https://46.62.214.146:8083/list/cron/', headers={
    'Referer': 'https://46.62.214.146:8083/list/user/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
})
resp_cron = opener.open(req_cron)
html_cron = resp_cron.read().decode('utf-8', errors='ignore')
tok = re.search(r'token=([a-f0-9]{32})', html_cron).group(1)
print('Live Token:', tok)

# GET /add/cron/ with Referer
req_add = urllib.request.Request('https://46.62.214.146:8083/add/cron/', headers={
    'Referer': 'https://46.62.214.146:8083/list/cron/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
})
resp_add = opener.open(req_add)
html_add = resp_add.read().decode('utf-8', errors='ignore')
form_tok = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html_add).group(1)
print('Form Token for Add Cron:', form_tok)

# POST to add cron job
post_data = urllib.parse.urlencode({
    'token': form_tok,
    'ok': 'Add',
    'v_min': '*',
    'v_hour': '*',
    'v_day': '*',
    'v_month': '*',
    'v_wday': '*',
    'v_cmd': 'cd /home/admin/web/libraryapp.manamatechnologies.com/public_html && .venv/bin/uvicorn backend.main:app --host 127.0.0.1 --port 8000'
}).encode('utf-8')

req_save = urllib.request.Request('https://46.62.214.146:8083/add/cron/', data=post_data, headers={
    'Referer': 'https://46.62.214.146:8083/add/cron/',
    'Origin': 'https://46.62.214.146:8083',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Content-Type': 'application/x-www-form-urlencoded'
})
resp_save = opener.open(req_save)
print('Save result URL:', resp_save.geturl())
print('Save result status:', resp_save.status)

# Verify
req_verify = urllib.request.Request('https://46.62.214.146:8083/list/cron/', headers={
    'Referer': 'https://46.62.214.146:8083/add/cron/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
})
resp_verify = opener.open(req_verify)
html_verify = resp_verify.read().decode('utf-8', errors='ignore')
if 'uvicorn' in html_verify:
    print('SUCCESS! Uvicorn cron job is added and active in Hestia!')
else:
    print('Uvicorn in cron list:', 'uvicorn' in html_verify)
