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

# 2. Get edit user page
req_user = urllib.request.Request('https://46.62.214.146:8083/edit/user/?user=admin', headers={
    'Referer': 'https://46.62.214.146:8083/list/user/',
    'User-Agent': 'Mozilla/5.0'
})
resp_user = opener.open(req_user)
html_user = resp_user.read().decode('utf-8', errors='ignore')
form_tok = re.search(r'name=["\']token["\']\s+value=["\']([^"\']+)["\']', html_user).group(1)

print('Form token for user edit:', form_tok)

# Find all select options for SSH shell
shells = re.findall(r'<option[^>]+value=["\']([^"\']+)["\'][^>]*>([^<]+)</option>', html_user)
print('Available shells in Hestia:', shells)

# Enable bash shell for admin
post_user = {
    'token': form_tok,
    'save': 'Save',
    'v_user': 'admin',
    'v_shell': 'bash'
}

# Collect all other current form values
for m in re.finditer(r'<input[^>]+name=["\'](v_[^"\']+)["\'][^>]*value=["\']([^"\']*)["\']', html_user):
    if m.group(1) not in post_user:
        post_user[m.group(1)] = m.group(2)

req_save_user = urllib.request.Request('https://46.62.214.146:8083/edit/user/?user=admin', 
    data=urllib.parse.urlencode(post_user).encode('utf-8'),
    headers={
        'Referer': 'https://46.62.214.146:8083/edit/user/?user=admin',
        'Origin': 'https://46.62.214.146:8083',
        'User-Agent': 'Mozilla/5.0',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
)
resp_save_user = opener.open(req_save_user)
print('Save user SSH status:', resp_save_user.status)
