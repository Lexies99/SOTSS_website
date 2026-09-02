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

# Get package edit page
req_pkg = urllib.request.Request('https://46.62.214.146:8083/edit/package/?package=default', headers={
    'Referer': 'https://46.62.214.146:8083/list/user/',
    'User-Agent': 'Mozilla/5.0'
})
html_pkg = opener.open(req_pkg).read().decode('utf-8', errors='ignore')
form_tok = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html_pkg).group(1)

post_pkg = {
    'token': form_tok,
    'save': 'Save',
    'v_pkg': 'default',
    'v_shell': 'bash'
}

# Collect all inputs and selects
for m in re.finditer(r'<input[^>]+name=["\'](v_[^"\']+)["\'][^>]*value=["\']([^"\']*)["\']', html_pkg):
    if m.group(1) not in post_pkg:
        post_pkg[m.group(1)] = m.group(2)

for m in re.finditer(r'<select[^>]+name=["\'](v_[^"\']+)["\'][^>]*>.*?<option[^>]+value=["\']([^"\']*)["\'][^>]*selected', html_pkg, re.DOTALL):
    if m.group(1) not in post_pkg:
        post_pkg[m.group(1)] = m.group(2)

post_pkg['v_shell'] = 'bash'

req_save = urllib.request.Request('https://46.62.214.146:8083/edit/package/?package=default',
    data=urllib.parse.urlencode(post_pkg).encode('utf-8'),
    headers={
        'Referer': 'https://46.62.214.146:8083/edit/package/?package=default',
        'Origin': 'https://46.62.214.146:8083',
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
)
resp_save = opener.open(req_save)
print('Package default saved with v_shell=bash, status:', resp_save.status)
