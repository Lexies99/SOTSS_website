// SPA data structures matching the main website
let faculty = [
  {
    id: 'felicia-engmann',
    name: 'Dr. Felicia N. A. Engmann',
    role: 'Head of Department',
    email: 'fapboadu@gimpa.edu.gh',
    photo: 'assets/images/Dr.Felicia.jpeg',
    spec: 'Data Science, AI, Curriculum Leadership',
    office: 'Department Office, SOT Main Block',
    phone: '+233 (0) 332095432',
    projects: [
      'AI for Academic Success: Predictive early warning system for student outcomes.',
      'Women in Tech Mentorship: Inclusive pipeline initiative for female computing students.',
      'Curriculum Modernization 4.0: Outcome-based revision of CS and IS courses.'
    ],
    pubs: [
      { 
        id: 101,
        year: '2025', 
        type: 'Journal Article (Peer-Reviewed)',
        image: 'assets/images/publications/wiley_ijcs_cover.png',
        title: 'Optimizing Packet Size for Enhanced Performance in Wireless Sensor Networks for Environmental Monitoring Applications', 
        journal: 'International Journal of Communication Systems (Wiley Online Library, Vol. 38, Issue 15, e70253)', 
        authors: 'Felicia Engmann; Kofi Sarpong Adu-Manu; Jamal-Deen Abdulai; Ferdinand Apietu Katsriku',
        summary: 'Wireless sensor networks (WSNs) are widely used in environmental monitoring applications (EMAs) for water quality, air quality, and structural health monitoring. In this study, we investigate the impact of packet size on the performance of an IEEE 802.15.4 WSN, evaluating throughput, packet delivery ratio, and energy consumption across varying node densities.',
        url: 'https://doi.org/10.1002/dac.70253'
      },
      { 
        id: 102,
        year: '2024', 
        type: 'Book Chapter / Textbook',
        image: 'assets/images/research-lab.png',
        title: 'Ethical AI integration for tertiary-level computing programmes', 
        journal: 'Responsible AI in Higher Education (IGI Global Publishers)', 
        authors: 'Engmann, F.; Wiredu, G.',
        summary: 'A pedagogical framework for embedding ethical considerations and fairness principles into undergraduate computer science curricula.',
        url: 'https://doi.org/10.4018/978-1-6684-0000-0'
      }
    ]
  },
  {
    id: 'joseph-budu',
    name: 'Dr. Joseph Budu',
    role: 'Senior Lecturer',
    email: 'josbudu@gimpa.edu.gh',
    photo: 'assets/images/Dr.Budu.jpeg',
    spec: 'Digital Forensics, Cybersecurity, Data Protection',
    office: 'SOT Block B, Room 2.11',
    phone: '+233 (0) 501620138',
    projects: [
      'Cybercrime Evidence Readiness in Ghana: Framework for digital evidence handling in public institutions.',
      'Secure Campus Identity: Student and staff identity protection architecture for higher education.',
      'SME Security Audit Toolkit: Practical security checklist and incident response workflow.'
    ],
    pubs: [
      { 
        id: 201,
        year: '2025', 
        type: 'Journal Article (Peer-Reviewed)',
        image: 'assets/images/cybersecurity-lab.jpg',
        title: 'Digital evidence governance for public sector institutions in West Africa', 
        journal: 'African Journal of Information Assurance (IEEE)', 
        authors: 'Budu, J.; Antwi-Boasiako, E.; Wiredu, G.',
        summary: 'Assessing procedural compliance and forensic chain-of-custody protocols for digital evidence handling across public sector institutions.',
        url: 'https://doi.org/10.1109/AJIA.2025.56789'
      },
      { 
        id: 202,
        year: '2024', 
        type: 'Working Paper (Under Peer Review)',
        image: 'assets/images/1000210972.png',
        title: 'Readiness model for computer forensics education and practice in Ghana', 
        journal: 'International Journal of Cyber Resilience (Under Review)', 
        authors: 'Budu, J.; Engmann, F.',
        summary: 'An institutional readiness benchmark evaluating forensic laboratory infrastructure, legal training, and cyber workforce standards.',
        url: 'https://doi.org/10.1016/j.ijcr.2024.11223'
      }
    ]
  },
  {
    id: 'gamel-wiredu',
    name: 'Prof. Gamel O. Wiredu',
    role: 'Professor',
    email: 'gwiredu@gimpa.edu.gh',
    photo: '',
    spec: 'Information Systems, Digital Transformation, MIS',
    office: 'SOT Block A, Room 1.04',
    extraLabel: 'Programme Role',
    extraValue: 'Coordinator, PhD Information Systems',
    projects: [
      'Digital Governance Readiness: Maturity model for digital transformation in public institutions.',
      'Smart Public Service Platforms: Service design and adoption study in Ghanaian agencies.',
      'Data-driven Policy Lab: MIS analytics framework for evidence-based decision making.'
    ],
    pubs: [
      { 
        id: 301,
        year: '2026', 
        type: 'Journal Article (Peer-Reviewed)',
        image: 'assets/images/1000211024.png',
        title: 'Institutional pathways for digital transformation in sub-Saharan Africa', 
        journal: 'Journal of Information Systems in Developing Regions (Elsevier)', 
        authors: 'Wiredu, G.; Adabor, E.',
        summary: 'Theorizing organizational adaptation and institutional capacity building in public sector digital transformation programs across developing economies.',
        url: 'https://doi.org/10.1016/j.jisdr.2026.88990'
      },
      { 
        id: 302,
        year: '2024', 
        type: 'Book / Monograph',
        image: 'assets/images/alumni-network.jpg',
        title: 'Management information systems capability and service quality outcomes', 
        journal: 'International MIS Review (Palgrave Macmillan)', 
        authors: 'Wiredu, G.; Assyne, N.',
        summary: 'A longitudinal empirical study examining how enterprise MIS agility directly correlates with public service quality in emerging economies.',
        url: 'https://doi.org/10.1057/978-1-137-0000-0'
      }
    ]
  },
  {
    id: 'emmanuel-adabor',
    name: 'Prof. Emmanuel S. Adabor',
    role: 'Professor & Dean, SOTSS',
    email: 'emmanuelsadabor@gimpa.edu.gh',
    photo: 'assets/images/Prof.Adabor.jpg',
    spec: 'Industrial Analytics, Optimization, Operations Research',
    office: 'Dean\'s Office / SOT Annex, Room 3.06',
    phone: '+233 (0) 302908076',
    extraLabel: 'Faculty Leadership',
    extraValue: 'Dean, School of Technology & Social Sciences',
    projects: [
      'Smart Logistics Optimizer: Route and fleet optimization for urban service systems.',
      'Industrial Analytics Capacity Lab: Applied optimization for manufacturing SMEs.',
      'Data-driven Procurement: Decision support model for public procurement quality.'
    ],
    pubs: [
      { 
        id: 401,
        year: '2025', 
        type: 'Journal Article (Peer-Reviewed)',
        image: 'assets/images/1000211039.png',
        title: 'Optimization heuristics for resilient public sector logistics', 
        journal: 'Journal of Applied Operations Analytics (INFORMS)', 
        authors: 'Adabor, E.; Wiredu, G.',
        summary: 'Formulating mixed-integer linear programming heuristics to optimize multimodal supply chain routing under infrastructural constraints.',
        url: 'https://doi.org/10.1287/jaoa.2025.4455'
      },
      { 
        id: 402,
        year: '2023', 
        type: 'Conference Paper (IEEE Proceedings)',
        image: 'assets/images/ai-data-science.jpg',
        title: 'Multi-criteria decision models for digital transformation investments', 
        journal: 'African Conference on Information Systems & Analytics (IEEE)', 
        authors: 'Adabor, E.; Engmann, F.',
        summary: 'Evaluating capital budgeting decisions for digital transformation programs using analytic hierarchy process (AHP) models.',
        url: 'https://doi.org/10.1109/ACIST.2023.7788'
      }
    ]
  },
  {
    id: 'ebenezer-adaku',
    name: 'Prof. Ebenezer Adaku',
    role: 'Professor & Deputy Rector, GIMPA',
    email: 'eadaku@gimpa.edu.gh',
    photo: '',
    spec: 'Operations & Project Management, Higher Education Leadership',
    office: 'Rectorate, GIMPA Main Campus',
    phone: '+233 (0) 302 401681',
    extraLabel: 'Institutional Leadership',
    extraValue: 'Deputy Rector, GIMPA',
    projects: [
      'Strategic Higher Education Governance: Project management methodologies for university institutional transformation.',
      'Operations Capacity in Tertiary Systems: Process modeling and resource optimization across faculties.',
      'Public Sector Capital Projects: Frameworks for risk management and infrastructure delivery.'
    ],
    pubs: [
      { 
        id: 501,
        year: '2025', 
        type: 'Journal Article (Peer-Reviewed)',
        image: 'assets/images/students-hub.jpg',
        title: 'Project Management Methodologies in Higher Education Institutions', 
        journal: 'International Journal of Project Management (Elsevier)', 
        authors: 'Adaku, E.',
        summary: 'Assessing agile and waterfall project governance frameworks for university capital infrastructure projects and modern degree curriculum rollouts.',
        url: 'https://doi.org/10.1016/j.ijproman.2025.9009'
      },
      { 
        id: 502,
        year: '2023', 
        type: 'Working Paper (Under Peer Review)',
        image: 'assets/images/campus-hero.png',
        title: 'Governance and operations alignment in African higher education leadership', 
        journal: 'African Journal of Management and Strategy (Under Review)', 
        authors: 'Adaku, E.; Wiredu, G.',
        summary: 'Strategic models aligning institutional governance with operational resource allocation across multidisciplinary university faculties.',
        url: 'https://doi.org/10.1080/ajms.2023.1199'
      }
    ]
  },
  {
    id: 'nana-assyne',
    name: 'Dr. Nana Assyne',
    role: 'Lecturer',
    email: 'nassyne@gimpa.edu.gh',
    photo: 'assets/images/DR.Nana_Assyne.jpeg',
    spec: 'Software Engineering, HCI, Web Systems',
    office: 'SOT Block C, Room 1.15',
    phone: '+233 302-401681-3',
    projects: [
      'Usability in GovTech Portals: Human-centered redesign for citizen-facing systems.',
      'Campus App Studio: Student-led software engineering delivery framework.',
      'Accessible Web Standards Ghana: Audit toolkit for inclusive digital interfaces.'
    ],
    pubs: [
      { 
        id: 601,
        year: '2026', 
        type: 'Journal Article (Peer-Reviewed)',
        image: 'assets/images/1000211395.png',
        title: 'Human-centered design patterns for higher education web systems', 
        journal: 'Journal of Web Engineering Practice (ACM Publications)', 
        authors: 'Assyne, N.; Engmann, F.',
        summary: 'Evaluating cognitive accessibility, mobile ergonomics, and visual hierarchy standards for tertiary education student portals in West Africa.',
        url: 'https://doi.org/10.1145/jwep.2026.33445'
      },
      { 
        id: 602,
        year: '2024', 
        type: 'Conference Paper (ACM SIGCSE)',
        image: 'assets/images/research-lab.png',
        title: 'Assessing maintainability of student-led capstone software projects', 
        journal: 'ACM SIGCSE Conference on Computer Science Education', 
        authors: 'Assyne, N.; Budu, J.',
        summary: 'A metric-based code review study analyzing software quality, test coverage, and documentation in undergraduate computing capstone teams.',
        url: 'https://doi.org/10.1145/sigcse.2024.5566'
      }
    ]
  },
  {
    id: 'emmanuel-antwi-boasiako',
    name: 'Dr. Emmanuel Antwi-Boasiako',
    role: 'Lecturer',
    email: 'abeantwi@gimpa.edu.gh',
    photo: 'assets/images/Dr.Antwi-Boasiako.jpg',
    spec: 'Cyber Policy, Digital Identity, Security Governance',
    office: 'SOT Block C, Room 2.03',
    phone: '+233 (0) 501620138',
    projects: [
      'National Digital Identity Readiness: Governance and privacy framework assessment.',
      'Critical Infrastructure Security Benchmark: Security compliance model for essential services.',
      'Cyber Awareness for Public Institutions: Workforce preparedness and response simulation.'
    ],
    pubs: [
      { 
        id: 701,
        year: '2025', 
        type: 'Book Chapter / Policy Monograph',
        image: 'assets/images/cybersecurity-lab.jpg',
        title: 'Cyber governance maturity indicators for public service institutions', 
        journal: 'Cyber Governance & Data Privacy in the Global South (Routledge)', 
        authors: 'Antwi-Boasiako, E.; Budu, J.',
        summary: 'Developing actionable policy benchmarks for public sector compliance with national cybersecurity acts and critical infrastructure directives.',
        url: 'https://doi.org/10.4324/97810034455'
      },
      { 
        id: 702,
        year: '2023', 
        type: 'Journal Article (Peer-Reviewed)',
        image: 'assets/images/1000211024.png',
        title: 'Digital identity and trust architecture in emerging economies', 
        journal: 'Information Security Governance Review', 
        authors: 'Antwi-Boasiako, E.; Adabor, E.',
        summary: 'Architectures for biometric and digital ID authentication systems balancing privacy rights with public safety requirements in West Africa.',
        url: 'https://doi.org/10.1016/j.isgr.2023.77889'
      }
    ]
  }
];

const news = [
  {
    id: 'news-uestc-partnership',
    title: 'GIMPA and UESTC Explore New Frontiers in Academic Partnership',
    date: 'May 12, 2026',
    image: 'assets/images/1000211039.png',
    desc: 'Expanding international collaboration to create new opportunities for CS students and faculty research exchange.',
    text: `<p>The Department of Computer Science and Information Systems continues to support international collaboration that can create research exchange, joint academic activity, and student development opportunities.</p>
           <p>This partnership direction strengthens the department's goal of connecting students and faculty with global expertise in computing, innovation, and technology-driven development.</p>`
  },
  {
    id: 'news-york-consulting',
    title: 'GIMPA, York University Launch Student Consulting Project',
    date: 'May 12, 2026',
    image: 'assets/images/1000211042.png',
    desc: 'Students gain hands-on consulting experience through structured industry partnership programmes.',
    text: `<p>The student consulting project gives learners practical exposure to industry work, problem analysis, client communication, and technology-supported solution design.</p>
           <p>Through structured engagement, students can connect classroom learning with real business and institutional challenges.</p>`
  },
  {
    id: 'news-faculty-vacancy',
    title: 'Vacancy for Senior Lecturers and Lecturers',
    date: 'May 12, 2026',
    image: 'assets/images/1000211043.png',
    desc: 'Join our growing faculty in computer science, cybersecurity, data science, and information systems.',
    text: `<p>The department is inviting talented academics to contribute to teaching, research, mentorship, and programme development in computer science and information systems.</p>
           <p>Priority areas include cybersecurity, data science, artificial intelligence, software systems, ICT, and information systems research.</p>`
  },
  {
    id: 'sotss-hci-usability-2026',
    news_id: 'sotss-hci-usability-2026',
    title: 'Dr. Nana Assyne Highlights Human-Centered Design in Higher Ed Systems',
    date: 'Apr 18, 2026',
    source: 'SOTSS Publication Spotlight',
    image: 'assets/images/1000210972.png',
    desc: "Dr. Nana Assyne's latest journal article outlines key UI/UX design patterns that improve usability, system maintainability, and accessibility for academic web portals.",
    text: `<p>Dr. Nana Assyne's latest research publication examines human-centered design principles and accessibility standards for tertiary education web interfaces in West Africa.</p><p>The study highlights how responsive layouts, clear visual hierarchy, and intuitive navigation structures directly improve student engagement and retention across academic portals.</p><p style="margin-top:24px;"><a href="#profile/nana-assyne" class="btn btn-primary">📚 View Dr. Nana Assyne's Publications &amp; Profile &rarr;</a></p>`
  }
];

const programmesData = [
  {
    id: 'bsc-computer-science',
    title: 'BSc Computer Science',
    level: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    mode: 'Full-time (Day)',
    tag: 'BSc · 4 Years',
    shortDesc: 'Strong technical skills in programming, data structures, algorithms, networking, software engineering, AI and robotics.',
    overview: 'The Bachelor of Science in Computer Science programme is designed to equip students with a solid foundation in computational theory, software engineering, algorithms, data structures, and emerging technology paradigms including Artificial Intelligence and Robotics.',
    curriculum: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (Java / C++)',
      'Artificial Intelligence & Machine Learning',
      'Database Management Systems & SQL',
      'Computer Architecture & Operating Systems',
      'Software Engineering & System Architecture',
      'Computer Networks & Distributed Systems',
      'Cybersecurity Fundamentals & Cryptography'
    ],
    requirements: [
      'WASSCE / SSSCE Applicants: Passes (A1-C6 / A-D) in 3 core subjects (English, Mathematics, Integrated Science) and 3 elective subjects (Elective Mathematics, Physics, Chemistry / Computer Studies).',
      'GCE A-Level Applicants: Passes in 3 subjects including Mathematics and Physics.',
      'HND / Diploma Holders: Relevant HND in Computer Science / IT with minimum Second Class Lower for direct entry into 2nd or 3rd year.'
    ],
    careers: [
      'Software Developer / Engineer',
      'Data Scientist & AI Specialist',
      'Full-Stack Web Developer',
      'Network Administrator & Security Analyst',
      'Database Administrator'
    ]
  },
  {
    id: 'bsc-ict',
    title: 'BSc Information & Communication Technology',
    level: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    mode: 'Full-time (Day / Evening)',
    tag: 'BSc · 4 Years',
    shortDesc: 'IT entrepreneurship, wireless networks, IT auditing, human-computer interaction, mobile programming and networking.',
    overview: 'The BSc ICT programme trains students to leverage modern information and communication technologies for organizational efficiency, enterprise digital transformation, mobile solution delivery, and IT governance.',
    curriculum: [
      'Web Development & Mobile Application Design',
      'Enterprise Information Systems',
      'Wireless Communications & Mobile Computing',
      'IT Project Management & Audit',
      'Human-Computer Interaction (HCI)',
      'IT Entrepreneurship & Innovation',
      'Information Security & Risk Management'
    ],
    requirements: [
      'WASSCE / SSSCE Applicants: Credit passes (A1-C6 / A-D) in English, Core Mathematics, Integrated Science and 3 elective subjects.',
      'Mature Applicants: Must be at least 25 years old and pass the GIMPA Entrance Examination.'
    ],
    careers: [
      'IT Manager / Systems Administrator',
      'Mobile & Web Application Developer',
      'IT Consultant & Technology Auditor',
      'E-Commerce Specialist & Tech Entrepreneur'
    ]
  },
  {
    id: 'bsc-health-informatics',
    title: 'BSc Health Informatics',
    level: 'Undergraduate',
    duration: '4 Years (8 Semesters)',
    mode: 'Full-time (Day)',
    tag: 'BSc · 4 Years',
    shortDesc: 'Applying information technology and computing to healthcare systems, data management and health service delivery.',
    overview: 'This interdisciplinary programme combines computer science, health data analytics, and medical informatics to train professionals who manage health information systems, electronic medical records (EMR), and telemedicine infrastructure.',
    curriculum: [
      'Health Information Systems & EMRs',
      'Medical Terminology & Bio-statistics',
      'Healthcare Data Analytics & Mining',
      'Telemedicine & Health IoT',
      'Health Information Privacy & Law',
      'Database Systems for Healthcare'
    ],
    requirements: [
      'WASSCE / SSSCE Applicants: Credit passes in Core English, Core Mathematics, Integrated Science and 3 Electives (Science or General Arts).',
      'Diploma in Nursing / Health Information Management holders qualify for advanced placement.'
    ],
    careers: [
      'Health Informatics Specialist',
      'Clinical Data Analyst',
      'Electronic Health Record (EHR) System Manager',
      'Healthcare IT Consultant'
    ]
  },
  {
    id: 'pgd-ict',
    title: 'PG Diploma in ICT',
    level: 'Postgraduate Diploma',
    duration: '1 Year (2 Semesters)',
    mode: 'Flexible (Weekend / Evening)',
    tag: 'PG Diploma',
    shortDesc: 'A bridge for non-ICT graduates wishing to transition into ICT fields. Covers programming, databases, web technologies and networking.',
    overview: 'Designed for non-IT degree holders seeking a conversion pathway into computing. Provides core competencies in computer programming, web systems, database design, and computer networking.',
    curriculum: [
      'Fundamentals of Computer Systems & Software',
      'Database System Design',
      'Web Technologies & Programming',
      'Computer Networking & Security'
    ],
    requirements: [
      'Bachelor’s degree in any non-computing discipline from a recognized institution.'
    ],
    careers: [
      'Junior Software Developer',
      'IT Support Specialist',
      'Database Administrator',
      'Pathway to MSc/MPhil ICT'
    ]
  },
  {
    id: 'pgd-mis',
    title: 'PG Diploma in Management Information Systems',
    level: 'Postgraduate Diploma',
    duration: '1 Year (2 Semesters)',
    mode: 'Flexible (Weekend / Evening)',
    tag: 'PG Diploma',
    shortDesc: 'Foundation in MIS principles covering analysis, development, implementation and management of information systems.',
    overview: 'Provides business and technical managers with knowledge required to design, evaluate, and implement enterprise information systems that drive organizational strategy.',
    curriculum: [
      'Management Information Systems Foundations',
      'Business Process Analysis & System Design',
      'Enterprise Data Management',
      'IT Infrastructure & Cloud Strategy'
    ],
    requirements: [
      'Bachelor’s degree in Business, Public Administration, Science, or related disciplines.'
    ],
    careers: [
      'Systems Analyst',
      'MIS Coordinator',
      'Business Intelligence Analyst'
    ]
  },
  {
    id: 'msc-mphil-ict',
    title: 'MSc/MPhil Information & Communication Technology',
    level: 'Postgraduate',
    duration: '2 Years (4 Semesters)',
    mode: 'Weekends / Evening',
    tag: 'MSc/MPhil · 2 Years',
    shortDesc: 'Scientific knowledge for analytical thinking in ICT development — network security, decision support systems, AI applications and more.',
    overview: 'Advanced postgraduate program emphasizing research, cloud architectures, network security, decision support systems, and emerging ICT frameworks.',
    curriculum: [
      'Advanced Computer Networks & Cloud Computing',
      'Decision Support Systems & Data Mining',
      'Advanced Information Security',
      'Research Methodology & Dissertation (MPhil thesis)'
    ],
    requirements: [
      'Good First Degree (Minimum 2nd Class Lower) in ICT, Computer Science, Engineering, or related technical fields.'
    ],
    careers: [
      'Chief Technology Officer (CTO)',
      'Enterprise Architect',
      'Senior IT Researcher / Lecturer'
    ]
  },
  {
    id: 'msc-it-law',
    title: 'MSc Information Technology & Law',
    level: 'Postgraduate',
    duration: '2 Years (4 Semesters)',
    mode: 'Weekends / Evening',
    tag: 'MSc · 2 Years',
    shortDesc: 'Legal and administrative implications of ICT adoption — digital media law, computer forensics, cybercrime investigation and data protection.',
    overview: 'Interdisciplinary program developed jointly to address digital media law, data protection regulations (GDPR / Ghana Data Protection Act), cybercrime investigation, and intellectual property in technology.',
    curriculum: [
      'Cybercrime & Computer Forensics Law',
      'Data Protection & Privacy Regulation',
      'Intellectual Property in Digital Media',
      'E-Commerce & Digital Contract Law'
    ],
    requirements: [
      'Bachelor’s degree in Law (LLB), Computer Science, ICT, Business, or Public Administration.'
    ],
    careers: [
      'Data Protection Officer (DPO)',
      'Cyber Law & Regulatory Advisor',
      'IT Compliance Auditor'
    ]
  },
  {
    id: 'mphil-mis',
    title: 'MPhil Management Information Systems',
    level: 'Postgraduate Research',
    duration: '2 Years (4 Semesters)',
    mode: 'Regular (Day)',
    tag: 'MPhil · 2 Years',
    shortDesc: 'Analysis, development, implementation and management of MIS and their applications in business and public administration.',
    overview: 'A research-intensive Master of Philosophy degree preparing graduates for academic research, PhD entry, and senior strategic advisory roles in information systems management.',
    curriculum: [
      'Advanced Theories in Information Systems',
      'Quantitative & Qualitative Research Methods',
      'Digital Transformation & Innovation Policy',
      'MPhil Thesis Research'
    ],
    requirements: [
      'Good Bachelor’s Degree (First Class or 2nd Class Upper) in MIS, CS, ICT, or Business Administration.'
    ],
    careers: [
      'University Lecturer / Academic Researcher',
      'Senior Digital Transformation Consultant',
      'Pathway to PhD Information Systems'
    ]
  },
  {
    id: 'msc-mis',
    title: 'MSc Management Information Systems',
    level: 'Postgraduate Professional',
    duration: '2 Years (4 Semesters)',
    mode: 'Flexible (Evening / Weekend)',
    tag: 'MSc · 2 Years',
    shortDesc: 'Strategic value and challenges of MIS as adopted by public and private sector organisations, with alternative methodologies and philosophies.',
    overview: 'Focuses on executive management of information technology assets, enterprise resource planning (ERP), digital leadership, and public sector ICT strategy.',
    curriculum: [
      'Strategic Management of IT',
      'ERP Systems & Business Analytics',
      'Managing Digital Projects & Change',
      'Applied MIS Capstone Project'
    ],
    requirements: [
      'Bachelor’s Degree in any discipline with relevant industry work experience.'
    ],
    careers: [
      'IT Director / MIS Manager',
      'ERP Project Lead',
      'Digital Strategy Manager'
    ]
  },
  {
    id: 'msc-cybersecurity',
    title: 'MSc Digital Forensics & Cybersecurity',
    level: 'Postgraduate Professional',
    duration: '1 Year (3 Semesters)',
    mode: 'Weekends',
    tag: 'MSc · 1 Year',
    shortDesc: 'Cybercrime risk management, digital forensics, IT audit, cryptography and security mechanisms, and legal aspects of IT.',
    overview: 'Specialized master’s program covering incident response, reverse engineering, digital evidence recovery, network defense, penetration testing, and ISO 27001 security compliance.',
    curriculum: [
      'Digital Evidence Handling & Computer Forensics',
      'Ethical Hacking & Penetration Testing',
      'Applied Cryptography & Network Defense',
      'Cyber Security Governance & ISO Standards'
    ],
    requirements: [
      'Bachelor’s degree in Computer Science, ICT, Electrical Engineering, Mathematics, or Physics.'
    ],
    careers: [
      'Chief Information Security Officer (CISO)',
      'Digital Forensics Investigator',
      'Penetration Tester / Security Consultant'
    ]
  },
  {
    id: 'msc-industrial-analytics',
    title: 'MSc Industrial Analytics',
    level: 'Postgraduate',
    duration: '2 Years (4 Semesters)',
    mode: 'Flexible',
    tag: 'MSc · 2 Years',
    shortDesc: 'Advanced mathematical, statistical, and computational techniques for solving real-world industrial problems with data-driven insights.',
    overview: 'Combines industrial mathematics, operations research, predictive modeling, and supply chain analytics to solve complex decision-making problems in production and logistics.',
    curriculum: [
      'Optimization & Operations Research',
      'Industrial Statistical Modeling',
      'Supply Chain & Fleet Analytics',
      'Simio Simulation & Process Optimization'
    ],
    requirements: [
      'Bachelor’s degree in Engineering, Mathematics, Statistics, Computer Science, or Economics.'
    ],
    careers: [
      'Operations Research Analyst',
      'Industrial Data Scientist',
      'Supply Chain Analytics Manager'
    ]
  },
  {
    id: 'phd-information-systems',
    title: 'PhD Information Systems',
    level: 'Doctoral',
    duration: '3 Years (Full-Time)',
    mode: 'Full-time (Day)',
    tag: 'PhD · 3 Years',
    shortDesc: 'Rigorous scientific inquiry into technology integration, cybersecurity, data analytics and digital transformation. Develops advanced analytical skills and theoretical insights.',
    overview: 'The PhD in Information Systems is GIMPA’s flagship doctoral research program. Candidates conduct original empirical research at the intersection of technology, human behavior, organization design, and societal impact.',
    curriculum: [
      'Philosophy of Science & Technology Theory',
      'Advanced Quantitative Methods & Econometrics',
      'Advanced Qualitative Methods & Case Research',
      'Doctoral Research Seminars & Thesis Defense'
    ],
    requirements: [
      'Master’s degree (MPhil, MSc, MBA) in IS, Computer Science, ICT, Mathematics, or related field with strong research thesis component.',
      'Research Proposal (3-5 pages) detailing prospective research topic.',
      'Successful interview with the Graduate Admissions Committee.'
    ],
    careers: [
      'Tenure-Track University Professor',
      'Principal Research Scientist',
      'Senior Policy Advisor to Governments & Multinationals'
    ]
  }
];

const searchPages = [
  { title: 'Home', hash: '#home', section: 'Main page', keywords: 'home department computer science information systems gimpa sotss' },
  { title: 'About Us', hash: '#about', section: 'Main page', keywords: 'about us department history mission vision leadership merger felicia engmann' },
  { title: 'Study With Us', hash: '#study', section: 'Main page', keywords: 'study programmes undergraduate masters phd bsc ict computer science analytics' },
  { title: 'For Students', hash: '#students', section: 'Main page', keywords: 'students portal lms moodle timetable academic calendar advising clubs gdsc internships handbook faq' },
  { title: 'Research & Innovation', hash: '#research', section: 'Main page', keywords: 'research machine learning ai data science cybersecurity digital forensics iot robotics' },
  { title: 'Faculty & Staff', hash: '#faculty', section: 'Main page', keywords: 'faculty staff lecturers directory professors research interests office email' },
  { title: 'Alumni Network', hash: '#alumni', section: 'Main page', keywords: 'alumni network graduates success stories career mentorship registration' },
  { title: 'Department News', hash: '#news', section: 'Main page', keywords: 'news department notification announcement updates press' },
  { title: 'Contact', hash: '#contact', section: 'Main page', keywords: 'contact location email phone greenhill accra office' },
  { title: 'Dr. Joseph Budu', hash: '#profile/joseph-budu', section: 'Faculty profile', keywords: 'joseph budu cybersecurity digital forensics senior lecturer' },
  { title: 'Prof. Gamel O. Wiredu', hash: '#profile/gamel-wiredu', section: 'Faculty profile', keywords: 'gamel wiredu professor information systems mis phd' },
  { title: 'Dr. Felicia N. A. Engmann', hash: '#profile/felicia-engmann', section: 'Faculty profile', keywords: 'felicia engmann head of department data science ai' },
  { title: 'Prof. Emmanuel S. Adabor', hash: '#profile/emmanuel-adabor', section: 'Faculty profile', keywords: 'emmanuel adabor professor industrial analytics optimization' },
  { title: 'Dr. Nana Assyne', hash: '#profile/nana-assyne', section: 'Faculty profile', keywords: 'nana assyne lecturer software engineering hci' },
  { title: 'Dr. Emmanuel Antwi-Boasiako', hash: '#profile/emmanuel-antwi-boasiako', section: 'Faculty profile', keywords: 'emmanuel antwi boasiako lecturer cyber policy identity' }
];

const root = document.getElementById('root');
let slideshowInterval = null;

// Routing setup
function getRoute() {
  return location.hash.replace('#', '') || 'home';
}

function topBar() {
  const token = localStorage.getItem('sotssToken');
  const userStr = localStorage.getItem('sotssUser');
  const user = userStr ? JSON.parse(userStr) : null;
  const isLoggedIn = !!token;

  return `
    <div class="top-bar">
      <div class="container">
        <div class="top-bar-left">
          <a href="https://gimpa.edu.gh/" target="_blank">GIMPA Home</a>
          <a href="https://lms.gimpa.edu.gh/" target="_blank">LMS</a>
          <a href="https://apply.gimpa.edu.gh/start" target="_blank" style="color:#ffd700;font-weight:700">Apply Now</a>
          <a href="#students">Student Hub</a>
          ${isLoggedIn && user ? `<span class="user-welcome" style="margin-left: 15px; color: #bfd3e7; font-size: 0.8rem;">Welcome, ${user.name}</span>` : ''}
        </div>
        <div class="top-bar-right">
          <a href="https://gimpa.edu.gh/library/" target="_blank">Library</a>
          ${isLoggedIn ? `<a href="#intranet" class="intranet-link" style="margin-right: 15px; font-weight: 600; color: var(--accent);">Intranet Portal</a>` : ''}
          <a href="#intranet" class="notification-bell" aria-label="Notifications" title="Notifications" onclick="window.activeIntranetTab = 'verification';" style="${isLoggedIn ? 'display: inline-flex;' : 'display: none;'}"><span class="notification-dot"></span></a>
          <a href="${isLoggedIn ? '#logout' : '#login'}" class="login-link">${isLoggedIn ? 'Logout' : 'Login'}</a>
        </div>
      </div>
    </div>
  `;
}

