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

# 2. Get user token
req_user = urllib.request.Request('https://46.62.214.146:8083/list/user/', headers={
    'User-Agent': 'Mozilla/5.0'
})
html_user = opener.open(req_user).read().decode('utf-8', errors='ignore')
tok = re.search(r'token=([a-f0-9]{32})', html_user).group(1)
print('Live Token:', tok)

# 3. Trigger rebuild cron for user admin
rebuild_data = urllib.parse.urlencode({
    'token': tok,
    'action': 'rebuild cron',
    'user[]': 'admin'
}).encode('utf-8')

req_rebuild = urllib.request.Request('https://46.62.214.146:8083/bulk/user/', data=rebuild_data, headers={
    'Referer': 'https://46.62.214.146:8083/list/user/',
    'Origin': 'https://46.62.214.146:8083',
    'User-Agent': 'Mozilla/5.0',
    'Content-Type': 'application/x-www-form-urlencoded'
})
resp_rebuild = opener.open(req_rebuild)
print('Rebuild cron response URL:', resp_rebuild.geturl())
print('Rebuild cron status:', resp_rebuild.status)
