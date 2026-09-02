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

req_user = urllib.request.Request('https://46.62.214.146:8083/edit/user/?user=admin', headers={
    'Referer': 'https://46.62.214.146:8083/list/user/',
    'User-Agent': 'Mozilla/5.0'
})
html_user = opener.open(req_user).read().decode('utf-8', errors='ignore')

# Print all form elements
for tag in re.findall(r'<(?:input|select|textarea)[^>]+>', html_user):
    print(tag)
