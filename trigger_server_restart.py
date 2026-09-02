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

# Get list/server to get restart token
req_srv = urllib.request.Request('https://46.62.214.146:8083/list/server/', headers={
    'Referer': 'https://46.62.214.146:8083/list/web/',
    'User-Agent': 'Mozilla/5.0'
})
html_srv = opener.open(req_srv).read().decode('utf-8', errors='ignore')

restart_match = re.search(r'href=["\'](/restart/system/\?[^"\']+)["\']', html_srv)
if restart_match:
    restart_url = 'https://46.62.214.146:8083' + restart_match.group(1).replace('&amp;', '&').replace('&equals;', '=')
    print('Found restart URL:', restart_url)
    req_restart = urllib.request.Request(restart_url, headers={
        'Referer': 'https://46.62.214.146:8083/list/server/',
        'User-Agent': 'Mozilla/5.0'
    })
    resp_restart = opener.open(req_restart)
    print('Server restart triggered, status:', resp_restart.status)
else:
    print('No restart link found on list/server')
