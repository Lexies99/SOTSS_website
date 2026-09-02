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

# 2. Check if there is an API or CLI command runner in Hestia
req_cron = urllib.request.Request('https://46.62.214.146:8083/list/cron/', headers={
    'Referer': 'https://46.62.214.146:8083/list/web/',
    'User-Agent': 'Mozilla/5.0'
})
html_cron = opener.open(req_cron).read().decode('utf-8', errors='ignore')

print('Cron page HTML snippet (look for run buttons):')
for m in re.finditer(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', html_cron):
    href = m.group(1).replace('&amp;', '&').replace('&equals;', '=')
    text = re.sub(r'<[^>]+>', '', m.group(2)).strip()
    if any(k in href for k in ['run', 'restart', 'job', 'cron', 'service']):
        print(f'  {text} -> {href}')
