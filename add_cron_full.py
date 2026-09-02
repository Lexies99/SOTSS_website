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

# Step 1: Login
resp = opener.open('https://46.62.214.146:8083/login/')
html = resp.read().decode('utf-8', errors='ignore')
token_match = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html)
token = token_match.group(1) if token_match else ''

login_data = urllib.parse.urlencode({
    'user': 'admin',
    'password': 'PsasaqecmCFNgu43wfkRgxMKR',
    'token': token
}).encode('utf-8')

req = urllib.request.Request('https://46.62.214.146:8083/login/', data=login_data)
resp2 = opener.open(req)
html2 = resp2.read().decode('utf-8', errors='ignore')

# Step 2: Open /list/cron/
print('Opening /list/cron/ ...')
resp_cron = opener.open('https://46.62.214.146:8083/list/cron/')
html_cron = resp_cron.read().decode('utf-8', errors='ignore')

print('Links on /list/cron/ :')
for href in re.findall(r'href=["\']([^"\']+)["\']', html_cron):
    if 'cron' in href or 'add' in href:
        print(' ', href)

# Find the Add button link or form
add_match = re.search(r'href=["\'](/add/cron/[^"\']*)["\']', html_cron)
add_url = add_match.group(1) if add_match else '/add/cron/'
print('Add Cron URL:', add_url)

# Open Add Cron page
resp_add = opener.open('https://46.62.214.146:8083' + add_url)
html_add = resp_add.read().decode('utf-8', errors='ignore')

# Extract token and all input names from Add Cron page
form_token = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html_add)
ft = form_token.group(1) if form_token else ''
print('Form Token:', ft)

inputs = re.findall(r'<input[^>]+name=["\']([^"\']+)["\']', html_add)
print('Form Inputs:', inputs)

# Submit Add Cron Form
post_url = 'https://46.62.214.146:8083/add/cron/'
post_data = {
    'token': ft,
    'ok': 'Add',
    'v_cmd': 'cd /home/admin/web/libraryapp.manamatechnologies.com/public_html && .venv/bin/uvicorn backend.main:app --host 127.0.0.1 --port 8000',
    'v_min': '*',
    'v_hour': '*',
    'v_day': '*',
    'v_month': '*',
    'v_wday': '*'
}
req_post = urllib.request.Request(post_url, data=urllib.parse.urlencode(post_data).encode('utf-8'))
resp_post = opener.open(req_post)
print('POST result URL:', resp_post.geturl())
print('POST status:', resp_post.status)

# Check list/cron again
resp_verify = opener.open('https://46.62.214.146:8083/list/cron/')
html_verify = resp_verify.read().decode('utf-8', errors='ignore')
if 'uvicorn' in html_verify:
    print('SUCCESS! Uvicorn cron job is added and active in Hestia!')
else:
    print('Verification status:', 'uvicorn' in html_verify)