function header(active) {
  const isNavActive = (item) => (active === item || (item === 'about' && active === 'introduction') || (item === 'study' && active === 'programmes')) ? 'active' : '';
  return `
    <header>
      <div class="container">
        <div class="header-main">
          <a href="#home" class="logo">
            <img src="assets/images/sotss-logo.png" alt="SOTSS Logo" style="height:54px; width:auto; display:block; object-fit:contain;">
          </a>
          
          <nav>
            <button class="nav-toggle" onclick="document.querySelector('nav ul').classList.toggle('open')" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
            <ul>
              <li><a href="#home" class="${isNavActive('home')}">Home</a></li>
              <li><a href="#about" class="${isNavActive('about')}">About Us</a></li>
              <li><a href="#study" class="${isNavActive('study')}">Study With Us</a></li>
              <li><a href="#students" class="${isNavActive('students')}">For Students</a></li>
              <li><a href="#research" class="${isNavActive('research')}">Research</a></li>
              <li><a href="#faculty" class="${isNavActive('faculty') || isNavActive('profile')}">Faculty &amp; Staff</a></li>
              <li><a href="#alumni" class="${isNavActive('alumni') || isNavActive('cooperation')}">Alumni</a></li>
              <li><a href="#news" class="${isNavActive('news')}">News</a></li>
              <li><a href="#contact" class="${isNavActive('contact')}">Contact</a></li>
            </ul>

            <div class="header-search">
              <input type="search" id="siteSearch" placeholder="Search...">
              <div class="search-results" id="siteSearchResults"></div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `;
}

