import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "database.db")

def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    try:
        yield conn
    finally:
        conn.close()

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Create Lecturers Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS lecturers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        email TEXT NOT NULL,
        spec TEXT NOT NULL,
        office TEXT NOT NULL,
        phone TEXT,
        extra_label TEXT,
        extra_value TEXT,
        is_admin BOOLEAN DEFAULT 0,
        department TEXT DEFAULT 'Computer Science & Information Systems',
        assigned_school TEXT,
        assigned_role TEXT
    )
    """)

    # Create Publications Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS publications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lecturer_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        summary TEXT,
        year TEXT,
        journal TEXT,
        authors TEXT,
        url TEXT,
        status TEXT DEFAULT 'unverified',
        FOREIGN KEY (lecturer_id) REFERENCES lecturers (id) ON DELETE CASCADE
    )
    """)

    # Create Projects Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lecturer_id INTEGER NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        url TEXT,
        FOREIGN KEY (lecturer_id) REFERENCES lecturers (id) ON DELETE CASCADE
    )
    """)

    # Create Messages Table
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sender_id INTEGER NOT NULL,
        recipient_id INTEGER, -- NULL means direct recipient is empty (could be global/department scope)
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        scope TEXT DEFAULT 'school', -- 'school' (all), 'department' (dept only), 'direct'
        department TEXT, -- targeted department
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (sender_id) REFERENCES lecturers (id) ON DELETE CASCADE,
        FOREIGN KEY (recipient_id) REFERENCES lecturers (id) ON DELETE CASCADE
    )
    """)

    conn.commit()
    conn.close()

if __name__ == "__main__":
    init_db()
    print("Database schema initialized successfully.")
