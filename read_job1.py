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
token = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html).group(1)

login_data = urllib.parse.urlencode({
    'user': 'admin',
    'password': 'PsasaqecmCFNgu43wfkRgxMKR',
    'token': token
}).encode('utf-8')

opener.open(urllib.request.Request('https://46.62.214.146:8083/login/', data=login_data))

resp_cron = opener.open('https://46.62.214.146:8083/list/cron/')
html_cron = resp_cron.read().decode('utf-8', errors='ignore')
tok = re.search(r'token=([a-f0-9]{32})', html_cron).group(1)

edit_url = f'https://46.62.214.146:8083/edit/cron/?job=1&token={tok}'
print('Opening:', edit_url)
resp_edit = opener.open(edit_url)
html_edit = resp_edit.read().decode('utf-8', errors='ignore')

print('Inputs in Job 1:')
for m in re.finditer(r'<input[^>]+name=["\']([^"\']+)["\'][^>]*value=["\']([^"\']*)["\']', html_edit):
    print(f'  input: {m.group(1)} = {m.group(2)}')
for m in re.finditer(r'<textarea[^>]+name=["\']([^"\']+)["\'][^>]*>(.*?)</textarea>', html_edit, re.DOTALL):
    print(f'  textarea: {m.group(1)} = {m.group(2).strip()}')
