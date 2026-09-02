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

# Step 1: GET login page
print('1. Getting login page...')
resp = opener.open('https://46.62.214.146:8083/login/')
html = resp.read().decode('utf-8', errors='ignore')

token_match = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html)
token = token_match.group(1) if token_match else ''
print('CSRF token:', token)

# Step 2: POST login
print('2. Submitting login...')
login_data = urllib.parse.urlencode({
    'user': 'admin',
    'password': 'PsasaqecmCFNgu43wfkRgxMKR',
    'token': token
}).encode('utf-8')

req = urllib.request.Request('https://46.62.214.146:8083/login/', data=login_data)
resp2 = opener.open(req)
html2 = resp2.read().decode('utf-8', errors='ignore')
print('Logged in, URL:', resp2.geturl())

# Grab session token from logged-in page
session_token_match = re.search(r'token=([a-f0-9]+)', html2)
session_token = session_token_match.group(1) if session_token_match else token
print('Session token:', session_token)

# Step 3: GET /add/cron/ page with token query
print('3. Getting /add/cron/ page...')
resp3 = opener.open(f'https://46.62.214.146:8083/add/cron/?token={session_token}')
html3 = resp3.read().decode('utf-8', errors='ignore')
cron_token_match = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html3)
cron_token = cron_token_match.group(1) if cron_token_match else session_token
print('Cron token:', cron_token)

# Step 4: Add Cron Job
print('4. Adding cron job...')
cron_data = urllib.parse.urlencode({
    'token': cron_token,
    'ok': 'Add',
    'v_min': '*',
    'v_hour': '*',
    'v_day': '*',
    'v_month': '*',
    'v_wday': '*',
    'v_cmd': 'cd /home/admin/web/libraryapp.manamatechnologies.com/public_html && .venv/bin/uvicorn backend.main:app --host 127.0.0.1 --port 8000'
}).encode('utf-8')

req4 = urllib.request.Request(f'https://46.62.214.146:8083/add/cron/?token={session_token}', data=cron_data)
resp4 = opener.open(req4)
print('Result URL:', resp4.geturl())

# Step 5: List cron jobs
print('5. Listing cron jobs...')
resp5 = opener.open(f'https://46.62.214.146:8083/list/cron/?token={session_token}')
html5 = resp5.read().decode('utf-8', errors='ignore')
if 'uvicorn' in html5:
    print('SUCCESS! uvicorn cron job is added and active in Hestia!')
else:
    print('Status check:', 'uvicorn' in html5)
