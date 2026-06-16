from fastapi import FastAPI, Depends, HTTPException, status, Form
from fastapi.security import OAuth2PasswordBearer
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional, List
import sqlite3
import uvicorn
import os
import string
import random
import smtplib
import socket
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

socket.setdefaulttimeout(10)

# Load environment variables from .env if it exists
dotenv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), ".env")
if os.path.exists(dotenv_path):
    with open(dotenv_path) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#"):
                parts = line.split("=", 1)
                if len(parts) == 2:
                    key = parts[0].strip().replace("export ", "")
                    val = parts[1].strip().strip('"').strip("'")
                    os.environ[key] = val

from backend.database import get_db, DB_PATH
from backend.auth import verify_password, create_access_token, decode_access_token, get_password_hash
from backend.scraper import scan_all_lecturers

app = FastAPI(title="SOTSS Academic Portal & Intranet API")

# Add CORS middleware just in case
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/login")

# Dependencies
def get_current_lecturer(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    payload = decode_access_token(token)
    if payload is None:
        raise credentials_exception
    username: str = payload.get("sub")
    if username is None:
        raise credentials_exception
    
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM lecturers WHERE username = ?", (username,))
    lecturer = cursor.fetchone()
    conn.close()
    
    if lecturer is None:
        raise credentials_exception
    return dict(lecturer)

# API ENDPOINTS

# Helper for generating temporary passwords
def generate_temp_password(length=8):
    chars = string.ascii_letters + string.digits
    return "".join(random.choice(chars) for _ in range(length))

# Helper for sending temporary passwords via SMTP
def send_temporary_password_email(recipient_email: str, temp_password: str):
    SMTP_SERVER = os.environ.get("SMTP_SERVER", "localhost")
    SMTP_PORT = int(os.environ.get("SMTP_PORT", "1025"))
    SMTP_USER = os.environ.get("SMTP_USER", "")
    SMTP_PASSWORD = os.environ.get("SMTP_PASSWORD", "")
    
    subject = "Your SOTSS Lecturer Portal Temporary Password"
    body = f"""Dear Lecturer,

Welcome to the School of Technology and Social Sciences Portal.
An account has been created for you.

Your temporary password is: {temp_password}

Please log in at http://localhost:8000/#login using your email address and this temporary password.
For security, please change this password in your Intranet profile page immediately.

Best regards,
SOTSS Administration
GIMPA"""

    msg = MIMEMultipart()
    msg['From'] = SMTP_USER or "no-reply@gimpa.edu.gh"
    msg['To'] = recipient_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    # Always write to logs for easy retrieval in development/testing
    print("\n" + "="*50)
    print(f"SMTP EMAIL SENDING MOCK / LOG:")
    print(f"To: {recipient_email}")
    print(f"Subject: {subject}")
    print(f"Body:\n{body}")
    print("="*50 + "\n")

    try:
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=5)
        if SMTP_USER and SMTP_PASSWORD:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASSWORD)
        server.send_message(msg)
        server.quit()
        print("SMTP email sent successfully.")
    except Exception as e:
        print(f"SMTP Server not available. (Email was printed to stdout instead): {e}")

@app.post("/api/login")
def login(username: str = Form(...), password: str = Form(...)):
    # Treat username field as the email address
    email = username.strip().lower()
    
    # Enforce domain constraints
    if not (email.endswith("@gimpa.edu.gh") or email.endswith("@adj.gimpa.edu.gh") or email.endswith("@st.gimpa.edu.gh")):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only GIMPA email addresses ending in @gimpa.edu.gh, @adj.gimpa.edu.gh, or @st.gimpa.edu.gh are allowed."
        )

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM lecturers WHERE LOWER(email) = ?", (email,))
    user = cursor.fetchone()
    conn.close()

    if not user or not verify_password(password, user["password_hash"]):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email address or password",
            headers={"WWW-Authenticate": "Bearer"},
        )

    access_token = create_access_token(data={"sub": user["username"]})
    return {
        "access_token": access_token, 
        "token_type": "bearer",
        "user": {
            "id": user["id"],
            "username": user["username"],
            "name": user["name"],
            "role": user["role"],
            "is_admin": bool(user["is_admin"])
        }
    }

