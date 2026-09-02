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

opener.open(urllib.request.Request('https://46.62.214.146:8083/login/', data=login_data))

# Step 2: Open /list/cron/
resp_cron = opener.open('https://46.62.214.146:8083/list/cron/')
html_cron = resp_cron.read().decode('utf-8', errors='ignore')

token_session = re.search(r'token=([a-f0-9]+)', html_cron).group(1)
print('Token:', token_session)

# Inspect job 1
resp_j1 = opener.open(f'https://46.62.214.146:8083/edit/cron/?job=1&token={token_session}')
html_j1 = resp_j1.read().decode('utf-8', errors='ignore')
print('Job 1 inputs:')
for name, val in re.findall(r'<input[^>]+name=["\']([^"\']+)["\'][^>]+value=["\']([^"\']*)["\']', html_j1):
    print(f'  {name} = {val}')
for textarea in re.findall(r'<textarea[^>]+name=["\']([^"\']+)["\'][^>]*>(.*?)</textarea>', html_j1, re.DOTALL):
    print(f'  {textarea[0]} = {textarea[1].strip()}')

# Inspect job 2
resp_j2 = opener.open(f'https://46.62.214.146:8083/edit/cron/?job=2&token={token_session}')
html_j2 = resp_j2.read().decode('utf-8', errors='ignore')
print('Job 2 inputs:')
for name, val in re.findall(r'<input[^>]+name=["\']([^"\']+)["\'][^>]+value=["\']([^"\']*)["\']', html_j2):
    print(f'  {name} = {val}')
for textarea in re.findall(r'<textarea[^>]+name=["\']([^"\']+)["\'][^>]*>(.*?)</textarea>', html_j2, re.DOTALL):
    print(f'  {textarea[0]} = {textarea[1].strip()}')
