import sys
sys.path.insert(0, r'D:\NSS\MURRS\backend\.venv\Lib\site-packages')
import urllib.request, urllib.parse, ssl, json

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

base = 'https://libraryapp.manamatechnologies.com'

# Try login
data = urllib.parse.urlencode({'username': 'admin@gimpa.edu.gh', 'password': 'gimpa123'}).encode()
req = urllib.request.Request(base + '/api/login', data=data,
    headers={'Content-Type': 'application/x-www-form-urlencoded'})
try:
    with urllib.request.urlopen(req, context=ctx) as r:
        res = json.loads(r.read().decode())
        token = res.get('access_token')
        print('Login OK, user:', json.dumps(res.get('user', {})))
except urllib.error.HTTPError as e:
    print('Login failed:', e.code, e.read().decode())
    sys.exit(1)

print()

# Test all admin endpoints
for endpoint in ['/api/admin/news', '/api/admin/publications', '/api/lecturer/me', '/api/lecturer/publications']:
    req2 = urllib.request.Request(base + endpoint, headers={'Authorization': 'Bearer ' + token})
    try:
        with urllib.request.urlopen(req2, context=ctx) as r:
            d = r.read().decode()
            parsed = json.loads(d)
            length = len(parsed) if hasattr(parsed, '__len__') else 'N/A'
            print(endpoint + ': HTTP 200, type=' + type(parsed).__name__ + ', len=' + str(length))
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(endpoint + ': HTTP ' + str(e.code) + ' - ' + body[:200])
    except Exception as e:
        print(endpoint + ': ERROR - ' + str(e))