@app.post("/api/signup")
def signup(
    name: str = Form(...),
    email: str = Form(...),
    role: str = Form(...),
    spec: str = Form(...),
    office: str = Form(...),
    phone: Optional[str] = Form(None),
    extra_label: Optional[str] = Form(None),
    extra_value: Optional[str] = Form(None),
    department: str = Form("Computer Science & Information Systems")
):
    email_clean = email.strip().lower()
    
    # Enforce domain constraints
    if not (email_clean.endswith("@gimpa.edu.gh") or email_clean.endswith("@adj.gimpa.edu.gh") or email_clean.endswith("@st.gimpa.edu.gh")):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only GIMPA email addresses ending in @gimpa.edu.gh, @adj.gimpa.edu.gh, or @st.gimpa.edu.gh are allowed to register."
        )

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Verify unique email address
    cursor.execute("SELECT id FROM lecturers WHERE LOWER(email) = ?", (email_clean,))
    exists = cursor.fetchone()
    if exists:
        conn.close()
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="An account with this email address already exists."
        )
        
    temp_pass = generate_temp_password()
    h_password = get_password_hash(temp_pass)
    
    # Derive username from prefix
    username = email_clean.split("@")[0]
    cursor.execute("SELECT id FROM lecturers WHERE username = ?", (username,))
    if cursor.fetchone():
        username = f"{username}_{random.randint(100, 999)}"
        
    cursor.execute("""
        INSERT INTO lecturers (username, password_hash, name, role, email, spec, office, phone, extra_label, extra_value, is_admin, department)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 0, ?)
    """, (username, h_password, name, role, email_clean, spec, office, phone, extra_label, extra_value, department))
    
    conn.commit()
    conn.close()
    
    # Trigger SMTP email sending
    send_temporary_password_email(email_clean, temp_pass)
    
    return {"status": "success", "message": "Sign up successful. A temporary password has been emailed to you."}

@app.post("/api/change-password")
def change_password(
    old_password: str = Form(...),
    new_password: str = Form(...),
    lecturer: dict = Depends(get_current_lecturer)
):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Retrieve current password_hash
    cursor.execute("SELECT password_hash FROM lecturers WHERE id = ?", (lecturer["id"],))
    row = cursor.fetchone()
    if not row:
        conn.close()
        raise HTTPException(status_code=404, detail="Lecturer not found")
        
    current_hash = row[0]
    if not verify_password(old_password, current_hash):
        conn.close()
        raise HTTPException(status_code=400, detail="Incorrect old password")
        
    new_hash = get_password_hash(new_password)
    
    cursor.execute("UPDATE lecturers SET password_hash = ? WHERE id = ?", (new_hash, lecturer["id"]))
    conn.commit()
    conn.close()
    
    return {"status": "success", "message": "Password changed successfully."}

@app.get("/api/public/publications")
def get_public_publications():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("""
        SELECT p.*, l.name as lecturer_name 
        FROM publications p 
        JOIN lecturers l ON p.lecturer_id = l.id 
        WHERE p.status = 'verified'
    """)
    pubs = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return pubs

@app.get("/api/public/lecturers")
def get_public_lecturers():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT id, name, role, email, spec, office, phone, extra_label, extra_value, department FROM lecturers")
    lecturers = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return lecturers

@app.get("/api/lecturer/me")
def get_me(lecturer: dict = Depends(get_current_lecturer)):
    # Remove password hash for security
    lecturer.pop("password_hash", None)
    return lecturer

