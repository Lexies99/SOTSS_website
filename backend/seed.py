import sqlite3
import os
from backend.database import DB_PATH, init_db
from backend.auth import get_password_hash

def seed_data():
    # Delete database file to force schema updates
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)
    # Ensure database file and schema exists
    init_db()
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    # Clear existing data
    cursor.execute("DELETE FROM lecturers")
    cursor.execute("DELETE FROM publications")
    cursor.execute("DELETE FROM messages")

    # 1. Seed Lecturers
    lecturers_data = [
        # (id, username, password, name, role, email, spec, office, phone, extra_label, extra_value, is_admin, department, assigned_school, assigned_role)
        (
            1, "csshead", "gimpa123", "Dr. Felicia N. A. Engmann", "Head of Department",
            "fapboadu@gimpa.edu.gh", "Data Science, AI, Curriculum Leadership",
            "Department Office, SOT Main Block", "+233 (0) 332095432", None, None, 1,
            "Computer Science & Information Systems", "School of Technology (SOT)", "HOD"
        ),
        (
            2, "josbudu", "gimpa123", "Dr. Joseph Budu", "Senior Lecturer",
            "josbudu@gimpa.edu.gh", "Digital Forensics, Cybersecurity, Data Protection",
            "SOT Block B, Room 2.11", "+233 (0) 501620138", None, None, 0,
            "Computer Science & Information Systems", None, None
        ),
        (
            3, "gwiredu", "gimpa123", "Prof. Gamel O. Wiredu", "Professor",
            "gwiredu@gimpa.edu.gh", "Information Systems, Digital Transformation, MIS",
            "SOT Block A, Room 1.04", None, "Programme Role", "Coordinator, PhD Information Systems", 0,
            "Management Information Systems", None, None
        ),
        (
            4, "eadabor", "gimpa123", "Prof. Emmanuel S. Adabor", "Dean",
            "eadabor@gimpa.edu.gh", "Industrial Analytics, Optimization, Operations Research",
            "SOT Annex, Room 3.06", "+233 (0) 302908076", None, None, 1,
            "Computer Science & Information Systems", "School of Technology (SOT)", "Dean"
        ),
        (
            5, "nassyne", "gimpa123", "Dr. Nana Assyne", "Lecturer",
            "nassyne@gimpa.edu.gh", "Software Engineering, HCI, Web Systems",
            "SOT Block C, Room 1.15", "+233 302-401681-3", None, None, 0,
            "Computer Science & Information Systems", None, None
        ),
        (
            6, "eboasiako", "gimpa123", "Dr. Emmanuel Antwi-Boasiako", "Lecturer",
            "eboasiako@gimpa.edu.gh", "Cyber Policy, Digital Identity, Security Governance",
            "SOT Block C, Room 2.03", "+233 (0) 501620138", None, None, 0,
            "Management Information Systems", None, None
        ),
        (
            7, "eadaku", "gimpa123", "Prof. Ebenezer Adaku", "Deputy Rector, GIMPA",
            "eadaku@gimpa.edu.gh", "Operations & Project Management, Higher Education Leadership",
            "Rectorate, GIMPA Main Campus", None, None, None, 0,
            "Management Information Systems", None, None
        ),
        (
            8, "admin", "gimpa123", "System Administrator", "System Administrator",
            "admin@gimpa.edu.gh", "Role Management & System Settings",
            "ICT Directorate, GIMPA Main Campus", "+233 (0) 302 401681", None, None, 1,
            "ICT Directorate", "GIMPA", "Admin"
        )
    ]

    for item in lecturers_data:
        h_password = get_password_hash(item[2])
        cursor.execute("""
            INSERT INTO lecturers (id, username, password_hash, name, role, email, spec, office, phone, extra_label, extra_value, is_admin, department, assigned_school, assigned_role)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (item[0], item[1], h_password, item[3], item[4], item[5], item[6], item[7], item[8], item[9], item[10], item[11], item[12], item[13], item[14]))

    # 2. Seed Verified Publications
    publications_data = [
        (
            2,
            "A Hybrid Machine Learning Approach for Cybersecurity Threat Modeling in Financial Services",
            "This paper introduces a hybrid model integrating supervised classification and anomaly detection to model cyber threats in real-time within financial services environments. The model achieves high sensitivity and accuracy on standard benchmarks.",
            "2026",
            "IEEE Transactions on Information Forensics and Security",
            "Joseph Budu, Felicia N. A. Engmann",
            "https://ieeexplore.ieee.org/document/123456"
        ),
        (
            1,
            "AI-Powered Curriculum Redesign: Frameworks for Modern Information Systems Programs",
            "We propose a novel AI-driven curriculum analysis framework to map industry requirements to pedagogical goals in computer science education, optimizing skill retention and syllabus relevance.",
            "2025",
            "Journal of Computer Science Education",
            "Felicia N. A. Engmann, Nana Assyne",
            "https://dl.acm.org/doi/10.1145/345678"
        )
    ]

    for item in publications_data:
        cursor.execute("""
            INSERT INTO publications (lecturer_id, title, summary, year, journal, authors, url, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, 'verified')
        """, item)

    # 3. Seed Projects
    projects_data = [
        (
            2,
            "GIMPA Cyber-Sentinel Threat Radar",
            "An open-source digital forensics tool designed for threat detection in corporate networks. It tracks anomalous network payloads and profiles endpoint risk metrics dynamically.",
            "https://github.com/josbudu/cyber-sentinel"
        ),
        (
            1,
            "Smart Academic Advisor System",
            "An institutional decision support system employing AI to advise students on course selection, workload balance, and career paths based on historical cohort performance.",
            "https://gimpa.edu.gh/projects/smart-advisor"
        ),
        (
            3,
            "Digital Transformation in West Africa",
            "A multi-year research project analyzing the impact of mobile money systems and digital wallets on rural traders in Ghana, Nigeria, and Cote d'Ivoire.",
            "https://gimpa.edu.gh/research/digital-transformation"
        )
    ]

    for item in projects_data:
        cursor.execute("""
            INSERT INTO projects (lecturer_id, title, description, url)
            VALUES (?, ?, ?, ?)
        """, item)

    # 4. Seed Welcome Messages
    messages_data = [
        # (sender_id, recipient_id, title, content)
        (1, None, "Welcome to the CS & IS Intranet", "Welcome to the GIMPA Department of Computer Science & Information Systems intranet portal! This space is designed for sharing messages, announcements, and managing your verified publications catalog."),
        (1, 2, "Department Meeting Schedule", "Hi Joseph, just a reminder that our curriculum committee meeting is scheduled for next Wednesday at 2:00 PM in the department office."),
        (1, 3, "PhD IS Seminar Series", "Gamel, could you please post the dates and guest speaker details for the upcoming PhD Information Systems seminar series by Friday?")
    ]

    for item in messages_data:
        cursor.execute("""
            INSERT INTO messages (sender_id, recipient_id, title, content)
            VALUES (?, ?, ?, ?)
        """, item)

    conn.commit()
    conn.close()

if __name__ == "__main__":
    seed_data()
    print("Database successfully seeded with default accounts and verified publications.")
