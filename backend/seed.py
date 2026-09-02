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
            4, "eadabor", "gimpa123", "Prof. Emmanuel S. Adabor", "Professor & Dean, SOTSS",
            "eadabor@gimpa.edu.gh", "Industrial Analytics, Optimization, Operations Research",
            "SOT Annex, Room 3.06", "+233 (0) 302908076", "Faculty Leadership", "Dean, School of Technology & Social Sciences", 1,
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
            7, "eadaku", "gimpa123", "Prof. Ebenezer Adaku", "Professor & Deputy Rector, GIMPA",
            "eadaku@gimpa.edu.gh", "Operations & Project Management, Higher Education Leadership",
            "Rectorate, GIMPA Main Campus", "+233 (0) 302 401681", "Institutional Leadership", "Deputy Rector, GIMPA", 0,
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
        # Dr. Felicia Engmann (id: 1)
        (
            1,
            "Learning analytics for retention prediction in emerging universities",
            "Investigating predictive machine learning models to detect student drop-out signals early in semester cycles using LMS telemetry data.",
            "2025",
            "Education and Information Technologies (Springer Nature)",
            "Engmann, F.; Budu, J.",
            "https://doi.org/10.1007/s10639-025-01234",
            "Journal Article (Peer-Reviewed)",
            "assets/images/ai-data-science.jpg"
        ),
        (
            1,
            "Ethical AI integration for tertiary-level computing programmes",
            "A pedagogical framework for embedding ethical considerations and fairness principles into undergraduate computer science curricula.",
            "2024",
            "Responsible AI in Higher Education (IGI Global Publishers)",
            "Engmann, F.; Wiredu, G.",
            "https://doi.org/10.4018/978-1-6684-0000-0",
            "Book Chapter / Textbook",
            "assets/images/research-lab.png"
        ),
        # Dr. Joseph Budu (id: 2)
        (
            2,
            "Digital evidence governance for public sector institutions in West Africa",
            "Assessing procedural compliance and forensic chain-of-custody protocols for digital evidence handling across public sector institutions.",
            "2025",
            "African Journal of Information Assurance (IEEE)",
            "Budu, J.; Antwi-Boasiako, E.; Wiredu, G.",
            "https://doi.org/10.1109/AJIA.2025.56789",
            "Journal Article (Peer-Reviewed)",
            "assets/images/cybersecurity-lab.jpg"
        ),
        (
            2,
            "Readiness model for computer forensics education and practice in Ghana",
            "An institutional readiness benchmark evaluating forensic laboratory infrastructure, legal training, and cyber workforce standards.",
            "2024",
            "International Journal of Cyber Resilience (Under Review)",
            "Budu, J.; Engmann, F.",
            "https://doi.org/10.1016/j.ijcr.2024.11223",
            "Working Paper (Under Peer Review)",
            "assets/images/1000210972.png"
        ),
        # Prof. Gamel Wiredu (id: 3)
        (
            3,
            "Institutional pathways for digital transformation in sub-Saharan Africa",
            "Theorizing organizational adaptation and institutional capacity building in public sector digital transformation programs across developing economies.",
            "2026",
            "Journal of Information Systems in Developing Regions (Elsevier)",
            "Wiredu, G.; Adabor, E.",
            "https://doi.org/10.1016/j.jisdr.2026.88990",
            "Journal Article (Peer-Reviewed)",
            "assets/images/1000211024.png"
        ),
        (
            3,
            "Management information systems capability and service quality outcomes",
            "A longitudinal empirical study examining how enterprise MIS agility directly correlates with public service quality in emerging economies.",
            "2024",
            "International MIS Review (Palgrave Macmillan)",
            "Wiredu, G.; Assyne, N.",
            "https://doi.org/10.1057/978-1-137-0000-0",
            "Book / Monograph",
            "assets/images/alumni-network.jpg"
        ),
        # Prof. Emmanuel Adabor (id: 4)
        (
            4,
            "Optimization heuristics for resilient public sector logistics",
            "Formulating mixed-integer linear programming heuristics to optimize multimodal supply chain routing under infrastructural constraints.",
            "2025",
            "Journal of Applied Operations Analytics (INFORMS)",
            "Adabor, E.; Wiredu, G.",
            "https://doi.org/10.1287/jaoa.2025.4455",
            "Journal Article (Peer-Reviewed)",
            "assets/images/1000211039.png"
        ),
        (
            4,
            "Multi-criteria decision models for digital transformation investments",
            "Evaluating capital budgeting decisions for digital transformation programs using analytic hierarchy process (AHP) models.",
            "2023",
            "African Conference on Information Systems & Analytics (IEEE)",
            "Adabor, E.; Engmann, F.",
            "https://doi.org/10.1109/ACIST.2023.7788",
            "Conference Paper (IEEE Proceedings)",
            "assets/images/ai-data-science.jpg"
        ),
        # Dr. Nana Assyne (id: 5)
        (
            5,
            "Human-centered design patterns for higher education web systems",
            "Evaluating cognitive accessibility, mobile ergonomics, and visual hierarchy standards for tertiary education student portals in West Africa.",
            "2026",
            "Journal of Web Engineering Practice (ACM Publications)",
            "Assyne, N.; Engmann, F.",
            "https://doi.org/10.1145/jwep.2026.33445",
            "Journal Article (Peer-Reviewed)",
            "assets/images/1000211395.png"
        ),
        (
            5,
            "Assessing maintainability of student-led capstone software projects",
            "A metric-based code review study analyzing software quality, test coverage, and documentation in undergraduate computing capstone teams.",
            "2024",
            "ACM SIGCSE Conference on Computer Science Education",
            "Assyne, N.; Budu, J.",
            "https://doi.org/10.1145/sigcse.2024.5566",
            "Conference Paper (ACM SIGCSE)",
            "assets/images/research-lab.png"
        ),
        # Dr. Emmanuel Antwi-Boasiako (id: 6)
        (
            6,
            "Cyber governance maturity indicators for public service institutions",
            "Developing actionable policy benchmarks for public sector compliance with national cybersecurity acts and critical infrastructure directives.",
            "2025",
            "Cyber Governance & Data Privacy in the Global South (Routledge)",
            "Antwi-Boasiako, E.; Budu, J.",
            "https://doi.org/10.4324/97810034455",
            "Book Chapter / Policy Monograph",
            "assets/images/cybersecurity-lab.jpg"
        ),
        (
            6,
            "Digital identity and trust architecture in emerging economies",
            "Architectures for biometric and digital ID authentication systems balancing privacy rights with public safety requirements in West Africa.",
            "2023",
            "Information Security Governance Review",
            "Antwi-Boasiako, E.; Adabor, E.",
            "https://doi.org/10.1016/j.isgr.2023.77889",
            "Journal Article (Peer-Reviewed)",
            "assets/images/1000211024.png"
        ),
        # Prof. Ebenezer Adaku (id: 7)
        (
            7,
            "Project Management Methodologies in Higher Education Institutions",
            "Assessing agile and waterfall project governance frameworks for university capital infrastructure projects and modern degree curriculum rollouts.",
            "2025",
            "International Journal of Project Management (Elsevier)",
            "Adaku, E.",
            "https://doi.org/10.1016/j.ijproman.2025.9009",
            "Journal Article (Peer-Reviewed)",
            "assets/images/students-hub.jpg"
        ),
        (
            7,
            "Governance and operations alignment in African higher education leadership",
            "Strategic models aligning institutional governance with operational resource allocation across multidisciplinary university faculties.",
            "2023",
            "African Journal of Management and Strategy (Under Review)",
            "Adaku, E.; Wiredu, G.",
            "https://doi.org/10.1080/ajms.2023.1199",
            "Working Paper (Under Peer Review)",
            "assets/images/campus-hero.png"
        )
    ]

    for item in publications_data:
        cursor.execute("""
            INSERT INTO publications (lecturer_id, title, summary, year, journal, authors, url, type, image, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'verified')
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