@app.put("/api/lecturer/me")
def update_profile(
    name: str = Form(...),
    spec: str = Form(...),
    office: str = Form(...),
    phone: Optional[str] = Form(None),
    extra_label: Optional[str] = Form(None),
    extra_value: Optional[str] = Form(None),
    department: str = Form(...),
    lecturer: dict = Depends(get_current_lecturer)
):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE lecturers 
        SET name = ?, spec = ?, office = ?, phone = ?, extra_label = ?, extra_value = ?, department = ?
        WHERE id = ?
    """, (name, spec, office, phone, extra_label, extra_value, department, lecturer["id"]))
    conn.commit()
    conn.close()
    return {"status": "success", "message": "Profile updated successfully."}

@app.get("/api/lecturer/publications")
def get_my_publications(lecturer: dict = Depends(get_current_lecturer)):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM publications WHERE lecturer_id = ?", (lecturer["id"],))
    pubs = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return pubs

@app.post("/api/publications/{pub_id}/verify")
def verify_pub(pub_id: int, lecturer: dict = Depends(get_current_lecturer)):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    # Ensure they own this publication
    cursor.execute("SELECT id FROM publications WHERE id = ? AND lecturer_id = ?", (pub_id, lecturer["id"]))
    pub = cursor.fetchone()
    if not pub:
        conn.close()
        raise HTTPException(status_code=404, detail="Publication not found or access denied")
    
    cursor.execute("UPDATE publications SET status = 'verified' WHERE id = ?", (pub_id,))
    conn.commit()
    conn.close()
    return {"status": "success", "message": "Publication verified successfully."}

@app.post("/api/publications/{pub_id}/reject")
def reject_pub(pub_id: int, lecturer: dict = Depends(get_current_lecturer)):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    # Ensure they own this publication
    cursor.execute("SELECT id FROM publications WHERE id = ? AND lecturer_id = ?", (pub_id, lecturer["id"]))
    pub = cursor.fetchone()
    if not pub:
        conn.close()
        raise HTTPException(status_code=44, detail="Publication not found or access denied")
    
    cursor.execute("UPDATE publications SET status = 'rejected' WHERE id = ?", (pub_id,))
    conn.commit()
    conn.close()
    return {"status": "success", "message": "Publication rejected successfully."}

@app.get("/api/messages")
def get_my_messages(lecturer: dict = Depends(get_current_lecturer)):
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    # Fetch messages matching direct messages, school-wide announcements, or department-scoped announcements
    cursor.execute("""
        SELECT m.*, l.name as sender_name 
        FROM messages m
        JOIN lecturers l ON m.sender_id = l.id
        WHERE (m.scope = 'direct' AND m.recipient_id = ?)
           OR (m.scope = 'school')
           OR (m.scope = 'department' AND m.department = ?)
        ORDER BY m.timestamp DESC
    """, (lecturer["id"], lecturer["department"]))
    messages = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return messages

@app.post("/api/messages")
def send_message(
    title: str = Form(...), 
    content: str = Form(...), 
    scope: str = Form("school"), # 'school', 'department', 'direct'
    recipient_id: Optional[int] = Form(None),
    department: Optional[str] = Form(None),
    lecturer: dict = Depends(get_current_lecturer)
):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Only Admin can send school-wide announcements
    if scope == "school" and not lecturer["is_admin"]:
        conn.close()
        raise HTTPException(status_code=403, detail="Only administrators can send school-wide announcements.")
        
    # Lecturers can send department announcements, but only to their own department (unless they are admin)
    if scope == "department":
        if not department:
            department = lecturer["department"]
        elif department != lecturer["department"] and not lecturer["is_admin"]:
            conn.close()
            raise HTTPException(status_code=403, detail="You can only send announcements to your own department.")
            
    cursor.execute("""
        INSERT INTO messages (sender_id, recipient_id, title, content, scope, department)
        VALUES (?, ?, ?, ?, ?, ?)
    """, (lecturer["id"], recipient_id if scope == "direct" else None, title, content, scope, department if scope == "department" else None))
    conn.commit()
    conn.close()
    return {"status": "success", "message": "Message sent successfully."}

@app.post("/api/admin/scan")
def trigger_scanner(lecturer_id: Optional[int] = None, lecturer: dict = Depends(get_current_lecturer)):
    if not lecturer["is_admin"]:
        raise HTTPException(status_code=403, detail="Admin permissions required to trigger crawler.")
    
    if lecturer_id is not None:
        from backend.scraper import scan_single_lecturer
        new_found = scan_single_lecturer(lecturer_id)
    else:
        new_found = scan_all_lecturers()
    return {"status": "success", "new_publications_found": new_found}


# SERVING STATIC FILES

# Mount assets directory (images, icons, etc.)
assets_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "assets")
if os.path.exists(assets_path):
    app.mount("/assets", StaticFiles(directory=assets_path), name="assets")

# Specific files serving
@app.get("/app.js")
def get_app_js():
    js_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "app.js")
    return FileResponse(js_path)

@app.get("/style.css")
def get_style_css():
    css_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "style.css")
    return FileResponse(css_path)

@app.get("/styles.css")
def get_styles_css():
    base_css = os.path.join(os.path.dirname(os.path.dirname(__file__)), "styles.css")
    return FileResponse(base_css)

# Catch-all: Route all other web queries to the SPA's index.html
@app.get("/{fallback:path}")
def get_index():
    index_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), "index.html")
    return FileResponse(index_path)


if __name__ == "__main__":
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)