function footer() {
  return `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div style="margin-bottom:12px;">
              <img src="assets/images/sotss-logo.png" alt="SOTSS Logo" style="height:50px; width:auto; display:block; object-fit:contain; background:#fff; border-radius:8px; padding:4px 10px;">
            </div>
            <p>Department of Computer Science and Information Systems, School of Technology and Social Sciences, Ghana Institute of Management and Public Administration (GIMPA).</p>
            <div style="margin-top:14px; font-size:0.85rem; color:#cbd5e1;">Greenhill Campus, Achimota, Accra, Ghana</div>
          </div>
          <div class="footer-col">
            <h4>Explore</h4>
            <a href="#about">About Us</a>
            <a href="#study">Study With Us</a>
            <a href="#students">For Students</a>
            <a href="#research">Research &amp; Innovation</a>
            <a href="#faculty">Faculty &amp; Staff</a>
            <a href="#alumni">Alumni Network</a>
            <a href="#news">News &amp; Events</a>
          </div>
          <div class="footer-col">
            <h4>Academic Degrees</h4>
            <a href="#programme/bsc-computer-science">BSc Computer Science</a>
            <a href="#programme/bsc-ict">BSc ICT</a>
            <a href="#programme/msc-cybersecurity">MSc Digital Forensics &amp; Cyber</a>
            <a href="#programme/msc-industrial-analytics">MSc Industrial Analytics</a>
            <a href="#programme/phd-information-systems">PhD Information Systems</a>
            <a href="https://apply.gimpa.edu.gh/start" target="_blank" style="color:#38bdf8;font-weight:700">Online Admissions Portal →</a>
          </div>
          <div class="footer-col">
            <h4>Contact &amp; Support</h4>
            <a href="mailto:csshead@gimpa.edu.gh">csshead@gimpa.edu.gh</a>
            <a href="tel:+233501620138">+233 (0) 501620138</a>
            <a href="tel:+233302401681">+233 302-401681-3</a>
            <a>Mon – Sat: 8:30 – 18:00 GMT</a>
            <a href="#contact" style="color:#ffd700;font-weight:600">Send an Inquiry →</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 GIMPA School of Technology &amp; Social Sciences. All rights reserved.</span>
          <div class="social-links">
            <a href="https://gimpa.edu.gh/" target="_blank" title="GIMPA Official Website"><img class="inline-icon" src="assets/icons/icon-screen.svg" alt="Website"></a>
            <a href="mailto:csshead@gimpa.edu.gh" title="Email Department"><img class="inline-icon" src="assets/icons/icon-email.svg" alt="Email"></a>
            <a href="tel:+233501620138" title="Call Department"><img class="inline-icon" src="assets/icons/icon-phone.svg" alt="Phone"></a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Global Carousel State for Home Page
window.heroSlidesData = [
  {
    image: 'assets/images/campus-hero.png',
    title: 'GIMPA Greenhill Technology Campus',
    desc: 'State-of-the-art computational laboratories, lecture theatres, and research facilities in Accra.'
  },
  {
    image: 'assets/images/students-hub.jpg',
    title: 'Collaborative Student Innovation & Learning',
    desc: 'Empowering future software engineers, data scientists, and IT leaders in collaborative commons.'
  },
  {
    image: 'assets/images/cybersecurity-lab.jpg',
    title: 'Cyber Range & Digital Forensics Lab',
    desc: 'Advanced threat intelligence simulation, network defense, and digital forensics investigations.'
  },
  {
    image: 'assets/images/ai-data-science.jpg',
    title: 'Artificial Intelligence & Robotics Research',
    desc: 'Pioneering machine learning, computer vision, and applied robotics across West Africa.'
  },
  {
    image: 'assets/images/alumni-network.jpg',
    title: 'Global Alumni Leadership & Impact',
    desc: 'Our graduates lead top technology enterprises, fintech pioneers, and international research institutions.'
  }
];

window.currentHeroSlide = 0;
window.heroSlideInterval = null;

window.changeHeroSlide = function(delta) {
  const total = window.heroSlidesData.length;
  window.goToHeroSlide((window.currentHeroSlide + delta + total) % total);
};

window.goToHeroSlide = function(index) {
  window.currentHeroSlide = index;
  const slides = document.querySelectorAll('.hero-carousel-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const titleEl = document.getElementById('heroSlideTitle');
  const descEl = document.getElementById('heroSlideDesc');

  slides.forEach((s, idx) => {
    s.classList.toggle('active', idx === index);
  });
  dots.forEach((d, idx) => {
    d.classList.toggle('active', idx === index);
  });

  if (titleEl && window.heroSlidesData[index]) {
    titleEl.textContent = window.heroSlidesData[index].title;
  }
  if (descEl && window.heroSlidesData[index]) {
    descEl.textContent = window.heroSlidesData[index].desc;
  }
};

window.startHeroAutoplay = function() {
  if (window.heroSlideInterval) clearInterval(window.heroSlideInterval);
  window.heroSlideInterval = setInterval(() => {
    if (document.querySelector('.hero-carousel-container')) {
      window.changeHeroSlide(1);
    }
  }, 5000);
};

// ==============================================================================
// 1. HOME PAGE (SPLIT HERO: TEXT LEFT + IMAGE SLIDER WITH ARROWS RIGHT)
// ==============================================================================
function home() {
  setTimeout(() => {
    window.startHeroAutoplay();
  }, 50);

  return `
    <!-- Split Hero Section: Text Left / Slider Right -->
    <section class="hero-split-section">
      <div class="container">
        <div class="hero-split-grid">
          
          <!-- Left Column: Typography & CTAs (Not on top of picture) -->
          <div class="hero-text-side fade-up">
            <div class="hero-split-badge">
              <span style="font-size:1.1rem">🎓</span> GIMPA School of Technology &amp; Social Sciences
            </div>
            <h1>Empowering Africa's <span>Tech Leaders</span> Through Computing Excellence</h1>
            <p>
              The Department of Computer Science &amp; Information Systems delivers premier degree programmes, world-class research in AI and Cybersecurity, and transformative industry partnerships at GIMPA Greenhill.
            </p>
            <div class="hero-actions-row">
              <a href="#study" class="btn btn-primary" style="padding: 12px 24px; font-weight:700;">Explore Programmes →</a>
              <a href="#students" class="btn btn-outline" style="padding: 12px 22px; font-weight:600; border-color:#38bdf8; color:#38bdf8;">For Students</a>
              <a href="#research" class="btn btn-outline" style="padding: 12px 20px; font-weight:600;">Research Labs</a>
            </div>

            <!-- Key Metric Stats Chips -->
            <div class="hero-stat-chips">
              <div class="stat-chip-item">
                <div class="stat-chip-num">100%</div>
                <div class="stat-chip-label">GTEC Accredited</div>
              </div>
              <div class="stat-chip-item">
                <div class="stat-chip-num">6+</div>
                <div class="stat-chip-label">Research Clusters</div>
              </div>
              <div class="stat-chip-item">
                <div class="stat-chip-num">15+</div>
                <div class="stat-chip-label">Faculty &amp; Fellows</div>
              </div>
              <div class="stat-chip-item">
                <div class="stat-chip-num">94%</div>
                <div class="stat-chip-label">Graduate Career Rate</div>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Photo Slider with Arrows & Dots -->
          <div class="hero-slider-side fade-up fade-up-d1">
            <div class="hero-carousel-container" onmouseenter="clearInterval(window.heroSlideInterval)" onmouseleave="window.startHeroAutoplay()">
              ${window.heroSlidesData.map((s, idx) => `
                <div class="hero-carousel-slide ${idx === 0 ? 'active' : ''}">
                  <img src="${s.image}" alt="${s.title}">
                </div>
              `).join('')}

              <!-- Caption Overlay Bar -->
              <div class="carousel-caption-bar">
                <div class="carousel-caption-title" id="heroSlideTitle">${window.heroSlidesData[0].title}</div>
                <div class="carousel-caption-desc" id="heroSlideDesc">${window.heroSlidesData[0].desc}</div>
              </div>

              <!-- Navigation Arrows -->
              <button class="slider-arrow-btn slider-arrow-prev" onclick="window.changeHeroSlide(-1)" aria-label="Previous Slide">‹</button>
              <button class="slider-arrow-btn slider-arrow-next" onclick="window.changeHeroSlide(1)" aria-label="Next Slide">›</button>

              <!-- Dot Indicators -->
              <div class="slider-dots-row">
                ${window.heroSlidesData.map((_, idx) => `
                  <button class="slider-dot ${idx === 0 ? 'active' : ''}" onclick="window.goToHeroSlide(${idx})" aria-label="Slide ${idx + 1}"></button>
                `).join('')}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Screen-Filling Wide Info Boxes with Real Images -->
    <section class="section" style="background:#f8fafc; padding: 70px 0;">
      <div class="container">
        <div class="section-header" style="max-width: 800px; margin-bottom: 44px;">
          <div class="accent-line"></div>
          <h2>Explore SOTSS Computing Hub</h2>
          <p>Discover our accredited academic degree pathways, groundbreaking research centers, student community, and alumni impact.</p>
        </div>

        <div class="info-box-grid">
          
          <!-- Box 1: Study With Us -->
          <a href="#study" class="info-box-card fade-up">
            <div class="info-box-img-wrap">
              <img src="assets/images/students-hub.jpg" alt="Study Programmes at GIMPA">
              <span class="info-box-tag">Academic Degrees</span>
            </div>
            <div class="info-box-content">
              <h3>Study With Us</h3>
              <p>Explore undergraduate, postgraduate, and PhD programmes in Computer Science, ICT, Cybersecurity, and Industrial Analytics designed for the modern digital economy.</p>
              <span class="info-box-link">View All Programmes →</span>
            </div>
          </a>

          <!-- Box 2: Research & Innovation -->
          <a href="#research" class="info-box-card fade-up fade-up-d1">
            <div class="info-box-img-wrap">
              <img src="assets/images/ai-data-science.jpg" alt="AI & Robotics Research Lab">
              <span class="info-box-tag">Research Clusters</span>
            </div>
            <div class="info-box-content">
              <h3>Groundbreaking Research</h3>
              <p>High-impact scientific investigations in Artificial Intelligence, predictive data science, wireless IoT networks, and computational health informatics.</p>
              <span class="info-box-link">Explore Research Labs →</span>
            </div>
          </a>

          <!-- Box 3: For Students -->
          <a href="#students" class="info-box-card fade-up fade-up-d2">
            <div class="info-box-img-wrap">
              <img src="assets/images/1000211024.png" alt="Student Life and Resources">
              <span class="info-box-tag">Student Central</span>
            </div>
            <div class="info-box-content">
              <h3>For Students</h3>
              <p>Direct access to GIMPA LMS, Student MIS, academic calendars, timetables, Google Developer Student Club, internship placements, and advisement.</p>
              <span class="info-box-link">Open Student Hub →</span>
            </div>
          </a>

          <!-- Box 4: Faculty Directory -->
          <a href="#faculty" class="info-box-card fade-up">
            <div class="info-box-img-wrap">
              <img src="assets/images/1000211035.png" alt="Faculty & Academic Staff">
              <span class="info-box-tag">Faculty Directory</span>
            </div>
            <div class="info-box-content">
              <h3>Faculty &amp; Experts</h3>
              <p>Meet our accomplished professors, senior lecturers, and industry fellows leading computing research and teaching across GIMPA SOTSS.</p>
              <span class="info-box-link">Meet the Faculty →</span>
            </div>
          </a>

          <!-- Box 5: Alumni Network -->
          <a href="#alumni" class="info-box-card fade-up fade-up-d1">
            <div class="info-box-img-wrap">
              <img src="assets/images/alumni-network.jpg" alt="GIMPA SOTSS Alumni">
              <span class="info-box-tag">Alumni Association</span>
            </div>
            <div class="info-box-content">
              <h3>Alumni &amp; Global Impact</h3>
              <p>Connect with over two decades of tech graduates working in fintech, cybersecurity, software engineering, government, and global academia.</p>
              <span class="info-box-link">Join Alumni Network →</span>
            </div>
          </a>

          <!-- Box 6: Cybersecurity Lab -->
          <a href="#research" class="info-box-card fade-up fade-up-d2">
            <div class="info-box-img-wrap">
              <img src="assets/images/cybersecurity-lab.jpg" alt="Cybersecurity Lab">
              <span class="info-box-tag">Specialized Lab</span>
            </div>
            <div class="info-box-content">
              <h3>Cybersecurity &amp; Forensics</h3>
              <p>Hands-on cyber range training, digital forensics analysis, and vulnerability intelligence simulation in our specialized computing laboratories.</p>
              <span class="info-box-link">Discover Facilities →</span>
            </div>
          </a>

        </div>
      </div>
    </section>

    <!-- Latest Department News & Updates -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Latest News &amp; Spotlights</h2>
          <p>Stay informed about research breakthroughs, international partnerships, and student achievements.</p>
        </div>
        <div class="news-grid">
          ${news.slice(0, 3).map((n, idx) => {
            const fadeClasses = ['fade-up', 'fade-up fade-up-d1', 'fade-up fade-up-d2'];
            const fadeClass = fadeClasses[idx % 3];
            return `
              <a class="news-card ${fadeClass}" href="#news-${n.id}">
                <div class="news-card-img"><img src="${n.image}" alt="${n.title}"></div>
                <div class="news-card-body">
                  <div class="date">${n.date}</div>
                  <h3>${n.title}</h3>
                  <p>${n.desc}</p>
                </div>
              </a>
            `;
          }).join('')}
        </div>
        <div style="text-align:center;margin-top:36px">
          <a href="#news" class="btn btn-dark" style="padding: 12px 28px; font-weight:700;">View All Department News →</a>
        </div>
      </div>
    </section>

    <!-- Quick Action Banner -->
    <section class="section" style="background: linear-gradient(135deg, #002b49 0%, #083b66 100%); color: #fff; padding: 50px 0;">
      <div class="container">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 24px;">
          <div>
            <h2 style="color: #fff; font-size: 1.8rem; margin-bottom: 8px;">Ready to Begin Your Tech Career at GIMPA?</h2>
            <p style="color: #cbd5e1; font-size: 1rem; margin: 0; max-width: 650px;">Admissions are open for Regular, Evening, and Weekend sessions across all undergraduate and postgraduate programmes.</p>
          </div>
          <div style="display: flex; gap: 14px; flex-wrap: wrap;">
            <a href="https://apply.gimpa.edu.gh/start" target="_blank" class="btn btn-primary" style="padding: 12px 26px; font-weight: 700; background: #ffd700; color: #002b49; border-color: #ffd700;">Apply Online Now →</a>
            <a href="#contact" class="btn btn-outline" style="padding: 12px 24px; font-weight: 600;">Contact Department</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

// ==============================================================================
// 2. ABOUT US PAGE (REPLACES INTRODUCTION)
// ==============================================================================
function about() {
  return `
    <section class="hero-split-section" style="padding: 50px 0;">
      <div class="container">
        <div class="hero-split-grid">
          <div class="hero-text-side fade-up">
            <div class="hero-split-badge">Institutional Profile</div>
            <h1>About the <span>Department</span> &amp; SOTSS</h1>
            <p>
              The Department of Computer Science &amp; Information Systems is the premier computing and computational intelligence academic department at the Ghana Institute of Management and Public Administration (GIMPA).
            </p>
            <div class="hero-actions-row">
              <a href="#study" class="btn btn-primary">Our Programmes →</a>
              <a href="#faculty" class="btn btn-outline">Meet Faculty</a>
            </div>
          </div>
          <div class="hero-slider-side fade-up fade-up-d1">
            <div class="hero-carousel-container" style="aspect-ratio: 16/10;">
              <img src="assets/images/campus-hero.png" alt="GIMPA Campus" style="width:100%;height:100%;object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- History & Department Merger -->
    <section class="section">
      <div class="container">
        <div class="two-col" style="align-items: center; gap: 48px;">
          <div class="two-col-text">
            <div class="accent-line"></div>
            <h2>Institutional History &amp; Strategic Merger</h2>
            <p>
              The Ghana Institute of Management and Public Administration (GIMPA) was established in <strong>1961</strong> as a joint initiative of the Government of Ghana and the United Nations Special Fund to build executive leadership and public administration excellence.
            </p>
            <p>
              In <strong>September 2017</strong>, the Department of Computer Sciences was created under the School of Technology to deliver specialized undergraduate and graduate programmes in software engineering and IT infrastructure.
            </p>
            <p>
              In <strong>September 2023</strong>, GIMPA management formally unified the <em>Department of Computer Sciences</em> and the <em>Department of Information Systems and Innovation</em> to establish the <strong>Department of Computer Science &amp; Information Systems</strong> under the School of Technology and Social Sciences (SOTSS).
            </p>
            <p>
              This merger consolidated academic faculty, research laboratories, and industry linkages to build a powerhouse in computational research, enterprise systems, and cyber innovation.
            </p>
          </div>
          <div class="two-col-img">
            <img src="assets/images/1000211039.png" alt="Computing Lab Facility" style="border-radius:var(--radius); box-shadow:var(--shadow-lg); width:100%;">
          </div>
        </div>
      </div>
    </section>

    <!-- Message from Head of Department (Executive Showcase Card) -->
    <section class="section section-alt" style="padding: 60px 0;">
      <div class="container">
        <div class="hod-showcase-card">
          <div class="hod-portrait-col">
            <div class="hod-portrait-frame">
              <img src="assets/images/Dr.Felicia.jpeg" alt="Dr. Felicia N. A. Engmann">
            </div>
            <div class="hod-nameplate">
              <h3>Dr. Felicia N. A. Engmann</h3>
              <div class="hod-title-creds">Head of Department</div>
              <div class="hod-role-sub">Department of Computer Science &amp; Information Systems</div>
              <div class="hod-contact-link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>fapboadu@gimpa.edu.gh</span>
              </div>
            </div>
          </div>
          
          <div class="hod-message-col">
            <div class="accent-line"></div>
            <div class="hod-message-heading">
              <h2>Message from the Head of Department</h2>
              <span class="hod-quote-icon">“</span>
            </div>
            <div class="hod-quote-body">
              <p class="hod-lead-quote">
                "A warm welcome to the Department of Computer Science &amp; Information Systems at GIMPA. Our department is committed to delivering transformative computing education, pioneering applied research, and fostering an inspiring community of innovators."
              </p>
              <p>
                "Driven by the developmental needs of Ghana and the African sub-region, we employ our core values of excellence, quality, and connectedness to prepare graduates who not only master modern software and cybersecurity tools, but also understand how to leverage artificial intelligence and digital transformation to solve real-world challenges."
              </p>
              <p>
                "Whether you are an aspiring student, continuing researcher, or industry partner, we warmly invite you to join us in shaping the digital future."
              </p>
            </div>
            
            <div class="hod-signature-row">
              <div class="hod-signature-badge">
                <div class="sig-name">Dr. Felicia N. A. Engmann</div>
                <div class="sig-role">Head of Department · SOTSS GIMPA</div>
              </div>
              <a href="#profile/felicia-engmann" class="btn btn-outline" style="font-size:0.84rem; padding:8px 18px; font-weight:700;">View Full Profile &amp; Research →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision & Core Values (Wide Cards with Images) -->
    <section class="section" style="background: #f8fafc;">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Our Strategic Pillars</h2>
          <p>Our academic philosophy and guiding principles that drive curriculum, teaching, and industry collaboration.</p>
        </div>

        <div class="info-box-grid">
          <div class="info-box-card">
            <div class="info-box-img-wrap" style="aspect-ratio: 16/9;">
              <img src="assets/images/students-hub.jpg" alt="Mission">
              <span class="info-box-tag">Our Mission</span>
            </div>
            <div class="info-box-content">
              <h3>Educational Mission</h3>
              <p>To deliver relevant, high-caliber computing education, offer specialized executive consultancy and training to public and private stakeholders, and conduct cutting-edge research driven by the socio-economic needs of Ghana and Africa.</p>
            </div>
          </div>

          <div class="info-box-card">
            <div class="info-box-img-wrap" style="aspect-ratio: 16/9;">
              <img src="assets/images/ai-data-science.jpg" alt="Vision">
              <span class="info-box-tag">Our Vision</span>
            </div>
            <div class="info-box-content">
              <h3>Pan-African Vision</h3>
              <p>To be a premier centre of excellence in computer science and information systems education across Africa, producing versatile leaders who architect and champion national digital transformation.</p>
            </div>
          </div>

          <div class="info-box-card">
            <div class="info-box-img-wrap" style="aspect-ratio: 16/9;">
              <img src="assets/images/alumni-network.jpg" alt="Values">
              <span class="info-box-tag">Core Values</span>
            </div>
            <div class="info-box-content">
              <h3>Excellence &amp; Connectedness</h3>
              <p>Integrity, quality, academic rigor, continuous innovation, and strong connectedness with industry leaders, alumni mentors, and global research consortia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Backward-compatibility alias
function introduction() {
  return about();
}

// ==============================================================================
// 3. STUDY WITH US PAGE (ALL PROGRAMMES & ADMISSIONS)
// ==============================================================================
window.activeProgFilter = 'all';

window.filterProgrammes = function(category) {
  window.activeProgFilter = category;
  const buttons = document.querySelectorAll('.prog-filter-btn');
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-category') === category);
  });

  const cards = document.querySelectorAll('.programme-detail-card');
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-level');
    if (category === 'all' || cardCat === category) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
};

function study() {
  return `
    <section class="hero-split-section" style="padding: 50px 0;">
      <div class="container">
        <div class="hero-split-grid">
          <div class="hero-text-side fade-up">
            <div class="hero-split-badge">Academic Degrees &amp; Courses</div>
            <h1>Study With Us at <span>GIMPA SOTSS</span></h1>
            <p>
              Choose from industry-aligned undergraduate degrees, specialized master's programmes, and our premier PhD in Information Systems with flexible Day, Evening, and Weekend schedules.
            </p>
            <div class="hero-actions-row">
              <a href="https://apply.gimpa.edu.gh/start" target="_blank" class="btn btn-primary" style="background:#ffd700; color:#002b49; border-color:#ffd700; font-weight:700;">Apply Online Now →</a>
              <a href="#students" class="btn btn-outline">Student Resources</a>
            </div>
          </div>
          <div class="hero-slider-side fade-up fade-up-d1">
            <div class="hero-carousel-container" style="aspect-ratio: 16/10;">
              <img src="assets/images/students-hub.jpg" alt="GIMPA Students" style="width:100%;height:100%;object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programme Catalogue & Filter Bar -->
    <section class="section" style="background:#f8fafc;">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Academic Programmes Catalogue</h2>
          <p>Filter by academic level to find the right degree pathway for your career ambitions.</p>
        </div>

        <!-- Filter Pills Bar -->
        <div style="display:flex; justify-content:center; margin-bottom: 36px;">
          <div class="programme-filter-bar">
            <button class="prog-filter-btn active" data-category="all" onclick="window.filterProgrammes('all')">All Degrees (${programmesData.length})</button>
            <button class="prog-filter-btn" data-category="Undergraduate" onclick="window.filterProgrammes('Undergraduate')">Undergraduate</button>
            <button class="prog-filter-btn" data-category="Master" onclick="window.filterProgrammes('Master')">Master's &amp; MPhil</button>
            <button class="prog-filter-btn" data-category="Doctoral" onclick="window.filterProgrammes('Doctoral')">PhD / Doctoral</button>
            <button class="prog-filter-btn" data-category="Postgraduate Diploma" onclick="window.filterProgrammes('Postgraduate Diploma')">Postgrad Diploma</button>
          </div>
        </div>

        <!-- Programme Cards Grid -->
        <div class="info-box-grid" id="programmesGrid">
          ${programmesData.map(p => {
            let catGroup = 'Master';
            let badgeClass = 'badge-postgrad';
            if (p.level === 'Undergraduate') { catGroup = 'Undergraduate'; badgeClass = 'badge-undergrad'; }
            else if (p.level === 'Doctoral') { catGroup = 'Doctoral'; badgeClass = 'badge-phd'; }
            else if (p.level === 'Postgraduate Diploma') { catGroup = 'Postgraduate Diploma'; badgeClass = 'badge-cert'; }

            // Image mapping
            let cardImg = 'assets/images/students-hub.jpg';
            if (p.id.includes('cyber')) cardImg = 'assets/images/cybersecurity-lab.jpg';
            else if (p.id.includes('analytics') || p.id.includes('science')) cardImg = 'assets/images/ai-data-science.jpg';
            else if (p.id.includes('phd') || p.id.includes('mphil')) cardImg = 'assets/images/campus-hero.png';
            else if (p.id.includes('ict')) cardImg = 'assets/images/1000211024.png';

            return `
              <div class="programme-detail-card" data-level="${catGroup}">
                <a href="#programme/${p.id}" style="display:block; overflow:hidden;">
                  <img src="${cardImg}" alt="${p.title}" class="prog-header-img" style="transition:transform 0.3s ease;">
                </a>
                <div class="prog-card-body">
                  <span class="prog-level-badge ${badgeClass}">${p.level}</span>
                  <h3 style="font-size:1.15rem; font-weight:700; color:var(--primary); margin-bottom:8px;">
                    <a href="#programme/${p.id}" style="color:var(--primary); text-decoration:none;">${p.title}</a>
                  </h3>
                  <p style="font-size:0.88rem; color:var(--text-body); line-height:1.55; margin-bottom:14px; flex:1;">${p.shortDesc}</p>
                  
                  <div class="prog-meta-list">
                    <div class="prog-meta-item">
                      <strong>Duration</strong>
                      <span>${p.duration}</span>
                    </div>
                    <div class="prog-meta-item">
                      <strong>Study Mode</strong>
                      <span>${p.mode}</span>
                    </div>
                  </div>

                  <div style="display:flex; gap:10px; margin-top:12px;">
                    <a href="#programme/${p.id}" class="btn btn-outline" style="flex:1; padding:8px 10px; font-size:0.82rem; font-weight:700; justify-content:center; text-align:center;">Requirements &amp; Details →</a>
                    <a href="https://apply.gimpa.edu.gh/start" target="_blank" class="btn btn-primary" style="padding:8px 14px; font-size:0.82rem; font-weight:700; justify-content:center;">Apply Online</a>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>
    </section>

    <!-- Admission Guidelines & How to Apply -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Admissions Pathways &amp; Requirements</h2>
          <p>We welcome applications from senior high school graduates, diploma holders, mature students, and postgraduate researchers.</p>
        </div>

        <div class="info-box-grid">
          <div class="card" style="padding: 28px;">
            <h3 style="color:var(--primary); margin-bottom:12px; font-size:1.2rem;">WASSCE / SSSCE Applicants</h3>
            <p style="font-size:0.9rem; color:var(--text-body); line-height:1.6;">
              Credit passes (A1–C6 in WASSCE / A–D in SSSCE) in six subjects comprising 3 Core Subjects (English, Core Mathematics, Integrated Science) plus 3 Elective Subjects including Elective Mathematics or Physics.
            </p>
          </div>

          <div class="card" style="padding: 28px;">
            <h3 style="color:var(--primary); margin-bottom:12px; font-size:1.2rem;">Postgraduate &amp; Master's</h3>
            <p style="font-size:0.9rem; color:var(--text-body); line-height:1.6;">
              Bachelor's degree in Computer Science, Information Technology, Engineering, Mathematics, or related scientific disciplines with minimum Second Class Lower from an accredited institution.
            </p>
          </div>

          <div class="card" style="padding: 28px;">
            <h3 style="color:var(--primary); margin-bottom:12px; font-size:1.2rem;">Mature &amp; Top-Up Students</h3>
            <p style="font-size:0.9rem; color:var(--text-body); line-height:1.6;">
              Applicants must be at least 25 years old with relevant industry experience and must pass the GIMPA Mature Students Entrance Examination in English, Mathematics, and Aptitude.
            </p>
          </div>
        </div>

        <div style="text-align:center; margin-top: 40px;">
          <a href="https://apply.gimpa.edu.gh/start" target="_blank" class="btn btn-primary" style="padding: 14px 32px; font-size: 1rem; font-weight: 700;">Start Your Online Application →</a>
        </div>
      </div>
    </section>
  `;
}

// ==============================================================================
// 4. FOR STUDENTS PAGE (COMPREHENSIVE STUDENT HUB & RESOURCES)
// ==============================================================================
window.toggleAccordion = function(id) {
  const item = document.getElementById(id);
  if (item) {
    item.classList.toggle('active');
  }
};

function students() {
  return `
    <section class="hero-split-section" style="padding: 50px 0;">
      <div class="container">
        <div class="hero-split-grid">
          <div class="hero-text-side fade-up">
            <div class="hero-split-badge">Student Central</div>
            <h1>Resources &amp; Support <span>For Students</span></h1>
            <p>
              Essential portals, academic schedules, course registration guides, mentorship, tech clubs, and career placement services for continuing and prospective students.
            </p>
            <div class="hero-actions-row">
              <a href="https://lms.gimpa.edu.gh/" target="_blank" class="btn btn-primary" style="background:#38bdf8; border-color:#38bdf8; color:#002b49; font-weight:700;">Access LMS (Moodle) →</a>
              <a href="https://gimpa.edu.gh/library/" target="_blank" class="btn btn-outline">Digital Library</a>
            </div>
          </div>
          <div class="hero-slider-side fade-up fade-up-d1">
            <div class="hero-carousel-container" style="aspect-ratio: 16/10;">
              <img src="assets/images/1000211024.png" alt="Student Community" style="width:100%;height:100%;object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Access Hub Grid -->
    <section class="section" style="background:#f8fafc; padding: 60px 0;">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Quick Portal &amp; Academic Shortcuts</h2>
          <p>Direct links to key institutional learning tools and administrative portals.</p>
        </div>

        <div class="student-shortcuts-grid">
          <a href="https://lms.gimpa.edu.gh/" target="_blank" class="shortcut-card">
            <div class="shortcut-card-img">
              <img src="assets/images/lms-portal.jpg" alt="GIMPA LMS Moodle">
              <span class="shortcut-badge">Official LMS</span>
            </div>
            <div class="shortcut-card-body">
              <h4>GIMPA LMS</h4>
              <p>Access course slides, lecture notes, quizzes, assignments, and semester grades on Moodle.</p>
              <span class="shortcut-card-link">Access LMS Portal &nearr;</span>
            </div>
          </a>

          <a href="https://gimpa.edu.gh/library/" target="_blank" class="shortcut-card">
            <div class="shortcut-card-img">
              <img src="assets/images/elibrary-journals.jpg" alt="GIMPA Digital Library">
              <span class="shortcut-badge">Research Commons</span>
            </div>
            <div class="shortcut-card-body">
              <h4>E-Library &amp; Journals</h4>
              <p>Explore IEEE Xplore, ACM Digital Library, ScienceDirect, and international e-resources.</p>
              <span class="shortcut-card-link">Open Digital Library &nearr;</span>
            </div>
          </a>

          <a href="https://apply.gimpa.edu.gh/start" target="_blank" class="shortcut-card">
            <div class="shortcut-card-img">
              <img src="assets/images/admissions-portal.jpg" alt="Admissions Portal">
              <span class="shortcut-badge">Admissions</span>
            </div>
            <div class="shortcut-card-body">
              <h4>Admissions Portal</h4>
              <p>Submit online applications, upload academic transcripts, and track admission status.</p>
              <span class="shortcut-card-link">Admissions Portal &nearr;</span>
            </div>
          </a>

          <a href="#contact" class="shortcut-card">
            <div class="shortcut-card-img">
              <img src="assets/images/it-helpdesk.jpg" alt="IT Helpdesk & Tech Support">
              <span class="shortcut-badge">Support Desk</span>
            </div>
            <div class="shortcut-card-body">
              <h4>IT Helpdesk</h4>
              <p>Get assistance with student email (@st.gimpa.edu.gh), password reset, and campus Wi-Fi access.</p>
              <span class="shortcut-card-link">Contact IT Helpdesk &rarr;</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Academic Life & Student Tech Hubs (Image Info Boxes) -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Student Tech Communities &amp; Career Hubs</h2>
          <p>Join student-led developer communities, participate in national hackathons, and secure industry internships.</p>
        </div>

        <div class="info-box-grid">
          
          <div class="info-box-card">
            <div class="info-box-img-wrap">
              <img src="assets/images/students-hub.jpg" alt="Google Developer Student Club">
              <span class="info-box-tag">Student Club</span>
            </div>
            <div class="info-box-content">
              <h3>Google Developer Student Club (GDSC)</h3>
              <p>Workshops on web development, Flutter, cloud computing, and AI hackathons connecting students with Google developer technologies.</p>
            </div>
          </div>

          <div class="info-box-card">
            <div class="info-box-img-wrap">
              <img src="assets/images/cybersecurity-lab.jpg" alt="Cybersecurity Association">
              <span class="info-box-tag">Specialized Hub</span>
            </div>
            <div class="info-box-content">
              <h3>Cybersecurity &amp; CTF Association</h3>
              <p>Weekly Capture The Flag (CTF) competitions, ethical hacking drills, and vulnerability testing seminars mentored by faculty researchers.</p>
            </div>
          </div>

          <div class="info-box-card">
            <div class="info-box-img-wrap">
              <img src="assets/images/ai-data-science.jpg" alt="AI & Robotics Hub">
              <span class="info-box-tag">Innovation Lab</span>
            </div>
            <div class="info-box-content">
              <h3>AI &amp; Robotics Hub</h3>
              <p>Hands-on hardware interfacing, computer vision projects, drone programming, and predictive data modeling teams.</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Student Handbook & Frequently Asked Questions (FAQ Accordions) -->
    <section class="section section-alt">
      <div class="container">
        <div class="section-header" style="text-align: center; max-width: 700px; margin: 0 auto 40px auto;">
          <div class="accent-line" style="margin: 0 auto 16px auto;"></div>
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about course registration, exams, internship requirements, and student support.</p>
        </div>

        <div class="accordion-wrapper">
          
          <div class="accordion-item" id="faq1">
            <button class="accordion-header" onclick="window.toggleAccordion('faq1')">
              <span>How do I register for semester courses?</span>
              <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-body">
              Course registration takes place at the start of each semester via the GIMPA Student Information Portal. After clearing semester fee requirements with the finance office, log in, select your prescribed core and elective courses, and click "Submit Registration" before obtaining academic advisor sign-off.
            </div>
          </div>

          <div class="accordion-item" id="faq2">
            <button class="accordion-header" onclick="window.toggleAccordion('faq2')">
              <span>What are the internship and industrial attachment requirements?</span>
              <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-body">
              All BSc Computer Science and BSc ICT students must complete a mandatory 8-to-12-week industrial attachment during the long vacation between Level 300 and Level 400. The departmental internship coordinator provides introductory letters to vetted partner companies across banking, telecom, and tech startups.
            </div>
          </div>

          <div class="accordion-item" id="faq3">
            <button class="accordion-header" onclick="window.toggleAccordion('faq3')">
              <span>How can I access campus Wi-Fi and computing labs?</span>
              <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-body">
              Every enrolled student is assigned official GIMPA student credentials (@st.gimpa.edu.gh). Use these credentials to connect to the "GIMPA-STUDENT" secure Wi-Fi network across Greenhill Campus and to log in to computing workstations in the SOTSS Computer Labs.
            </div>
          </div>

          <div class="accordion-item" id="faq4">
            <button class="accordion-header" onclick="window.toggleAccordion('faq4')">
              <span>What academic support and tutoring services are available?</span>
              <span class="accordion-icon">▼</span>
            </button>
            <div class="accordion-body">
              The department runs free peer tutoring sessions for challenging courses such as Data Structures &amp; Algorithms, Object-Oriented Programming (Java/C++), and Discrete Mathematics. Faculty members also hold designated weekly office hours for individual student academic consultations.
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

// Publication Cover Image Resolver
function getPublicationCoverImage(pub) {
  if (!pub) return 'assets/images/publications/wiley_ijcs_cover.png';
  if (pub.image && !pub.image.includes('research-lab.png') && !pub.image.includes('100021') && !pub.image.includes('ai-data-science.jpg')) {
    return pub.image;
  }
  
  const journal = (pub.journal || '').toLowerCase();
  const title = (pub.title || '').toLowerCase();

  // 1. Journal of Sensors (Hindawi / Wiley)
  if (journal.includes('sensor') || journal === 'j. sensors' || journal === 'journal of sensors' || title.includes('green wireless sensor networks') || title.includes('wsn architectures for environmental monitoring') || title.includes('wsn protocols and security')) {
    return 'assets/images/publications/journal_of_sensors.jpg';
  }

  // 2. Ethics in Progress
  if (journal.includes('ethics') || title.includes('ethical ai in healthcare') || title.includes('ethics in progress')) {
    return 'assets/images/publications/ethics_in_progress.jpg';
  }

  // 3. Ambient Intelligence and Humanized Computing (Springer)
  if (journal.includes('ambient') || journal.includes('humanized') || title.includes('mdbea') || title.includes('distance-based energy-aware')) {
    return 'assets/images/publications/springer_jaihc.jpg';
  }

  // 4. Wireless Communications and Mobile Computing (Wiley / Hindawi)
  if (journal.includes('wireless communications') || journal.includes('mobile computing') || title.includes('signal propagation models in soil') || title.includes('energy budget in wsn') || title.includes('smart river monitoring') || title.includes('prolonging the lifetime') || title.includes('scheduling in wireless sensor networks')) {
    return 'assets/images/publications/wiley_wcmc.jpg';
  }

  // 5. International Journal of Communication Systems (Wiley)
  if (journal.includes('communication systems') || title.includes('optimizing packet size') || title.includes('reliability of wireless sensor')) {
    return 'assets/images/publications/wiley_ijcs_cover.png';
  }

  // 6. IntechOpen Books
  if (journal.includes('intechopen') || journal.includes('working title') || title.includes('applications of prediction approaches')) {
    return 'assets/images/publications/intechopen_book_wsn.png';
  }

  // 7. IEEE Conferences & Symposia
  if (journal.includes('ieee') || journal.includes('conference') || journal.includes('icast') || journal.includes('africon') || title.includes('rfid student attendance')) {
    return 'assets/images/publications/ieee_conference_proceedings.png';
  }

  // 8. Scientific Reports (Nature Portfolio)
  if (journal.includes('scientific reports') || journal.includes('nature')) {
    return 'assets/images/publications/nature_scientific_reports.png';
  }

  // 9. Heliyon (Elsevier / Cell Press)
  if (journal.includes('heliyon') || journal.includes('cell press')) {
    return 'assets/images/publications/heliyon_cell_press.png';
  }

  // 10. Information and Software Technology (Elsevier)
  if (journal.includes('information and software') || journal.includes('software technology') || journal.includes('software business') || journal.includes('euromicro')) {
    return 'assets/images/publications/elsevier_ist_cover.png';
  }

  // 11. MIS Quarterly
  if (journal.includes('mis quarterly') || journal.includes('misq')) {
    return 'assets/images/publications/mis_quarterly.png';
  }

  // 12. Fallbacks
  if (title.includes('cyber') || title.includes('security') || title.includes('forensic')) {
    return 'assets/images/cybersecurity-lab.jpg';
  }
  if (title.includes('ai') || title.includes('learning') || title.includes('analytics')) {
    return 'assets/images/ai-data-science.jpg';
  }

  return 'assets/images/publications/journal_of_sensors.jpg';
}

// Publication Type & Author Highlighting Helpers
function getPublicationTypeBadge(type) {
  const t = type || 'Journal Article (Peer-Reviewed)';
  let bg = '#dcfce7';
  let color = '#15803d';
  let border = '#bbf7d0';
  let icon = '📄';

  if (t.toLowerCase().includes('book')) {
    bg = '#f3e8ff';
    color = '#6b21a8';
    border = '#d8b4fe';
    icon = '📚';
  } else if (t.toLowerCase().includes('review') || t.toLowerCase().includes('working')) {
    bg = '#fef3c7';
    color = '#b45309';
    border = '#fde68a';
    icon = '⏳';
  } else if (t.toLowerCase().includes('conference')) {
    bg = '#e0f2fe';
    color = '#0369a1';
    border = '#bae6fd';
    icon = '🎤';
  } else if (t.toLowerCase().includes('monograph') || t.toLowerCase().includes('policy')) {
    bg = '#ffe4e6';
    color = '#be123c';
    border = '#fecdd3';
    icon = '🏛️';
  }

  return `<span style="display:inline-flex; align-items:center; gap:5px; background:${bg}; color:${color}; border:1px solid ${border}; padding:3px 10px; border-radius:999px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">${icon} ${t}</span>`;
}

function formatAuthorsWithHighlight(authorsStr, currentFacultyName) {
  if (!authorsStr) return '';
  
  const facultyTokens = [
    { key: 'engmann', label: 'Dr. Felicia N. A. Engmann', short: 'Engmann, F.' },
    { key: 'budu', label: 'Dr. Joseph Budu', short: 'Budu, J.' },
    { key: 'wiredu', label: 'Prof. Gamel O. Wiredu', short: 'Wiredu, G.' },
    { key: 'adabor', label: 'Prof. Emmanuel S. Adabor', short: 'Adabor, E.' },
    { key: 'adaku', label: 'Prof. Ebenezer Adaku', short: 'Adaku, E.' },
    { key: 'assyne', label: 'Dr. Nana Assyne', short: 'Assyne, N.' },
    { key: 'boasiako', label: 'Dr. Emmanuel Antwi-Boasiako', short: 'Antwi-Boasiako, E.' }
  ];

  let currentKey = '';
  if (currentFacultyName) {
    const lower = currentFacultyName.toLowerCase();
    const match = facultyTokens.find(t => lower.includes(t.key));
    if (match) currentKey = match.key;
  }

  // Parse list whether delimited by semicolons or commas
  let authorsList = [];
  if (authorsStr.includes(';')) {
    authorsList = authorsStr.split(';').map(a => a.trim()).filter(Boolean);
  } else if (authorsStr.includes(',')) {
    const rawTokens = authorsStr.split(',').map(a => a.trim()).filter(Boolean);
    const combined = [];
    for (let i = 0; i < rawTokens.length; i++) {
      if (i + 1 < rawTokens.length && rawTokens[i+1].length <= 3 && !rawTokens[i+1].includes(' ')) {
        combined.push(`${rawTokens[i]}, ${rawTokens[i+1]}`);
        i++;
      } else {
        combined.push(rawTokens[i]);
      }
    }
    authorsList = combined;
  } else {
    authorsList = [authorsStr.trim()];
  }

  if (authorsList.length === 0) return authorsStr;

  return authorsList.map(author => {
    const authorLower = author.toLowerCase();
    const isCurrentFaculty = currentKey && authorLower.includes(currentKey);

    if (isCurrentFaculty) {
      // Highlight ONLY the current faculty member
      return `<strong style="background: linear-gradient(135deg, #fef08a 0%, #fde047 100%); color: #713f12; padding: 2px 8px; border-radius: 4px; border: 1px solid #eab308; display: inline-flex; align-items: center; gap: 4px; font-weight: 800; box-shadow: 0 1px 3px rgba(0,0,0,0.06);">⭐ ${author} (Faculty Author)</strong>`;
    } else {
      // All other authors remain plain / unhighlighted
      return `<span style="color: #475569;">${author}</span>`;
    }
  }).join('; ');
}

// ==============================================================================
// 5. RESEARCH PAGE (VISUAL INFO BOXES FOR ALL RESEARCH CLUSTERS)
// ==============================================================================
function research() {
  return `
    <section class="hero-split-section" style="padding: 50px 0;">
      <div class="container">
        <div class="hero-split-grid">
          <div class="hero-text-side fade-up">
            <div class="hero-split-badge">Scientific Discovery</div>
            <h1>Research &amp; Innovation at <span>SOTSS</span></h1>
            <p>
              Conducting high-impact, peer-reviewed computational research across Artificial Intelligence, Digital Forensics, IoT sensor networks, and Health Informatics.
            </p>
            <div class="hero-actions-row">
              <a href="#faculty" class="btn btn-primary">Research Faculty →</a>
              <a href="#contact" class="btn btn-outline">Collaborate With Us</a>
            </div>
          </div>
          <div class="hero-slider-side fade-up fade-up-d1">
            <div class="hero-carousel-container" style="aspect-ratio: 16/10;">
              <img src="assets/images/ai-data-science.jpg" alt="Research Labs" style="width:100%;height:100%;object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Research Thematic Clusters (Wide Info Boxes with Images) -->
    <section class="section" style="background:#f8fafc;">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Research Thematic Clusters</h2>
          <p>Our departmental research agenda is organized around four interdisciplinary clusters addressing critical technological challenges.</p>
        </div>

        <div class="info-box-grid">
          
          <!-- Cluster 1: AI & Data Science -->
          <div class="info-box-card fade-up">
            <div class="info-box-img-wrap">
              <img src="assets/images/ai-data-science.jpg" alt="AI & Machine Learning">
              <span class="info-box-tag">Data Intelligence</span>
            </div>
            <div class="info-box-content">
              <h3>Artificial Intelligence &amp; Data Science</h3>
              <p>Developing predictive algorithms, natural language processing for local languages, computer vision for agricultural disease detection, and deep learning for financial risk forecasting.</p>
              <span class="info-box-link">Lead: Dr. Felicia Engmann &amp; Prof. Emmanuel Adabor</span>
            </div>
          </div>

          <!-- Cluster 2: Cybersecurity & Forensics -->
          <div class="info-box-card fade-up fade-up-d1">
            <div class="info-box-img-wrap">
              <img src="assets/images/cybersecurity-lab.jpg" alt="Cybersecurity & Forensics">
              <span class="info-box-tag">Digital Trust</span>
            </div>
            <div class="info-box-content">
              <h3>Digital Forensics &amp; Cybersecurity</h3>
              <p>Investigating cybercrime architectures, automated malware classification, cryptographic protocols, cloud security posture, and legal frameworks for digital evidence in Africa.</p>
              <span class="info-box-link">Lead: Dr. Joseph Budu &amp; Dr. Emmanuel Antwi-Boasiako</span>
            </div>
          </div>

          <!-- Cluster 3: Wireless IoT Networks -->
          <div class="info-box-card fade-up fade-up-d2">
            <div class="info-box-img-wrap">
              <img src="assets/images/research-lab.png" alt="Wireless Networks & IoT">
              <span class="info-box-tag">Connected Systems</span>
            </div>
            <div class="info-box-content">
              <h3>Wireless Sensor Networks &amp; IoT</h3>
              <p>Designing low-power wide-area sensor topologies (LoRaWAN) for smart agriculture soil monitoring, flood warning systems, and urban environmental telemetry in West Africa.</p>
              <span class="info-box-link">Lead: Dr. Nana Assyne &amp; SOTSS IoT Lab</span>
            </div>
          </div>

          <!-- Cluster 4: Health Informatics & MIS -->
          <div class="info-box-card fade-up">
            <div class="info-box-img-wrap">
              <img src="assets/images/students-hub.jpg" alt="Health Informatics">
              <span class="info-box-tag">Applied Computing</span>
            </div>
            <div class="info-box-content">
              <h3>Health Informatics &amp; Enterprise IS</h3>
              <p>Leveraging electronic medical records, telemedicine frameworks, mobile health interventions, and enterprise information architectures to optimize healthcare delivery.</p>
              <span class="info-box-link">Lead: Prof. Gamel Wiredu &amp; Fellows</span>
            </div>
          </div>

          <!-- Cluster 5: Industrial Analytics & Simulation -->
          <div class="info-box-card fade-up fade-up-d1">
            <div class="info-box-img-wrap">
              <img src="assets/images/1000211039.png" alt="Industrial Analytics">
              <span class="info-box-tag">Simulation Science</span>
            </div>
            <div class="info-box-content">
              <h3>Industrial Analytics &amp; Simio Lab</h3>
              <p>Utilizing Simio simulation software under an academic grant from Simio LLC to model supply chain logistics, port operations, and industrial manufacturing workflows.</p>
              <span class="info-box-link">Lead: Prof. Emmanuel Adabor</span>
            </div>
          </div>

          <!-- Cluster 6: Human-Computer Interaction -->
          <div class="info-box-card fade-up fade-up-d2">
            <div class="info-box-img-wrap">
              <img src="assets/images/1000211395.png" alt="HCI and Software Eng">
              <span class="info-box-tag">User Experience</span>
            </div>
            <div class="info-box-content">
              <h3>HCI &amp; Software Engineering</h3>
              <p>Designing user-centric digital public goods, accessible interfaces for multilingual users, and agile software engineering frameworks tailored for African startups.</p>
              <span class="info-box-link">Lead: Dr. Nana Assyne</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Verified Research Publications Directory with Pictures & Type Badges -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Verified Faculty Publications</h2>
          <p>Recent peer-reviewed journal articles, conference proceedings, and book chapters published by our faculty.</p>
        </div>

        <div style="display:flex; flex-direction:column; gap:20px;">
          ${faculty.filter(f => f && f.name !== 'System Administrator').flatMap(f => f.pubs.map(p => ({ ...p, authorName: f.name, lecturerId: f.id }))).slice(0, 10).map(pub => `
            <article class="pub-card-flex">
              <div class="pub-meta-row">
                ${getPublicationTypeBadge(pub.type)}
                <span style="font-size:0.78rem; font-weight:700; color:var(--text-body);">${pub.year || 'Recent'}</span>
              </div>
              <h3 style="margin:0 0 6px 0;">
                <a href="#publication/${pub.id}" class="pub-title-link">${pub.title}</a>
              </h3>
              <div class="pub-venue">${pub.journal || 'Academic Journal / Venue'}</div>
              <div class="pub-authors-row">
                <strong>Authors:</strong> ${formatAuthorsWithHighlight(pub.authors, pub.authorName)}
              </div>
              <div style="display:flex; gap:16px; align-items:center; margin-top:auto;">
                <a href="#profile/${pub.lecturerId}" style="font-size:0.84rem; color:var(--primary); font-weight:700; text-decoration:none;">View Author Profile →</a>
                ${pub.url ? `<a href="${pub.url}" target="_blank" style="font-size:0.84rem; color:var(--accent); font-weight:700; text-decoration:underline;">View Publication &nearr;</a>` : ''}
              </div>
            </article>
          `).join('')}
        </div>

        <div style="text-align:center; margin-top:36px;">
          <a href="#faculty" class="btn btn-dark" style="padding: 12px 28px; font-weight:700;">Explore All Faculty Researchers →</a>
        </div>
      </div>
    </section>
  `;
}

// ==============================================================================
// 6. FACULTY & STAFF PAGE (DEDICATED PAGE WITH SEARCH & FILTERING)
// ==============================================================================
window.filterFacultyByRole = function(role) {
  const buttons = document.querySelectorAll('.faculty-role-btn');
  buttons.forEach(btn => btn.classList.toggle('active', btn.getAttribute('data-role') === role));

  const cards = document.querySelectorAll('.staff-card');
  let visibleCount = 0;
  cards.forEach(card => {
    const cardRole = (card.getAttribute('data-role') || '').toLowerCase();
    const cardSearch = (card.getAttribute('data-search') || '').toLowerCase();
    
    let isMatch = false;
    if (role === 'all') {
      isMatch = true;
    } else if (role === 'Professor') {
      isMatch = cardRole.includes('prof') || cardSearch.includes('prof.') || cardRole.includes('dean') || cardRole.includes('rector');
    } else if (role === 'Head') {
      isMatch = cardRole.includes('head') || cardRole.includes('hod');
    } else if (role === 'Senior Lecturer') {
      isMatch = cardRole.includes('senior');
    } else if (role === 'Lecturer') {
      isMatch = cardRole.includes('lecturer') && !cardRole.includes('senior');
    } else {
      isMatch = cardRole.includes(role.toLowerCase()) || cardSearch.includes(role.toLowerCase());
    }

    if (isMatch) {
      card.classList.remove('is-hidden');
      visibleCount++;
    } else {
      card.classList.add('is-hidden');
    }
  });

  const emptyEl = document.getElementById('facultyEmpty');
  if (emptyEl) emptyEl.style.display = visibleCount === 0 ? 'block' : 'none';
};

function facultyPage() {
  return `
    <section class="hero-split-section" style="padding: 50px 0;">
      <div class="container">
        <div class="hero-split-grid">
          <div class="hero-text-side fade-up">
            <div class="hero-split-badge">Academic Directory</div>
            <h1>Faculty &amp; <span>Research Fellows</span></h1>
            <p>
              Meet our professors, senior lecturers, and industry adjuncts dedicated to teaching excellence, student mentorship, and world-class scientific inquiry.
            </p>
            <div class="hero-actions-row">
              <a href="#research" class="btn btn-primary">Research Areas →</a>
              <a href="#contact" class="btn btn-outline">Department Office</a>
            </div>
          </div>
          <div class="hero-slider-side fade-up fade-up-d1">
            <div class="hero-carousel-container" style="aspect-ratio: 16/10;">
              <img src="assets/images/1000211035.png" alt="Faculty" style="width:100%;height:100%;object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Faculty Directory Section with Search & Role Filter -->
    <section class="section" style="background:#f8fafc;">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Faculty &amp; Staff Directory</h2>
          <p>Search faculty by name, academic title, specialization, or office location.</p>
        </div>

        <!-- Search Bar and Filter Pills -->
        <div style="max-width: 750px; margin: 0 auto 36px auto;">
          <div style="position:relative; margin-bottom: 20px;">
            <input type="text" id="facultySearchInput" placeholder="🔍 Search faculty by name, specialization, or research area..." style="width:100%; border:1.5px solid #cbd5e1; background:#fff; border-radius:999px; padding:14px 24px; font-size:0.95rem; outline:none; box-shadow:0 2px 6px rgba(0,0,0,0.05); transition:all 0.2s;">
          </div>
          
          <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:8px;">
            <button class="prog-filter-btn faculty-role-btn active" data-role="all" onclick="window.filterFacultyByRole('all')">All Faculty</button>
            <button class="prog-filter-btn faculty-role-btn" data-role="Head" onclick="window.filterFacultyByRole('Head')">Head of Dept</button>
            <button class="prog-filter-btn faculty-role-btn" data-role="Professor" onclick="window.filterFacultyByRole('Professor')">Professors</button>
            <button class="prog-filter-btn faculty-role-btn" data-role="Senior Lecturer" onclick="window.filterFacultyByRole('Senior Lecturer')">Senior Lecturers</button>
            <button class="prog-filter-btn faculty-role-btn" data-role="Lecturer" onclick="window.filterFacultyByRole('Lecturer')">Lecturers</button>
          </div>

          <div id="facultyEmpty" style="display:none; margin-top:20px; padding:14px; text-align:center; border-radius:8px; background:#e0f2fe; color:#0369a1; font-weight:600;">
            No faculty members found matching your search.
          </div>
        </div>

        <!-- Faculty Cards Grid -->
        <div class="staff-grid" id="facultyDirectoryGrid">
          ${faculty.filter(f => f && f.name !== 'System Administrator' && !(f.role && f.role.toLowerCase().includes('administrator'))).map(f => {
            let roleClass = 'role-pill-lecturer';
            if (f.role.toLowerCase().includes('head')) roleClass = 'role-pill-hod';
            else if (f.role.toLowerCase().includes('prof') || f.role.toLowerCase().includes('dean') || f.role.toLowerCase().includes('rector')) roleClass = 'role-pill-prof';
            else if (f.role.toLowerCase().includes('senior')) roleClass = 'role-pill-snr';

            const initials = f.name.split(' ').filter(n => !n.includes('.')).slice(-2).map(n => n[0]).join('');

            return `
              <div class="staff-card" data-role="${f.role}" data-search="${f.name} ${f.role} ${f.spec} ${f.email} ${f.office}">
                <div class="staff-card-banner"></div>
                <div class="staff-card-body">
                  <div class="staff-photo-wrap">
                    ${f.photo ? 
                      `<img class="photo" src="${f.photo}" alt="${f.name}">` :
                      `<div class="staff-avatar-badge">${initials}</div>`
                    }
                  </div>
                  
                  <div class="staff-role-wrap">
                    <span class="faculty-role-pill ${roleClass}">${f.role}</span>
                  </div>

                  <h3 class="staff-name">${f.name}</h3>
                  <div class="staff-spec">${f.spec}</div>
                  <div class="staff-email-row">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    <span>${f.email}</span>
                  </div>
                  <a class="staff-view-btn" href="#profile/${f.id}">View Profile &amp; Research →</a>
                </div>
              </div>
            `;
          }).join('')}
        </div>

      </div>
    </section>
  `;
}

// ==============================================================================
// 7. ALUMNI PAGE (SEPARATE DEDICATED ALUMNI PAGE & REGISTRATION)
// ==============================================================================
window.handleAlumniRegisterSubmit = async function(event) {
  event.preventDefault();
  const statusEl = document.getElementById('alumniRegisterStatus');
  if (!statusEl) return;

  statusEl.style.display = 'block';
  statusEl.className = 'status-message';
  statusEl.style.backgroundColor = '#e0f2fe';
  statusEl.style.color = '#0369a1';
  statusEl.textContent = 'Registering with Alumni Association...';

  const formData = new FormData();
  formData.append('name', document.getElementById('alumniName').value);
  formData.append('email', document.getElementById('alumniEmail').value);
  formData.append('phone', document.getElementById('alumniPhone').value);
  formData.append('grad_year', document.getElementById('alumniYear').value);
  formData.append('programme', document.getElementById('alumniProgramme').value);
  formData.append('current_role', document.getElementById('alumniRole').value);
  formData.append('company', document.getElementById('alumniCompany').value);

  try {
    const res = await fetch('/api/alumni/register', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (res.ok) {
      statusEl.style.backgroundColor = '#dcfce7';
      statusEl.style.color = '#15803d';
      statusEl.textContent = data.message || 'Registration successful! Check your email for confirmation.';
      document.getElementById('alumniRegisterForm').reset();
    } else {
      statusEl.style.backgroundColor = '#fef2f2';
      statusEl.style.color = '#b91c1c';
      statusEl.textContent = data.detail || 'Failed to register. Please try again.';
    }
  } catch (err) {
    statusEl.style.backgroundColor = '#fef2f2';
    statusEl.style.color = '#b91c1c';
    statusEl.textContent = 'Network error. Please try again later.';
  }
};

function alumni() {
  return `
    <section class="hero-split-section" style="padding: 50px 0;">
      <div class="container">
        <div class="hero-split-grid">
          <div class="hero-text-side fade-up">
            <div class="hero-split-badge">Alumni Network</div>
            <h1>SOTSS Alumni <span>Association</span></h1>
            <p>
              A global community of technology trailblazers, engineering leaders, cybersecurity directors, and entrepreneurs driving digital innovation worldwide.
            </p>
            <div class="hero-actions-row">
              <a href="#alumni-register" class="btn btn-primary" style="background:#ffd700; color:#002b49; border-color:#ffd700; font-weight:700;">Join Alumni Network →</a>
              <a href="#contact" class="btn btn-outline">Partner With Us</a>
            </div>
          </div>
          <div class="hero-slider-side fade-up fade-up-d1">
            <div class="hero-carousel-container" style="aspect-ratio: 16/10;">
              <img src="assets/images/alumni-network.jpg" alt="GIMPA Alumni" style="width:100%;height:100%;object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Alumni Spotlight Stories (Image-backed) -->
    <section class="section" style="background:#f8fafc;">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Alumni Spotlights &amp; Impact</h2>
          <p>Read about the inspiring career journeys of SOTSS graduates shaping industries across Africa and globally.</p>
        </div>

        <div class="alumni-spotlight-card">
          <img src="assets/images/alumni-network.jpg" alt="Alumni Leadership" class="alumni-spotlight-img">
          <div class="alumni-spotlight-body">
            <span style="font-size:0.75rem; font-weight:700; color:var(--accent); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:8px;">Alumni in Fintech Leadership</span>
            <h3 style="font-size:1.4rem; color:var(--primary); margin-bottom:12px;">Leading Africa's Digital Payments Transformation</h3>
            <p style="color:var(--text-body); line-height:1.7; font-size:0.95rem; margin-bottom:16px;">
              "My journey in computer science at GIMPA provided me with rigorous mathematical foundations and the software architecture discipline required to scale mission-critical payment gateways processing millions of transactions daily."
            </p>
            <div style="font-weight:700; color:var(--primary);">Kofi Mensah · BSc Computer Science Class of 2020</div>
            <div style="font-size:0.85rem; color:var(--text-body);">VP of Engineering, Paystack / Stripe Africa</div>
          </div>
        </div>

        <div class="alumni-spotlight-card">
          <img src="assets/images/cybersecurity-lab.jpg" alt="Cybersecurity Leader" class="alumni-spotlight-img">
          <div class="alumni-spotlight-body">
            <span style="font-size:0.75rem; font-weight:700; color:var(--accent); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:8px;">Alumni in Cybersecurity</span>
            <h3 style="font-size:1.4rem; color:var(--primary); margin-bottom:12px;">Defending National Critical Infrastructure</h3>
            <p style="color:var(--text-body); line-height:1.7; font-size:0.95rem; margin-bottom:16px;">
              "The hands-on digital forensics and threat intelligence coursework under Dr. Budu in the MSc Cybersecurity programme directly prepared me for high-stakes incident response and national cyber threat mitigation."
            </p>
            <div style="font-weight:700; color:var(--primary);">Ama Serwaa · MSc Digital Forensics &amp; Cybersecurity Class of 2022</div>
            <div style="font-size:0.85rem; color:var(--text-body);">Chief Information Security Officer, National Financial Switch</div>
          </div>
        </div>

      </div>
    </section>

    <!-- Alumni Registration Form -->
    <section class="section" id="alumni-register">
      <div class="container" style="max-width: 800px;">
        <div class="section-header" style="text-align: center;">
          <div class="accent-line" style="margin: 0 auto 16px auto;"></div>
          <h2>Join the SOTSS Alumni Association</h2>
          <p>Update your details to receive event invitations, guest lecturing opportunities, and connect with fellow graduates.</p>
        </div>

        <div style="background:#fff; border:1px solid #e2e8f0; border-radius:var(--radius); padding:36px; box-shadow:var(--shadow-lg);">
          <div id="alumniRegisterStatus" style="display:none; margin-bottom:20px; padding:12px; border-radius:6px; font-size:0.9rem; font-weight:600;"></div>

          <form id="alumniRegisterForm" onsubmit="window.handleAlumniRegisterSubmit(event)">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:18px;">
              <div>
                <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Full Name *</label>
                <input type="text" id="alumniName" required placeholder="e.g. Ama Osei" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
              </div>
              <div>
                <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Email Address *</label>
                <input type="email" id="alumniEmail" required placeholder="e.g. ama.osei@gmail.com" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
              </div>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:18px;">
              <div>
                <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Phone Number</label>
                <input type="tel" id="alumniPhone" placeholder="e.g. +233 50 123 4567" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
              </div>
              <div>
                <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Graduation Year *</label>
                <input type="text" id="alumniYear" required placeholder="e.g. 2023" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
              </div>
            </div>

            <div style="margin-bottom:18px;">
              <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Degree / Programme *</label>
              <select id="alumniProgramme" required style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none; background:#fff;">
                <option value="BSc Computer Science">BSc Computer Science</option>
                <option value="BSc Information & Communication Technology">BSc Information & Communication Technology</option>
                <option value="MSc Digital Forensics & Cybersecurity">MSc Digital Forensics & Cybersecurity</option>
                <option value="MSc Industrial Analytics">MSc Industrial Analytics</option>
                <option value="MSc/MPhil ICT">MSc/MPhil ICT</option>
                <option value="PhD Information Systems">PhD Information Systems</option>
                <option value="Postgraduate Diploma ICT">Postgraduate Diploma ICT</option>
              </select>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:24px;">
              <div>
                <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Current Role / Job Title</label>
                <input type="text" id="alumniRole" placeholder="e.g. Lead Software Engineer" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
              </div>
              <div>
                <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Current Organization / Company</label>
                <input type="text" id="alumniCompany" placeholder="e.g. Vodafone Ghana / Standard Chartered" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
              </div>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%; padding:12px; font-weight:700; font-size:1rem; justify-content:center;">Register with Alumni Network →</button>
          </form>
        </div>
      </div>
    </section>
  `;
}

// Backward-compatibility alias
function cooperation() {
  return alumni();
}

// ==============================================================================
// 8. CONTACT PAGE (WITH DIRECT SMTP INQUIRY FORM)
// ==============================================================================
window.handleContactSubmit = async function(event) {
  event.preventDefault();
  const statusEl = document.getElementById('contactFormStatus');
  if (!statusEl) return;

  statusEl.style.display = 'block';
  statusEl.className = 'status-message';
  statusEl.style.backgroundColor = '#e0f2fe';
  statusEl.style.color = '#0369a1';
  statusEl.textContent = 'Sending your message...';

  const formData = new FormData();
  formData.append('name', document.getElementById('contactName').value);
  formData.append('email', document.getElementById('contactEmail').value);
  formData.append('subject', document.getElementById('contactSubject').value);
  formData.append('message', document.getElementById('contactMessage').value);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });
    const data = await res.json();
    if (res.ok) {
      statusEl.style.backgroundColor = '#dcfce7';
      statusEl.style.color = '#15803d';
      statusEl.textContent = data.message || 'Thank you! Your message has been sent successfully.';
      document.getElementById('contactForm').reset();
    } else {
      statusEl.style.backgroundColor = '#fef2f2';
      statusEl.style.color = '#b91c1c';
      statusEl.textContent = data.detail || 'Failed to send message. Please try again.';
    }
  } catch (err) {
    statusEl.style.backgroundColor = '#fef2f2';
    statusEl.style.color = '#b91c1c';
    statusEl.textContent = 'Connection error. Please try again later.';
  }
};

function contact() {
  return `
    <section class="hero-split-section" style="padding: 50px 0;">
      <div class="container">
        <div class="hero-split-grid">
          <div class="hero-text-side fade-up">
            <div class="hero-split-badge">Get In Touch</div>
            <h1>Contact the <span>Department</span></h1>
            <p>
              Have questions about academic admissions, corporate research partnerships, or faculty inquiries? Reach out to our administrative team at Greenhill Campus.
            </p>
          </div>
          <div class="hero-slider-side fade-up fade-up-d1">
            <div class="hero-carousel-container" style="aspect-ratio: 16/10;">
              <img src="assets/images/campus-hero.png" alt="GIMPA Campus" style="width:100%;height:100%;object-fit:cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Contact Details Cards -->
    <section class="section" style="background:#f8fafc;">
      <div class="container">
        <div class="info-box-grid">
          
          <div class="card" style="padding:28px;">
            <h3 style="color:var(--primary); margin-bottom:12px; font-size:1.15rem;">📍 Campus Location</h3>
            <p style="color:var(--text-body); line-height:1.6; font-size:0.92rem; margin:0;">
              Department of Computer Science &amp; Information Systems<br>
              School of Technology &amp; Social Sciences<br>
              GIMPA Greenhill Campus, Achimota, Accra, Ghana
            </p>
          </div>

          <div class="card" style="padding:28px;">
            <h3 style="color:var(--primary); margin-bottom:12px; font-size:1.15rem;">📧 Official Email</h3>
            <p style="color:var(--text-body); line-height:1.6; font-size:0.92rem; margin:0;">
              Department: <a href="mailto:csshead@gimpa.edu.gh" style="color:var(--primary); font-weight:700;">csshead@gimpa.edu.gh</a><br>
              General: <a href="mailto:info@gimpa.edu.gh">info@gimpa.edu.gh</a><br>
              Admissions: <a href="mailto:admissions@gimpa.edu.gh">admissions@gimpa.edu.gh</a>
            </p>
          </div>

          <div class="card" style="padding:28px;">
            <h3 style="color:var(--primary); margin-bottom:12px; font-size:1.15rem;">📞 Telephone Lines</h3>
            <p style="color:var(--text-body); line-height:1.6; font-size:0.92rem; margin:0;">
              Direct: <a href="tel:+233501620138" style="color:var(--primary); font-weight:700;">+233 (0) 501620138</a><br>
              Switchboard: <a href="tel:+233302401681">+233 302-401681-3</a><br>
              Hours: Mon – Sat: 8:30 – 18:00 GMT
            </p>
          </div>

        </div>
      </div>
    </section>

    <!-- Interactive Contact Inquiry Form -->
    <section class="section">
      <div class="container" style="max-width: 800px;">
        <div class="section-header" style="text-align: center;">
          <div class="accent-line" style="margin: 0 auto 16px auto;"></div>
          <h2>Send Us an Online Inquiry</h2>
          <p>Fill in your details below and our departmental coordinator will get back to you promptly via email.</p>
        </div>

        <div style="background:#fff; border:1px solid #e2e8f0; border-radius:var(--radius); padding:36px; box-shadow:var(--shadow-lg);">
          <div id="contactFormStatus" style="display:none; margin-bottom:20px; padding:12px; border-radius:6px; font-size:0.9rem; font-weight:600;"></div>

          <form id="contactForm" onsubmit="window.handleContactSubmit(event)">
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:18px;">
              <div>
                <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Your Name *</label>
                <input type="text" id="contactName" required placeholder="e.g. Kwame Mensah" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
              </div>
              <div>
                <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Your Email Address *</label>
                <input type="email" id="contactEmail" required placeholder="e.g. kwame@example.com" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
              </div>
            </div>

            <div style="margin-bottom:18px;">
              <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Inquiry Subject *</label>
              <input type="text" id="contactSubject" required placeholder="e.g. Admission Inquiry for MSc Cybersecurity" style="width:100%; padding:10px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none;">
            </div>

            <div style="margin-bottom:24px;">
              <label style="display:block; font-size:0.82rem; font-weight:700; color:var(--primary); margin-bottom:6px;">Your Message / Question *</label>
              <textarea id="contactMessage" required rows="5" placeholder="Write your message here..." style="width:100%; padding:12px 14px; border:1px solid #cbd5e1; border-radius:6px; font-size:0.92rem; outline:none; resize:vertical;"></textarea>
            </div>

            <button type="submit" class="btn btn-primary" style="width:100%; padding:12px; font-weight:700; font-size:1rem; justify-content:center;">Send Inquiry Message →</button>
          </form>
        </div>
      </div>
    </section>
  `;
}


window.currentNewsPage = window.currentNewsPage || 1;

window.changeNewsPage = function(page) {
  window.currentNewsPage = page;
  render();
  const newsHeader = document.getElementById('sotssNewsHeader');
  if (newsHeader) {
    newsHeader.scrollIntoView({ behavior: 'smooth' });
  }
};

function newsList() {
  const allNews = window.dynamicNews && window.dynamicNews.length > 0 ? window.dynamicNews : news;
  
  // Filter for School of Technology and Social Sciences relevance
  const sotssKeywords = [
    'sotss', 'technology', 'computer', 'information systems', 'cyber', 'data',
    'analytics', 'software', 'programming', 'ai', 'robotics', 'engineering',
    'digital', 'ict', 'science', 'innovation', 'tech', 'mentorship',
    'hackathon', 'research', 'lab', 'social sciences'
  ];
  
  const sotssNews = allNews.filter(item => {
    const fullText = ((item.title || '') + ' ' + (item.desc || '') + ' ' + (item.source || '')).toLowerCase();
    return sotssKeywords.some(k => fullText.includes(k));
  });

  const activeNews = sotssNews.length > 0 ? sotssNews : allNews;
  
  const pageSize = 6;
  const totalItems = activeNews.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  
  if (window.currentNewsPage > totalPages) {
    window.currentNewsPage = totalPages;
  }
  if (window.currentNewsPage < 1) {
    window.currentNewsPage = 1;
  }

  const currentPage = window.currentNewsPage;
  const startIndex = (currentPage - 1) * pageSize;
  const visibleNews = activeNews.slice(startIndex, startIndex + pageSize);

  let paginationButtonsHTML = '';
  for (let i = 1; i <= totalPages; i++) {
    const isActive = i === currentPage;
    paginationButtonsHTML += `
      <button onclick="window.changeNewsPage(${i})" style="min-width: 42px; height: 42px; border-radius: 8px; font-weight: ${isActive ? '700' : '600'}; font-size: 0.95rem; cursor: pointer; transition: all 0.2s ease; border: 1.5px solid ${isActive ? 'var(--primary)' : '#cbd5e1'}; background: ${isActive ? 'var(--primary)' : '#ffffff'}; color: ${isActive ? '#ffffff' : 'var(--primary)'}; box-shadow: 0 2px 4px rgba(0,0,0,0.05);" onmouseover="if(!${isActive}) { this.style.background='#eef6ff'; this.style.borderColor='var(--primary)'; }" onmouseout="if(!${isActive}) { this.style.background='#ffffff'; this.style.borderColor='#cbd5e1'; }">
        ${i}
      </button>
    `;
  }

  return `
    <section class="hero" style="min-height:380px">
      <div class="hero-bg slideshow">
        <img class="active" src="assets/images/1000211039.png" alt="Department news">
        <img src="assets/images/1000211042.png" alt="Student news">
        <img src="assets/images/1000211043.png" alt="Department announcement">
      </div>
      <div class="container">
        <div class="hero-content" style="padding:60px 0">
          <div class="hero-badge">Department News &amp; Feeds</div>
          <h2>School of Technology &amp; Social Sciences News</h2>
          <p>Official announcements, research spotlights, and real-time updates from GIMPA SOTSS and social channels.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <!-- Social Channels Toolbar -->
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px 24px; border-radius: var(--radius); margin-bottom: 30px; gap: 16px;">
          <div>
            <h3 style="font-size: 1.1rem; color: var(--primary); margin-bottom: 4px; font-weight: 700;">Follow Official SOTSS Channels</h3>
            <p style="font-size: 0.85rem; color: var(--text-body); margin: 0;">Stay connected across all major official social media platforms</p>
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">
            <a href="https://gimpa.edu.gh/" target="_blank" class="btn btn-outline" style="font-size: 0.84rem; padding: 8px 14px; display: inline-flex; align-items: center; background: #fff; color: var(--primary); border-color: #cbd5e1; border-radius: 8px; font-weight: 600; text-decoration: none;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              GIMPA Web
            </a>
            <a href="https://www.instagram.com/sotss_gimpa/" target="_blank" class="btn btn-outline" style="font-size: 0.84rem; padding: 8px 14px; display: inline-flex; align-items: center; background: #fff; color: #d62976; border-color: #fbcfe8; border-radius: 8px; font-weight: 600; text-decoration: none;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 6px;"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              Instagram @sotss_gimpa
            </a>
            <a href="https://www.facebook.com/SOTSS.GIMPA" target="_blank" class="btn btn-outline" style="font-size: 0.84rem; padding: 8px 14px; display: inline-flex; align-items: center; background: #fff; color: #1877f2; border-color: #bfdbfe; border-radius: 8px; font-weight: 600; text-decoration: none;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook SOTSS
            </a>
            <a href="https://www.linkedin.com/school/gimpa/" target="_blank" class="btn btn-outline" style="font-size: 0.84rem; padding: 8px 14px; display: inline-flex; align-items: center; background: #fff; color: #0a66c2; border-color: #bae6fd; border-radius: 8px; font-weight: 600; text-decoration: none;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style="margin-right: 6px;"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn SOTSS
            </a>
          </div>
        </div>

        <div id="sotssNewsHeader" class="section-header">
          <div class="accent-line"></div>
          <h2>SOTSS Department News Feed</h2>
          <p>Showing ${startIndex + 1}–${Math.min(startIndex + pageSize, totalItems)} of ${totalItems} School of Technology &amp; Social Sciences updates</p>
        </div>
        
        <div class="news-grid">
          ${visibleNews.map((n, idx) => {
            const itemId = n.news_id || n.id || String(n.id);
            const cardHref = n.link && n.link.startsWith('http') ? n.link : `#news-${itemId}`;
            const fallbackImages = [
              'assets/images/1000210972.png',
              'assets/images/1000211039.png',
              'assets/images/1000211043.png',
              'assets/images/1000211395.png',
              'assets/images/1000211042.png',
              'assets/images/1000211024.png',
              'assets/images/1000211025.png',
              'assets/images/1000211035.png'
            ];
            const cardImg = (n.image && n.image.trim() !== '') ? n.image : fallbackImages[idx % fallbackImages.length];
            return `
              <a class="news-card" href="${cardHref}" target="${n.link && n.link.startsWith('http') ? '_blank' : '_self'}" style="text-decoration:none; color:inherit;">
                <div class="news-card-img"><img src="${cardImg}" alt="${n.title}"></div>
                <div class="news-card-body">
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <span class="date" style="font-size:0.78rem; font-weight:700; color:var(--accent);">${n.date}</span>
                    <span style="font-size:0.75rem; background:#eef6ff; color:var(--primary); padding:2px 8px; border-radius:4px; font-weight:600;">${n.source || 'SOTSS News'}</span>
                  </div>
                  <h3>${n.title}</h3>
                  <p>${n.desc}</p>
                  <span class="card-link" style="margin-top: 14px; font-weight:600; font-size:0.88rem; color:var(--primary)">Read full update &rarr;</span>
                </div>
              </a>
            `;
          }).join('')}
        </div>

        <!-- Pagination Controls -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; align-items: center; margin-top: 40px; gap: 10px;">
          <button onclick="window.changeNewsPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''} style="height: 42px; padding: 0 18px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; border: 1.5px solid ${currentPage === 1 ? '#e2e8f0' : '#cbd5e1'}; background: ${currentPage === 1 ? '#f8fafc' : '#ffffff'}; color: ${currentPage === 1 ? '#94a3b8' : 'var(--primary)'}; cursor: ${currentPage === 1 ? 'not-allowed' : 'pointer'}; transition: all 0.2s ease;">
            &larr; Previous
          </button>
          
          <div style="display: flex; gap: 8px; align-items: center;">
            ${paginationButtonsHTML}
          </div>

          <button onclick="window.changeNewsPage(${currentPage + 1})" ${currentPage >= totalPages ? 'disabled' : ''} style="height: 42px; padding: 0 18px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; border: 1.5px solid ${currentPage >= totalPages ? '#e2e8f0' : '#cbd5e1'}; background: ${currentPage >= totalPages ? '#f8fafc' : '#ffffff'}; color: ${currentPage >= totalPages ? '#94a3b8' : 'var(--primary)'}; cursor: ${currentPage >= totalPages ? 'not-allowed' : 'pointer'}; transition: all 0.2s ease;">
            Next &rarr;
          </button>
        </div>
      </div>
    </section>
  `;
}

function newsDetail(id) {
  const allNews = window.dynamicNews && window.dynamicNews.length > 0 ? window.dynamicNews : news;
  
  // Extract raw identifier (strip 'news-' prefix if present)
  const rawId = id.startsWith('news-') ? id.substring(5) : id;

  const item = allNews.find(n => {
    const nId = String(n.news_id || n.id || '');
    return nId === rawId || nId === id || ('news-' + nId) === id;
  }) || news.find(n => n.id === id || n.id === rawId || ('news-' + n.id) === id);

  if (!item) {
    return `
      <section class="section">
        <div class="container" style="text-align: center; padding: 60px 0;">
          <h2 style="color: var(--primary); margin-bottom: 16px;">News Story Not Found</h2>
          <p style="color: var(--text-body); margin-bottom: 24px;">The requested article could not be located. It may have been updated or moved.</p>
          <a href="#news" class="btn btn-primary" style="text-decoration:none;">&larr; Back to SOTSS News Feed</a>
        </div>
      </section>
    `;
  }

  const itemTitle = item.title || 'SOTSS News Update';
  const itemDate = item.date || 'Recent';
  const itemSource = item.source || 'SOTSS News';
  const itemImage = item.image || 'assets/images/1000211039.png';
  const itemContent = item.content || item.text || `<p>${item.desc || ''}</p>`;
  const externalLink = item.link && item.link.startsWith('http') ? item.link : '';

  return `
    <section class="hero" style="min-height:280px">
      <div class="hero-bg slideshow">
        <img class="active" src="${itemImage}" alt="${itemTitle}">
      </div>
      <div class="container">
        <div class="hero-content" style="padding:40px 0">
          <div class="hero-badge">${itemSource}</div>
          <h2 style="font-size:2rem">${itemTitle}</h2>
          <p style="font-size:0.95rem; color:var(--accent); font-weight:600">${itemDate}</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <a href="#news" class="btn btn-outline" style="margin-bottom: 30px; display: inline-flex; align-items: center; gap: 8px; color: var(--primary); border-color: #c8d8ea; background: #fff; text-decoration: none;">&larr; Back to SOTSS News Feed</a>
        
        <div class="two-col" style="align-items: flex-start; gap: 40px;">
          <div class="two-col-text" style="flex: 1;">
            <div class="accent-line"></div>
            <span class="date" style="color: var(--accent); font-size: 0.9rem; font-weight: 700; display: block; margin-bottom: 8px; text-transform: uppercase;">${itemDate} · ${itemSource}</span>
            <h2 style="font-size: 1.8rem; color: var(--primary); margin-bottom: 20px;">${itemTitle}</h2>
            
            <div style="font-size: 1.05rem; line-height: 1.8; color: var(--text-dark); margin-bottom: 24px;">
              ${itemContent}
            </div>

            ${externalLink ? `
              <div style="margin-top: 30px;">
                <a href="${externalLink}" target="_blank" class="btn btn-primary" style="display: inline-flex; align-items: center; gap: 8px;">
                  Read Full Story on Official Source &rarr;
                </a>
              </div>
            ` : ''}
          </div>
          
          <div style="width: 380px; flex-shrink: 0;">
            <img src="${itemImage}" alt="${itemTitle}" style="width: 100%; border-radius: var(--radius); box-shadow: var(--shadow); border: 1px solid #e2e8f0; object-fit: cover;">
          </div>
        </div>
      </div>
    </section>
  `;
}

function cooperation() {
  return `
    <section class="hero" style="min-height:380px">
      <div class="hero-bg slideshow">
        <img class="active" src="assets/images/1000210972.png" alt="GIMPA CS Slideshow 1">
        <img src="assets/images/1000211024.png" alt="GIMPA CS Slideshow 2">
        <img src="assets/images/1000211025.png" alt="GIMPA CS Slideshow 3">
        <img src="assets/images/1000211035.png" alt="GIMPA CS Slideshow 4">
      </div>
      <div class="container">
        <div class="hero-content" style="padding:60px 0">
          <div class="hero-badge">Partnerships &amp; Community</div>
          <h2>Cooperation &amp; Partnerships</h2>
          <p>We believe in the power of collaboration. Explore how you can partner with us through industry engagement, research collaboration, student support, and alumni networks.</p>
        </div>
      </div>
    </section>

    <section class="section industry-cooperation-section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Industry Cooperation</h2>
          <p>We actively partner with industry to ensure our graduates are career-ready and our research addresses real-world challenges.</p>
        </div>
        <div class="industry-grid">
          <div class="industry-card fade-up">
            <div class="industry-card-content">
              <span class="industry-tag">Applied Research</span>
              <h3>Research Partnerships</h3>
              <p>Collaborate with our faculty on applied research in predictive analytics, IoT, machine learning, cybersecurity, and more. We welcome joint research projects with industry partners.</p>
              <div class="industry-meta"><span>Joint projects</span><a href="mailto:csshead@gimpa.edu.gh">csshead@gimpa.edu.gh</a></div>
            </div>
          </div>
          <div class="industry-card fade-up fade-up-d1">
            <div class="industry-card-content">
              <span class="industry-tag">Student Talent</span>
              <h3>Student Internships &amp; Placements</h3>
              <p>Offer internship opportunities to our students. Our BSc and MSc students gain real-world experience through structured industry placement programmes.</p>
              <div class="industry-meta"><span>Placements</span><a href="mailto:csshead@gimpa.edu.gh">csshead@gimpa.edu.gh</a></div>
            </div>
          </div>
          <div class="industry-card fade-up fade-up-d2">
            <div class="industry-card-content">
              <span class="industry-tag">Knowledge Exchange</span>
              <h3>Guest Lectures &amp; Seminars</h3>
              <p>Industry professionals are invited to share insights through guest lectures, seminars, and workshop sessions with our students and faculty.</p>
              <div class="industry-meta"><span>Seminars</span><a href="mailto:csshead@gimpa.edu.gh">csshead@gimpa.edu.gh</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2 style="color:#fff">International Partnerships</h2>
          <p>GIMPA fosters international collaboration to create opportunities for students and faculty research exchange.</p>
        </div>
        <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
          <div class="card card-dark">
            <div class="card-icon"><img src="assets/icons/icon-cooperate.svg" alt="Global icon"></div>
            <h3>UESTC Partnership</h3>
            <p>Exploring new frontiers in academic partnership with the University of Electronic Science and Technology of China for student exchange and joint research.</p>
          </div>
          <div class="card card-dark">
            <div class="card-icon"><img src="assets/icons/icon-badge.svg" alt="University partnership icon"></div>
            <h3>York University</h3>
            <p>Joint student consulting project enabling students to gain hands-on consulting experience through structured industry partnership programmes.</p>
          </div>
          <div class="card card-dark">
            <div class="card-icon"><img src="assets/icons/icon-cooperate.svg" alt="Cooperation icon"></div>
            <h3>Simio LLC</h3>
            <p>GIMPA uses Simio simulation software under a grant from Simio LLC, supporting advanced modelling and simulation research across the department.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Student Services &amp; Support</h2>
          <p>Resources and services available to students within the department and across GIMPA.</p>
        </div>
        <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">
          <div class="card">
            <div class="card-icon"><img src="assets/icons/icon-screen.svg" alt="Lab icon"></div>
            <h3>Computer Laboratories</h3>
            <p>Classrooms and computer laboratories equipped with modern facilities are shared within the School of Technology for hands-on learning.</p>
          </div>
          <div class="card">
            <div class="card-icon"><img src="assets/icons/icon-library.svg" alt="Library icon"></div>
            <h3>Library &amp; Digital Resources</h3>
            <p>Access to the GIMPA library with extensive academic databases, e-journals, textbooks and digital research resources.</p>
            <span class="card-link"><a href="https://gimpa.edu.gh/library/">Visit library →</a></span>
          </div>
          <div class="card">
            <div class="card-icon">💻</div>
            <h3>Learning Management System</h3>
            <p>Access course materials, assignments, grades, and announcements through the GIMPA online LMS platform.</p>
            <span class="card-link"><a href="https://lms.gimpa.edu.gh/">Access LMS →</a></span>
          </div>
          <div class="card">
            <div class="card-icon"><img src="assets/icons/icon-badge.svg" alt="Career icon"></div>
            <h3>Career &amp; Advisory Services</h3>
            <p>Guidance on career paths, graduate school applications, and professional development for computing students.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="two-col" style="align-items:center">
          <div class="two-col-text">
            <div class="accent-line"></div>
            <h2>Alumni Network</h2>
            <p>Our graduates serve in leading technology companies, government agencies, international organisations, and academia across Ghana and beyond.</p>
            <p>The GIMPA alumni network provides ongoing opportunities for professional development, mentorship, and lifelong learning. Stay connected with your department and contribute to the growth of the next generation of computing professionals.</p>
            <a href="mailto:csshead@gimpa.edu.gh" class="btn btn-dark" style="margin-top:16px">Connect as an Alumnus →</a>
          </div>
          <div>
            <div class="info-box">
              <h3><img class="inline-icon" src="assets/icons/icon-cooperate.svg" alt="Get involved">Get Involved</h3>
              <ul>
                <li>Mentor current students in career development</li>
                <li>Deliver guest lectures and industry seminars</li>
                <li>Offer internship placements at your organisation</li>
                <li>Collaborate on applied research projects</li>
                <li>Support scholarships and awards</li>
                <li>Attend alumni reunions and networking events</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Community Engagement</h2>
          <p>Bridging the gap between academia and community through technology outreach.</p>
        </div>
        <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
          <div class="card">
            <div class="card-icon">🏫</div>
            <h3>Workshops &amp; Training</h3>
            <p>We offer consultancy and training to stakeholders, helping organisations leverage technology for growth and development.</p>
          </div>
          <div class="card">
            <div class="card-icon"><img src="assets/icons/icon-location.svg" alt="Community icon"></div>
            <h3>Digital Literacy Initiatives</h3>
            <p>Supporting digital inclusion through community outreach programmes that promote technology education and awareness.</p>
          </div>
          <div class="card">
            <div class="card-icon"><img src="assets/icons/icon-screen.svg" alt="Research impact icon"></div>
            <h3>Research for Impact</h3>
            <p>Our research addresses real-world challenges in healthcare, agriculture, finance, and governance within the Ghanaian and West African context.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container" style="text-align:center;max-width:700px">
        <div class="accent-line" style="margin:0 auto 16px"></div>
        <h2 style="color:#fff;font-size:2rem;margin-bottom:16px">Ready to Partner With Us?</h2>
        <p style="color:var(--text-secondary);margin-bottom:32px">Whether you're an industry professional, academic researcher, alumnus, or community leader, we welcome collaboration opportunities.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
          <a href="mailto:csshead@gimpa.edu.gh" class="btn btn-primary">Contact the Department →</a>
          <a href="#contact" class="btn btn-outline">View Contact Details</a>
        </div>
      </div>
    </section>
  `;
}

function profile(id) {
  const f = faculty.find(x => x.id === id);
  if (!f) return `<section class="section"><div class="container"><h2>Faculty profile not found.</h2><a href="#contact" class="btn btn-dark">Back to Staff</a></div></section>`;
  
  const extraLabel = f.extraLabel || f.extra_label;
  const extraValue = f.extraLabel ? f.extraValue : f.extra_value;
  const showExtra = !!extraLabel;
  const phoneVal = f.phone || 'N/A';

  return `
    <section class="profile-hero" style="background: linear-gradient(135deg, #0b2f5b 0%, #091a2e 100%); color:#fff; padding:56px 0">
      <div class="container">
        <div class="profile-header" style="display:flex; align-items:center; gap:28px">
          ${f.photo ?
            `<div class="profile-photo"><img src="${f.photo}" alt="${f.name}" style="width:160px; height:160px; border-radius:50%; border:4px solid #7ec5ed; object-fit:cover"></div>` :
            `<div class="profile-photo-initials">${f.name.split(' ').filter(n => n.includes('.') ? false : true).slice(-2).map(n => n[0]).join('')}</div>`
          }
          <div class="profile-info">
            <h2 style="font-size:2rem; font-weight:700; color:#fff; margin-bottom:8px">${f.name}</h2>
            <div class="profile-role" style="font-size:1.1rem; color:var(--accent); font-weight:600; margin-bottom:4px">${f.role}</div>
            <div class="profile-dept" style="font-size:0.9rem; color:#bfd3e7">Department of Computer Science &amp; Information Systems</div>
          </div>
        </div>
      </div>
    </section>

    <section class="profile-contact-bar" style="background:#f1f5f9; border-bottom:1px solid #e2e8f0; padding:20px 0">
      <div class="container">
        <div class="profile-contact-grid" style="display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:20px">
          <div class="profile-contact-item">
            <div class="label" style="font-size:0.75rem; text-transform:uppercase; color:var(--text-body); font-weight:600; letter-spacing:0.04em">Email</div>
            <div class="value" style="font-size:0.95rem; font-weight:500"><a href="mailto:${f.email}" style="color:var(--primary)">${f.email}</a></div>
          </div>
          <div class="profile-contact-item">
            <div class="label" style="font-size:0.75rem; text-transform:uppercase; color:var(--text-body); font-weight:600; letter-spacing:0.04em">Specialization</div>
            <div class="value" style="font-size:0.95rem; font-weight:500; color:var(--ink)">${f.spec}</div>
          </div>
          <div class="profile-contact-item">
            <div class="label" style="font-size:0.75rem; text-transform:uppercase; color:var(--text-body); font-weight:600; letter-spacing:0.04em">Office</div>
            <div class="value" style="font-size:0.95rem; font-weight:500; color:var(--ink)">${f.office}</div>
          </div>
          <div class="profile-contact-item">
            <div class="label" style="font-size:0.75rem; text-transform:uppercase; color:var(--text-body); font-weight:600; letter-spacing:0.04em">${showExtra ? extraLabel : 'Phone'}</div>
            <div class="value" style="font-size:0.95rem; font-weight:500; color:var(--ink)">${showExtra ? extraValue : phoneVal}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Projects</h2>
        </div>
        <ul class="project-list" style="margin-left: 20px; list-style-type: disc;">
          ${f.projects.map(p => {
            const idx = p.indexOf(':');
            if (idx !== -1) {
              return `<li style="padding:6px 0; color:var(--text-body)"><strong>${p.substring(0, idx + 1)}</strong>${p.substring(idx + 1)}</li>`;
            }
            return `<li style="padding:6px 0; color:var(--text-body)">${p}</li>`;
          }).join('')}
        </ul>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Publications by ${f.name}</h2>
          <p style="color:var(--text-body); font-size:0.92rem;">Peer-reviewed articles, books, and conference papers with author contributions highlighted.</p>
        </div>
        <div class="pub-list" style="display:flex; flex-direction:column; gap:20px">
          ${f.pubs.length === 0 ? `
            <div style="color: var(--text-body); font-style: italic; background:#fff; padding:24px; border-radius:8px; text-align:center;">No verified publications registered.</div>
          ` : f.pubs.map(pub => `
            <article class="pub-card-flex">
              <div class="pub-meta-row">
                ${getPublicationTypeBadge(pub.type)}
                <span style="font-size:0.78rem; font-weight:700; color:var(--text-body);">${pub.year || 'Recent'}</span>
              </div>
              <h3 style="margin:0 0 6px 0;">
                <a href="#publication/${pub.id}" class="pub-title-link">${pub.title}</a>
              </h3>
              <div class="pub-venue">${pub.journal || 'Academic Journal / Publisher'}</div>
              <div class="pub-authors-row">
                <strong>Authors:</strong> ${formatAuthorsWithHighlight(pub.authors, f.name)}
              </div>
              ${pub.summary ? `<div style="font-size:0.84rem; color:var(--text-body); line-height:1.55; margin-bottom:12px; background:#f8fafc; padding:10px 14px; border-radius:6px; border:1px solid #f1f5f9;">${pub.summary}</div>` : ''}
              <div style="display:flex; gap:16px; align-items:center; margin-top:auto;">
                <a href="#publication/${pub.id}" style="font-size:0.84rem; color:var(--primary); font-weight:700; text-decoration:none;">View Publication Details →</a>
                ${pub.url ? `<a href="${pub.url}" target="_blank" style="font-size:0.84rem; color:var(--accent); font-weight:700; text-decoration:underline;">View Original Document &nearr;</a>` : ''}
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

// Global Auth State Renderer
function renderAuthState() {
  const isLoggedIn = !!localStorage.getItem('sotssToken');
  document.querySelectorAll('.login-link').forEach(link => {
    link.textContent = isLoggedIn ? 'Logout' : 'Login';
    link.classList.toggle('is-logged-in', isLoggedIn);
  });
  document.querySelectorAll('.notification-bell').forEach(bell => {
    bell.style.display = isLoggedIn ? 'inline-flex' : 'none';
  });
}

// Dynamic Slideshow Initializer
function initSlideshow() {
  if (slideshowInterval) {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
  }
  const slides = document.querySelectorAll('.hero-bg.slideshow img');
  if (slides.length <= 1) return;
  let currentSlide = 0;
  slideshowInterval = setInterval(() => {
    const activeSlides = document.querySelectorAll('.hero-bg.slideshow img');
    if (activeSlides.length === 0) {
      clearInterval(slideshowInterval);
      slideshowInterval = null;
      return;
    }
    activeSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % activeSlides.length;
    activeSlides[currentSlide].classList.add('active');
  }, 3500);
}

// --- Dynamic Intranet View and Functionality ---

function loginView() {
  return `
    <section class="section" style="min-height: 70vh; display: flex; align-items: center; background: #f8fafc;">
      <div class="container" style="max-width: 480px; width: 100%;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius); padding: 40px; box-shadow: var(--shadow-lg);">
          <div style="text-align: center; margin-bottom: 24px;">
            <div class="logo-icon" style="margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; font-size: 1.8rem; font-weight: 800;">CS</div>
            <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">Lecturer Portal Login</h2>
            <p style="color: var(--text-body); font-size: 0.88rem; margin-top: 4px;">Access the department intranet services</p>
          </div>
          
          <div id="loginErrorMessage" style="display: none; padding: 12px; border-radius: var(--radius-sm); background: #fef2f2; color: #991b1b; font-size: 0.85rem; font-weight: 500; border: 1px solid #fee2e2; margin-bottom: 16px;"></div>
          
          <form id="loginForm">
            <div style="margin-bottom: 18px;">
              <label for="emailInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Email Address</label>
              <input type="email" id="emailInput" required placeholder="e.g. csshead@gimpa.edu.gh" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 12px 14px; font-size: 0.95rem; outline: none; transition: var(--transition);">
            </div>
            
            <div style="margin-bottom: 24px;">
              <label for="passwordInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Password</label>
              <input type="password" id="passwordInput" required placeholder="••••••••" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 12px 14px; font-size: 0.95rem; outline: none; transition: var(--transition);">
            </div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px; font-size: 1rem; font-weight: 600; justify-content: center; height: 44px;">Sign In</button>
          </form>
          
          <div style="margin-top: 20px; text-align: center; font-size: 0.88rem;">
            <a href="#signup" style="color: var(--accent); font-weight: 600;">Don't have an account? Sign Up &rarr;</a>
          </div>

        </div>
      </div>
    </section>
  `;
}

function signupView() {
  return `
    <section class="section" style="min-height: 80vh; display: flex; align-items: center; background: #f8fafc; padding: 40px 0;">
      <div class="container" style="max-width: 550px; width: 100%;">
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius); padding: 40px; box-shadow: var(--shadow-lg);">
          <div style="text-align: center; margin-bottom: 24px;">
            <div class="logo-icon" style="margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; font-size: 1.8rem; font-weight: 800;">CS</div>
            <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">Lecturer Registration</h2>
            <p style="color: var(--text-body); font-size: 0.88rem; margin-top: 4px;">Sign up for a lecturer account to publish and verify research</p>
          </div>
          
          <div id="signupStatusMessage" style="display: none;" class="status-message"></div>
          
          <form id="signupForm" onsubmit="window.handleSignupSubmit(event)">
            <div style="margin-bottom: 16px;">
              <label for="signupNameInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Full Name (with Title)</label>
              <input type="text" id="signupNameInput" required placeholder="e.g. Dr. John Doe" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.92rem; outline: none; transition: var(--transition);">
            </div>
            
            <div style="margin-bottom: 16px;">
              <label for="signupEmailInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Email Address (GIMPA)</label>
              <input type="email" id="signupEmailInput" required placeholder="e.g. jdoe@gimpa.edu.gh" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.92rem; outline: none; transition: var(--transition);">
              <small style="color: var(--text-body); font-size: 0.75rem; margin-top: 4px; display: block;">Must end with @gimpa.edu.gh, @adj.gimpa.edu.gh, or @st.gimpa.edu.gh</small>
            </div>

            <div style="margin-bottom: 16px;">
              <label for="signupDepartmentInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Department</label>
              <select id="signupDepartmentInput" required style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.92rem; outline: none; transition: var(--transition);">
                <option value="Computer Science & Information Systems">Computer Science & Information Systems</option>
                <option value="Management Information Systems">Management Information Systems</option>
              </select>
            </div>
            
            <div style="margin-bottom: 16px;">
              <label for="signupRoleInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Academic Role</label>
              <select id="signupRoleInput" required style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.92rem; outline: none; transition: var(--transition);">
                <option value="Lecturer">Lecturer</option>
                <option value="Senior Lecturer">Senior Lecturer</option>
                <option value="Professor">Professor</option>
                <option value="Head of Department">Head of Department</option>
              </select>
            </div>

            <div style="margin-bottom: 16px;">
              <label for="signupSpecInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Areas of Specialization</label>
              <input type="text" id="signupSpecInput" required placeholder="e.g. Cybersecurity, Machine Learning" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.92rem; outline: none; transition: var(--transition);">
            </div>
            
            <div style="margin-bottom: 16px;">
              <label for="signupOfficeInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Office Location</label>
              <input type="text" id="signupOfficeInput" required placeholder="e.g. SOT Block B, Room 2.05" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.92rem; outline: none; transition: var(--transition);">
            </div>

            <div style="margin-bottom: 16px;">
              <label for="signupPhoneInput" style="display: block; font-size: 0.8rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 6px; letter-spacing: 0.04em;">Phone Number (Optional)</label>
              <input type="text" id="signupPhoneInput" placeholder="e.g. +233 (0) 501234567" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 10px 12px; font-size: 0.92rem; outline: none; transition: var(--transition);">
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;">
              <div>
                <label for="signupExtraLabel" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Extra Detail Label (Optional)</label>
                <input type="text" id="signupExtraLabel" placeholder="e.g. Programme Role" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 8px 10px; font-size: 0.85rem; outline: none;">
              </div>
              <div>
                <label for="signupExtraValue" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Extra Detail Value (Optional)</label>
                <input type="text" id="signupExtraValue" placeholder="e.g. Coordinator, PhD IS" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: var(--radius-sm); padding: 8px 10px; font-size: 0.85rem; outline: none;">
              </div>
            </div>
            
            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 12px; font-size: 1rem; font-weight: 600; justify-content: center; height: 44px;">Submit Registration</button>
          </form>
          
          <div style="margin-top: 20px; text-align: center; font-size: 0.88rem;">
            <a href="#login" style="color: var(--primary); font-weight: 600;">Already have an account? Login &rarr;</a>
          </div>
        </div>
      </div>
    </section>
  `;
}

async function handleSignupSubmit(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('signupStatusMessage');
  if (!statusMsg) return;
  
  statusMsg.style.display = 'none';
  statusMsg.textContent = '';
  
  const name = document.getElementById('signupNameInput').value;
  const email = document.getElementById('signupEmailInput').value.trim().toLowerCase();
  const department = document.getElementById('signupDepartmentInput').value;
  const role = document.getElementById('signupRoleInput').value;
  const spec = document.getElementById('signupSpecInput').value;
  const office = document.getElementById('signupOfficeInput').value;
  const phone = document.getElementById('signupPhoneInput').value;
  const extra_label = document.getElementById('signupExtraLabel').value;
  const extra_value = document.getElementById('signupExtraValue').value;
  
  // Enforce email domain constraint on frontend
  if (!email.endsWith('@gimpa.edu.gh') && !email.endsWith('@adj.gimpa.edu.gh') && !email.endsWith('@st.gimpa.edu.gh')) {
    statusMsg.className = 'status-message';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Only GIMPA email addresses ending in @gimpa.edu.gh, @adj.gimpa.edu.gh, or @st.gimpa.edu.gh are allowed to register.';
    statusMsg.style.display = 'block';
    return;
  }
  
  try {
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('department', department);
    formData.append('role', role);
    formData.append('spec', spec);
    formData.append('office', office);
    if (phone) formData.append('phone', phone);
    if (extra_label) formData.append('extra_label', extra_label);
    if (extra_value) formData.append('extra_value', extra_value);
    
    const res = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    });
    
    if (res.ok) {
      statusMsg.className = 'status-message';
      statusMsg.style.backgroundColor = '#dcfce7';
      statusMsg.style.color = '#15803d';
      statusMsg.style.borderColor = '#bbf7d0';
      statusMsg.textContent = 'Sign up successful! A temporary password has been sent to your email. Please inspect your inbox or the server command logs to retrieve it, then log in.';
      statusMsg.style.display = 'block';
      document.getElementById('signupForm').reset();
    } else {
      const err = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.borderColor = '#fca5a5';
      statusMsg.textContent = err.detail || 'Sign up failed. Please try again.';
      statusMsg.style.display = 'block';
    }
  } catch (err) {
    console.error(err);
    statusMsg.className = 'status-message';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Connection error. Check server.';
    statusMsg.style.display = 'block';
  }
}

async function handleChangePasswordSubmit(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('changePasswordStatus');
  const oldPass = document.getElementById('oldPasswordInput').value;
  const newPass = document.getElementById('newPasswordInput').value;
  const confirmPass = document.getElementById('confirmNewPasswordInput').value;
  
  if (!statusMsg) return;
  
  statusMsg.style.display = 'none';
  statusMsg.textContent = '';
  
  if (newPass !== confirmPass) {
    statusMsg.className = 'status-message';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'New passwords do not match.';
    statusMsg.style.display = 'block';
    return;
  }
  
  try {
    const formData = new URLSearchParams();
    formData.append('old_password', oldPass);
    formData.append('new_password', newPass);
    
    const res = await fetch('/api/change-password', {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    
    if (res.ok) {
      statusMsg.className = 'status-message';
      statusMsg.style.backgroundColor = '#dcfce7';
      statusMsg.style.color = '#15803d';
      statusMsg.style.borderColor = '#bbf7d0';
      statusMsg.textContent = 'Password updated successfully!';
      statusMsg.style.display = 'block';
      document.getElementById('changePasswordForm').reset();
    } else {
      const err = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.borderColor = '#fca5a5';
      statusMsg.textContent = err.detail || 'Failed to update password.';
      statusMsg.style.display = 'block';
    }
  } catch (err) {
    console.error(err);
    statusMsg.className = 'status-message';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Connection error.';
    statusMsg.style.display = 'block';
  }
}

window.handleSignupSubmit = handleSignupSubmit;
window.handleChangePasswordSubmit = handleChangePasswordSubmit;

async function handleUpdateProfileSubmit(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('updateProfileStatus');
  if (!statusMsg) return;
  
  statusMsg.style.display = 'none';
  statusMsg.textContent = '';
  
  const name = document.getElementById('updateNameInput').value;
  const department = document.getElementById('updateDepartmentInput').value;
  const spec = document.getElementById('updateSpecInput').value;
  const office = document.getElementById('updateOfficeInput').value;
  const phone = document.getElementById('updatePhoneInput').value;
  const extra_label = document.getElementById('updateExtraLabel').value;
  const extra_value = document.getElementById('updateExtraValue').value;
  
  try {
    const formData = new URLSearchParams();
    formData.append('name', name);
    formData.append('department', department);
    formData.append('spec', spec);
    formData.append('office', office);
    if (phone) formData.append('phone', phone);
    if (extra_label) formData.append('extra_label', extra_label);
    if (extra_value) formData.append('extra_value', extra_value);
    
    const res = await fetch('/api/lecturer/me', {
      method: 'PUT',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    
    if (res.ok) {
      statusMsg.className = 'status-message';
      statusMsg.style.backgroundColor = '#dcfce7';
      statusMsg.style.color = '#15803d';
      statusMsg.style.borderColor = '#bbf7d0';
      statusMsg.textContent = 'Profile updated successfully!';
      statusMsg.style.display = 'block';
      
      const userRes = await fetch('/api/lecturer/me', {
        headers: getAuthHeaders()
      });
      if (userRes.ok) {
        const updatedUser = await userRes.json();
        localStorage.setItem('sotssUser', JSON.stringify({
          id: updatedUser.id,
          username: updatedUser.username,
          name: updatedUser.name,
          role: updatedUser.role,
          is_admin: !!updatedUser.is_admin
        }));
      }
      
      await loadDynamicData();
      
      setTimeout(() => {
        switchIntranetTab('profile');
      }, 1000);
      
    } else {
      const err = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.borderColor = '#fca5a5';
      statusMsg.textContent = err.detail || 'Failed to update profile details.';
      statusMsg.style.display = 'block';
    }
  } catch (err) {
    console.error(err);
    statusMsg.className = 'status-message';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Connection error.';
    statusMsg.style.display = 'block';
  }
}

window.handleUpdateProfileSubmit = handleUpdateProfileSubmit;


function intranetView() {
  const token = localStorage.getItem('sotssToken');
  const userStr = localStorage.getItem('sotssUser');
  if (!token || !userStr) {
    return `
      <section class="section" style="min-height: 60vh; display: flex; align-items: center; justify-content: center; background: #f8fafc;">
        <div style="text-align: center; max-width: 400px; padding: 30px; background: #fff; border: 1px solid #e2e8f0; border-radius: var(--radius); box-shadow: var(--shadow);">
          <h3>Access Denied</h3>
          <p style="color: var(--text-body); margin: 12px 0 20px;">You must be logged in to view the lecturer intranet.</p>
          <a href="#login" class="btn btn-primary" style="justify-content: center;">Go to Login</a>
        </div>
      </section>
    `;
  }
  
  const user = JSON.parse(userStr);
  const isAdmin = user.is_admin;
  
  if (!window.activeIntranetTab) {
    window.activeIntranetTab = 'profile';
  }
  
  // Create initials
  const initials = user.name.split(' ').filter(n => !n.includes('.')).slice(-2).map(n => n[0]).join('').toUpperCase();
  
  return `
    <section class="section" style="background: #f8fafc; min-height: 80vh; padding: 40px 0;">
      <div class="container">
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
          <!-- Sidebar / Tab list -->
          <div style="flex: 1 1 250px; max-width: 320px; width: 100%;">
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius); padding: 24px; box-shadow: var(--shadow); position: sticky; top: 20px;">
              <div style="text-align: center; margin-bottom: 24px; border-bottom: 1px solid #f1f5f9; padding-bottom: 20px;">
                <div class="logo-icon" style="margin: 0 auto 12px; display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; font-size: 1.8rem; font-weight: 800; border-radius: 50%; background: var(--gradient-1); color: #fff;">${initials}</div>
                <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 4px;">${user.name}</h3>
                <span class="badge" style="background: #e0f2fe; color: #0369a1; font-size: 0.72rem; padding: 4px 8px; border-radius: 999px; font-weight: 600; display: inline-block;">${user.role}</span>
              </div>
              
              <nav style="display: flex; flex-direction: column; gap: 8px;">
                <button onclick="window.switchIntranetTab('profile')" class="intranet-tab-btn" style="display: flex; align-items: center; gap: 10px; width: 100%; border: none; background: none; padding: 12px 16px; border-radius: var(--radius-sm); text-align: left; font-size: 0.9rem; font-weight: 600; cursor: pointer; border: 1px solid transparent;">
                  Profile Overview
                </button>
                <button onclick="window.switchIntranetTab('verification')" class="intranet-tab-btn" style="display: flex; align-items: center; gap: 10px; width: 100%; border: none; background: none; padding: 12px 16px; border-radius: var(--radius-sm); text-align: left; font-size: 0.9rem; font-weight: 600; cursor: pointer; border: 1px solid transparent;">
                  Verification Center <span id="unverifiedCountBadge" style="margin-left: auto; background: #ea580c; color: #fff; font-size: 0.75rem; padding: 2px 6px; border-radius: 999px; display: none;"></span>
                </button>
                <button onclick="window.switchIntranetTab('messages')" class="intranet-tab-btn" style="display: flex; align-items: center; gap: 10px; width: 100%; border: none; background: none; padding: 12px 16px; border-radius: var(--radius-sm); text-align: left; font-size: 0.9rem; font-weight: 600; cursor: pointer; border: 1px solid transparent;">
                  Messages Box
                </button>
                ${isAdmin ? `
                  <button onclick="window.switchIntranetTab('news-admin')" class="intranet-tab-btn" style="display: flex; align-items: center; gap: 10px; width: 100%; border: none; background: none; padding: 12px 16px; border-radius: var(--radius-sm); text-align: left; font-size: 0.9rem; font-weight: 600; cursor: pointer; border: 1px solid transparent;">
                    📰 News Moderation
                  </button>
                  <button onclick="window.switchIntranetTab('admin')" class="intranet-tab-btn" style="display: flex; align-items: center; gap: 10px; width: 100%; border: none; background: none; padding: 12px 16px; border-radius: var(--radius-sm); text-align: left; font-size: 0.9rem; font-weight: 600; cursor: pointer; border: 1px solid transparent;">
                    ⚙️ Faculty &amp; Pubs Admin
                  </button>
                ` : ''}
              </nav>
            </div>
          </div>
          
          <!-- Main Intranet Content Area -->
          <div style="flex: 2 1 500px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius); padding: 32px; box-shadow: var(--shadow);">
            <div id="intranetContentSpinner" style="display: flex; justify-content: center; align-items: center; min-height: 300px;">
              <div class="loading-spinner"></div>
            </div>
            <div id="intranetTabContent" style="display: none;"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderIntranetProfile(lecturer) {
  const label = lecturer.extra_label || 'Phone';
  const value = lecturer.extra_label ? lecturer.extra_value : (lecturer.phone || 'N/A');
  return `
    <div class="tab-header" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">Lecturer Profile Overview</h2>
      <p style="color: var(--text-body); font-size: 0.88rem; margin-top: 4px;">Review and manage your academic profile records</p>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 30px;">
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-body); font-weight: 700; margin-bottom: 6px; letter-spacing: 0.04em;">Official Name</h4>
        <p style="font-size: 1.05rem; font-weight: 600; color: var(--ink);">${lecturer.name}</p>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-body); font-weight: 700; margin-bottom: 6px; letter-spacing: 0.04em;">Email Address</h4>
        <p style="font-size: 1.05rem; font-weight: 600; color: var(--primary);"><a href="mailto:${lecturer.email}">${lecturer.email}</a></p>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-body); font-weight: 700; margin-bottom: 6px; letter-spacing: 0.04em;">Department</h4>
        <p style="font-size: 1.05rem; font-weight: 600; color: var(--ink);">${lecturer.department || 'N/A'}</p>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-body); font-weight: 700; margin-bottom: 6px; letter-spacing: 0.04em;">Academic Role</h4>
        <p style="font-size: 1.05rem; font-weight: 600; color: var(--ink);">${lecturer.role}</p>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-body); font-weight: 700; margin-bottom: 6px; letter-spacing: 0.04em;">Office Location</h4>
        <p style="font-size: 1.05rem; font-weight: 600; color: var(--ink);">${lecturer.office}</p>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-body); font-weight: 700; margin-bottom: 6px; letter-spacing: 0.04em;">Specialization Areas</h4>
        <p style="font-size: 1.05rem; font-weight: 600; color: var(--ink);">${lecturer.spec}</p>
      </div>
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px;">
        <h4 style="font-size: 0.75rem; text-transform: uppercase; color: var(--text-body); font-weight: 700; margin-bottom: 6px; letter-spacing: 0.04em;">${label}</h4>
        <p style="font-size: 1.05rem; font-weight: 600; color: var(--ink);">${value}</p>
      </div>
    </div>
    
    <div style="margin-bottom: 8px;">
      <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 16px;">🗂️ My Projects</h3>
      <!-- Existing projects list (loaded dynamically) -->
      <div id="myProjectsList" style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
        <div style="text-align:center; padding:20px; color:var(--text-body); font-style:italic; font-size:0.85rem;">Loading projects…</div>
      </div>
      <!-- Add Project Form -->
      <div style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:var(--radius-sm); padding:20px;">
        <h4 style="font-size:0.95rem; font-weight:700; color:var(--primary); margin-bottom:12px;">➕ Add New Project</h4>
        <div id="addProjectStatus" style="display:none;" class="status-message"></div>
        <form id="addProjectForm" onsubmit="window.handleAddProject(event)">
          <div style="margin-bottom:10px;">
            <label for="projTitleInput" style="display:block; font-size:0.72rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Project Title *</label>
            <input type="text" id="projTitleInput" required placeholder="e.g. AI-Driven Healthcare System" style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:8px 10px; font-size:0.88rem; outline:none; box-sizing:border-box;">
          </div>
          <div style="margin-bottom:10px;">
            <label for="projDescInput" style="display:block; font-size:0.72rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Description *</label>
            <textarea id="projDescInput" required rows="3" placeholder="Brief description of the project..." style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:8px 10px; font-size:0.88rem; outline:none; resize:vertical; font-family:inherit; box-sizing:border-box;"></textarea>
          </div>
          <div style="margin-bottom:14px;">
            <label for="projUrlInput" style="display:block; font-size:0.72rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Project URL (optional)</label>
            <input type="url" id="projUrlInput" placeholder="https://..." style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:8px 10px; font-size:0.88rem; outline:none; box-sizing:border-box;">
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; height:38px; font-weight:700; font-size:0.88rem;">Add Project</button>
        </form>
      </div>
    </div>

    <!-- Password Changer & Profile Details Updater container -->
    <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-top: 32px;">
      <!-- Profile Details Form -->
      <div style="flex: 1 1 300px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 24px; box-shadow: var(--shadow-sm);">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Update Profile Details</h3>
        <div id="updateProfileStatus" style="display: none;" class="status-message"></div>
        
        <form id="updateProfileForm" onsubmit="window.handleUpdateProfileSubmit(event)">
          <div style="margin-bottom: 12px;">
            <label for="updateNameInput" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Full Name (with Title)</label>
            <input type="text" id="updateNameInput" required value="${lecturer.name || ''}" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>
          
          <div style="margin-bottom: 12px;">
            <label for="updateDepartmentInput" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Department</label>
            <select id="updateDepartmentInput" required style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
              <option value="Computer Science & Information Systems" ${lecturer.department === 'Computer Science & Information Systems' ? 'selected' : ''}>Computer Science & Information Systems</option>
              <option value="Management Information Systems" ${lecturer.department === 'Management Information Systems' ? 'selected' : ''}>Management Information Systems</option>
            </select>
          </div>

          <div style="margin-bottom: 12px;">
            <label for="updateSpecInput" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Areas of Specialization</label>
            <input type="text" id="updateSpecInput" required value="${lecturer.spec || ''}" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>

          <div style="margin-bottom: 12px;">
            <label for="updateOfficeInput" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Office Location</label>
            <input type="text" id="updateOfficeInput" required value="${lecturer.office || ''}" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>

          <div style="margin-bottom: 12px;">
            <label for="updatePhoneInput" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Phone Number</label>
            <input type="text" id="updatePhoneInput" value="${lecturer.phone || ''}" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
            <div>
              <label for="updateExtraLabel" style="display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Extra Detail Label</label>
              <input type="text" id="updateExtraLabel" value="${lecturer.extra_label || ''}" placeholder="e.g. Programme Role" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.85rem; outline: none;">
            </div>
            <div>
              <label for="updateExtraValue" style="display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Extra Detail Value</label>
              <input type="text" id="updateExtraValue" value="${lecturer.extra_value || ''}" placeholder="Coordinator" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.85rem; outline: none;">
            </div>
          </div>

          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; height: 36px; font-size: 0.88rem; font-weight: 600;">Update Details</button>
        </form>
      </div>

      <!-- Password Changer section -->
      <div style="flex: 1 1 300px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 24px; box-shadow: var(--shadow-sm); max-height: 380px;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Change Portal Password</h3>
        <div id="changePasswordStatus" style="display: none;" class="status-message"></div>
        
        <form id="changePasswordForm" onsubmit="window.handleChangePasswordSubmit(event)">
          <div style="margin-bottom: 12px;">
            <label for="oldPasswordInput" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Old Password</label>
            <input type="password" id="oldPasswordInput" required placeholder="••••••••" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>
          <div style="margin-bottom: 12px;">
            <label for="newPasswordInput" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">New Password</label>
            <input type="password" id="newPasswordInput" required placeholder="••••••••" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>
          <div style="margin-bottom: 16px;">
            <label for="confirmNewPasswordInput" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Confirm New Password</label>
            <input type="password" id="confirmNewPasswordInput" required placeholder="••••••••" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>
          <button type="submit" class="btn btn-dark" style="width: 100%; justify-content: center; height: 36px; font-size: 0.88rem; font-weight: 600;">Update Password</button>
        </form>
      </div>
    </div>
  `;
}

// ─── Crawled Alerts pagination ────────────────────────────────────────────────
window._crawledUnverified = [];
window._crawledPage       = 0;
const CRAWLED_PAGE_SIZE   = 5;

function _renderCrawledAlertCard(pub) {
  if (!pub) return '';
  const userStr = localStorage.getItem('sotssUser');
  const user = userStr ? JSON.parse(userStr) : null;
  const currentLecturerName = user ? user.name : '';
  const pubType = pub.type || (pub.journal && pub.journal.toLowerCase().includes('conference') ? 'Conference Paper' : 'Journal Article (Peer-Reviewed)');

  return `
    <article class="pub-card-flex">
      <div class="pub-meta-row">
        <span style="display:inline-flex; align-items:center; gap:5px; background:#ffedd5; color:#c2410c; border:1px solid #fed7aa; padding:3px 10px; border-radius:999px; font-size:0.75rem; font-weight:700; text-transform:uppercase; letter-spacing:0.04em;">🔍 Crawled Alert</span>
        ${getPublicationTypeBadge(pubType)}
        <span style="font-size:0.78rem; font-weight:700; color:var(--text-body);">${pub.year || '2025'}</span>
      </div>
      <h3 style="font-size:1.08rem; font-weight:700; color:var(--ink); margin:0 0 6px 0; line-height:1.4;">${pub.title || 'Untitled Publication'}</h3>
      <div class="pub-venue">${pub.journal || 'Academic Journal / Venue'}</div>
      <div class="pub-authors-row">
        <strong>Authors:</strong> ${formatAuthorsWithHighlight(pub.authors, currentLecturerName)}
      </div>
      ${pub.summary ? `<div style="font-size:0.82rem; color:var(--text-body); background:#f8fafc; border:1px solid #f1f5f9; padding:10px 14px; border-radius:6px; margin-bottom:12px; line-height:1.55;"><strong>Abstract:</strong> ${pub.summary}</div>` : ''}
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-top:8px;">
        <div>
          ${pub.url ? `<a href="${pub.url}" target="_blank" rel="noopener noreferrer" style="font-size:0.82rem; color:var(--accent); font-weight:700; text-decoration:underline;">Review Online &nearr;</a>` : ''}
        </div>
        <div style="display:flex; gap:8px;">
          <button onclick="window.handleVerificationAction(${pub.id}, 'verify')" class="btn btn-primary" style="padding:7px 18px; font-size:0.85rem; font-weight:700; border-radius:6px; height:36px; justify-content:center; background:#16a34a; border-color:#16a34a; cursor:pointer;">Confirm Work</button>
          <button onclick="window.handleVerificationAction(${pub.id}, 'reject')" class="btn btn-outline" style="padding:7px 18px; font-size:0.85rem; font-weight:700; border-radius:6px; height:36px; justify-content:center; color:#dc2626; border-color:#fca5a5; cursor:pointer;">Not Mine</button>
        </div>
      </div>
    </article>
  `;
}

window.renderCrawledAlertsPage = function() {
  const list  = window._crawledUnverified || [];
  const total = list.length;
  const pages = Math.max(1, Math.ceil(total / CRAWLED_PAGE_SIZE));
  if (window._crawledPage === undefined || window._crawledPage >= pages) {
    window._crawledPage = Math.max(0, pages - 1);
  }
  const page  = window._crawledPage || 0;
  const start = page * CRAWLED_PAGE_SIZE;
  const slice = list.slice(start, start + CRAWLED_PAGE_SIZE);
  const end   = Math.min(start + CRAWLED_PAGE_SIZE, total);

  const container = document.getElementById('crawledAlertsList');
  if (container) {
    if (total === 0) {
      container.innerHTML = `
        <div style="text-align:center; padding:32px 20px; background:#f0fdf4; border:1px dashed #86efac; border-radius:var(--radius-sm);">
          <div style="font-size:2rem; margin-bottom:8px;">✅</div>
          <h3 style="font-size:1rem; font-weight:700; color:#15803d; margin-bottom:4px;">All caught up!</h3>
          <p style="color:var(--text-body); font-size:0.85rem;">No new unverified publications found by the scanner.</p>
        </div>
      `;
    } else {
      container.innerHTML = slice.length > 0
        ? slice.map(_renderCrawledAlertCard).join('')
        : '<div style="text-align:center; padding:20px; color:var(--text-body); font-style:italic;">No items on this page.</div>';
    }
  }

  const info = total > 0 ? `Page ${page + 1} of ${pages} · showing ${start + 1}–${end} of ${total}` : '';
  ['crawledPageInfo', 'crawledPageInfo2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = info;
  });

  document.querySelectorAll('[data-crawled-prev]').forEach(btn => {
    btn.disabled      = page === 0;
    btn.style.opacity = page === 0 ? '0.35' : '1';
    btn.style.cursor  = page === 0 ? 'default' : 'pointer';
  });
  document.querySelectorAll('[data-crawled-next]').forEach(btn => {
    btn.disabled      = page >= pages - 1;
    btn.style.opacity = page >= pages - 1 ? '0.35' : '1';
    btn.style.cursor  = page >= pages - 1 ? 'default' : 'pointer';
  });
};

window.changeCrawledPage = function(delta) {
  const total = (window._crawledUnverified || []).length;
  const pages = Math.max(1, Math.ceil(total / CRAWLED_PAGE_SIZE));
  const next  = (window._crawledPage || 0) + delta;
  if (next < 0 || next >= pages) return;
  window._crawledPage = next;
  window.renderCrawledAlertsPage();
  const el = document.getElementById('crawledAlertsList');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function renderIntranetVerification(publications) {
  if (!Array.isArray(publications)) publications = [];
  const unverified = publications.filter(p => p && p.status === 'unverified');
  const verified   = publications.filter(p => p && p.status === 'verified');

  window._crawledUnverified = unverified;
  const total = unverified.length;
  const pages = Math.max(1, Math.ceil(total / CRAWLED_PAGE_SIZE));
  if (window._crawledPage === undefined || window._crawledPage >= pages) {
    window._crawledPage = Math.max(0, pages - 1);
  }
  const page  = window._crawledPage;
  const start = page * CRAWLED_PAGE_SIZE;
  const slice = unverified.slice(start, start + CRAWLED_PAGE_SIZE);
  const end   = Math.min(start + CRAWLED_PAGE_SIZE, total);

  const hasPending = total > 0;
  const pageInfoText = hasPending ? `Page ${page + 1} of ${pages} · showing ${start + 1}–${end} of ${total}` : '';

  return `
    <div class="tab-header" style="margin-bottom:24px; border-bottom:1px solid #e2e8f0; padding-bottom:16px;">
      <h2 style="font-size:1.5rem; font-weight:700; color:var(--primary);">Publication Center</h2>
      <p style="color:var(--text-body); font-size:0.88rem; margin-top:4px;">Verify crawled research, manually submit publications, and manage your academic record</p>
    </div>

    <!-- ── CRAWLED ALERTS ──────────────────────────────────────────────── -->
    <div style="margin-bottom:32px;">

      <!-- Header row -->
      <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:10px; margin-bottom:14px;">
        <h3 style="font-size:1.1rem; font-weight:700; color:var(--primary); margin:0; display:flex; align-items:center; gap:8px;">
          🔍 Crawled Alerts
          ${hasPending ? `<span style="background:#ea580c; color:#fff; font-size:0.72rem; font-weight:700; padding:2px 8px; border-radius:12px;">${total} pending</span>` : ''}
        </h3>
        ${hasPending ? `
        <div style="display:flex; align-items:center; gap:10px;">
          <span id="crawledPageInfo" style="font-size:0.82rem; color:var(--text-body); font-weight:600;">${pageInfoText}</span>
          <button data-crawled-prev onclick="window.changeCrawledPage(-1)"
            style="padding:5px 14px; border:1px solid #e2e8f0; background:#fff; border-radius:6px; font-size:0.82rem; font-weight:600; color:var(--primary); cursor:pointer;">
            ← Prev
          </button>
          <button data-crawled-next onclick="window.changeCrawledPage(1)"
            style="padding:5px 14px; border:1px solid #e2e8f0; background:#fff; border-radius:6px; font-size:0.82rem; font-weight:600; color:var(--primary); cursor:pointer;">
            Next →
          </button>
        </div>` : ''}
      </div>

      <div id="verifyStatusMessage" style="display:none;" class="status-message"></div>

      <!-- Cards injected or pre-rendered -->
      <div id="crawledAlertsList" style="display:flex; flex-direction:column; gap:16px;">
        ${hasPending
          ? slice.map(_renderCrawledAlertCard).join('')
          : `<div style="text-align:center; padding:32px 20px; background:#f0fdf4; border:1px dashed #86efac; border-radius:var(--radius-sm);">
              <div style="font-size:2rem; margin-bottom:8px;">✅</div>
              <h3 style="font-size:1rem; font-weight:700; color:#15803d; margin-bottom:4px;">All caught up!</h3>
              <p style="color:var(--text-body); font-size:0.85rem;">No new unverified publications found by the scanner.</p>
             </div>`}
      </div>

      <!-- Bottom pagination bar -->
      ${hasPending ? `
      <div style="display:flex; align-items:center; justify-content:center; gap:14px; margin-top:18px; padding-top:14px; border-top:1px solid #f1f5f9;">
        <button data-crawled-prev onclick="window.changeCrawledPage(-1)"
          style="padding:7px 20px; border:1px solid #e2e8f0; background:#fff; border-radius:6px; font-size:0.85rem; font-weight:600; color:var(--primary); cursor:pointer;">
          ← Previous
        </button>
        <span id="crawledPageInfo2" style="font-size:0.85rem; color:var(--text-body); font-weight:600;">${pageInfoText}</span>
        <button data-crawled-next onclick="window.changeCrawledPage(1)"
          style="padding:7px 20px; border:1px solid #e2e8f0; background:#fff; border-radius:6px; font-size:0.85rem; font-weight:600; color:var(--primary); cursor:pointer;">
          Next →
        </button>
      </div>` : ''}
    </div>

    <!-- ── MANUAL SUBMISSION FORM ─────────────────────────────────────── -->
    <div style="background:#fff; border:1px solid #e2e8f0; border-radius:var(--radius-sm); padding:24px; box-shadow:var(--shadow-sm); margin-bottom:32px;">
      <h3 style="font-size:1.1rem; font-weight:700; color:var(--primary); margin-bottom:4px;">➕ Submit Publication Manually</h3>
      <p style="font-size:0.82rem; color:var(--text-body); margin-bottom:16px;">Add a publication that the scraper may have missed. It will be marked as verified immediately.</p>
      <div id="submitPubStatus" style="display:none;" class="status-message"></div>
      <form id="submitPublicationForm" onsubmit="window.handleSubmitPublication(event)">
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:14px;">
          <div style="grid-column:1/-1;">
            <label for="pubTitleInput" style="display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Publication Title *</label>
            <input type="text" id="pubTitleInput" required placeholder="e.g. Deep Learning for Medical Image Analysis" style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:9px 12px; font-size:0.9rem; outline:none; box-sizing:border-box;">
          </div>
          <div>
            <label for="pubYearInput" style="display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Year *</label>
            <input type="text" id="pubYearInput" required placeholder="e.g. 2024" maxlength="4" style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:9px 12px; font-size:0.9rem; outline:none; box-sizing:border-box;">
          </div>
          <div>
            <label for="pubJournalInput" style="display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Journal / Conference *</label>
            <input type="text" id="pubJournalInput" required placeholder="e.g. IEEE Transactions on..." style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:9px 12px; font-size:0.9rem; outline:none; box-sizing:border-box;">
          </div>
          <div style="grid-column:1/-1;">
            <label for="pubAuthorsInput" style="display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Authors *</label>
            <input type="text" id="pubAuthorsInput" required placeholder="e.g. Engmann F., Budu J., Wiredu G." style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:9px 12px; font-size:0.9rem; outline:none; box-sizing:border-box;">
          </div>
          <div style="grid-column:1/-1;">
            <label for="pubSummaryInput" style="display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Abstract / Summary</label>
            <textarea id="pubSummaryInput" rows="3" placeholder="Short abstract or description..." style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:9px 12px; font-size:0.9rem; outline:none; resize:vertical; font-family:inherit; box-sizing:border-box;"></textarea>
          </div>
          <div style="grid-column:1/-1;">
            <label for="pubUrlInput" style="display:block; font-size:0.75rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">DOI / Link (optional)</label>
            <input type="url" id="pubUrlInput" placeholder="https://doi.org/..." style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:9px 12px; font-size:0.9rem; outline:none; box-sizing:border-box;">
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style="width:100%; justify-content:center; height:42px; font-weight:700; font-size:0.95rem;">Submit Publication</button>
      </form>
    </div>

    <!-- ── MY VERIFIED PUBLICATIONS ────────────────────────────────────── -->
    <div>
      <h3 style="font-size:1.1rem; font-weight:700; color:var(--primary); margin-bottom:14px;">📄 My Verified Publications (${verified.length})</h3>
      <div id="myPubsListContainer" style="display:flex; flex-direction:column; gap:16px;">
        ${verified.length === 0 ? `
          <div style="text-align:center; padding:28px; background:#f8fafc; border:1px dashed #c8d8ea; border-radius:var(--radius-sm); color:var(--text-body); font-style:italic; font-size:0.88rem;">
            No verified publications yet. Confirm crawled alerts above or submit manually.
          </div>
        ` : verified.map(pub => {
          const userStr = localStorage.getItem('sotssUser');
          const user = userStr ? JSON.parse(userStr) : null;
          const currentLecturerName = user ? user.name : '';
          return `
            <div class="pub-card-flex" style="background:#fff; border:1px solid #e2e8f0; border-left:4px solid #16a34a; border-radius:10px; padding:18px 22px; box-shadow:0 2px 8px rgba(0,30,60,0.04);">
              <div class="pub-meta-row" style="display:flex; gap:8px; align-items:center; margin-bottom:6px; flex-wrap:wrap;">
                <span style="font-size:0.72rem; font-weight:700; text-transform:uppercase; color:#16a34a; background:#dcfce7; border:1px solid #bbf7d0; padding:2px 8px; border-radius:999px;">✔ Verified</span>
                ${getPublicationTypeBadge(pub.type || 'Journal Article (Peer-Reviewed)')}
                <span style="font-size:0.78rem; font-weight:700; color:var(--text-body);">${pub.year || 'Recent'}</span>
              </div>
              <h4 style="font-size:1.02rem; font-weight:700; color:var(--ink); margin:0 0 4px 0; line-height:1.35;">${pub.title}</h4>
              <div style="font-size:0.86rem; color:#0369a1; font-style:italic; font-weight:600; margin-bottom:4px;">${pub.journal || ''}</div>
              <div style="font-size:0.82rem; color:var(--text-body); margin-bottom:8px;">
                <strong>Authors:</strong> ${formatAuthorsWithHighlight(pub.authors, currentLecturerName)}
              </div>
              <div style="display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:8px;">
                ${pub.url ? `<a href="${pub.url}" target="_blank" style="font-size:0.8rem; color:var(--accent); font-weight:700; text-decoration:underline;">View Document &nearr;</a>` : '<span></span>'}
                <button onclick="window.handleDeletePublication(${pub.id})" style="background:none; border:1px solid #fca5a5; color:#dc2626; border-radius:4px; padding:5px 12px; font-size:0.78rem; font-weight:600; cursor:pointer;" title="Remove this publication">✕ Remove</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}


const INTRANET_MESSAGES_PAGE_SIZE = 5;
window._intranetMessages = [];
window._intranetMessagesPage = 0;

window.renderIntranetMessagesPage = function() {
  const container = document.getElementById('intranetMessagesList');
  const pageInfoTop = document.getElementById('messagesPageInfoTop');
  const pageInfoBottom = document.getElementById('messagesPageInfoBottom');
  const paginationTop = document.getElementById('messagesPaginationTop');
  const paginationBottom = document.getElementById('messagesPaginationBottom');

  if (!container) return;

  const messages = window._intranetMessages || [];
  const totalMessages = messages.length;

  if (totalMessages === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-body); font-style: italic; background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-sm);">
        No messages received yet.
      </div>
    `;
    if (paginationTop) paginationTop.style.display = 'none';
    if (paginationBottom) paginationBottom.style.display = 'none';
    return;
  }

  const totalPages = Math.ceil(totalMessages / INTRANET_MESSAGES_PAGE_SIZE) || 1;
  if (window._intranetMessagesPage >= totalPages) {
    window._intranetMessagesPage = totalPages - 1;
  }
  if (window._intranetMessagesPage < 0) {
    window._intranetMessagesPage = 0;
  }

  const page = window._intranetMessagesPage;
  const startIdx = page * INTRANET_MESSAGES_PAGE_SIZE;
  const endIdx = Math.min(startIdx + INTRANET_MESSAGES_PAGE_SIZE, totalMessages);
  const pageMessages = messages.slice(startIdx, endIdx);

  const pageText = `Page ${page + 1} of ${totalPages} (${startIdx + 1}–${endIdx} of ${totalMessages})`;
  if (pageInfoTop) pageInfoTop.textContent = pageText;
  if (pageInfoBottom) pageInfoBottom.textContent = pageText;

  if (paginationTop) paginationTop.style.display = 'flex';
  if (paginationBottom) paginationBottom.style.display = 'flex';

  document.querySelectorAll('[data-msg-prev]').forEach(btn => {
    btn.disabled = page === 0;
    btn.style.opacity = page === 0 ? '0.35' : '1';
    btn.style.cursor = page === 0 ? 'default' : 'pointer';
  });
  document.querySelectorAll('[data-msg-next]').forEach(btn => {
    btn.disabled = page >= totalPages - 1;
    btn.style.opacity = page >= totalPages - 1 ? '0.35' : '1';
    btn.style.cursor = page >= totalPages - 1 ? 'default' : 'pointer';
  });

  container.innerHTML = pageMessages.map(msg => {
    const isAnnouncement = msg.recipient_id === null;
    const msgDate = new Date(msg.timestamp).toLocaleString();

    return `
      <div style="background: ${isAnnouncement ? '#f0fdf4' : '#fff'}; border: 1px solid ${isAnnouncement ? '#bbf7d0' : '#e2e8f0'}; border-radius: var(--radius-sm); padding: 20px; box-shadow: var(--shadow-sm); border-left: 4px solid ${isAnnouncement ? '#22c55e' : 'var(--primary)'};">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <span class="badge" style="background: ${isAnnouncement ? '#dcfce7' : '#e2e8f0'}; color: ${isAnnouncement ? '#15803d' : 'var(--primary)'}; font-size: 0.7rem; font-weight: 600; padding: 2px 8px; border-radius: 4px; text-transform: uppercase;">
            ${isAnnouncement ? 'Global Announcement' : 'Direct Message'}
          </span>
          <span style="font-size: 0.75rem; color: var(--text-body);">${msgDate}</span>
        </div>
        <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--ink); margin-bottom: 6px;">${msg.title}</h3>
        <div style="font-size: 0.88rem; color: var(--text-dark); margin-bottom: 10px; line-height: 1.5; white-space: pre-wrap;">${msg.content}</div>
        <div style="font-size: 0.78rem; color: var(--text-body);"><strong>From:</strong> ${msg.sender_name}</div>
      </div>
    `;
  }).join('');
};

window.changeMessagesPage = function(delta) {
  const messages = window._intranetMessages || [];
  const totalPages = Math.ceil(messages.length / INTRANET_MESSAGES_PAGE_SIZE) || 1;
  const next = window._intranetMessagesPage + delta;
  if (next < 0 || next >= totalPages) return;
  window._intranetMessagesPage = next;
  window.renderIntranetMessagesPage();
  const el = document.getElementById('intranetMessagesList');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

function renderIntranetMessages(messages, lecturers) {
  if (!Array.isArray(messages)) messages = [];
  if (!Array.isArray(lecturers)) lecturers = [];
  const user = JSON.parse(localStorage.getItem('sotssUser') || '{}');
  const otherLecturers = lecturers.filter(l => l && l.id !== user.id && l.username !== user.username);

  window._intranetMessages = messages || [];
  window._intranetMessagesPage = 0;

  return `
    <div class="tab-header" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">Intranet Inbox &amp; Messages</h2>
      <p style="color: var(--text-body); font-size: 0.88rem; margin-top: 4px;">View administrative updates, announcements, and send communications</p>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; align-items: start; margin-bottom: 30px;">
      
      <!-- Compose Message Form -->
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 24px; box-shadow: var(--shadow-sm);">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">
          Compose Message / Announcement
        </h3>
        
        <div id="userMessageStatus" style="display: none;" class="status-message"></div>
        
        <form id="userSendMessageForm" onsubmit="window.sendUserMessage(event)">
          <div style="margin-bottom: 12px;">
            <label for="userScopeSelect" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Message Scope</label>
            <select id="userScopeSelect" onchange="window.handleUserScopeChange(this.value)" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
              <option value="school">School-wide Announcement</option>
              <option value="department">Department-only Announcement</option>
              <option value="direct">Direct Message</option>
            </select>
          </div>

          <div id="userDepartmentContainer" style="display: none; margin-bottom: 12px;">
            <label for="userDepartmentSelect" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Target Department</label>
            <select id="userDepartmentSelect" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
              <option value="Computer Science & Information Systems">Computer Science & Information Systems</option>
              <option value="Management Information Systems">Management Information Systems</option>
            </select>
          </div>
          
          <div id="userRecipientContainer" style="display: none; margin-bottom: 12px;">
            <label for="userRecipientSelect" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Recipient Faculty</label>
            <select id="userRecipientSelect" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
              ${otherLecturers.map(l => `
                <option value="${l.id}">${l.name} (${l.role || 'Lecturer'})</option>
              `).join('')}
            </select>
          </div>
          
          <div style="margin-bottom: 12px;">
            <label for="userMessageTitle" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Message Title</label>
            <input type="text" id="userMessageTitle" required placeholder="e.g. Question about collaboration" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>
          
          <div style="margin-bottom: 16px;">
            <label for="userMessageContent" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Message Content</label>
            <textarea id="userMessageContent" required rows="4" placeholder="Enter message text here..." style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none; resize: vertical; font-family: inherit;"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; height: 40px; font-weight: 600;">Send Message</button>
        </form>
      </div>

      <!-- Messages List -->
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin: 0;">
            Message Inbox
          </h3>
          <div id="messagesPaginationTop" style="display: none; align-items: center; gap: 8px;">
            <span id="messagesPageInfoTop" style="font-size: 0.8rem; color: var(--text-body); font-weight: 600;"></span>
            <button data-msg-prev onclick="window.changeMessagesPage(-1)" style="padding: 4px 12px; border: 1px solid #cbd5e1; background: #fff; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: var(--primary); cursor: pointer;">
              ← Prev
            </button>
            <button data-msg-next onclick="window.changeMessagesPage(1)" style="padding: 4px 12px; border: 1px solid #cbd5e1; background: #fff; border-radius: 6px; font-size: 0.8rem; font-weight: 600; color: var(--primary); cursor: pointer;">
              Next →
            </button>
          </div>
        </div>

        <div id="intranetMessagesList" style="display: flex; flex-direction: column; gap: 16px;">
          <div style="text-align: center; padding: 20px; color: var(--text-body); font-style: italic; font-size: 0.85rem;">Loading inbox…</div>
        </div>

        <div id="messagesPaginationBottom" style="display: none; justify-content: center; align-items: center; gap: 12px; margin-top: 8px; padding-top: 12px; border-top: 1px solid #f1f5f9;">
          <button data-msg-prev onclick="window.changeMessagesPage(-1)" style="padding: 6px 16px; border: 1px solid #cbd5e1; background: #fff; border-radius: 6px; font-size: 0.82rem; font-weight: 600; color: var(--primary); cursor: pointer;">
            ← Prev
          </button>
          <span id="messagesPageInfoBottom" style="font-size: 0.82rem; color: var(--text-body); font-weight: 600;"></span>
          <button data-msg-next onclick="window.changeMessagesPage(1)" style="padding: 6px 16px; border: 1px solid #cbd5e1; background: #fff; border-radius: 6px; font-size: 0.82rem; font-weight: 600; color: var(--primary); cursor: pointer;">
            Next →
          </button>
        </div>
      </div>

    </div>
  `;
}

function renderIntranetAdmin(lecturers, publications) {
  if (!Array.isArray(lecturers)) lecturers = [];
  if (!Array.isArray(publications)) publications = [];
  const user = JSON.parse(localStorage.getItem('sotssUser') || '{}');
  const isAdminUser = user.is_admin || user.username === 'admin' || user.username === 'admin@gimpa.edu.gh';
  
  // Calculate stats
  const totalArticles = publications.length;
  const currentYear = new Date().getFullYear().toString();
  const publishedThisYear = publications.filter(p => p.year === currentYear).length;
  const verifiedPubs = publications.filter(p => p.status === 'verified').length;
  const pendingPubs = publications.filter(p => p.status === 'unverified').length;

  return `
    <div class="tab-header" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">Intranet Administration Panel</h2>
      <p style="color: var(--text-body); font-size: 0.88rem; margin-top: 4px;">Monitor publications, assign school roles, and run database scans</p>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 30px;">
      
      <!-- Stats Cards Row -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px; text-align: center; box-shadow: var(--shadow-sm);">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-body); text-transform: uppercase; margin-bottom: 6px;">Total Articles</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">${totalArticles}</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px; text-align: center; box-shadow: var(--shadow-sm);">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-body); text-transform: uppercase; margin-bottom: 6px;">Published in ${currentYear}</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--primary);">${publishedThisYear}</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px; text-align: center; box-shadow: var(--shadow-sm);">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-body); text-transform: uppercase; margin-bottom: 6px;">Verified Publications</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: #16a34a;">${verifiedPubs}</div>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px; text-align: center; box-shadow: var(--shadow-sm);">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-body); text-transform: uppercase; margin-bottom: 6px;">Pending Verification</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: #ea580c;">${pendingPubs}</div>
        </div>
      </div>
      
      <!-- Split Layout: Left Controls, Right Table -->
      <div style="display: grid; grid-template-columns: ${isAdminUser ? '1fr 2fr' : '1fr'}; gap: 30px; align-items: start;">
        
        <!-- Left Panel: Scans and Admin Role/Reset controls (Only for tech admin if assigned) -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          
          <!-- Scan Section -->
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px;">
            <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 8px;">Research Crawler Scanner</h3>
            <p style="font-size: 0.82rem; color: var(--text-body); margin-bottom: 12px; line-height: 1.4;">
              Trigger an on-demand scan of the <strong>Semantic Scholar</strong> academic database for all department faculty members.
            </p>
            
            <div id="scanStatusMessage" style="display: none;" class="status-message"></div>
            
            <button id="triggerScanBtn" onclick="window.runAdminScan()" class="btn btn-dark" style="width: 100%; justify-content: center; height: 38px; font-size: 0.88rem; font-weight: 600;">
              Start Publication Scan
            </button>
          </div>
          
          ${isAdminUser ? `
            <!-- Role Assignment Panel -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 10px;">Assign School Role</h3>
              <div id="roleAssignStatus" style="display: none;" class="status-message"></div>
              <form id="roleAssignForm" onsubmit="window.submitRoleAssignment(event)">
                <div style="margin-bottom: 12px;">
                  <label for="assignLecturerSelect" style="display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Faculty Member</label>
                  <select id="assignLecturerSelect" required style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 6px 8px; font-size: 0.85rem; outline: none;">
                    ${lecturers.filter(l => l.username !== 'admin').map(l => `
                      <option value="${l.id}">${l.name} (${l.role || 'Lecturer'})</option>
                    `).join('')}
                  </select>
                </div>
                <div style="margin-bottom: 12px;">
                  <label for="assignSchoolSelect" style="display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">School / Department</label>
                  <select id="assignSchoolSelect" required style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 6px 8px; font-size: 0.85rem; outline: none;">
                    <option value="School of Technology">School of Technology</option>
                    <option value="Business School">Business School</option>
                    <option value="School of Public Service & Governance">School of Public Service & Governance</option>
                    <option value="Law School">Law School</option>
                  </select>
                </div>
                <div style="margin-bottom: 16px;">
                  <label for="assignRoleTypeSelect" style="display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Role Title</label>
                  <select id="assignRoleTypeSelect" required style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 6px 8px; font-size: 0.85rem; outline: none;">
                    <option value="HOD">Head of Department (HOD)</option>
                    <option value="Dean">Dean</option>
                    <option value="None">None (Revert to Lecturer)</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; height: 36px; font-size: 0.85rem; font-weight: 600;">Assign Role</button>
              </form>
            </div>
            
            <!-- Password Reset Panel -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 20px; box-shadow: var(--shadow-sm);">
              <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 10px;">Send Reset Password</h3>
              <div id="passwordResetStatus" style="display: none;" class="status-message"></div>
              <form id="passwordResetForm" onsubmit="window.submitPasswordResetEmail(event)">
                <div style="margin-bottom: 16px;">
                  <label for="resetLecturerSelect" style="display: block; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Faculty Member</label>
                  <select id="resetLecturerSelect" required style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 6px 8px; font-size: 0.85rem; outline: none;">
                    ${lecturers.filter(l => l.username !== 'admin').map(l => `
                      <option value="${l.id}">${l.name} (${l.email})</option>
                    `).join('')}
                  </select>
                </div>
                <button type="submit" class="btn btn-dark" style="width: 100%; justify-content: center; height: 36px; font-size: 0.85rem; font-weight: 600;">Send Reset Link</button>
              </form>
            </div>
          ` : ''}
        </div>
        
        <!-- Right Panel: Scanned Publications Catalog -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 24px; box-shadow: var(--shadow-sm);">
          <h3 style="font-size: 1.2rem; font-weight: 800; color: var(--primary); margin-bottom: 16px; display: flex; align-items: center; justify-content: space-between;">
            Scanned Publications Database
            <button onclick="window.downloadAdminPubsCSV()" class="btn btn-outline" style="height: 32px; font-size: 0.8rem; padding: 0 12px; font-weight: 600; border-color: var(--primary); color: var(--primary); background: #f0f6ff;">
              ⬇ Download CSV
            </button>
          </h3>
          
          <!-- Filters Section -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 16px; margin-bottom: 20px;">
            <div>
              <label for="filterLecturer" style="display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Filter by Lecturer</label>
              <select id="filterLecturer" onchange="window.updateAdminPubsView()" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 6px 8px; font-size: 0.82rem; outline: none;">
                <option value="all">All Lecturers</option>
                ${lecturers.filter(l => l.username !== 'admin').map(l => `
                  <option value="${l.id}">${l.name}</option>
                `).join('')}
              </select>
            </div>
            
            <div>
              <label for="filterDateStart" style="display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Start Date</label>
              <input type="date" id="filterDateStart" onchange="window.updateAdminPubsView()" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 5px 8px; font-size: 0.82rem; outline: none;">
            </div>
            
            <div>
              <label for="filterDateEnd" style="display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">End Date</label>
              <input type="date" id="filterDateEnd" onchange="window.updateAdminPubsView()" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 5px 8px; font-size: 0.82rem; outline: none;">
            </div>
            
            <div>
              <label for="filterStatus" style="display: block; font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Verification Status</label>
              <select id="filterStatus" onchange="window.updateAdminPubsView()" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 6px 8px; font-size: 0.82rem; outline: none;">
                <option value="all">All Statuses</option>
                <option value="verified">Verified</option>
                <option value="unverified">Unverified</option>
              </select>
            </div>
          </div>
          
          <!-- Table Container -->
          <div style="overflow-x: auto; border: 1px solid #e2e8f0; border-radius: 6px;">
            <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
              <thead>
                <tr style="background: #f1f5f9; border-bottom: 1px solid #e2e8f0;">
                  <th style="padding: 10px 12px; font-weight: 700; color: var(--primary);">Lecturer</th>
                  <th style="padding: 10px 12px; font-weight: 700; color: var(--primary);">Title</th>
                  <th style="padding: 10px 12px; font-weight: 700; color: var(--primary);">Year</th>
                  <th style="padding: 10px 12px; font-weight: 700; color: var(--primary);">Journal/Venue</th>
                  <th style="padding: 10px 12px; font-weight: 700; color: var(--primary);">Status</th>
                </tr>
              </thead>
              <tbody id="adminPubsTableBody">
                <!-- Dynamically populated -->
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  `;
}

function renderIntranetNewsAdmin(newsItems) {
  if (!Array.isArray(newsItems)) newsItems = [];
  const publishedCount = newsItems.filter(n => n && n.status === 'published').length;
  const pendingCount = newsItems.filter(n => n && n.status === 'pending').length;

  return `
    <div>
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--primary); margin: 0 0 4px 0;">📰 SOTSS News Moderation &amp; Cover Image Manager</h2>
          <p style="font-size: 0.88rem; color: var(--text-body); margin: 0;">Review scraped &amp; submitted news stories, upload high-resolution cover photos, and confirm stories before publishing live on the website.</p>
        </div>
        <button onclick="window.showCreateNewsModal()" class="btn btn-primary" style="font-size: 0.88rem; padding: 10px 18px; font-weight: 700; border-radius: 8px;">
          + Create Manual News
        </button>
      </div>

      <!-- Quick Summary Badges -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 16px; border-radius: 8px;">
          <span style="font-size: 0.78rem; font-weight: 700; color: #166534; text-transform: uppercase;">Published Live</span>
          <div style="font-size: 1.8rem; font-weight: 800; color: #15803d; margin-top: 4px;">${publishedCount} Stories</div>
        </div>
        <div style="background: #fffbeb; border: 1px solid #fef3c7; padding: 16px; border-radius: 8px;">
          <span style="font-size: 0.78rem; font-weight: 700; color: #92400e; text-transform: uppercase;">Pending Moderation</span>
          <div style="font-size: 1.8rem; font-weight: 800; color: #b45309; margin-top: 4px;">${pendingCount} Stories</div>
        </div>
        <div style="background: #f0f9ff; border: 1px solid #bae6fd; padding: 16px; border-radius: 8px;">
          <span style="font-size: 0.78rem; font-weight: 700; color: #075985; text-transform: uppercase;">Total System News</span>
          <div style="font-size: 1.8rem; font-weight: 800; color: #0369a1; margin-top: 4px;">${newsItems.length} Stories</div>
        </div>
      </div>

      <!-- News Items List -->
      <div style="display: flex; flex-direction: column; gap: 16px;">
        ${newsItems.length === 0 ? '<div style="padding: 40px; text-align: center; color: #64748b;">No news items available for moderation.</div>' : ''}
        ${newsItems.map(item => {
          const isPublished = item.status === 'published';
          const itemId = item.news_id || item.id;
          return `
            <div style="background: #ffffff; border: 1px solid ${isPublished ? '#e2e8f0' : '#fde68a'}; border-radius: 10px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.03); display: flex; flex-wrap: wrap; gap: 20px; align-items: center;">
              
              <!-- Image Preview & Upload Button -->
              <div style="width: 140px; flex-shrink: 0; text-align: center;">
                <div style="width: 140px; height: 95px; border-radius: 8px; overflow: hidden; background: #f1f5f9; border: 1px solid #cbd5e1; margin-bottom: 8px; position: relative;">
                  <img src="${item.image || 'assets/images/1000211039.png'}" alt="Cover Image" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <button onclick="window.triggerImageUpload('${itemId}')" style="font-size: 0.78rem; padding: 7px 10px; font-weight: 700; width: 100%; background: #0f172a; color: #ffffff; border: 1px solid #0f172a; border-radius: 6px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.12);">
                  📷 Change Photo
                </button>
                <input type="file" id="newsImgFile_${itemId}" accept="image/*" style="display:none;" onchange="window.uploadNewsImageFile('${itemId}')">
              </div>

              <!-- Main Details -->
              <div style="flex: 1; min-width: 260px;">
                <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
                  <span style="font-size: 0.75rem; font-weight: 700; color: var(--accent);">${item.date || 'Recent'}</span>
                  <span style="font-size: 0.72rem; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${item.source || 'SOTSS News'}</span>
                  <span style="font-size: 0.72rem; font-weight: 700; padding: 2px 10px; border-radius: 999px; ${isPublished ? 'background: #dcfce7; color: #15803d;' : 'background: #fef3c7; color: #b45309;'}">
                    ${isPublished ? '🟢 Published Live' : '🟡 Pending Review'}
                  </span>
                </div>
                <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--primary); margin: 0 0 6px 0;">${item.title}</h4>
                <p style="font-size: 0.85rem; color: #475569; margin: 0 0 10px 0; line-height: 1.4;">${item.desc}</p>
                ${item.link ? `<a href="${item.link}" target="_blank" style="font-size: 0.78rem; font-weight: 600; color: #0284c7;">🔗 External Source Link &rarr;</a>` : ''}
              </div>

              <!-- Action Controls -->
              <div style="display: flex; flex-direction: column; gap: 8px; flex-shrink: 0; min-width: 140px;">
                ${isPublished ? `
                  <button onclick="window.updateNewsStatus('${itemId}', 'pending')" class="btn btn-outline" style="font-size: 0.8rem; padding: 8px 12px; font-weight: 700; color: #b45309; border-color: #fde68a; background: #fffbeb;">
                    ⏸️ Unpublish
                  </button>
                ` : `
                  <button onclick="window.updateNewsStatus('${itemId}', 'published')" class="btn btn-primary" style="font-size: 0.8rem; padding: 8px 12px; font-weight: 700; background: #16a34a; border-color: #16a34a; color: #fff;">
                    ✅ Confirm &amp; Publish
                  </button>
                `}
                <button onclick="window.promptNewsImageUrl('${itemId}')" class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 12px; font-weight: 600; color: #0369a1; border-color: #bae6fd;">
                  🔗 Custom Image URL
                </button>
                <button onclick="window.deleteNewsItem('${itemId}')" class="btn btn-outline" style="font-size: 0.8rem; padding: 6px 12px; font-weight: 600; color: #dc2626; border-color: #fecaca; background: #fef2f2;">
                  🗑️ Delete Story
                </button>
              </div>

            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function getAuthHeaders() {
  const token = localStorage.getItem('sotssToken');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
}

async function safeFetchJson(url, options = {}) {
  try {
    const res = await fetch(url, options);
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      const txt = await res.text();
      console.warn('API returned non-JSON (' + res.status + '):', url, txt.substring(0, 150));
      return { ok: false, status: res.status, data: null, isHtml: true, text: txt };
    }
    const data = await res.json();
    console.log('API response (' + res.status + '):', url, data);
    return { ok: res.ok, status: res.status, data: data, isHtml: false };
  } catch (err) {
    console.error('Fetch error:', url, err);
    return { ok: false, status: 0, data: null, isHtml: true, error: err };
  }
}

function handleUnauthorized() {
  localStorage.removeItem('sotssToken');
  localStorage.removeItem('sotssUser');
  alert('Your login session has expired or is invalid. Please log in again.');
  location.hash = '#login';
  if (typeof render === 'function') render();
}

async function loadDynamicData() {
  try {
    const resLecturers = await safeFetchJson('/api/public/lecturers');
    const resPubs = await safeFetchJson('/api/public/publications');
    const resNews = await safeFetchJson('/api/public/news');

    if (resNews.ok && Array.isArray(resNews.data) && resNews.data.length > 0) {
      window.dynamicNews = resNews.data;
    }
    
    if (resLecturers.ok && Array.isArray(resLecturers.data)) {
      const dbLecturers = resLecturers.data;
      const dbPubs = (resPubs.ok && Array.isArray(resPubs.data)) ? resPubs.data : [];
      
      dbLecturers.forEach(dbL => {
        let localL = faculty.find(l => {
          if (dbL.username === 'csshead' && l.id === 'felicia-engmann') return true;
          if (dbL.username === 'josbudu' && l.id === 'joseph-budu') return true;
          if (dbL.username === 'gwiredu' && l.id === 'gamel-wiredu') return true;
          if (dbL.username === 'eadabor' && l.id === 'emmanuel-adabor') return true;
          if (dbL.username === 'nassyne' && l.id === 'nana-assyne') return true;
          if (dbL.username === 'eboasiako' && l.id === 'emmanuel-antwi-boasiako') return true;
          return l.name.toLowerCase().includes(dbL.name.toLowerCase()) || dbL.name.toLowerCase().includes(l.name.toLowerCase());
        });
        
        if (localL) {
          localL.db_id = dbL.id;
          localL.name = dbL.name;
          localL.role = dbL.role;
          localL.email = dbL.email;
          localL.spec = dbL.spec;
          localL.office = dbL.office;
          localL.phone = dbL.phone;
          localL.extra_label = dbL.extra_label;
          localL.extra_value = dbL.extra_value;
          localL.pubs = [];
        } else {
          faculty.push({
            id: dbL.username,
            db_id: dbL.id,
            name: dbL.name,
            role: dbL.role,
            email: dbL.email,
            photo: '',
            spec: dbL.spec,
            office: dbL.office,
            phone: dbL.phone,
            extra_label: dbL.extra_label,
            extra_value: dbL.extra_value,
            projects: [],
            pubs: []
          });
        }
      });
      
      dbPubs.forEach(pub => {
        const l = faculty.find(x => x.db_id === pub.lecturer_id);
        if (l) {
          l.pubs.push({
            id: pub.id,
            year: pub.year,
            type: pub.type || 'Journal Article (Peer-Reviewed)',
            image: pub.image || (pub.title && pub.title.toLowerCase().includes('wireless') ? 'assets/images/publications/wiley_ijcs_cover.png' : 'assets/images/research-lab.png'),
            title: pub.title,
            journal: pub.journal,
            authors: pub.authors,
            url: pub.url,
            summary: pub.summary
          });
        }
      });
    }
  } catch (err) {
    console.error("Failed to load dynamic data, using static fallback", err);
  }
}

let lastAutoNewsSync = 0;
async function autoSyncNews() {
  const now = Date.now();
  if (now - lastAutoNewsSync < 60000) return; // Prevent duplicate syncs within 60s
  lastAutoNewsSync = now;
  try {
    const res = await fetch('/api/public/fetch-news', { method: 'POST' });
    if (res.ok) {
      const resNews = await fetch('/api/public/news');
      if (resNews.ok) {
        window.dynamicNews = await resNews.json();
        if (location.hash === '#news') {
          render();
        }
      }
    }
  } catch (err) {
    console.error('Failed to auto-sync news:', err);
  }
}

window.syncLatestNews = autoSyncNews;

async function switchIntranetTab(tabName) {
  window.activeIntranetTab = tabName;
  
  document.querySelectorAll('.intranet-tab-btn').forEach(btn => {
    btn.style.backgroundColor = 'transparent';
    btn.style.borderColor = 'transparent';
    btn.style.color = 'var(--text-body)';
  });
  
  const buttons = document.querySelectorAll('.intranet-tab-btn');
  buttons.forEach(btn => {
    if (btn.textContent.includes('Profile') && tabName === 'profile') {
      btn.style.backgroundColor = '#f1f5f9';
      btn.style.borderColor = '#e2e8f0';
      btn.style.color = 'var(--primary)';
    } else if (btn.textContent.includes('Verification') && tabName === 'verification') {
      btn.style.backgroundColor = '#f1f5f9';
      btn.style.borderColor = '#e2e8f0';
      btn.style.color = 'var(--primary)';
    } else if (btn.textContent.includes('Messages') && tabName === 'messages') {
      btn.style.backgroundColor = '#f1f5f9';
      btn.style.borderColor = '#e2e8f0';
      btn.style.color = 'var(--primary)';
    } else if (btn.textContent.includes('Admin') && tabName === 'admin') {
      btn.style.backgroundColor = '#f1f5f9';
      btn.style.borderColor = '#e2e8f0';
      btn.style.color = 'var(--primary)';
    }
  });
  
  const spinner = document.getElementById('intranetContentSpinner');
  const container = document.getElementById('intranetTabContent');
  
  if (spinner && container) {
    spinner.style.display = 'flex';
    container.style.display = 'none';
  }
  
  try {
    let html = '';
    const headers = getAuthHeaders();
    
    // Always pre-load unverified publications count to update sidebar badge
    const resCount = await safeFetchJson('/api/lecturer/publications', { headers });
    if (resCount.status === 401) {
      handleUnauthorized();
      return;
    }
    if (resCount.ok && Array.isArray(resCount.data)) {
      const unverified = resCount.data.filter(p => p && p.status === 'unverified');
      const badge = document.getElementById('unverifiedCountBadge');
      if (badge) {
        if (unverified.length > 0) {
          badge.textContent = unverified.length;
          badge.style.display = 'inline-block';
        } else {
          badge.style.display = 'none';
        }
      }
    }
    
    if (tabName === 'profile') {
      const res = await safeFetchJson('/api/lecturer/me', { headers });
      if (res.status === 401) {
        handleUnauthorized();
        return;
      }
      if (res.isHtml || res.status === 502) {
        html = `<div style="color:#0369a1; font-weight:600; padding:30px; text-align:center;">⏳ Starting intranet backend service... please wait 3 seconds.<br><br><button onclick="window.switchIntranetTab('profile')" class="btn btn-primary" style="margin-top:10px; padding:8px 18px; border-radius:6px; font-weight:700;">🔄 Retry Now</button></div>`;
      } else if (res.ok && res.data) {
        html = renderIntranetProfile(res.data);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load profile details. Server returned ${res.status}.</div>`;
      }
    } else if (tabName === 'verification') {
      const res = await safeFetchJson('/api/lecturer/publications', { headers });
      if (res.status === 401) {
        handleUnauthorized();
        return;
      }
      if (res.isHtml || res.status === 502) {
        html = `<div style="color:#0369a1; font-weight:600; padding:30px; text-align:center;">⏳ Starting intranet backend service... please wait 3 seconds.<br><br><button onclick="window.switchIntranetTab('verification')" class="btn btn-primary" style="margin-top:10px; padding:8px 18px; border-radius:6px; font-weight:700;">🔄 Retry Now</button></div>`;
      } else if (res.ok && Array.isArray(res.data)) {
        html = renderIntranetVerification(res.data);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load publications details. Server returned ${res.status}.</div>`;
      }
    } else if (tabName === 'messages') {
      const resMsg = await safeFetchJson('/api/messages', { headers });
      if (resMsg.status === 401) {
        handleUnauthorized();
        return;
      }
      const resLecturers = await safeFetchJson('/api/public/lecturers');
      if (resMsg.isHtml || resMsg.status === 502) {
        html = `<div style="color:#0369a1; font-weight:600; padding:30px; text-align:center;">⏳ Starting intranet backend service... please wait 3 seconds.<br><br><button onclick="window.switchIntranetTab('messages')" class="btn btn-primary" style="margin-top:10px; padding:8px 18px; border-radius:6px; font-weight:700;">🔄 Retry Now</button></div>`;
      } else if (resMsg.ok && resLecturers.ok) {
        html = renderIntranetMessages(resMsg.data || [], resLecturers.data || []);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load intranet inbox. Server returned ${resMsg.status}.</div>`;
      }
    } else if (tabName === 'news-admin') {
      const res = await safeFetchJson('/api/manage/news', { headers });
      if (res.status === 401) {
        handleUnauthorized();
        return;
      }
      if (res.status === 403) {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">🔒 Admin permissions required. Your account does not have access to News Moderation.</div>`;
      } else if (res.isHtml || res.status === 502) {
        html = `<div style="color:#0369a1; font-weight:600; padding:30px; text-align:center;">⏳ Starting intranet backend service... please wait 3 seconds.<br><br><button onclick="window.switchIntranetTab('news-admin')" class="btn btn-primary" style="margin-top:10px; padding:8px 18px; border-radius:6px; font-weight:700;">🔄 Retry Now</button></div>`;
      } else if (res.ok && Array.isArray(res.data)) {
        html = renderIntranetNewsAdmin(res.data);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load news moderation panel. Server returned ${res.status}.</div>`;
      }
    } else if (tabName === 'admin') {
      const resLec = await safeFetchJson('/api/public/lecturers');
      const resPubs = await safeFetchJson('/api/manage/publications', { headers });
      if (resPubs.status === 401) {
        handleUnauthorized();
        return;
      }
      if (resPubs.status === 403) {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">🔒 Admin permissions required. Your account does not have access to the Intranet Administration Panel.</div>`;
      } else if (resPubs.isHtml || resPubs.status === 502) {
        html = `<div style="color:#0369a1; font-weight:600; padding:30px; text-align:center;">⏳ Starting intranet backend service... please wait 3 seconds.<br><br><button onclick="window.switchIntranetTab('admin')" class="btn btn-primary" style="margin-top:10px; padding:8px 18px; border-radius:6px; font-weight:700;">🔄 Retry Now</button></div>`;
      } else if (resLec.ok && resPubs.ok && Array.isArray(resPubs.data)) {
        const lecturers = Array.isArray(resLec.data) ? resLec.data : [];
        const publications = resPubs.data;
        window.allAdminPubs = publications;
        html = renderIntranetAdmin(lecturers, publications);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load admin panel details. Server returned ${resPubs.status || resLec.status}.</div>`;
      }
    }
    
    if (container) {
      container.innerHTML = html;
      spinner.style.display = 'none';
      container.style.display = 'block';
      if (tabName === 'admin') {
        window.updateAdminPubsView();
      }
      if (tabName === 'profile') {
        window.loadMyProjects();
      }
      if (tabName === 'verification') {
        window.renderCrawledAlertsPage();
      }
      if (tabName === 'messages') {
        window.renderIntranetMessagesPage();
      }
    }
  } catch (err) {
    console.error(err);
    if (container) {
      container.innerHTML = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to connect to intranet services. Check console logs.</div>`;
      spinner.style.display = 'none';
      container.style.display = 'block';
    }
  }
}

window.updateAdminPubsView = function() {
  const allPubs = window.allAdminPubs || [];
  const lecturerFilter = document.getElementById('filterLecturer');
  const startFilter = document.getElementById('filterDateStart');
  const endFilter = document.getElementById('filterDateEnd');
  const statusFilter = document.getElementById('filterStatus');
  const tbody = document.getElementById('adminPubsTableBody');
  if (!tbody) return;

  const lecturerId = lecturerFilter ? lecturerFilter.value : 'all';
  const startDate = startFilter ? startFilter.value : '';
  const endDate = endFilter ? endFilter.value : '';
  const status = statusFilter ? statusFilter.value : 'all';

  let filtered = allPubs.filter(pub => {
    if (lecturerId !== 'all' && String(pub.lecturer_id) !== String(lecturerId)) return false;
    if (startDate && pub.year && String(pub.year) < startDate.substring(0, 4)) return false;
    if (endDate && pub.year && String(pub.year) > endDate.substring(0, 4)) return false;
    if (status !== 'all' && pub.status !== status) return false;
    return true;
  });

  window._filteredAdminPubs = filtered;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding:24px; color:#94a3b8; font-style:italic;">No publications match the selected filters.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(pub => {
    const statusBadge = pub.status === 'verified'
      ? `<span style="background:#dcfce7; color:#15803d; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:20px; text-transform:uppercase; letter-spacing:0.04em;">Verified</span>`
      : `<span style="background:#fef9c3; color:#b45309; font-size:0.75rem; font-weight:700; padding:3px 10px; border-radius:20px; text-transform:uppercase; letter-spacing:0.04em;">Pending</span>`;
    const lecturerName = pub.lecturer_name || (window.allAdminPubs && (() => { const l = (window._allLecturers||[]).find(x => x.id === pub.lecturer_id); return l ? l.name : '—'; })()) || '—';
    return `<tr style="border-bottom:1px solid #f1f5f9; transition:background 0.15s;" onmouseover="this.style.background='#f8fafc'" onmouseout="this.style.background=''"> 
      <td style="padding:10px 12px; font-weight:600; color:#1e293b;">${pub.lecturer_name || lecturerName}</td>
      <td style="padding:10px 12px; color:#334155; max-width:280px;">${pub.title || '—'}</td>
      <td style="padding:10px 12px; color:#64748b;">${pub.year || '—'}</td>
      <td style="padding:10px 12px; color:#64748b; font-style:italic;">${pub.journal || '—'}</td>
      <td style="padding:10px 12px;">${statusBadge}</td>
    </tr>`;
  }).join('');
};

