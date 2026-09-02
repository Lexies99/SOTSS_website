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

print('Logged in URL:', resp2.geturl())
print('Links on dashboard:')
for href in re.findall(r'href=["\']([^"\']+)["\']', html2):
    if any(k in href for k in ['cron', 'web', 'add', 'token']):
        print(' ', href)
