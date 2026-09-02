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

# 1. Login
resp = opener.open('https://46.62.214.146:8083/login/')
html = resp.read().decode('utf-8', errors='ignore')
token = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html).group(1)

login_data = urllib.parse.urlencode({
    'user': 'admin',
    'password': 'PsasaqecmCFNgu43wfkRgxMKR',
    'token': token
}).encode('utf-8')
opener.open(urllib.request.Request('https://46.62.214.146:8083/login/', data=login_data))

# 2. Get list/cron
req_cron = urllib.request.Request('https://46.62.214.146:8083/list/cron/', headers={
    'Referer': 'https://46.62.214.146:8083/list/web/',
    'User-Agent': 'Mozilla/5.0'
})
html_cron = opener.open(req_cron).read().decode('utf-8', errors='ignore')
tok = re.search(r'token=([a-f0-9]{32})', html_cron).group(1)
print('Token:', tok)

# Find all run/restart/exec URLs on cron page
for action in ['run', 'restart', 'exec', 'start']:
    test_url = f'https://46.62.214.146:8083/{action}/cron/?job=3&token={tok}'
    try:
        req_a = urllib.request.Request(test_url, headers={
            'Referer': 'https://46.62.214.146:8083/list/cron/',
            'User-Agent': 'Mozilla/5.0'
        })
        resp_a = opener.open(req_a)
        print(f'Action /{action}/cron/: Status {resp_a.status}, URL: {resp_a.geturl()}')
    except Exception as e:
        print(f'Action /{action}/cron/: {e}')
