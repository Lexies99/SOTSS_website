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
        # (id, username, password, name, role, email, spec, office, phone, extra_label, extra_value, is_admin, department)
        (
            1, "csshead", "gimpa123", "Dr. Felicia N. A. Engmann", "Head of Department",
            "csshead@gimpa.edu.gh", "Data Science, AI, Curriculum Leadership",
            "Department Office, SOT Main Block", "+233 (0) 332095432", None, None, 1,
            "Computer Science & Information Systems"
        ),
        (
            2, "josbudu", "gimpa123", "Dr. Joseph Budu", "Senior Lecturer",
            "josbudu@gimpa.edu.gh", "Digital Forensics, Cybersecurity, Data Protection",
            "SOT Block B, Room 2.11", "+233 (0) 501620138", None, None, 0,
            "Computer Science & Information Systems"
        ),
        (
            3, "gwiredu", "gimpa123", "Prof. Gamel O. Wiredu", "Professor",
            "gwiredu@gimpa.edu.gh", "Information Systems, Digital Transformation, MIS",
            "SOT Block A, Room 1.04", None, "Programme Role", "Coordinator, PhD Information Systems", 0,
            "Management Information Systems"
        ),
        (
            4, "eadabor", "gimpa123", "Prof. Emmanuel S. Adabor", "Professor",
            "eadabor@gimpa.edu.gh", "Industrial Analytics, Optimization, Operations Research",
            "SOT Annex, Room 3.06", "+233 (0) 302908076", None, None, 0,
            "Computer Science & Information Systems"
        ),
        (
            5, "nassyne", "gimpa123", "Dr. Nana Assyne", "Lecturer",
            "nassyne@gimpa.edu.gh", "Software Engineering, HCI, Web Systems",
            "SOT Block C, Room 1.15", "+233 302-401681-3", None, None, 0,
            "Computer Science & Information Systems"
        ),
        (
            6, "eboasiako", "gimpa123", "Dr. Emmanuel Antwi-Boasiako", "Lecturer",
            "eboasiako@gimpa.edu.gh", "Cyber Policy, Digital Identity, Security Governance",
            "SOT Block C, Room 2.03", "+233 (0) 501620138", None, None, 0,
            "Management Information Systems"
        )
    ]

    for item in lecturers_data:
        h_password = get_password_hash(item[2])
        cursor.execute("""
            INSERT INTO lecturers (id, username, password_hash, name, role, email, spec, office, phone, extra_label, extra_value, is_admin, department)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (item[0], item[1], h_password, item[3], item[4], item[5], item[6], item[7], item[8], item[9], item[10], item[11], item[12]))

    # 2. Seed Verified Publications
    publications_data = [
        # Felicia Engmann (ID: 1)
        (1, "Learning analytics for retention prediction in emerging universities", "This paper addresses learning analytics and student retention indicators in African tertiary systems.", "2025", "Education and Information Technologies", "Engmann, F.; Budu, J.", ""),
        (1, "Ethical AI integration for tertiary-level computing programmes", "A study exploring framework criteria for ethical artificial intelligence systems coursework integration.", "2024", "Journal of Responsible AI in Education", "Engmann, F.; Wiredu, G.", ""),
        
        # Joseph Budu (ID: 2)
        (2, "Digital evidence governance for public sector institutions in West Africa", "An examination of governance frameworks surrounding legal and procedural digital evidence in Ghana.", "2025", "African Journal of Information Assurance", "Budu, J.; Antwi-Boasiako, E.; Wiredu, G.", ""),
        (2, "Readiness model for computer forensics education and practice in Ghana", "A structure evaluation model detailing capabilities requirements for computing courses.", "2024", "International Journal of Cyber Resilience", "Budu, J.; Engmann, F.", ""),
        
        # Gamel Wiredu (ID: 3)
        (3, "Institutional pathways for digital transformation in sub-Saharan Africa", "Assessing maturity levels of digital system architectures across governmental registries in Africa.", "2026", "Journal of Information Systems in Developing Regions", "Wiredu, G.; Adabor, E.", ""),
        (3, "Management information systems capability and service quality outcomes", "Analyses parameters that evaluate enterprise capability results against user outcomes.", "2024", "International MIS Review", "Wiredu, G.; Assyne, N.", ""),
        
        # Emmanuel Adabor (ID: 4)
        (4, "Optimization heuristics for resilient public sector logistics", "Algorithmic route modeling heuristics designed to handle supply chain disruptions.", "2025", "Journal of Applied Operations Analytics", "Adabor, E.; Wiredu, G.", ""),
        (4, "Multi-criteria decision models for digital transformation investments", "Creating decision-matrix benchmarks for investment in technology frameworks.", "2023", "African Journal of Management Analytics", "Adabor, E.; Engmann, F.", ""),
        
        # Nana Assyne (ID: 5)
        (5, "Human-centered design patterns for higher education web systems", "Examines interface standards and design templates tailored to collegiate user groups.", "2026", "Journal of Web Engineering Practice", "Assyne, N.; Engmann, F.", ""),
        (5, "Assessing maintainability of student-led capstone software projects", "Evaluating code metrics and architecture layouts in software engineering courses.", "2024", "Software Quality and Education Review", "Assyne, N.; Budu, J.", ""),
        
        # Emmanuel Antwi-Boasiako (ID: 6)
        (6, "Cyber governance maturity indicators for public service institutions", "A security standard benchmark for identifying organizational and legal cyber preparedness.", "2025", "Journal of Cyber Policy and Practice", "Antwi-Boasiako, E.; Budu, J.", ""),
        (6, "Digital identity and trust architecture in emerging economies", "Investigates privacy laws, governance procedures, and digital registries configurations.", "2023", "Information Security Governance Review", "Antwi-Boasiako, E.; Adabor, E.", "")
    ]

    for item in publications_data:
        cursor.execute("""
            INSERT INTO publications (lecturer_id, title, summary, year, journal, authors, url, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, 'verified')
        """, item)

    # 3. Seed Welcome Messages
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
