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

# Open edit user page directly
req_user = urllib.request.Request('https://46.62.214.146:8083/edit/user/', headers={
    'Referer': 'https://46.62.214.146:8083/list/user/',
    'User-Agent': 'Mozilla/5.0'
})
html_user = opener.open(req_user).read().decode('utf-8', errors='ignore')
form_tok = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html_user).group(1)

print('Form token:', form_tok)

# Collect all inputs and selects
for m in re.finditer(r'<input[^>]+name=["\'](v_[^"\']+)["\'][^>]*value=["\']([^"\']*)["\']', html_user):
    print(f'Input: {m.group(1)} = {m.group(2)}')

for select in re.finditer(r'<select[^>]+name=["\']([^"\']+)["\'][^>]*>(.*?)</select>', html_user, re.DOTALL):
    print('Select:', select.group(1))
    for opt in re.finditer(r'<option[^>]+value=["\']([^"\']*)["\'][^>]*>([^<]+)</option>', select.group(2)):
        print(f'  {opt.group(1)} -> {opt.group(2).strip()}')