window.downloadAdminPubsCSV = function() {
  const pubs = window._filteredAdminPubs || window.allAdminPubs || [];
  if (pubs.length === 0) {
    alert('No publications to export.');
    return;
  }
  const headers = ['Lecturer', 'Title', 'Year', 'Journal/Venue', 'Authors', 'Status', 'URL'];
  const rows = pubs.map(p => [
    (p.lecturer_name || '').replace(/,/g, ';'),
    (p.title || '').replace(/,/g, ';'),
    p.year || '',
    (p.journal || '').replace(/,/g, ';'),
    (p.authors || '').replace(/,/g, ';'),
    p.status || '',
    p.url || ''
  ]);
  const csv = [headers, ...rows].map(r => r.map(v => `"${String(v).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'GIMPA_Publications_Export.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

async function handleVerificationAction(id, action) {
  try {
    const res = await fetch(`/api/publications/${id}/${action}`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders()
      }
    });
    
    if (res.ok) {
      const data = await res.json();
      
      await loadDynamicData();
      
      const resPubs = await fetch('/api/lecturer/publications', { headers: getAuthHeaders() });
      if (resPubs.ok) {
        const pubs = await resPubs.json();
        const tabContent = document.getElementById('intranetTabContent');
        if (tabContent) {
          tabContent.innerHTML = renderIntranetVerification(pubs);
          window.renderCrawledAlertsPage();
        }
        
        // Update unverified badge
        const unverified = pubs.filter(p => p && p.status === 'unverified');
        const badge = document.getElementById('unverifiedCountBadge');
        if (badge) {
          if (unverified.length > 0) {
            badge.textContent = unverified.length;
            badge.style.display = 'inline-block';
          } else {
            badge.style.display = 'none';
          }
        }
      }

      const statusMsg = document.getElementById('verifyStatusMessage');
      if (statusMsg) {
        statusMsg.className = 'status-message';
        statusMsg.style.cssText = 'display:block; background:#dcfce7; color:#15803d; border:1px solid #bbf7d0; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600; margin-bottom:16px;';
        statusMsg.textContent = data.message || `Publication successfully ${action === 'verify' ? 'verified' : 'rejected'}.`;
      }
    } else {
      const err = await res.json();
      const statusMsg = document.getElementById('verifyStatusMessage');
      if (statusMsg) {
        statusMsg.className = 'status-message';
        statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600; margin-bottom:16px;';
        statusMsg.textContent = err.detail || 'Action failed.';
      }
    }
  } catch (err) {
    console.error(err);
    const statusMsg = document.getElementById('verifyStatusMessage');
    if (statusMsg) {
      statusMsg.className = 'status-message';
      statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600; margin-bottom:16px;';
      statusMsg.textContent = 'Connection error.';
    }
  }
}

async function runAdminScan() {
  const btn = document.getElementById('triggerScanBtn');
  const statusMsg = document.getElementById('scanStatusMessage');
  
  if (!btn || !statusMsg) return;
  
  btn.disabled = true;
  btn.textContent = 'Scanning Research Databases...';
  statusMsg.className = 'status-message';
  statusMsg.style.display = 'block';
  statusMsg.style.backgroundColor = '#eff6ff';
  statusMsg.style.color = '#1d4ed8';
  statusMsg.style.borderColor = '#bfdbfe';
  statusMsg.innerHTML = '<span class="loading-spinner inline-spinner" style="margin-right:8px; display:inline-block; width:12px; height:12px; border:2px solid #1d4ed8; border-top-color:transparent; border-radius:50%; animation:spin 1s linear infinite;"></span> Live crawling Semantic Scholar API. This can take 10-30 seconds...';
  
  try {
    const res = await fetch('/api/admin/scan', {
      method: 'POST',
      headers: {
        ...getAuthHeaders()
      }
    });
    
    if (res.ok) {
      const data = await res.json();
      statusMsg.style.backgroundColor = '#dcfce7';
      statusMsg.style.color = '#15803d';
      statusMsg.style.borderColor = '#bbf7d0';
      statusMsg.textContent = `Scan completed successfully! Discovered ${data.new_publications_found} new unverified publications across all faculty.`;
      
      await loadDynamicData();
    } else {
      const err = await res.json();
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.borderColor = '#fca5a5';
      statusMsg.textContent = err.detail || 'Scan failed to complete.';
    }
  } catch (err) {
    console.error(err);
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Connection error while communicating with crawler service.';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Start Publication Scan';
  }
}

function handleAdminScopeChange(scope) {
  const deptContainer = document.getElementById('adminDepartmentContainer');
  const recipientContainer = document.getElementById('adminRecipientContainer');
  if (deptContainer) {
    deptContainer.style.display = scope === 'department' ? 'block' : 'none';
  }
  if (recipientContainer) {
    recipientContainer.style.display = scope === 'direct' ? 'block' : 'none';
  }
}

async function sendAdminMessage(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('adminMessageStatus');
  const scopeSelect = document.getElementById('adminScopeSelect');
  const departmentSelect = document.getElementById('adminDepartmentSelect');
  const recipientSelect = document.getElementById('adminRecipientSelect');
  const titleInput = document.getElementById('adminMessageTitle');
  const contentInput = document.getElementById('adminMessageContent');
  
  if (!statusMsg || !scopeSelect || !titleInput || !contentInput) return;
  
  statusMsg.style.display = 'none';
  
  const scope = scopeSelect.value;
  const title = titleInput.value;
  const content = contentInput.value;
  
  try {
    const formData = new URLSearchParams();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('scope', scope);
    
    if (scope === 'department' && departmentSelect) {
      formData.append('department', departmentSelect.value);
    } else if (scope === 'direct' && recipientSelect) {
      formData.append('recipient_id', recipientSelect.value);
    }
    
    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    
    if (res.ok) {
      statusMsg.className = 'status-message';
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#dcfce7';
      statusMsg.style.color = '#15803d';
      statusMsg.style.borderColor = '#bbf7d0';
      statusMsg.textContent = 'Message sent successfully!';
      
      titleInput.value = '';
      contentInput.value = '';
    } else {
      const err = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.borderColor = '#fca5a5';
      statusMsg.textContent = err.detail || 'Failed to send message.';
    }
  } catch (err) {
    console.error(err);
    statusMsg.className = 'status-message';
    statusMsg.style.display = 'block';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Connection error.';
  }
}

window.handleUserScopeChange = function(val) {
  const deptContainer = document.getElementById('userDepartmentContainer');
  const recipientContainer = document.getElementById('userRecipientContainer');
  if (deptContainer && recipientContainer) {
    deptContainer.style.display = val === 'department' ? 'block' : 'none';
    recipientContainer.style.display = val === 'direct' ? 'block' : 'none';
  }
};

window.sendUserMessage = async function(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('userMessageStatus');
  const scopeSelect = document.getElementById('userScopeSelect');
  const departmentSelect = document.getElementById('userDepartmentSelect');
  const recipientSelect = document.getElementById('userRecipientSelect');
  const titleInput = document.getElementById('userMessageTitle');
  const contentInput = document.getElementById('userMessageContent');
  
  if (!statusMsg || !scopeSelect || !titleInput || !contentInput) return;
  
  statusMsg.style.display = 'none';
  
  const scope = scopeSelect.value;
  const title = titleInput.value;
  const content = contentInput.value;
  
  try {
    const formData = new URLSearchParams();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('scope', scope);
    
    if (scope === 'department' && departmentSelect) {
      formData.append('department', departmentSelect.value);
    } else if (scope === 'direct' && recipientSelect) {
      formData.append('recipient_id', recipientSelect.value);
    }
    
    const res = await fetch('/api/messages', {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    
    if (res.ok) {
      statusMsg.className = 'status-message';
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#dcfce7';
      statusMsg.style.color = '#15803d';
      statusMsg.style.borderColor = '#bbf7d0';
      statusMsg.textContent = 'Message sent successfully!';
      
      titleInput.value = '';
      contentInput.value = '';
      
      setTimeout(() => switchIntranetTab('messages'), 1500);
    } else {
      const err = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.borderColor = '#fca5a5';
      statusMsg.textContent = err.detail || 'Failed to send message.';
    }
  } catch (err) {
    console.error(err);
    statusMsg.className = 'status-message';
    statusMsg.style.display = 'block';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Connection error.';
  }
};

window.submitRoleAssignment = async function(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('roleAssignStatus');
  const lecturerSelect = document.getElementById('assignLecturerSelect');
  const schoolSelect = document.getElementById('assignSchoolSelect');
  const roleTypeSelect = document.getElementById('assignRoleTypeSelect');
  
  if (!statusMsg || !lecturerSelect || !schoolSelect || !roleTypeSelect) return;
  statusMsg.style.display = 'none';
  
  try {
    const formData = new URLSearchParams();
    formData.append('lecturer_id', lecturerSelect.value);
    formData.append('school', schoolSelect.value);
    formData.append('role_type', roleTypeSelect.value);
    
    const res = await fetch('/api/admin/assign-role', {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    
    if (res.ok) {
      const data = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#dcfce7';
      statusMsg.style.color = '#15803d';
      statusMsg.style.borderColor = '#bbf7d0';
      statusMsg.textContent = data.message || 'Role assigned successfully!';
      setTimeout(() => switchIntranetTab('admin'), 1500);
    } else {
      const err = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.borderColor = '#fca5a5';
      statusMsg.textContent = err.detail || 'Failed to assign role.';
    }
  } catch (err) {
    console.error(err);
    statusMsg.className = 'status-message';
    statusMsg.style.display = 'block';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Connection error.';
  }
};

window.submitPasswordResetEmail = async function(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('passwordResetStatus');
  const lecturerSelect = document.getElementById('resetLecturerSelect');
  
  if (!statusMsg || !lecturerSelect) return;
  statusMsg.style.display = 'none';
  
  try {
    const formData = new URLSearchParams();
    formData.append('lecturer_id', lecturerSelect.value);
    
    const res = await fetch('/api/admin/reset-password-email', {
      method: 'POST',
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: formData
    });
    
    if (res.ok) {
      const data = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#dcfce7';
      statusMsg.style.color = '#15803d';
      statusMsg.style.borderColor = '#bbf7d0';
      statusMsg.innerHTML = `
        <strong>Success!</strong> ${data.message}<br>
        <div style="margin-top: 6px; padding: 6px; background: #fff; border: 1px solid #bbf7d0; border-radius: 4px; font-family: monospace; font-size: 0.95rem; text-align: center;">
          Default Password: <strong>${data.default_password}</strong>
        </div>
      `;
    } else {
      const err = await res.json();
      statusMsg.className = 'status-message';
      statusMsg.style.display = 'block';
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.borderColor = '#fca5a5';
      statusMsg.textContent = err.detail || 'Failed to send reset email.';
    }
  } catch (err) {
    console.error(err);
    statusMsg.className = 'status-message';
    statusMsg.style.display = 'block';
    statusMsg.style.backgroundColor = '#fef2f2';
    statusMsg.style.color = '#b91c1c';
    statusMsg.style.borderColor = '#fca5a5';
    statusMsg.textContent = 'Connection error.';
  }
};

window.allAdminPubs = [];
window.updateAdminPubsView = function() {
  const tableBody = document.getElementById('adminPubsTableBody');
  if (!tableBody) return;
  
  const lecturerFilter = document.getElementById('filterLecturer').value;
  const startDateVal = document.getElementById('filterDateStart').value;
  const endDateVal = document.getElementById('filterDateEnd').value;
  const statusFilter = document.getElementById('filterStatus').value;
  
  const startYear = startDateVal ? new Date(startDateVal).getFullYear() : null;
  const endYear = endDateVal ? new Date(endDateVal).getFullYear() : null;
  
  const filtered = window.allAdminPubs.filter(pub => {
    if (lecturerFilter !== 'all' && pub.lecturer_id.toString() !== lecturerFilter) return false;
    if (statusFilter !== 'all' && pub.status !== statusFilter) return false;
    if (pub.year) {
      const pubYear = parseInt(pub.year);
      if (startYear && pubYear < startYear) return false;
      if (endYear && pubYear > endYear) return false;
    } else if (startYear || endYear) {
      return false;
    }
    return true;
  });
  
  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="padding: 24px; text-align: center; color: var(--text-body); font-style: italic;">
          No matching publications found.
        </td>
      </tr>
    `;
    return;
  }
  
  tableBody.innerHTML = filtered.map(pub => {
    const isVerified = pub.status === 'verified';
    return `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 12px; font-weight: 600; color: var(--ink); white-space: nowrap;">${pub.lecturer_name}</td>
        <td style="padding: 10px 12px; color: var(--text-dark);">${pub.title}</td>
        <td style="padding: 10px 12px; color: var(--text-body);">${pub.year || 'N/A'}</td>
        <td style="padding: 10px 12px; color: var(--text-body); font-style: italic;">${pub.journal || 'Unknown'}</td>
        <td style="padding: 10px 12px; white-space: nowrap;">
          <span style="background: ${isVerified ? '#dcfce7' : '#ffedd5'}; color: ${isVerified ? '#15803d' : '#ea580c'}; font-size: 0.72rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; text-transform: uppercase;">
            ${pub.status}
          </span>
        </td>
      </tr>
    `;
  }).join('');
};

window.downloadAdminPubsCSV = function() {
  const lecturerFilter = document.getElementById('filterLecturer').value;
  const startDateVal = document.getElementById('filterDateStart').value;
  const endDateVal = document.getElementById('filterDateEnd').value;
  const statusFilter = document.getElementById('filterStatus').value;
  
  const startYear = startDateVal ? new Date(startDateVal).getFullYear() : null;
  const endYear = endDateVal ? new Date(endDateVal).getFullYear() : null;
  
  const filtered = window.allAdminPubs.filter(pub => {
    if (lecturerFilter !== 'all' && pub.lecturer_id.toString() !== lecturerFilter) return false;
    if (statusFilter !== 'all' && pub.status !== statusFilter) return false;
    if (pub.year) {
      const pubYear = parseInt(pub.year);
      if (startYear && pubYear < startYear) return false;
      if (endYear && pubYear > endYear) return false;
    } else if (startYear || endYear) {
      return false;
    }
    return true;
  });
  
  if (filtered.length === 0) {
    alert("No publications match the current filters to download.");
    return;
  }
  
  const headers = ['Lecturer', 'Title', 'Year', 'Journal/Venue', 'Status'];
  const rows = filtered.map(pub => [
    `"${pub.lecturer_name.replace(/"/g, '""')}"`,
    `"${pub.title.replace(/"/g, '""')}"`,
    `"${(pub.year || '').replace(/"/g, '""')}"`,
    `"${(pub.journal || '').replace(/"/g, '""')}"`,
    `"${pub.status.replace(/"/g, '""')}"`
  ]);
  
  const csvContent = [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "publications_report.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Make intranet helper functions globally accessible
window.switchIntranetTab = switchIntranetTab;
window.handleVerificationAction = handleVerificationAction;
window.runAdminScan = runAdminScan;
window.sendAdminMessage = sendAdminMessage;
window.handleAdminScopeChange = handleAdminScopeChange;

// ── PROFILE TAB: Update Profile Details ──────────────────────────────────────
window.handleUpdateProfileSubmit = async function(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('updateProfileStatus');
  if (!statusMsg) return;
  statusMsg.style.display = 'none';

  const formData = new URLSearchParams();
  formData.append('name',         document.getElementById('updateNameInput').value.trim());
  formData.append('spec',         document.getElementById('updateSpecInput').value.trim());
  formData.append('office',       document.getElementById('updateOfficeInput').value.trim());
  formData.append('phone',        document.getElementById('updatePhoneInput').value.trim());
  formData.append('extra_label',  document.getElementById('updateExtraLabel').value.trim());
  formData.append('extra_value',  document.getElementById('updateExtraValue').value.trim());
  formData.append('department',   document.getElementById('updateDepartmentInput').value);

  try {
    const res = await fetch('/api/lecturer/me', {
      method: 'PUT',
      headers: { ...getAuthHeaders(), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    });
    const data = await res.json();
    statusMsg.style.display = 'block';
    if (res.ok) {
      statusMsg.style.cssText = 'display:block; background:#dcfce7; color:#15803d; border:1px solid #bbf7d0; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;';
      statusMsg.textContent = data.message || 'Profile updated successfully!';
      await loadDynamicData();
    } else {
      statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;';
      statusMsg.textContent = data.detail || 'Failed to update profile.';
    }
  } catch (err) {
    statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;';
    statusMsg.textContent = 'Connection error.';
  }
};

// ── PROFILE TAB: Change Password ─────────────────────────────────────────────
window.handleChangePasswordSubmit = async function(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('changePasswordStatus');
  if (!statusMsg) return;
  statusMsg.style.display = 'none';

  const oldPw  = document.getElementById('oldPasswordInput').value;
  const newPw  = document.getElementById('newPasswordInput').value;
  const confPw = document.getElementById('confirmNewPasswordInput').value;

  if (newPw !== confPw) {
    statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;';
    statusMsg.textContent = 'New passwords do not match.';
    return;
  }
  if (newPw.length < 6) {
    statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;';
    statusMsg.textContent = 'New password must be at least 6 characters.';
    return;
  }

  const formData = new URLSearchParams();
  formData.append('old_password', oldPw);
  formData.append('new_password', newPw);

  try {
    const res = await fetch('/api/change-password', {
      method: 'POST',
      headers: { ...getAuthHeaders(), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    });
    const data = await res.json();
    statusMsg.style.display = 'block';
    if (res.ok) {
      statusMsg.style.cssText = 'display:block; background:#dcfce7; color:#15803d; border:1px solid #bbf7d0; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;';
      statusMsg.textContent = data.message || 'Password changed successfully!';
      document.getElementById('changePasswordForm').reset();
    } else {
      statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;';
      statusMsg.textContent = data.detail || 'Failed to change password.';
    }
  } catch (err) {
    statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;';
    statusMsg.textContent = 'Connection error.';
  }
};

// ── PROFILE TAB: My Projects ─────────────────────────────────────────────────
window.loadMyProjects = async function() {
  const container = document.getElementById('myProjectsList');
  if (!container) return;
  container.innerHTML = '<div style="text-align:center; padding:20px; color:var(--text-body); font-style:italic; font-size:0.85rem;">Loading projects…</div>';

  try {
    const res = await fetch('/api/lecturer/projects', { headers: getAuthHeaders() });
    if (!res.ok) throw new Error('API error');
    const projects = await res.json();

    if (projects.length === 0) {
      container.innerHTML = '<div style="text-align:center; padding:24px; color:var(--text-body); font-style:italic; font-size:0.85rem; background:#f8fafc; border:1px dashed #c8d8ea; border-radius:6px;">No projects added yet. Use the form below to add your first project.</div>';
      return;
    }

    container.innerHTML = projects.map(proj => `
      <div id="projCard_${proj.id}" style="background:#fff; border:1px solid #e2e8f0; border-radius:6px; padding:16px 18px; box-shadow:0 1px 3px rgba(0,0,0,0.06);">
        <!-- View Mode -->
        <div id="projView_${proj.id}">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:12px;">
            <div style="flex:1;">
              <div style="font-size:1rem; font-weight:700; color:var(--ink); margin-bottom:4px;">${proj.title}</div>
              <div style="font-size:0.85rem; color:var(--text-body); line-height:1.5; margin-bottom:6px;">${proj.description || ''}</div>
              ${proj.url ? `<a href="${proj.url}" target="_blank" style="font-size:0.78rem; color:var(--accent); font-weight:600;">Visit Project →</a>` : ''}
            </div>
            <div style="display:flex; gap:6px; flex-shrink:0;">
              <button onclick="window.handleEditProject(${proj.id})" style="background:none; border:1px solid #c8d8ea; color:var(--primary); border-radius:4px; padding:5px 10px; font-size:0.78rem; font-weight:600; cursor:pointer;">✏ Edit</button>
              <button onclick="window.handleDeleteProject(${proj.id})" style="background:none; border:1px solid #fca5a5; color:#dc2626; border-radius:4px; padding:5px 10px; font-size:0.78rem; font-weight:600; cursor:pointer;">✕ Delete</button>
            </div>
          </div>
        </div>
        <!-- Edit Mode (hidden by default) -->
        <div id="projEdit_${proj.id}" style="display:none;">
          <div style="margin-bottom:10px;">
            <label style="display:block; font-size:0.72rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Title *</label>
            <input id="editProjTitle_${proj.id}" type="text" value="${proj.title.replace(/"/g, '&quot;')}" required style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:7px 10px; font-size:0.88rem; outline:none; box-sizing:border-box;">
          </div>
          <div style="margin-bottom:10px;">
            <label style="display:block; font-size:0.72rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">Description *</label>
            <textarea id="editProjDesc_${proj.id}" rows="3" required style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:7px 10px; font-size:0.88rem; outline:none; resize:vertical; font-family:inherit; box-sizing:border-box;">${(proj.description || '').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</textarea>
          </div>
          <div style="margin-bottom:12px;">
            <label style="display:block; font-size:0.72rem; font-weight:600; text-transform:uppercase; color:var(--text-body); margin-bottom:4px;">URL (optional)</label>
            <input id="editProjUrl_${proj.id}" type="url" value="${(proj.url || '').replace(/"/g, '&quot;')}" placeholder="https://..." style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:4px; padding:7px 10px; font-size:0.88rem; outline:none; box-sizing:border-box;">
          </div>
          <div style="display:flex; gap:8px;">
            <button onclick="window.handleSaveProjectEdit(${proj.id})" class="btn btn-primary" style="flex:1; justify-content:center; height:34px; font-size:0.85rem; font-weight:700;">💾 Save Changes</button>
            <button onclick="window.handleCancelProjectEdit(${proj.id})" class="btn btn-outline" style="justify-content:center; height:34px; font-size:0.85rem;">Cancel</button>
          </div>
          <div id="editProjStatus_${proj.id}" style="display:none; margin-top:8px;"></div>
        </div>
      </div>
    `).join('');
  } catch (err) {
    container.innerHTML = '<div style="text-align:center; padding:16px; color:#b91c1c; font-size:0.85rem;">Failed to load projects.</div>';
  }
};

window.handleEditProject = function(id) {
  document.getElementById(`projView_${id}`).style.display = 'none';
  document.getElementById(`projEdit_${id}`).style.display = 'block';
};

window.handleCancelProjectEdit = function(id) {
  document.getElementById(`projView_${id}`).style.display = 'block';
  document.getElementById(`projEdit_${id}`).style.display = 'none';
};

window.handleSaveProjectEdit = async function(id) {
  const statusEl = document.getElementById(`editProjStatus_${id}`);
  const title       = document.getElementById(`editProjTitle_${id}`).value.trim();
  const description = document.getElementById(`editProjDesc_${id}`).value.trim();
  const url         = document.getElementById(`editProjUrl_${id}`).value.trim();

  if (!title || !description) {
    if (statusEl) { statusEl.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:8px 12px; border-radius:4px; font-size:0.82rem; font-weight:600;'; statusEl.textContent = 'Title and description are required.'; }
    return;
  }

  const formData = new URLSearchParams();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('url', url);

  try {
    const res = await fetch(`/api/lecturer/projects/${id}`, {
      method: 'PUT',
      headers: { ...getAuthHeaders(), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    });
    if (res.ok) {
      await window.loadMyProjects();
    } else {
      const err = await res.json();
      if (statusEl) { statusEl.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:8px 12px; border-radius:4px; font-size:0.82rem; font-weight:600;'; statusEl.textContent = err.detail || 'Update failed.'; }
    }
  } catch (e) {
    if (statusEl) { statusEl.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:8px 12px; border-radius:4px; font-size:0.82rem; font-weight:600;'; statusEl.textContent = 'Connection error.'; }
  }
};

window.handleDeleteProject = async function(id) {
  if (!confirm('Are you sure you want to delete this project? This cannot be undone.')) return;
  try {
    const res = await fetch(`/api/lecturer/projects/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (res.ok) {
      await window.loadMyProjects();
    } else {
      const err = await res.json();
      alert(err.detail || 'Failed to delete project.');
    }
  } catch (e) {
    alert('Connection error.');
  }
};

window.handleAddProject = async function(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('addProjectStatus');
  if (statusMsg) statusMsg.style.display = 'none';

  const title       = document.getElementById('projTitleInput').value.trim();
  const description = document.getElementById('projDescInput').value.trim();
  const url         = document.getElementById('projUrlInput').value.trim();

  const formData = new URLSearchParams();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('url', url);

  try {
    const res = await fetch('/api/lecturer/projects', {
      method: 'POST',
      headers: { ...getAuthHeaders(), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    });
    const data = await res.json();
    if (res.ok) {
      if (statusMsg) { statusMsg.style.cssText = 'display:block; background:#dcfce7; color:#15803d; border:1px solid #bbf7d0; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;'; statusMsg.textContent = data.message || 'Project added!'; }
      document.getElementById('addProjectForm').reset();
      await window.loadMyProjects();
    } else {
      if (statusMsg) { statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;'; statusMsg.textContent = data.detail || 'Failed to add project.'; }
    }
  } catch (e) {
    if (statusMsg) { statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;'; statusMsg.textContent = 'Connection error.'; }
  }
};

// ── VERIFICATION TAB: Submit Publication Manually ────────────────────────────
window.handleSubmitPublication = async function(event) {
  event.preventDefault();
  const statusMsg = document.getElementById('submitPubStatus');
  if (statusMsg) statusMsg.style.display = 'none';

  const title   = document.getElementById('pubTitleInput').value.trim();
  const year    = document.getElementById('pubYearInput').value.trim();
  const journal = document.getElementById('pubJournalInput').value.trim();
  const authors = document.getElementById('pubAuthorsInput').value.trim();
  const summary = document.getElementById('pubSummaryInput').value.trim();
  const url     = document.getElementById('pubUrlInput').value.trim();

  const formData = new URLSearchParams();
  formData.append('title',   title);
  formData.append('year',    year);
  formData.append('journal', journal);
  formData.append('authors', authors);
  formData.append('summary', summary);
  formData.append('url',     url);

  try {
    const res = await fetch('/api/lecturer/publications', {
      method: 'POST',
      headers: { ...getAuthHeaders(), 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData
    });
    const data = await res.json();
    if (statusMsg) statusMsg.style.display = 'block';
    if (res.ok) {
      if (statusMsg) { statusMsg.style.cssText = 'display:block; background:#dcfce7; color:#15803d; border:1px solid #bbf7d0; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;'; statusMsg.textContent = data.message || 'Publication submitted successfully!'; }
      document.getElementById('submitPublicationForm').reset();
      // Reload the verification tab to show the new publication
      setTimeout(async () => {
        const resPubs = await fetch('/api/lecturer/publications', { headers: getAuthHeaders() });
        if (resPubs.ok) {
          const pubs = await resPubs.json();
          const tabContent = document.getElementById('intranetTabContent');
          if (tabContent) {
            tabContent.innerHTML = renderIntranetVerification(pubs);
            window.renderCrawledAlertsPage();
          }
          const unverified = pubs.filter(p => p && p.status === 'unverified');
          const badge = document.getElementById('unverifiedCountBadge');
          if (badge) {
            if (unverified.length > 0) {
              badge.textContent = unverified.length;
              badge.style.display = 'inline-block';
            } else {
              badge.style.display = 'none';
            }
          }
        }
        await loadDynamicData();
      }, 800);
    } else {
      if (statusMsg) { statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;'; statusMsg.textContent = data.detail || 'Failed to submit publication.'; }
    }
  } catch (e) {
    if (statusMsg) { statusMsg.style.cssText = 'display:block; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; padding:10px 14px; border-radius:6px; font-size:0.85rem; font-weight:600;'; statusMsg.textContent = 'Connection error.'; }
  }
};

// ── VERIFICATION TAB: Delete Publication ─────────────────────────────────────
window.handleDeletePublication = async function(id) {
  if (!confirm('Remove this publication from your record? This cannot be undone.')) return;
  try {
    const res = await fetch(`/api/lecturer/publications/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (res.ok) {
      // Refresh the verification tab
      const resPubs = await fetch('/api/lecturer/publications', { headers: getAuthHeaders() });
      if (resPubs.ok) {
        const pubs = await resPubs.json();
        const tabContent = document.getElementById('intranetTabContent');
        if (tabContent) {
          tabContent.innerHTML = renderIntranetVerification(pubs);
          window.renderCrawledAlertsPage();
        }
        const unverified = pubs.filter(p => p && p.status === 'unverified');
        const badge = document.getElementById('unverifiedCountBadge');
        if (badge) {
          if (unverified.length > 0) {
            badge.textContent = unverified.length;
            badge.style.display = 'inline-block';
          } else {
            badge.style.display = 'none';
          }
        }
      }
      await loadDynamicData();
    } else {
      const err = await res.json();
      alert(err.detail || 'Failed to delete publication.');
    }
  } catch (e) {
    alert('Connection error.');
  }
};

function publicationDetail(pubId) {
  let foundPub = null;
  let foundLecturer = null;
  
  for (const l of faculty) {
    const p = l.pubs.find(x => x.id === pubId);
    if (p) {
      foundPub = p;
      foundLecturer = l;
      break;
    }
  }
  
  if (!foundPub || !foundLecturer) {
    return `
      <section class="section">
        <div class="container" style="text-align: center; padding: 40px 0;">
          <h3>Publication Not Found</h3>
          <p style="color: var(--text-body); margin: 12px 0 20px;">The requested research publication could not be found.</p>
          <a href="#research" class="btn btn-dark">View Research Directory</a>
        </div>
      </section>
    `;
  }
  
  return `
    <section class="section" style="background: #f8fafc; min-height: 70vh; padding: 40px 0;">
      <div class="container" style="max-width: 850px;">
        <div style="margin-bottom: 24px;">
          <a href="#profile/${foundLecturer.id}" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 8px;">
            &larr; Back to ${foundLecturer.name}'s Profile
          </a>
        </div>
        
        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid var(--accent); border-radius: 14px; padding: 40px; box-shadow: 0 4px 14px rgba(0,0,0,0.05);">
          
          <div style="display: flex; gap: 14px; align-items: center; margin-bottom: 20px;">
            ${getPublicationTypeBadge(foundPub.type)}
            <span style="color: var(--text-body); font-size: 0.85rem; font-weight: 700;">Year: ${foundPub.year || 'Recent'}</span>
          </div>

          <div style="margin-bottom: 24px;">
            <h1 style="font-size: 1.7rem; font-weight: 800; color: var(--primary); margin-bottom: 14px; line-height: 1.35;">${foundPub.title}</h1>
            <div style="font-size: 0.95rem; color: var(--text-dark); margin-bottom: 8px;">
              <div style="margin-bottom: 8px; font-size: 0.92rem;"><strong>Authors:</strong> ${formatAuthorsWithHighlight(foundPub.authors, foundLecturer.name)}</div>
              <div style="font-style: italic; color: #0369a1; font-weight: 600; font-size: 0.95rem;"><strong>Published in:</strong> ${foundPub.journal || 'Academic Journal'}</div>
            </div>
          </div>
          
          <div style="border-top: 1px solid #f1f5f9; padding-top: 24px; margin-bottom: 30px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Abstract / Summary</h3>
            <p style="color: var(--text-body); line-height: 1.7; font-size: 0.95rem; text-align: justify;">${foundPub.summary || 'No abstract or summary is available for this publication.'}</p>
          </div>
          
          ${foundPub.url ? `
            <div style="text-align: center; border-top: 1px solid #f1f5f9; padding-top: 24px;">
              <a href="${foundPub.url}" target="_blank" class="btn btn-primary" style="justify-content: center; height: 44px; font-weight: 700; padding: 0 28px;">
                Access Full Publication Document &nearr;
              </a>
            </div>
          ` : ''}
        </article>
      </div>
    </section>
  `;
}

function projectDetail(projId) {
  let foundProj = null;
  let foundLecturer = null;
  
  for (const l of faculty) {
    const p = l.projects.find(x => x.id === projId);
    if (p) {
      foundProj = p;
      foundLecturer = l;
      break;
    }
  }
  
  if (!foundProj || !foundLecturer) {
    return `
      <section class="section">
        <div class="container" style="text-align: center; padding: 40px 0;">
          <h3>Project Not Found</h3>
          <p style="color: var(--text-body); margin: 12px 0 20px;">The requested research project could not be found.</p>
          <a href="#contact" class="btn btn-dark">View Staff Directory</a>
        </div>
      </section>
    `;
  }
  
  return `
    <section class="section" style="background: #f8fafc; min-height: 70vh; padding: 40px 0;">
      <div class="container" style="max-width: 800px;">
        <div style="margin-bottom: 24px;">
          <a href="#profile/${foundLecturer.id}" class="btn btn-outline" style="display: inline-flex; align-items: center; gap: 8px;">
            &larr; Back to ${foundLecturer.name}'s Profile
          </a>
        </div>
        
        <article style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius); padding: 40px; box-shadow: var(--shadow);">
          <div style="display: flex; gap: 12px; margin-bottom: 16px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">
            <span style="color: var(--accent);">Research Project</span>
          </div>
          
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--primary); margin-bottom: 16px; line-height: 1.35;">${foundProj.title}</h2>
          
          <div style="margin-bottom: 20px; font-size: 0.95rem; color: var(--text-dark);">
            <div><strong>Lead Researcher:</strong> ${foundLecturer.name} (${foundLecturer.role})</div>
          </div>
          
          <div style="border-top: 1px solid #f1f5f9; padding-top: 24px; margin-bottom: 30px;">
            <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">Project Description</h3>
            <p style="color: var(--text-body); line-height: 1.7; font-size: 0.95rem; text-align: justify;">${foundProj.description || 'No description is available for this project.'}</p>
          </div>
          
          ${foundProj.url ? `
            <div style="text-align: center;">
              <a href="${foundProj.url}" target="_blank" class="btn btn-primary" style="justify-content: center; height: 44px; font-weight: 600; padding: 0 24px;">
                Visit Project Website &nearr;
              </a>
            </div>
          ` : ''}
        </article>
      </div>
    </section>
  `;
}

function programmeDetail(progId) {
  const p = programmesData.find(x => x.id === progId);
  
  if (!p) {
    return `
      <section class="section" style="min-height: 70vh; padding: 60px 0; background: #f8fafc;">
        <div class="container" style="text-align: center; max-width: 600px;">
          <h2 style="color: var(--primary); margin-bottom: 12px;">Programme Not Found</h2>
          <p style="color: var(--text-body); margin-bottom: 24px;">The requested academic degree programme could not be found in our catalogue.</p>
          <a href="#study" class="btn btn-primary">Explore All Programmes →</a>
        </div>
      </section>
    `;
  }

  let catGroup = 'Master';
  let badgeClass = 'badge-postgrad';
  if (p.level === 'Undergraduate') { catGroup = 'Undergraduate'; badgeClass = 'badge-undergrad'; }
  else if (p.level === 'Doctoral') { catGroup = 'Doctoral'; badgeClass = 'badge-phd'; }
  else if (p.level === 'Postgraduate Diploma') { catGroup = 'Postgraduate Diploma'; badgeClass = 'badge-cert'; }

  let heroImg = 'assets/images/students-hub.jpg';
  if (p.id.includes('cyber')) heroImg = 'assets/images/cybersecurity-lab.jpg';
  else if (p.id.includes('analytics') || p.id.includes('science')) heroImg = 'assets/images/ai-data-science.jpg';
  else if (p.id.includes('phd') || p.id.includes('mphil')) heroImg = 'assets/images/campus-hero.png';
  else if (p.id.includes('ict')) heroImg = 'assets/images/1000211024.png';

  return `
    <!-- Programme Detail Hero -->
    <section class="hero-split-section" style="padding: 40px 0; background: linear-gradient(135deg, #001e36 0%, #002b49 60%, #083b66 100%); color: #ffffff;">
      <div class="container">
        <!-- Breadcrumbs -->
        <div style="margin-bottom: 20px; font-size: 0.85rem; color: #94a3b8;">
          <a href="#home" style="color: #cbd5e1; text-decoration:none;">Home</a> &nbsp;/&nbsp; 
          <a href="#study" style="color: #cbd5e1; text-decoration:none;">Study With Us</a> &nbsp;/&nbsp; 
          <span style="color: #38bdf8; font-weight: 600;">${p.title}</span>
        </div>

        <div class="hero-split-grid" style="align-items: center;">
          <div class="hero-text-side fade-up">
            <div style="display: flex; gap: 10px; margin-bottom: 14px; align-items: center;">
              <span class="prog-level-badge ${badgeClass}" style="font-size: 0.78rem; padding: 5px 12px;">${p.level}</span>
              <span style="color: #38bdf8; font-weight: 700; font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em;">GIMPA SOTSS</span>
            </div>
            <h1 style="color: #ffffff; font-size: 2.3rem; line-height: 1.25; margin-bottom: 14px;">${p.title}</h1>
            <p style="color: #cbd5e1; font-size: 1.05rem; line-height: 1.65; margin-bottom: 24px;">
              ${p.overview || p.shortDesc}
            </p>
            
            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <a href="https://apply.gimpa.edu.gh/start" target="_blank" class="btn btn-primary" style="background: #ffd700; color: #002b49; border-color: #ffd700; font-weight: 700; padding: 12px 26px; font-size: 0.95rem;">Apply for this Programme →</a>
              <a href="#contact" class="btn btn-outline" style="color: #ffffff; border-color: rgba(255,255,255,0.4); padding: 12px 22px;">Inquire with Admissions</a>
            </div>
          </div>
          
          <div class="hero-slider-side fade-up fade-up-d1">
            <div style="border-radius: 16px; overflow: hidden; box-shadow: 0 16px 36px rgba(0,0,0,0.3); border: 2px solid rgba(56, 189, 248, 0.3); aspect-ratio: 16/10;">
              <img src="${heroImg}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Programme Main Details Layout -->
    <section class="section" style="background: #f8fafc; padding: 60px 0;">
      <div class="container">
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 40px; align-items: flex-start;">
          
          <!-- Left Column: Detailed Sections -->
          <div style="display: flex; flex-direction: column; gap: 36px;">
            
            <!-- Section 1: Admission Requirements (CRITICAL USER REQUEST) -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px;">
                <div style="width: 40px; height: 40px; border-radius: 10px; background: #e0f2fe; color: #0284c7; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800;">📋</div>
                <div>
                  <h2 style="color: var(--primary); font-size: 1.4rem; font-weight: 800; margin: 0;">Admission Requirements</h2>
                  <p style="color: var(--text-body); font-size: 0.84rem; margin: 0;">Criteria and qualifications needed to gain admission into this programme</p>
                </div>
              </div>

              <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 20px;">
                ${p.requirements ? p.requirements.map((req, idx) => `
                  <div style="display: flex; gap: 14px; align-items: flex-start; padding: 16px 20px; background: #f8fafc; border-left: 4px solid #0284c7; border-radius: 6px;">
                    <div style="font-weight: 800; color: #0284c7; font-size: 0.95rem; line-height: 1.4;">${idx + 1}.</div>
                    <div style="color: #1e293b; font-size: 0.94rem; line-height: 1.6; font-weight: 500;">${req}</div>
                  </div>
                `).join('') : `
                  <div style="padding: 14px 18px; background: #f8fafc; border-radius: 6px; color: var(--text-body);">
                    Standard GIMPA entry requirements apply. Please contact admissions office for customized qualification review.
                  </div>
                `}
              </div>

              <div style="margin-top: 24px; padding: 16px; background: #fef3c7; border: 1px solid #fde68a; border-radius: 8px; font-size: 0.88rem; color: #92400e; display: flex; gap: 10px; align-items: center;">
                <span style="font-size: 1.2rem;">💡</span>
                <span>International students and applicants with foreign certificates must submit evaluation letters from the <strong>Ghana Tertiary Education Commission (GTEC)</strong>.</span>
              </div>
            </div>

            <!-- Section 2: Curriculum & Core Courses -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px;">
                <div style="width: 40px; height: 40px; border-radius: 10px; background: #dcfce7; color: #15803d; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800;">📚</div>
                <div>
                  <h2 style="color: var(--primary); font-size: 1.4rem; font-weight: 800; margin: 0;">Curriculum &amp; Key Modules</h2>
                  <p style="color: var(--text-body); font-size: 0.84rem; margin: 0;">Core subject areas and practical competencies covered across semesters</p>
                </div>
              </div>

              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; margin-top: 20px;">
                ${p.curriculum ? p.curriculum.map(c => `
                  <div style="display: flex; align-items: center; gap: 10px; padding: 12px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px;">
                    <span style="color: #10b981; font-weight: 800;">✔</span>
                    <span style="font-size: 0.9rem; font-weight: 600; color: #1e293b;">${c}</span>
                  </div>
                `).join('') : ''}
              </div>
            </div>

            <!-- Section 3: Career Prospects -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 32px; box-shadow: 0 4px 14px rgba(0,0,0,0.04);">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 18px;">
                <div style="width: 40px; height: 40px; border-radius: 10px; background: #f3e8ff; color: #7e22ce; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800;">🚀</div>
                <div>
                  <h2 style="color: var(--primary); font-size: 1.4rem; font-weight: 800; margin: 0;">Career Prospects &amp; Roles</h2>
                  <p style="color: var(--text-body); font-size: 0.84rem; margin: 0;">Industry job roles and leadership pathways available to graduates</p>
                </div>
              </div>

              <div style="display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px;">
                ${p.careers ? p.careers.map(car => `
                  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; background: #f3e8ff; color: #6b21a8; border: 1px solid #e9d5ff; border-radius: 999px; font-size: 0.86rem; font-weight: 700;">
                    ★ ${car}
                  </span>
                `).join('') : ''}
              </div>
            </div>

          </div>

          <!-- Right Column: Key Facts & Quick Application Sidebar -->
          <div style="position: sticky; top: 90px; display: flex; flex-direction: column; gap: 24px;">
            
            <!-- Quick Facts Card -->
            <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; padding: 26px; box-shadow: 0 4px 14px rgba(0,0,0,0.05);">
              <h3 style="font-size: 1.15rem; font-weight: 800; color: var(--primary); margin-bottom: 18px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Programme Summary</h3>
              
              <div style="display: flex; flex-direction: column; gap: 16px; font-size: 0.9rem;">
                <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                  <span style="color: var(--text-body);">Academic Level:</span>
                  <strong style="color: var(--primary);">${p.level}</strong>
                </div>

                <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                  <span style="color: var(--text-body);">Duration:</span>
                  <strong style="color: var(--primary);">${p.duration}</strong>
                </div>

                <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                  <span style="color: var(--text-body);">Study Mode:</span>
                  <strong style="color: var(--primary);">${p.mode}</strong>
                </div>

                <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px;">
                  <span style="color: var(--text-body);">Campus:</span>
                  <strong style="color: var(--primary);">Greenhill, Accra</strong>
                </div>

                <div style="display: flex; justify-content: space-between; padding-bottom: 4px;">
                  <span style="color: var(--text-body);">Accreditation:</span>
                  <strong style="color: #15803d;">100% GTEC Accredited</strong>
                </div>
              </div>

              <div style="margin-top: 24px;">
                <a href="https://apply.gimpa.edu.gh/start" target="_blank" class="btn btn-primary" style="width: 100%; justify-content: center; padding: 12px; font-weight: 700; font-size: 0.95rem; background: #ffd700; color: #002b49; border-color: #ffd700;">Apply for Admission →</a>
              </div>
            </div>

            <!-- Admissions Support Card -->
            <div style="background: linear-gradient(135deg, #001e36 0%, #002b49 100%); color: #ffffff; border-radius: 16px; padding: 24px; box-shadow: 0 4px 14px rgba(0,0,0,0.15);">
              <h4 style="color: #38bdf8; font-size: 1rem; font-weight: 800; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Need Admissions Advice?</h4>
              <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.5; margin-bottom: 16px;">
                Our academic advisors are available to review your certificates and help you choose the best degree pathway.
              </p>
              <div style="font-size: 0.85rem; margin-bottom: 14px;">
                <div style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase;">Email:</div>
                <a href="mailto:csshead@gimpa.edu.gh" style="color: #38bdf8; font-weight: 700;">csshead@gimpa.edu.gh</a>
              </div>
              <div style="font-size: 0.85rem; margin-bottom: 18px;">
                <div style="color: #94a3b8; font-size: 0.75rem; text-transform: uppercase;">Hotline:</div>
                <strong style="color: #ffffff;">+233 (0) 501620138</strong>
              </div>
              <a href="#contact" class="btn btn-outline" style="width: 100%; justify-content: center; font-size: 0.82rem; padding: 8px; color: #fff; border-color: rgba(255,255,255,0.4);">Send Admissions Inquiry</a>
            </div>

          </div>

        </div>
      </div>
    </section>
  `;
}

// Router Action
function render() {
  const r = getRoute();
  
  // Intercept logout route
  if (r === 'logout') {
    localStorage.removeItem('sotssToken');
    localStorage.removeItem('sotssUser');
    location.hash = '#home';
    return;
  }
  
  let viewHTML = '';
  let activeTab = '';

  if (r === 'home') {
    viewHTML = home();
    activeTab = 'home';
  } else if (r === 'about' || r === 'introduction') {
    viewHTML = about();
    activeTab = 'about';
  } else if (r === 'study' || r === 'programmes') {
    viewHTML = study();
    activeTab = 'study';
  } else if (r === 'students') {
    viewHTML = students();
    activeTab = 'students';
  } else if (r === 'research') {
    viewHTML = research();
    activeTab = 'research';
  } else if (r === 'faculty' || r === 'staff') {
    viewHTML = facultyPage();
    activeTab = 'faculty';
  } else if (r === 'alumni' || r === 'cooperation') {
    viewHTML = alumni();
    activeTab = 'alumni';
  } else if (r === 'contact') {
    viewHTML = contact();
    activeTab = 'contact';
  } else if (r === 'news') {
    viewHTML = newsList();
    activeTab = 'news';
    autoSyncNews();
  } else if (r === 'login') {
    if (localStorage.getItem('sotssToken')) {
      location.hash = '#intranet';
      return;
    }
    viewHTML = loginView();
    activeTab = '';
  } else if (r === 'signup') {
    if (localStorage.getItem('sotssToken')) {
      location.hash = '#intranet';
      return;
    }
    viewHTML = signupView();
    activeTab = '';
  } else if (r === 'intranet') {
    if (!localStorage.getItem('sotssToken')) {
      location.hash = '#login';
      return;
    }
    viewHTML = intranetView();
    activeTab = '';
  } else if (r.startsWith('profile/')) {
    viewHTML = profile(r.split('/')[1]);
    activeTab = 'faculty';
  } else if (r.startsWith('publication/')) {
    viewHTML = publicationDetail(parseInt(r.split('/')[1]));
    activeTab = 'research';
  } else if (r.startsWith('project/')) {
    viewHTML = projectDetail(parseInt(r.split('/')[1]));
    activeTab = 'research';
  } else if (r.startsWith('programme/')) {
    viewHTML = programmeDetail(r.split('/')[1]);
    activeTab = 'study';
  } else if (r.startsWith('news-')) {
    viewHTML = newsDetail(r);
    activeTab = 'news';
  } else {
    viewHTML = home();
    activeTab = 'home';
  }

  root.innerHTML = topBar() + header(activeTab) + viewHTML + footer();
  
  // Initialize dynamic details
  renderAuthState();
  initSlideshow();

  // If in intranet route, trigger initial tab display
  if (r === 'intranet') {
    switchIntranetTab(window.activeIntranetTab || 'profile');
  }

  // Scroll animations IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = 'running';
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up, .fade-up-d1, .fade-up-d2, .fade-up-d3').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
  });

  window.scrollTo(0, 0);
}

// Listeners

// Handle routing transitions
window.addEventListener('hashchange', render);

// Document Delegation for SPA Events
document.addEventListener('submit', async function(event) {
  if (event.target.id === 'loginForm') {
    event.preventDefault();
    const email = document.getElementById('emailInput').value.trim().toLowerCase();
    const password = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('loginErrorMessage');
    
    errorMsg.style.display = 'none';
    errorMsg.textContent = '';
    
    // Frontend domain check
    if (!email.endsWith('@gimpa.edu.gh') && !email.endsWith('@adj.gimpa.edu.gh')) {
      errorMsg.textContent = 'Only GIMPA email addresses ending in @gimpa.edu.gh or @adj.gimpa.edu.gh are allowed to log in.';
      errorMsg.style.display = 'block';
      return;
    }
    
    try {
      const formData = new URLSearchParams();
      formData.append('username', email); // oauth2 expects 'username' parameter
      formData.append('password', password);
      
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData
      });
      
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem('sotssToken', data.access_token);
        localStorage.setItem('sotssUser', JSON.stringify(data.user));
        if (!data.user.is_admin) {
          window.triggerAutoScan = true;
          window.activeIntranetTab = 'verification';
        }
        location.hash = '#intranet';
      } else {
        const err = await res.json();
        errorMsg.textContent = err.detail || 'Login failed. Please check your credentials.';
        errorMsg.style.display = 'block';
      }
    } catch (err) {
      console.error(err);
      errorMsg.textContent = 'Connection error. Please check if the server is running.';
      errorMsg.style.display = 'block';
    }
  }
});

// Search input listener
document.addEventListener('input', function(event) {
  // Main Search Input
  if (event.target.id === 'siteSearch') {
    const input = event.target;
    const results = document.getElementById('siteSearchResults');
    if (!results) return;

    const term = input.value.trim().toLowerCase();
    if (!term) {
      results.classList.remove('active');
      results.innerHTML = '';
      return;
    }

    const filtered = searchPages.filter(page => 
      page.title.toLowerCase().includes(term) || page.keywords.toLowerCase().includes(term)
    );

    if (!filtered.length) {
      results.innerHTML = '<div class="no-results">No pages found.</div>';
      results.classList.add('active');
      return;
    }

    results.innerHTML = filtered.slice(0, 8).map(item => `
      <a href="${item.hash}">
        <span class="result-title">${item.title}</span>
        <span class="result-meta">${item.section}</span>
      </a>
    `).join('');
    results.classList.add('active');
    return;
  }

  // Faculty Search Filter Input
  if (event.target.id === 'facultySearchInput') {
    const val = event.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.staff-grid .staff-card');
    let hasResults = false;
    cards.forEach(card => {
      const searchData = card.getAttribute('data-search') || '';
      if (searchData.toLowerCase().includes(val)) {
        card.classList.remove('is-hidden');
        hasResults = true;
      } else {
        card.classList.add('is-hidden');
      }
    });
    
    const emptyEl = document.getElementById('facultyEmpty');
    if (emptyEl) {
      emptyEl.style.display = hasResults ? 'none' : 'block';
    }
  }
});

// Dismiss search dropdown on click away
document.addEventListener('click', function(event) {
  const searchInput = document.getElementById('siteSearch');
  const results = document.getElementById('siteSearchResults');
  if (results && searchInput && !results.contains(event.target) && event.target !== searchInput) {
    results.classList.remove('active');
  }
});

// News Moderation & Image Upload Global Handlers
window.updateNewsStatus = async function(newsId, statusVal) {
  try {
    const formData = new FormData();
    formData.append('status_val', statusVal);
    const res = await fetch(`/api/admin/news/${newsId}/status`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData
    });
    if (res.ok) {
      alert(`News status updated to ${statusVal.toUpperCase()}!`);
      window.switchIntranetTab('news-admin');
      loadDynamicData();
    } else {
      alert('Failed to update news status.');
    }
  } catch (err) {
    console.error(err);
    alert('Error updating news status.');
  }
};

window.triggerImageUpload = function(newsId) {
  const fileInput = document.getElementById(`newsImgFile_${newsId}`);
  if (fileInput) fileInput.click();
};

window.uploadNewsImageFile = async function(newsId) {
  const fileInput = document.getElementById(`newsImgFile_${newsId}`);
  if (!fileInput || !fileInput.files || fileInput.files.length === 0) return;

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch(`/api/admin/news/${newsId}/image`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData
    });
    if (res.ok) {
      alert('New cover photo uploaded successfully!');
      window.switchIntranetTab('news-admin');
      loadDynamicData();
    } else {
      alert('Failed to upload cover photo.');
    }
  } catch (err) {
    console.error(err);
    alert('Error uploading cover photo.');
  }
};

window.promptNewsImageUrl = async function(newsId) {
  const url = prompt('Enter image URL or asset path (e.g. assets/images/1000210972.png):');
  if (!url) return;

  const formData = new FormData();
  formData.append('image_url', url);

  try {
    const res = await fetch(`/api/admin/news/${newsId}/image`, {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData
    });
    if (res.ok) {
      alert('News cover image URL updated!');
      window.switchIntranetTab('news-admin');
      loadDynamicData();
    } else {
      alert('Failed to update news image URL.');
    }
  } catch (err) {
    console.error(err);
    alert('Error updating image URL.');
  }
};

window.deleteNewsItem = async function(newsId) {
  if (!confirm('Are you sure you want to delete this news story?')) return;
  try {
    const res = await fetch(`/api/admin/news/${newsId}`, {
      method: 'DELETE',
      headers: getAuthHeaders()
    });
    if (res.ok) {
      alert('News story deleted successfully.');
      window.switchIntranetTab('news-admin');
      loadDynamicData();
    } else {
      alert('Failed to delete news story.');
    }
  } catch (err) {
    console.error(err);
    alert('Error deleting news story.');
  }
};

window.showCreateNewsModal = function() {
  const existingModal = document.getElementById('customNewsModalOverlay');
  if (existingModal) existingModal.remove();

  const modalHtml = `
    <div id="customNewsModalOverlay" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(4px); z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.2s ease;">
      <div style="background: #ffffff; width: 100%; max-width: 620px; border-radius: 12px; box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04); border: 1px solid #e2e8f0; overflow: hidden; max-height: 90vh; display: flex; flex-direction: column;">
        
        <!-- Header -->
        <div style="background: var(--primary); color: #ffffff; padding: 18px 24px; display: flex; justify-content: space-between; align-items: center;">
          <h3 style="margin: 0; font-size: 1.15rem; font-weight: 700; display: flex; align-items: center; gap: 8px;">
            📰 Create &amp; Publish SOTSS News Story
          </h3>
          <button onclick="document.getElementById('customNewsModalOverlay').remove()" style="background: none; border: none; color: #ffffff; font-size: 1.5rem; cursor: pointer; line-height: 1; padding: 0 4px;">&times;</button>
        </div>

        <!-- Body Form -->
        <div style="padding: 24px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px;">
          
          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">News Story Title *</label>
            <input type="text" id="modalNewsTitle" placeholder="e.g., SOTSS Faculty Team Awarded Research Innovation Grant" style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.9rem; outline: none;">
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">Publication Date</label>
              <input type="text" id="modalNewsDate" value="Aug 06, 2026" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; outline: none;">
            </div>
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">News Source</label>
              <input type="text" id="modalNewsSource" value="SOTSS Newsroom" style="width: 100%; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; outline: none;">
            </div>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">Short Teaser Summary (Shown on News Cards) *</label>
            <textarea id="modalNewsDesc" rows="2" placeholder="Brief 2-line overview of the news article..." style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; outline: none; resize: vertical;"></textarea>
          </div>

          <div>
            <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #334155; margin-bottom: 4px;">Full Article Content *</label>
            <textarea id="modalNewsContent" rows="4" placeholder="Detailed article text or HTML paragraphs..." style="width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 0.88rem; outline: none; resize: vertical;"></textarea>
          </div>

          <!-- Cover Image File Upload Selector -->
          <div style="background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 8px; padding: 16px; text-align: center;">
            <label style="display: block; font-size: 0.82rem; font-weight: 700; color: #1e293b; margin-bottom: 8px;">📷 Upload Cover Photo File (from Computer)</label>
            <input type="file" id="modalNewsFile" accept="image/*" onchange="window.previewModalImage(this)" style="display: none;">
            
            <div id="modalImagePreviewBox" style="width: 100%; max-height: 140px; border-radius: 6px; overflow: hidden; display: none; margin-bottom: 10px; background: #e2e8f0;">
              <img id="modalImagePreviewImg" src="" style="width: 100%; height: 140px; object-fit: cover;">
            </div>

            <button type="button" onclick="document.getElementById('modalNewsFile').click()" class="btn btn-outline" style="font-size: 0.82rem; padding: 8px 16px; font-weight: 600; background: #ffffff; border-color: var(--primary); color: var(--primary);">
              📁 Select Image File from Computer
            </button>
            <span id="modalFileName" style="display: block; font-size: 0.78rem; color: #64748b; margin-top: 6px;">No file selected (Default topic image will be used if omitted)</span>
          </div>

        </div>

        <!-- Footer Actions -->
        <div style="background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 16px 24px; display: flex; justify-content: flex-end; gap: 12px;">
          <button type="button" onclick="document.getElementById('customNewsModalOverlay').remove()" class="btn btn-outline" style="font-size: 0.88rem; padding: 10px 18px; font-weight: 600;">
            Cancel
          </button>
          <button type="button" onclick="window.submitCustomNewsForm('published')" class="btn btn-primary" style="font-size: 0.88rem; padding: 10px 20px; font-weight: 700; background: #16a34a; border-color: #16a34a; color: #fff;">
            ✅ Publish Live
          </button>
        </div>

      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);
};

window.previewModalImage = function(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const box = document.getElementById('modalImagePreviewBox');
      const img = document.getElementById('modalImagePreviewImg');
      const name = document.getElementById('modalFileName');
      if (box && img) {
        img.src = e.target.result;
        box.style.display = 'block';
      }
      if (name) {
        name.textContent = `Selected: ${input.files[0].name}`;
      }
    };
    reader.readAsDataURL(input.files[0]);
  }
};

window.submitCustomNewsForm = async function(statusVal) {
  const title = document.getElementById('modalNewsTitle').value.trim();
  const desc = document.getElementById('modalNewsDesc').value.trim();
  const content = document.getElementById('modalNewsContent').value.trim();
  const date = document.getElementById('modalNewsDate').value.trim() || 'Recent';
  const source = document.getElementById('modalNewsSource').value.trim() || 'SOTSS Newsroom';
  const fileInput = document.getElementById('modalNewsFile');

  if (!title || !desc || !content) {
    alert('Please complete the Title, Teaser Summary, and Article Content fields.');
    return;
  }

  const formData = new FormData();
  formData.append('title', title);
  formData.append('desc', desc);
  formData.append('content', content.startsWith('<p>') ? content : `<p>${content}</p>`);
  formData.append('date', date);
  formData.append('source', source);
  formData.append('status_val', statusVal);
  formData.append('image_url', 'assets/images/1000211039.png');

  try {
    const res = await fetch('/api/admin/news/create', {
      method: 'POST',
      headers: getAuthHeaders(),
      body: formData
    });
    const data = await res.json();
    
    if (data.status === 'success') {
      const newsId = data.news_id;
      
      // If image file attached, upload it
      if (fileInput && fileInput.files && fileInput.files[0]) {
        const imgFormData = new FormData();
        imgFormData.append('file', fileInput.files[0]);
        await fetch(`/api/admin/news/${newsId}/image`, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: imgFormData
        });
      }

      alert('News story created and published successfully!');
      const overlay = document.getElementById('customNewsModalOverlay');
      if (overlay) overlay.remove();
      window.switchIntranetTab('news-admin');
      loadDynamicData();
    } else {
      alert('Failed to create news story: ' + (data.detail || 'Unknown error'));
    }
  } catch (err) {
    console.error(err);
    alert('Error creating news story.');
  }
};

// Dynamic Data Synchronization
async function loadDynamicData() {
  try {
    const res = await fetch('/api/public/publications');
    if (res.ok) {
      const dbPubs = await res.json();
      if (Array.isArray(dbPubs) && dbPubs.length > 0) {
        const lecturerPubsMap = {};
        dbPubs.forEach(p => {
          if (!lecturerPubsMap[p.lecturer_id]) lecturerPubsMap[p.lecturer_id] = [];
          lecturerPubsMap[p.lecturer_id].push({
            id: p.id,
            year: p.year || 'Recent',
            type: p.type || 'Journal Article (Peer-Reviewed)',
            image: p.image || 'assets/images/research-lab.png',
            title: p.title,
            journal: p.journal,
            authors: p.authors,
            summary: p.summary,
            url: p.url
          });
        });

        const idMapping = {
          1: 'felicia-engmann',
          2: 'joseph-budu',
          3: 'gamel-wiredu',
          4: 'emmanuel-adabor',
          5: 'nana-assyne',
          6: 'emmanuel-antwi-boasiako',
          7: 'ebenezer-adaku'
        };

        Object.keys(lecturerPubsMap).forEach(lecId => {
          const facultyId = idMapping[lecId];
          const fac = faculty.find(f => f.id === facultyId);
          if (fac && lecturerPubsMap[lecId].length > 0) {
            fac.pubs = lecturerPubsMap[lecId];
          }
        });
      }
    }
  } catch (err) {
    console.log('Using static faculty dataset.');
  }
}

// Bootstrapping the application
async function initApp() {
  await loadDynamicData();
  render();
}
initApp();


