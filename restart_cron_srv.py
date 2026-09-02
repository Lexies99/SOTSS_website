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

# Restart cron service
req_srv = urllib.request.Request('https://46.62.214.146:8083/list/server/', headers={
    'Referer': 'https://46.62.214.146:8083/list/web/',
    'User-Agent': 'Mozilla/5.0'
})
html_srv = opener.open(req_srv).read().decode('utf-8', errors='ignore')
tok = re.search(r'token=([a-f0-9]{32})', html_srv).group(1)

restart_url = f'https://46.62.214.146:8083/restart/service/?srv=cron&token={tok}'
print('Restarting cron service:', restart_url)
req_restart = urllib.request.Request(restart_url, headers={
    'Referer': 'https://46.62.214.146:8083/list/server/',
    'User-Agent': 'Mozilla/5.0'
})
resp_restart = opener.open(req_restart)
print('Restart cron status:', resp_restart.status)
