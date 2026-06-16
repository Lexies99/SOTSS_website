// SPA data structures matching the main website
let faculty = [
  {
    id: 'felicia-engmann',
    name: 'Dr. Felicia N. A. Engmann',
    role: 'Head of Department',
    email: 'csshead@gimpa.edu.gh',
    photo: 'assets/images/felicia-engmann.png',
    spec: 'Data Science, AI, Curriculum Leadership',
    office: 'Department Office, SOT Main Block',
    phone: '+233 (0) 332095432',
    projects: [
      'AI for Academic Success: Predictive early warning system for student outcomes.',
      'Women in Tech Mentorship: Inclusive pipeline initiative for female computing students.',
      'Curriculum Modernization 4.0: Outcome-based revision of CS and IS courses.'
    ],
    pubs: [
      { year: '2025', title: 'Learning analytics for retention prediction in emerging universities', journal: 'Education and Information Technologies', authors: 'Engmann, F.; Budu, J.' },
      { year: '2024', title: 'Ethical AI integration for tertiary-level computing programmes', journal: 'Journal of Responsible AI in Education', authors: 'Engmann, F.; Wiredu, G.' }
    ]
  },
  {
    id: 'joseph-budu',
    name: 'Dr. Joseph Budu',
    role: 'Senior Lecturer',
    email: 'josbudu@gimpa.edu.gh',
    photo: 'assets/images/joseph-budu.png',
    spec: 'Digital Forensics, Cybersecurity, Data Protection',
    office: 'SOT Block B, Room 2.11',
    phone: '+233 (0) 501620138',
    projects: [
      'Cybercrime Evidence Readiness in Ghana: Framework for digital evidence handling in public institutions.',
      'Secure Campus Identity: Student and staff identity protection architecture for higher education.',
      'SME Security Audit Toolkit: Practical security checklist and incident response workflow.'
    ],
    pubs: [
      { year: '2025', title: 'Digital evidence governance for public sector institutions in West Africa', journal: 'African Journal of Information Assurance', authors: 'Budu, J.; Antwi-Boasiako, E.; Wiredu, G.' },
      { year: '2024', title: 'Readiness model for computer forensics education and practice in Ghana', journal: 'International Journal of Cyber Resilience', authors: 'Budu, J.; Engmann, F.' }
    ]
  },
  {
    id: 'gamel-wiredu',
    name: 'Prof. Gamel O. Wiredu',
    role: 'Professor',
    email: 'gwiredu@gimpa.edu.gh',
    photo: 'assets/images/gamel-wiredu.png',
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
      { year: '2026', title: 'Institutional pathways for digital transformation in sub-Saharan Africa', journal: 'Journal of Information Systems in Developing Regions', authors: 'Wiredu, G.; Adabor, E.' },
      { year: '2024', title: 'Management information systems capability and service quality outcomes', journal: 'International MIS Review', authors: 'Wiredu, G.; Assyne, N.' }
    ]
  },
  {
    id: 'emmanuel-adabor',
    name: 'Prof. Emmanuel S. Adabor',
    role: 'Professor',
    email: 'csshead@gimpa.edu.gh',
    photo: '',
    spec: 'Industrial Analytics, Optimization, Operations Research',
    office: 'SOT Annex, Room 3.06',
    phone: '+233 (0) 302908076',
    projects: [
      'Smart Logistics Optimizer: Route and fleet optimization for urban service systems.',
      'Industrial Analytics Capacity Lab: Applied optimization for manufacturing SMEs.',
      'Data-driven Procurement: Decision support model for public procurement quality.'
    ],
    pubs: [
      { year: '2025', title: 'Optimization heuristics for resilient public sector logistics', journal: 'Journal of Applied Operations Analytics', authors: 'Adabor, E.; Wiredu, G.' },
      { year: '2023', title: 'Multi-criteria decision models for digital transformation investments', journal: 'African Journal of Management Analytics', authors: 'Adabor, E.; Engmann, F.' }
    ]
  },
  {
    id: 'nana-assyne',
    name: 'Dr. Nana Assyne',
    role: 'Lecturer',
    email: 'csshead@gimpa.edu.gh',
    photo: '',
    spec: 'Software Engineering, HCI, Web Systems',
    office: 'SOT Block C, Room 1.15',
    phone: '+233 302-401681-3',
    projects: [
      'Usability in GovTech Portals: Human-centered redesign for citizen-facing systems.',
      'Campus App Studio: Student-led software engineering delivery framework.',
      'Accessible Web Standards Ghana: Audit toolkit for inclusive digital interfaces.'
    ],
    pubs: [
      { year: '2026', title: 'Human-centered design patterns for higher education web systems', journal: 'Journal of Web Engineering Practice', authors: 'Assyne, N.; Engmann, F.' },
      { year: '2024', title: 'Assessing maintainability of student-led capstone software projects', journal: 'Software Quality and Education Review', authors: 'Assyne, N.; Budu, J.' }
    ]
  },
  {
    id: 'emmanuel-antwi-boasiako',
    name: 'Dr. Emmanuel Antwi-Boasiako',
    role: 'Lecturer',
    email: 'csshead@gimpa.edu.gh',
    photo: '',
    spec: 'Cyber Policy, Digital Identity, Security Governance',
    office: 'SOT Block C, Room 2.03',
    phone: '+233 (0) 501620138',
    projects: [
      'National Digital Identity Readiness: Governance and privacy framework assessment.',
      'Critical Infrastructure Security Benchmark: Security compliance model for essential services.',
      'Cyber Awareness for Public Institutions: Workforce preparedness and response simulation.'
    ],
    pubs: [
      { year: '2025', title: 'Cyber governance maturity indicators for public service institutions', journal: 'Journal of Cyber Policy and Practice', authors: 'Antwi-Boasiako, E.; Budu, J.' },
      { year: '2023', title: 'Digital identity and trust architecture in emerging economies', journal: 'Information Security Governance Review', authors: 'Antwi-Boasiako, E.; Adabor, E.' }
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
  }
];

const searchPages = [
  { title: 'Home', hash: '#home', section: 'Main page', keywords: 'home department computer science information systems gimpa' },
  { title: 'Introduction', hash: '#introduction', section: 'Main page', keywords: 'introduction about department mission vision programmes' },
  { title: 'Research', hash: '#research', section: 'Main page', keywords: 'research machine learning ai data science cybersecurity analytics' },
  { title: 'Contact', hash: '#contact', section: 'Main page', keywords: 'contact faculty staff lecturer email phone office' },
  { title: 'Department News', hash: '#news', section: 'Main page', keywords: 'news department notification announcement updates' },
  { title: 'Cooperation', hash: '#cooperation', section: 'Main page', keywords: 'cooperation partnership industry alumni internship collaboration' },
  { title: 'Dr. Joseph Budu', hash: '#profile/joseph-budu', section: 'Faculty profile', keywords: 'joseph budu cybersecurity digital forensics senior lecturer' },
  { title: 'Prof. Gamel O. Wiredu', hash: '#profile/gamel-wiredu', section: 'Faculty profile', keywords: 'gamel wiredu professor information systems mis' },
  { title: 'Dr. Felicia N. A. Engmann', hash: '#profile/felicia-engmann', section: 'Faculty profile', keywords: 'felicia engmann head of department data science ai' },
  { title: 'Prof. Emmanuel S. Adabor', hash: '#profile/emmanuel-adabor', section: 'Faculty profile', keywords: 'emmanuel adabor professor industrial analytics optimization' },
  { title: 'Dr. Nana Assyne', hash: '#profile/nana-assyne', section: 'Faculty profile', keywords: 'nana assyne lecturer software engineering hci' },
  { title: 'Dr. Emmanuel Antwi-Boasiako', hash: '#profile/emmanuel-antwi-boasiako', section: 'Faculty profile', keywords: 'emmanuel antwi boasiako lecturer cyber policy identity' },
  { title: 'News: GIMPA & UESTC Academic Partnership', hash: '#news-uestc-partnership', section: 'Department News', keywords: 'uestc china international collaboration joint research exchange academic partner' },
  { title: 'News: GIMPA & York University Student Consulting', hash: '#news-york-consulting', section: 'Department News', keywords: 'york student consulting project industry partner challenge client communication' },
  { title: 'News: Faculty Vacancy (Senior Lecturers & Lecturers)', hash: '#news-faculty-vacancy', section: 'Department News', keywords: 'vacancy jobs senior lecturers recruitment computer science information systems' }
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
          <a href="https://gimpa.edu.gh/">GIMPA Home</a>
          <a href="https://lms.gimpa.edu.gh/">LMS</a>
          <a href="https://apply.gimpa.edu.gh/start">Apply Now</a>
          ${isLoggedIn && user ? `<span class="user-welcome" style="margin-left: 15px; color: #bfd3e7; font-size: 0.8rem;">Welcome, ${user.name}</span>` : ''}
        </div>
        <div class="top-bar-right">
          <a href="https://gimpa.edu.gh/library/">Library</a>
          ${isLoggedIn ? `<a href="#intranet" class="intranet-link" style="margin-right: 15px; font-weight: 600; color: var(--accent);">Intranet Portal</a>` : ''}
          <a href="#intranet" class="notification-bell" aria-label="Notifications" title="Notifications" onclick="window.activeIntranetTab = 'verification';" style="${isLoggedIn ? 'display: inline-flex;' : 'display: none;'}"><span class="notification-dot"></span></a>
          <a href="${isLoggedIn ? '#logout' : '#login'}" class="login-link">${isLoggedIn ? 'Logout' : 'Login'}</a>
        </div>
      </div>
    </div>
  `;
}

function header(active) {
  const isNavActive = (item) => active === item ? 'active' : '';
  return `
    <header>
      <div class="container">
        <div class="header-main">
          <a href="#home" class="logo">
            <div class="logo-icon">CS</div>
            <div class="logo-text">
              <h1>Computer Science &amp; IS</h1>
              <span>GIMPA · School of Technology</span>
            </div>
          </a>
          <div class="search-bar">
            <input type="search" id="siteSearch" placeholder="Search website">
            <div class="search-results" id="siteSearchResults"></div>
          </div>
          <nav>
            <button class="nav-toggle" onclick="document.querySelector('nav ul').classList.toggle('open')" aria-label="Toggle menu">
              <span></span><span></span><span></span>
            </button>
            <ul>
              <li><a href="#home" class="${isNavActive('home')}">Home</a></li>
              <li><a href="#introduction" class="${isNavActive('introduction')}">Introduction</a></li>
              <li><a href="#research" class="${isNavActive('research')}">Research</a></li>
              <li><a href="#contact" class="${isNavActive('contact') || isNavActive('profile')}">Contact</a></li>
              <li><a href="#news" class="${isNavActive('news')}">News</a></li>
              <li><a href="#cooperation" class="${isNavActive('cooperation')}">Cooperation</a></li>
            </ul>
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
            <div class="logo" style="margin-bottom:4px">
              <div class="logo-icon">CS</div>
              <div class="logo-text">
                <h1 style="font-size:1rem">Computer Science &amp; IS</h1>
                <span>GIMPA</span>
              </div>
            </div>
            <p>The Department of Computer Science and Information Systems, School of Technology and Social Sciences, Ghana Institute of Management and Public Administration.</p>
          </div>
          <div class="footer-col">
            <h4>Quick Links</h4>
            <a href="#home">Home</a>
            <a href="#introduction">Introduction</a>
            <a href="#research">Research</a>
            <a href="#contact">Contact</a>
            <a href="#cooperation">Cooperation</a>
          </div>
          <div class="footer-col">
            <h4>Programmes</h4>
            <a href="#introduction">BSc Computer Science</a>
            <a href="#introduction">BSc ICT</a>
            <a href="#introduction">MSc Cybersecurity</a>
            <a href="#introduction">PhD Info Systems</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:csshead@gimpa.edu.gh">csshead@gimpa.edu.gh</a>
            <a href="tel:+233501620138">+233 (0) 501620138</a>
            <a>Mon-Sat: 8:30 – 18:00 GMT</a>
            <a href="https://gimpa.edu.gh/">gimpa.edu.gh</a>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 GIMPA. All rights reserved.</span>
          <div class="social-links">
            <a href="https://gimpa.edu.gh/" title="Website"><img class="inline-icon" src="assets/icons/icon-screen.svg" alt="Website"></a>
            <a href="mailto:csshead@gimpa.edu.gh" title="Email"><img class="inline-icon" src="assets/icons/icon-email.svg" alt="Email"></a>
            <a href="tel:+233501620138" title="Phone"><img class="inline-icon" src="assets/icons/icon-phone.svg" alt="Phone"></a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Pages Definitions

function home() {
  return `
    <section class="hero">
      <div class="hero-bg slideshow">
        <img class="active" src="assets/images/1000210972.png" alt="GIMPA CS Slideshow 1">
        <img src="assets/images/1000211024.png" alt="GIMPA CS Slideshow 2">
        <img src="assets/images/1000211025.png" alt="GIMPA CS Slideshow 3">
        <img src="assets/images/1000211035.png" alt="GIMPA CS Slideshow 4">
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">School of Technology &amp; Social Sciences</div>
          <h2>Shaping Ghana's Digital Future Through Computing Excellence</h2>
          <p>Driven by the needs of Ghana and the West African sub-region, we employ our core values of excellence, quality and connectedness to deliver relevant education, offer consultancy, and conduct cutting-edge research in computing fields.</p>
          <div class="hero-links">
            <a href="#introduction" class="btn btn-primary">Department Introduction →</a>
            <a href="#research" class="btn btn-outline">Our Research Areas</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Explore the Department</h2>
          <p>Discover our programmes, research areas, staff, and partnership opportunities.</p>
        </div>
        <div class="card-grid">
          <a href="#introduction" class="card fade-up fade-up-d1">
            <div class="card-icon"><img src="assets/icons/icon-document.svg" alt="Document icon"></div>
            <h3>Department Introduction</h3>
            <p>Learn about our history, mission, strategic programmes and the merger that formed our dynamic department in 2023.</p>
            <span class="card-link">Learn more →</span>
          </a>
          <a href="#research" class="card fade-up fade-up-d2">
            <div class="card-icon"><img src="assets/icons/icon-screen.svg" alt="Research icon"></div>
            <h3>Research &amp; Expertise</h3>
            <p>Explore our research strengths in predictive analytics, machine learning, wireless sensor networks, cybersecurity and more.</p>
            <span class="card-link">Explore research →</span>
          </a>
          <a href="#contact" class="card fade-up fade-up-d3">
            <div class="card-icon"><img src="assets/icons/icon-people.svg" alt="People icon"></div>
            <h3>Staff &amp; Contact</h3>
            <p>Meet our dynamic blend of experienced and young faculty with diverse backgrounds in IT and computing.</p>
            <span class="card-link">View staff →</span>
          </a>
          <a href="#cooperation" class="card fade-up fade-up-d1">
            <div class="card-icon"><img src="assets/icons/icon-cooperate.svg" alt="Cooperation icon"></div>
            <h3>Cooperation</h3>
            <p>Partner with us through industry collaboration, student internships, alumni networks and community engagement.</p>
            <span class="card-link">Collaborate →</span>
          </a>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Latest News &amp; Updates</h2>
          <p>Stay informed about the latest happenings in our department and across GIMPA.</p>
        </div>
        <div class="news-grid">
          ${news.map((n, idx) => {
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
        <div style="text-align:center;margin-top:32px">
          <a href="#news" class="btn btn-dark">View Department News →</a>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2 style="color:#fff">Apply to Study With Us</h2>
          <p>We offer undergraduate, postgraduate diploma, master's, and doctoral programmes in computing and information systems.</p>
        </div>
        <div class="card-grid">
          <div class="card card-dark">
            <h3>BSc Computer Science</h3>
            <p>A four-year programme equipping graduates with strong technical skills in programming, algorithms, AI, robotics and software engineering.</p>
            <div style="margin-top:14px;font-size:0.82rem;color:var(--text-secondary)">4 Years · Full-time</div>
          </div>
          <div class="card card-dark">
            <h3>BSc Information &amp; Communication Technology</h3>
            <p>A scientific approach to ICT covering IT entrepreneurship, wireless networks, mobile programming, and human-computer interaction.</p>
            <div style="margin-top:14px;font-size:0.82rem;color:var(--text-secondary)">4 Years · Full-time</div>
          </div>
          <div class="card card-dark">
            <h3>MSc Digital Forensics &amp; Cybersecurity</h3>
            <p>Imparts knowledge on cybersecurity risk analysis, digital forensics, cryptography, and the legal aspects of information technology.</p>
            <div style="margin-top:14px;font-size:0.82rem;color:var(--text-secondary)">1 Year · Weekends</div>
          </div>
          <div class="card card-dark">
            <h3>PhD Information Systems</h3>
            <p>A doctoral programme for those who seek to deeply understand and advance the critical field of information systems through rigorous scientific inquiry.</p>
            <div style="margin-top:14px;font-size:0.82rem;color:var(--text-secondary)">3 Years · Full-time</div>
          </div>
          <div class="card card-dark">
            <h3>MSc/MPhil Information &amp; Communication Technology</h3>
            <p>Equips students with scientific knowledge for analytical thinking in ICT development and management, including AI applications.</p>
            <div style="margin-top:14px;font-size:0.82rem;color:var(--text-secondary)">2 Years · Weekends/Evening</div>
          </div>
          <div class="card card-dark">
            <h3>MSc Industrial Analytics</h3>
            <p>Combines advanced mathematical, statistical, and computational techniques with domain knowledge to solve real-world industrial problems.</p>
            <div style="margin-top:14px;font-size:0.82rem;color:var(--text-secondary)">2 Years · Flexible</div>
          </div>
        </div>
        <div style="text-align:center;margin-top:40px">
          <a href="https://apply.gimpa.edu.gh/start" class="btn btn-primary">Apply Now →</a>
          <a href="#introduction" class="btn btn-outline" style="margin-left:12px">View All Programmes</a>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="two-col-text">
            <div class="accent-line"></div>
            <h2>Research at the Department</h2>
            <p>The department has a dynamic blend of experienced and young faculty with enormous research output. We pride ourselves in our ability to innovate and provide cutting-edge information technology solutions across various platforms in collaboration with our students.</p>
            <p>Our research areas include predictive analytics, wireless sensor networks and IoT, machine learning, computational immunology, biomedical informatics, and computing in mathematics, natural science, engineering and medicine.</p>
            <a href="#research" class="btn btn-dark" style="margin-top:16px">Explore Our Research →</a>
          </div>
          <div class="two-col-img">
            <img src="assets/images/1000211395.png" alt="Students in computer lab">
          </div>
        </div>
      </div>
    </section>
  `;
}

function introduction() {
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
          <div class="hero-badge">About the Department</div>
          <h2>Introduction to the Department of Computer Science &amp; Information Systems</h2>
          <p>Established in September 2023 through the merger of the departments of Computer Sciences and Information Systems and Innovation, we deliver relevant education and cutting-edge research in computing fields.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="two-col">
          <div class="two-col-text">
            <div class="accent-line"></div>
            <h2>About the Department</h2>
            <p>The Department of Computer Science and Information Systems was established following the merger of the departments of Computer Sciences and Information Systems and Innovation by the Institute's management in September 2023. The staff strength at the time of establishment was eleven full-time lecturers.</p>
            <p>The department began with existing academic programmes from the merged departments, including BSc Computer Science, BSc Information and Communication Technology, MSc/MPhil ICT, MSc IT and Law, MSc/MPhil Management Information Systems, MSc Industrial Analytics, MSc Digital Forensics and Cybersecurity, PhD Information Systems, and more.</p>
            <p>Both classrooms and computer laboratories are shared with the Department of Information Systems and Innovation within the School of Technology. Ghana Institute of Management and Public Administration uses Simio simulation software under a grant from Simio LLC.</p>
          </div>
          <div class="two-col-img">
            <img src="assets/images/1000211039.png" alt="Computer Lab">
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="two-col" style="align-items:center">
          <div>
            <div class="staff-card" style="max-width:320px;margin:0 auto">
              <div class="staff-avatar">FE</div>
              <h3>Dr. Felicia Engmann</h3>
              <div class="role">Head, Department of Computer Science &amp; IS</div>
              <div class="email"><a href="mailto:csshead@gimpa.edu.gh">csshead@gimpa.edu.gh</a></div>
            </div>
          </div>
          <div class="two-col-text">
            <div class="accent-line"></div>
            <h2>Message from the Head</h2>
            <p>A warm welcome to the Department of Computer Sciences. This department hosts typical computer and other related computational sciences programmes within GIMPA.</p>
            <p>Driven by the needs of Ghana and the West African Sub-region, we employ our core values of excellence, quality and connectedness to deliver relevant education to our students, offer consultancy and training to our stakeholders, and conduct cutting-edge research in the computing fields.</p>
            <p>We achieve these using state-of-the-art facilities and employing faculty with diverse backgrounds in Information Technology and Computing. I am proud to welcome you to this portal. I look forward to receiving you as a student, researcher, or industry practitioner.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2 style="color:#fff">Our Mission &amp; Vision</h2>
        </div>
        <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">
          <div class="card card-dark">
            <div class="card-icon"><img src="assets/icons/icon-document.svg" alt="Mission icon"></div>
            <h3>Mission</h3>
            <p>To deliver relevant computing education, offer consultancy and training to stakeholders, and conduct cutting-edge research driven by the needs of Ghana and the West African sub-region.</p>
          </div>
          <div class="card card-dark">
            <div class="card-icon"><img src="assets/icons/icon-screen.svg" alt="Vision icon"></div>
            <h3>Vision</h3>
            <p>To be a leading centre of excellence in computer science education and research, producing versatile IT professionals who drive digital transformation across Africa.</p>
          </div>
          <div class="card card-dark">
            <div class="card-icon"><img src="assets/icons/icon-badge.svg" alt="Values icon"></div>
            <h3>Core Values</h3>
            <p>Excellence, quality, and connectedness guide everything we do — from curriculum design and research to industry partnerships and student mentorship.</p>
          </div>
        </div>
        <div class="stats-row">
          <div class="stat-item">
            <div class="number">11+</div>
            <div class="label">Faculty Members</div>
          </div>
          <div class="stat-item">
            <div class="number">10+</div>
            <div class="label">Programmes Offered</div>
          </div>
          <div class="stat-item">
            <div class="number">9</div>
            <div class="label">Research Areas</div>
          </div>
          <div class="stat-item">
            <div class="number">2023</div>
            <div class="label">Year Established</div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="programmes">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Academic Programmes</h2>
          <p>We offer a comprehensive range of undergraduate, postgraduate diploma, master's, and doctoral programmes.</p>
        </div>

        <h3 style="font-size:1.1rem;margin-bottom:16px;color:var(--primary)">Undergraduate Programmes</h3>
        <div class="card-grid" style="margin-bottom:40px">
          <div class="programme-card">
            <span class="tag">BSc · 4 Years</span>
            <h3>BSc Computer Science</h3>
            <p>Strong technical skills in programming, data structures, algorithms, networking, software engineering, AI and robotics.</p>
            <div class="meta"><span>Full-time</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
          <div class="programme-card">
            <span class="tag">BSc · 4 Years</span>
            <h3>BSc Information &amp; Communication Technology</h3>
            <p>IT entrepreneurship, wireless networks, IT auditing, human-computer interaction, mobile programming and networking.</p>
            <div class="meta"><span>Full-time</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
          <div class="programme-card">
            <span class="tag">BSc · 4 Years</span>
            <h3>BSc Health Informatics</h3>
            <p>Applying information technology and computing to healthcare systems, data management and health service delivery.</p>
            <div class="meta"><span>Full-time</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
        </div>

        <h3 style="font-size:1.1rem;margin-bottom:16px;color:var(--primary)">Postgraduate Diploma Programmes</h3>
        <div class="card-grid" style="margin-bottom:40px">
          <div class="programme-card">
            <span class="tag">PG Diploma</span>
            <h3>PG Diploma in ICT</h3>
            <p>A bridge for non-ICT graduates wishing to transition into ICT fields. Covers programming, databases, web technologies and networking.</p>
            <div class="meta"><span>Flexible</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
          <div class="programme-card">
            <span class="tag">PG Diploma</span>
            <h3>PG Diploma in Management Information Systems</h3>
            <p>Foundation in MIS principles covering analysis, development, implementation and management of information systems.</p>
            <div class="meta"><span>Flexible</span><span>josbudu@gimpa.edu.gh</span></div>
          </div>
        </div>

        <h3 style="font-size:1.1rem;margin-bottom:16px;color:var(--primary)">Master's Programmes</h3>
        <div class="card-grid" style="margin-bottom:40px">
          <div class="programme-card">
            <span class="tag">MSc/MPhil · 2 Years</span>
            <h3>MSc/MPhil Information &amp; Communication Technology</h3>
            <p>Scientific knowledge for analytical thinking in ICT development — network security, decision support systems, AI applications and more.</p>
            <div class="meta"><span>Weekends/Evening</span></div>
          </div>
          <div class="programme-card">
            <span class="tag">MSc · 2 Years</span>
            <h3>MSc Information Technology &amp; Law</h3>
            <p>Legal and administrative implications of ICT adoption — digital media law, computer forensics, cybercrime investigation and data protection.</p>
            <div class="meta"><span>Weekends/Evening</span></div>
          </div>
          <div class="programme-card">
            <span class="tag">MPhil · 2 Years</span>
            <h3>MPhil Management Information Systems</h3>
            <p>Analysis, development, implementation and management of MIS and their applications in business and public administration.</p>
            <div class="meta"><span>Regular (Day)</span><span>gwiredu@gimpa.edu.gh</span></div>
          </div>
          <div class="programme-card">
            <span class="tag">MSc · 2 Years</span>
            <h3>MSc Management Information Systems</h3>
            <p>Strategic value and challenges of MIS as adopted by public and private sector organisations, with alternative methodologies and philosophies.</p>
            <div class="meta"><span>Flexible</span></div>
          </div>
          <div class="programme-card">
            <span class="tag">MSc · 1 Year</span>
            <h3>MSc Digital Forensics &amp; Cybersecurity</h3>
            <p>Cybercrime risk management, digital forensics, IT audit, cryptography and security mechanisms, and legal aspects of IT.</p>
            <div class="meta"><span>Weekends</span><span>josbudu@gimpa.edu.gh</span></div>
          </div>
          <div class="programme-card">
            <span class="tag">MSc · 2 Years</span>
            <h3>MSc Industrial Analytics</h3>
            <p>Advanced mathematical, statistical, and computational techniques for solving real-world industrial problems with data-driven insights.</p>
            <div class="meta"><span>Flexible</span></div>
          </div>
        </div>

        <h3 style="font-size:1.1rem;margin-bottom:16px;color:var(--primary)">Doctoral Programme</h3>
        <div class="card-grid">
          <div class="programme-card">
            <span class="tag">PhD · 3 Years</span>
            <h3>PhD Information Systems</h3>
            <p>Rigorous scientific inquiry into technology integration, cybersecurity, data analytics and digital transformation. Develops advanced analytical skills and theoretical insights.</p>
            <div class="meta"><span>Full-time</span><span>Coordinator: Prof. Gamel Wiredu</span></div>
          </div>
        </div>

        <div style="text-align:center;margin-top:40px">
          <a href="https://apply.gimpa.edu.gh/start" class="btn btn-primary">Apply Now →</a>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Read More</h2>
        </div>
        <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
          <a href="#research" class="card">
            <h3>Research &amp; Expertise</h3>
            <p>Explore our research areas in predictive analytics, machine learning, IoT, and computational sciences.</p>
            <span class="card-link">Explore research →</span>
          </a>
          <a href="#contact" class="card">
            <h3>Staff &amp; Contact Information</h3>
            <p>Meet our faculty members and find contact details for the department.</p>
            <span class="card-link">View contacts →</span>
          </a>
          <a href="#cooperation" class="card">
            <h3>Cooperation &amp; Partnerships</h3>
            <p>Learn about industry partnerships, student associations, and alumni engagement opportunities.</p>
            <span class="card-link">Explore partnerships →</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

function research() {
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
          <div class="hero-badge">Research &amp; Innovation</div>
          <h2>Advancing Computing Through Research</h2>
          <p>Our faculty combines enormous research output with a dynamic blend of experienced and young researchers, innovating across predictive analytics, IoT, machine learning, cybersecurity and more.</p>
          <div class="hero-links">
            <a href="#cooperation" class="btn btn-outline">Collaborate with Us</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Research at the Department</h2>
          <p>The department has a dynamic blend of experienced and young faculty with enormous research output. We pride ourselves in our ability to innovate and provide cutting-edge information technology solutions across various platforms in collaboration with our students.</p>
        </div>
        <div class="two-col">
          <div class="two-col-text">
            <h2 style="font-size:1.4rem">Our Research Philosophy</h2>
            <p>Our research integrates technological, informational, and applied perspectives alongside a human-centred approach. We are committed to addressing real-world challenges facing Ghana and the West African sub-region through innovative computing solutions.</p>
            <p>We foster close collaboration with industry partners, other universities, and the public sector. Our goal is research excellence that drives socio-economic development and digital transformation across the continent.</p>
          </div>
          <div class="two-col-img">
            <img src="assets/images/1000211042.png" alt="GIMPA Campus">
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2 style="color:#fff">Areas of Expertise</h2>
          <p>Our research activity spans the following key domains, reflecting the interdisciplinary nature of modern computing.</p>
        </div>
        <div class="expertise-grid">
          <div class="expertise-item"><span class="expertise-dot"></span>Predictive Analytics</div>
          <div class="expertise-item"><span class="expertise-dot"></span>Wireless Sensor Networks &amp; IoT</div>
          <div class="expertise-item"><span class="expertise-dot"></span>Machine Learning</div>
          <div class="expertise-item"><span class="expertise-dot"></span>Computer Science Education</div>
          <div class="expertise-item"><span class="expertise-dot"></span>Computing Theory</div>
          <div class="expertise-item"><span class="expertise-dot"></span>Computational Immunology &amp; Biological Dynamics</div>
          <div class="expertise-item"><span class="expertise-dot"></span>Computing in Mathematics, Science &amp; Engineering</div>
          <div class="expertise-item"><span class="expertise-dot"></span>(Biomedical) Informatics</div>
          <div class="expertise-item"><span class="expertise-dot"></span>Applied Mathematics &amp; Statistics</div>
        </div>
      </div>
    </section>

    <section class="section research-focus-section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Research Focus Areas</h2>
          <p>Deep dives into the key themes that define our departmental research agenda.</p>
        </div>
        <div class="focus-grid">
          <div class="focus-card fade-up">
            <span class="focus-tag">Data Intelligence</span>
            <h3>Predictive Analytics &amp; Data Science</h3>
            <p>Developing advanced analytical models for forecasting trends, optimising decision-making and extracting actionable insights from large-scale datasets across diverse industries.</p>
            <div class="focus-meta"><span>Applied research</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
          <div class="focus-card fade-up fade-up-d1">
            <span class="focus-tag">Connected Systems</span>
            <h3>Wireless Sensor Networks &amp; IoT</h3>
            <p>Designing and deploying sensor networks and IoT solutions for environmental monitoring, smart agriculture, healthcare and urban systems in the West African context.</p>
            <div class="focus-meta"><span>Field systems</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
          <div class="focus-card fade-up fade-up-d2">
            <span class="focus-tag">Applied AI</span>
            <h3>Machine Learning &amp; AI</h3>
            <p>Advancing machine learning algorithms and artificial intelligence applications to solve complex problems in health, finance, education and industrial optimisation.</p>
            <div class="focus-meta"><span>AI models</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
          <div class="focus-card fade-up">
            <span class="focus-tag">Digital Trust</span>
            <h3>Digital Forensics &amp; Cybersecurity</h3>
            <p>Researching cybercrime investigation, risk assessment, cryptographic security mechanisms, and legal frameworks for digital evidence in the Ghanaian and African context.</p>
            <div class="focus-meta"><span>Cybersecurity</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
          <div class="focus-card fade-up fade-up-d1">
            <span class="focus-tag">Health Informatics</span>
            <h3>Computational Immunology &amp; Biomedical Informatics</h3>
            <p>Applying computational methods to biological systems, modelling immune responses, and leveraging informatics for improved healthcare delivery and biomedical research.</p>
            <div class="focus-meta"><span>Biomedical systems</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
          <div class="focus-card fade-up fade-up-d2">
            <span class="focus-tag">Scientific Computing</span>
            <h3>Applied Mathematics &amp; Computational Science</h3>
            <p>Employing mathematical modelling, simulation and statistical techniques to solve problems in engineering, natural sciences, medicine and industrial process optimisation.</p>
            <div class="focus-meta"><span>Modelling</span><span>csshead@gimpa.edu.gh</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="two-col" style="align-items:center">
          <div class="two-col-text">
            <div class="accent-line"></div>
            <h2>Doctoral Programme in Information Systems</h2>
            <p>Our PhD program is designed for those who seek to deeply understand and advance the critical field of information systems. Our doctoral candidates engage in rigorous scientific inquiry, developing advanced analytical skills and theoretical insights.</p>
            <p>Through interdisciplinary study and collaborative research, candidates gain expertise to address pressing societal needs, drive business competitiveness, and foster sustainable development.</p>
            <p><strong>Programme Highlights:</strong> Philosophy of Science and Technology, Advanced Quantitative and Qualitative Research Methods, Directed IS Research and Professional Development, PhD Seminar.</p>
            <p><strong>Duration:</strong> 3 years (Full-time)</p>
            <p><strong>Programme Coordinator:</strong> Professor Gamel Wiredu</p>
            <a href="https://apply.gimpa.edu.gh/start" class="btn btn-dark" style="margin-top:16px">Apply for PhD →</a>
          </div>
          <div>
            <div class="info-box">
              <h3><img class="inline-icon" src="assets/icons/icon-document.svg" alt="Admission requirements">Admission Requirements</h3>
              <ul>
                <li>Master's degree in IS, Computer Science, ICT, Engineering, Mathematics or related fields</li>
                <li>First class holders in MIS, CS or ICT may be considered</li>
                <li>Master's from other fields with GPA 3.0+ may apply</li>
                <li>Shortlisted applicants will be interviewed by the Graduate Admissions Committee</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="info-box" style="max-width:700px;margin:0 auto;text-align:center">
          <h3 style="justify-content:center"><img class="inline-icon" src="assets/icons/icon-screen.svg" alt="Simulation software">Simulation Software</h3>
          <p style="color:var(--text-body)">Ghana Institute of Management and Public Administration uses <strong>Simio simulation software</strong> under a grant from Simio LLC, supporting advanced modelling and simulation research across the department.</p>
          <a href="https://www.simio.com" class="btn btn-dark" style="margin-top:16px">Learn about Simio →</a>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
          <a href="#introduction" class="card">
            <h3>Department Introduction</h3>
            <p>Learn about our history, programmes, and the strategic vision that drives the department.</p>
            <span class="card-link">Read more →</span>
          </a>
          <a href="#contact" class="card">
            <h3>Staff &amp; Contact</h3>
            <p>Meet the researchers and faculty behind our cutting-edge research output.</p>
            <span class="card-link">View staff →</span>
          </a>
          <a href="#cooperation" class="card">
            <h3>Cooperation</h3>
            <p>Explore ways to partner with us on research projects and industry collaborations.</p>
            <span class="card-link">Collaborate →</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Contact Information</h2>
          <p>Get in touch with the Department of Computer Science and Information Systems.</p>
        </div>
        <div class="contact-grid">
          <div class="contact-item">
            <h3><img class="inline-icon" src="assets/icons/icon-location.svg" alt="Location">Location</h3>
            <p>GIMPA School of Technology</p>
            <p>Ghana Institute of Management and Public Administration</p>
            <p>Greenhill, Accra, Ghana</p>
          </div>
          <div class="contact-item">
            <h3><img class="inline-icon" src="assets/icons/icon-email.svg" alt="Email">Email</h3>
            <p>Department: <a href="mailto:csshead@gimpa.edu.gh">csshead@gimpa.edu.gh</a></p>
            <p>General: <a href="mailto:info@gimpa.edu.gh">info@gimpa.edu.gh</a></p>
            <p>Admissions: <a href="mailto:admissions@gimpa.edu.gh">admissions@gimpa.edu.gh</a></p>
          </div>
          <div class="contact-item">
            <h3><img class="inline-icon" src="assets/icons/icon-phone.svg" alt="Phone">Phone</h3>
            <p><a href="tel:+233501620138">+233 (0) 501620138</a></p>
            <p><a href="tel:+233332095432">+233 (0) 332095432</a></p>
            <p><a href="tel:+233302908076">+233 (0) 302908076</a></p>
            <p><a href="tel:+233302401681">+233 302-401681-3</a></p>
          </div>
          <div class="contact-item">
            <h3><img class="inline-icon" src="assets/icons/icon-time.svg" alt="Open hours">Open Hours</h3>
            <p>Monday – Saturday</p>
            <p>8:30 AM – 6:00 PM GMT</p>
            <p style="margin-top:8px"><a href="https://gimpa.edu.gh/" class="btn btn-dark" style="padding:8px 20px;font-size:0.82rem">Visit GIMPA Website →</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Head of Department</h2>
        </div>
        <div style="max-width:360px">
          <div class="staff-card">
            <a class="staff-card-link" href="#profile/felicia-engmann">
              <div class="staff-photo"><img class="photo" src="assets/images/felicia-engmann.png" alt="Dr. Felicia Engmann" style="width:88px; height:88px; border-radius:50%; margin:auto; object-fit:cover; border:3px solid #7ec5ed"></div>
              <h3>Dr. Felicia Engmann</h3>
              <div class="role" style="font-size:0.82rem; color:var(--accent); font-weight:600; margin-bottom:8px">Head, Dept. of Computer Science &amp; IS</div>
              <div class="email" style="font-size:0.8rem; color:var(--primary)">csshead@gimpa.edu.gh</div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Faculty Members</h2>
          <p>Our dynamic blend of experienced and young faculty with diverse backgrounds in IT and computing.</p>
        </div>
        
        <div class="faculty-toolbar" style="margin-top: 14px; margin-bottom: 26px;">
          <div class="faculty-search">
            <input type="text" id="facultySearchInput" placeholder="🔍 Search faculty by name, specialization, office..." style="width:100%; border:1px solid #c8d8ea; background:#fff; border-radius:999px; padding:12px 18px 12px 42px; font-size:0.9rem; outline:none; transition:var(--transition)">
          </div>
          <div class="faculty-empty" id="facultyEmpty" style="display:none; margin-top:16px; padding:12px 16px; border-radius:var(--radius-sm); background:#e9f4fd; color:var(--primary); font-weight:600;">No faculty members found matching your search.</div>
        </div>

        <div class="staff-grid">
          ${faculty.map(f => `
            <div class="staff-card" data-search="${f.name} ${f.role} ${f.spec} ${f.email} ${f.office}">
              <a class="staff-card-link" href="#profile/${f.id}">
                ${f.photo ? 
                  `<div class="staff-photo"><img class="photo" src="${f.photo}" alt="${f.name}" style="width:88px; height:88px; border-radius:50%; margin:auto; object-fit:cover; border:3px solid #7ec5ed"></div>` :
                  `<div class="staff-avatar">${f.name.split(' ').filter(n => n.includes('.') ? false : true).slice(-2).map(n => n[0]).join('')}</div>`
                }
                <h3>${f.name}</h3>
                <div class="role">${f.role}</div>
                <div class="email">${f.email}</div>
              </a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2 style="color:#fff">Programme Coordinators</h2>
          <p>Contact the coordinators for specific programme enquiries.</p>
        </div>
        <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
          <div class="card card-dark">
            <h3>PhD Information Systems</h3>
            <p>Coordinator: <strong>Prof. Gamel Wiredu</strong></p>
            <p style="margin-top:8px"><a href="mailto:csshead@gimpa.edu.gh" style="color:var(--accent)">csshead@gimpa.edu.gh</a></p>
          </div>
          <div class="card card-dark">
            <h3>MSc Digital Forensics &amp; Cybersecurity</h3>
            <p>Coordinator: <strong>Dr. Joseph Budu</strong></p>
            <p style="margin-top:8px"><a href="mailto:josbudu@gimpa.edu.gh" style="color:var(--accent)">josbudu@gimpa.edu.gh</a></p>
          </div>
          <div class="card card-dark">
            <h3>MPhil Management Information Systems</h3>
            <p>Coordinator: <strong>Prof. Gamel Wiredu</strong></p>
            <p style="margin-top:8px"><a href="mailto:gwiredu@gimpa.edu.gh" style="color:var(--accent)">gwiredu@gimpa.edu.gh</a></p>
          </div>
          <div class="card card-dark">
            <h3>General Enquiries</h3>
            <p>For all other programmes, contact the department head.</p>
            <p style="margin-top:8px"><a href="mailto:csshead@gimpa.edu.gh" style="color:var(--accent)">csshead@gimpa.edu.gh</a></p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Useful Links</h2>
        </div>
        <div class="card-grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr))">
          <a href="https://apply.gimpa.edu.gh/start" class="card">
            <div class="card-icon"><img src="assets/icons/icon-document.svg" alt="Apply icon"></div>
            <h3>Apply Online</h3>
            <p>Submit your application through the GIMPA online portal.</p>
            <span class="card-link">Apply now →</span>
          </a>
          <a href="https://gimpa.edu.gh/admissions/" class="card">
            <div class="card-icon"><img src="assets/icons/icon-badge.svg" alt="Admissions icon"></div>
            <h3>Admissions</h3>
            <p>View admission requirements and important dates.</p>
            <span class="card-link">View admissions →</span>
          </a>
          <a href="https://lms.gimpa.edu.gh/" class="card">
            <div class="card-icon"><img src="assets/icons/icon-screen.svg" alt="LMS icon"></div>
            <h3>Learning Management System</h3>
            <p>Access course materials, assignments, and resources.</p>
            <span class="card-link">Go to LMS →</span>
          </a>
          <a href="https://gimpa.edu.gh/library/" class="card">
            <div class="card-icon"><img src="assets/icons/icon-library.svg" alt="Library icon"></div>
            <h3>Library</h3>
            <p>Access the GIMPA library and digital resources.</p>
            <span class="card-link">Visit library →</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

function newsList() {
  return `
    <section class="hero" style="min-height:380px">
      <div class="hero-bg slideshow">
        <img class="active" src="assets/images/1000211039.png" alt="Department news">
        <img src="assets/images/1000211042.png" alt="Student news">
        <img src="assets/images/1000211043.png" alt="Department announcement">
      </div>
      <div class="container">
        <div class="hero-content" style="padding:60px 0">
          <div class="hero-badge">Department News</div>
          <h2>News Concerning the Department</h2>
          <p>Stay informed about announcements, partnerships, student opportunities, and important updates from the Department of Computer Science and Information Systems.</p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="section-header">
          <div class="accent-line"></div>
          <h2>Latest Department News</h2>
          <p>Updates and announcements from the Department of Computer Science and Information Systems.</p>
        </div>
        <div class="news-grid">
          ${news.map(n => `
            <a class="news-card" href="#news-${n.id}">
              <div class="news-card-img"><img src="${n.image}" alt="${n.title}"></div>
              <div class="news-card-body">
                <div class="date">${n.date}</div>
                <h3>${n.title}</h3>
                <p>${n.desc}</p>
                <span class="card-link" style="margin-top: 14px; font-weight:600; font-size:0.88rem; color:var(--primary)">Read full story →</span>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}

function newsDetail(id) {
  const item = news.find(n => n.id === id);
  if (!item) {
    return `<section class="section"><div class="container"><h2>News story not found.</h2><a href="#news" class="btn btn-dark">Back to News</a></div></section>`;
  }
  return `
    <section class="section">
      <div class="container">
        <a href="#news" class="btn btn-outline" style="margin-bottom: 30px; display: inline-flex; align-items: center; gap: 8px; color: var(--primary); border-color: #c8d8ea">← Back to News</a>
        
        <div class="two-col">
          <div class="two-col-text">
            <span class="date" style="color: var(--accent); font-size: 0.9rem; font-weight: 600; display: block; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em;">${item.date}</span>
            <h2>${item.title}</h2>
            <div style="margin-top: 20px; line-height: 1.8; color: var(--text-dark)">
              ${item.text}
            </div>
          </div>
          <div class="two-col-img">
            <img src="${item.image}" alt="${item.title}" style="border-radius: var(--radius); box-shadow: var(--shadow)">
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
          <h2>Publications</h2>
        </div>
        <div class="pub-list" style="display:flex; flex-direction:column; gap:20px">
          ${f.pubs.length === 0 ? `
            <div style="color: var(--text-body); font-style: italic;">No verified publications registered.</div>
          ` : f.pubs.map(pub => `
            <article class="pub-item" style="background:#fff; border:1px solid #e2e8f0; border-radius:var(--radius-sm); padding:20px; box-shadow:var(--shadow)">
              <div class="pub-meta" style="display:flex; gap:12px; margin-bottom:8px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.04em">
                <span class="pub-type" style="color:var(--accent)">Publication</span>
                <span class="pub-year" style="color:var(--text-body)">${pub.year}</span>
              </div>
              <h3 style="font-size:1.05rem; font-weight:700; color:var(--ink); margin-bottom:6px">${pub.title}</h3>
              <div class="pub-journal" style="font-size:0.88rem; font-style:italic; color:var(--primary); margin-bottom:4px">${pub.journal}</div>
              <div class="pub-authors" style="font-size:0.82rem; color:var(--text-body)"><strong>Authors:</strong> ${pub.authors}</div>
              ${pub.url ? `<div class="pub-url" style="font-size:0.82rem; margin-top:8px;"><a href="${pub.url}" target="_blank" style="color:var(--accent); font-weight:600; text-decoration: underline;">View Publication &rarr;</a></div>` : ''}
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
          
          <div style="margin-top: 20px; text-align: center; font-size: 0.82rem; color: var(--text-body); border-top: 1px solid #f1f5f9; padding-top: 15px;">
            Default accounts: email (e.g. <code>csshead@gimpa.edu.gh</code>, <code>gwiredu@gimpa.edu.gh</code>) with password <code>gimpa123</code>.
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
                  <button onclick="window.switchIntranetTab('admin')" class="intranet-tab-btn" style="display: flex; align-items: center; gap: 10px; width: 100%; border: none; background: none; padding: 12px 16px; border-radius: var(--radius-sm); text-align: left; font-size: 0.9rem; font-weight: 600; cursor: pointer; border: 1px solid transparent;">
                    Admin Tools
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
    
    <div>
      <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 16px;">Active Projects</h3>
      <div style="border: 1px solid #e2e8f0; border-radius: var(--radius-sm); overflow: hidden;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem; text-align: left;">
          <thead>
            <tr style="background: #f8fafc; border-bottom: 1px solid #e2e8f0;">
              <th style="padding: 12px 16px; font-weight: 600; color: var(--text-body);">Project Details</th>
            </tr>
          </thead>
          <tbody>
            ${(lecturer.projects || []).map(p => `
              <tr style="border-bottom: 1px solid #f1f5f9;">
                <td style="padding: 14px 16px; color: var(--text-dark); line-height: 1.5;">${p}</td>
              </tr>
            `).join('') || `
              <tr>
                <td style="padding: 14px 16px; color: var(--text-body); font-style: italic;">No active projects recorded.</td>
              </tr>
            `}
          </tbody>
        </table>
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

function renderIntranetVerification(publications) {
  const unverified = publications.filter(p => p.status === 'unverified');
  return `
    <div class="tab-header" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">Publication Verification Center</h2>
      <p style="color: var(--text-body); font-size: 0.88rem; margin-top: 4px;">Confirm whether crawled research items are your actual publications</p>
    </div>
    
    <div id="verifyStatusMessage" style="display: none;" class="status-message"></div>
    
    <div style="display: flex; flex-direction: column; gap: 20px;">
      ${unverified.length === 0 ? `
        <div style="text-align: center; padding: 40px 20px; background: #f8fafc; border: 1px dashed #c8d8ea; border-radius: var(--radius-sm);">
          <div style="font-size: 2rem; margin-bottom: 12px;">✅</div>
          <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--primary); margin-bottom: 4px;">All Publications Verified</h3>
          <p style="color: var(--text-body); font-size: 0.88rem;">Our publication scanner has not found any new unverified research matching your name.</p>
        </div>
      ` : unverified.map(pub => `
        <article class="pub-item" style="background:#fff; border:1px solid #e2e8f0; border-radius:var(--radius-sm); padding:20px; box-shadow:var(--shadow); display: flex; flex-direction: column; gap: 12px;">
          <div style="display:flex; justify-content: space-between; align-items: flex-start; gap: 12px; flex-wrap: wrap;">
            <div style="flex: 1;">
              <div class="pub-meta" style="display:flex; gap:12px; margin-bottom:8px; font-size:0.75rem; font-weight:600; text-transform:uppercase; letter-spacing:0.04em">
                <span class="pub-type" style="color:#ea580c">Crawled Alert</span>
                <span class="pub-year" style="color:var(--text-body)">${pub.year || 'N/A'}</span>
              </div>
              <h3 style="font-size:1.1rem; font-weight:700; color:var(--ink); margin-bottom:6px">${pub.title}</h3>
              <div class="pub-journal" style="font-size:0.88rem; font-style:italic; color:var(--primary); margin-bottom:4px">${pub.journal || 'Unknown Venue'}</div>
              <div class="pub-authors" style="font-size:0.82rem; color:var(--text-body)"><strong>Authors:</strong> ${pub.authors}</div>
              ${pub.summary ? `<div class="pub-summary" style="font-size:0.82rem; color:var(--text-body); background: #f8fafc; padding: 10px; border-radius: 4px; margin-top: 8px;"><strong>Abstract:</strong> ${pub.summary}</div>` : ''}
              ${pub.url ? `<div class="pub-url" style="font-size:0.82rem; margin-top:10px;"><a href="${pub.url}" target="_blank" style="color:var(--accent); font-weight:600; text-decoration: underline;">Review Online Publication &rarr;</a></div>` : ''}
            </div>
            
            <div style="display: flex; gap: 8px; margin-top: 10px; flex-shrink: 0;">
              <button onclick="window.handleVerificationAction(${pub.id}, 'verify')" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem; font-weight: 600; border-radius: 4px; height: 36px; justify-content: center; background: #16a34a; border-color: #16a34a;">Confirm Work</button>
              <button onclick="window.handleVerificationAction(${pub.id}, 'reject')" class="btn btn-outline" style="padding: 8px 16px; font-size: 0.85rem; font-weight: 600; border-radius: 4px; height: 36px; justify-content: center; color: #dc2626; border-color: #fca5a5;">Not Mine</button>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
  `;
}

function renderIntranetMessages(messages) {
  return `
    <div class="tab-header" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">Intranet Inbox &amp; Messages</h2>
      <p style="color: var(--text-body); font-size: 0.88rem; margin-top: 4px;">View administrative updates and private communications</p>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 16px;">
      ${messages.length === 0 ? `
        <div style="text-align: center; padding: 40px; color: var(--text-body); font-style: italic;">
          No messages received yet.
        </div>
      ` : messages.map(msg => {
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
      }).join('')}
    </div>
  `;
}

function renderIntranetAdmin(lecturers) {
  return `
    <div class="tab-header" style="margin-bottom: 24px; border-bottom: 1px solid #e2e8f0; padding-bottom: 16px;">
      <h2 style="font-size: 1.5rem; font-weight: 700; color: var(--primary);">Intranet Administration Panel</h2>
      <p style="color: var(--text-body); font-size: 0.88rem; margin-top: 4px;">Broadcast announcements, send messages, and scan research databases</p>
    </div>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
      <!-- Scan Section -->
      <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 24px;">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          Research Crawler Scanner
        </h3>
        <p style="font-size: 0.88rem; color: var(--text-body); margin-bottom: 16px; line-height: 1.5;">
          Trigger an on-demand scan of the <strong>Semantic Scholar</strong> academic database for all department faculty members. Newly discovered publications will appear in their respective Verification Centers.
        </p>
        
        <div id="scanStatusMessage" style="display: none;" class="status-message"></div>
        
        <button id="triggerScanBtn" onclick="window.runAdminScan()" class="btn btn-dark" style="width: 100%; justify-content: center; height: 44px; font-weight: 600;">
          Start Publication Scan
        </button>
      </div>
      
      <!-- Send Message Section -->
      <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: var(--radius-sm); padding: 24px; box-shadow: var(--shadow-sm);">
        <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--primary); margin-bottom: 12px;">
          Broadcast / Send Message
        </h3>
        
        <div id="adminMessageStatus" style="display: none;" class="status-message"></div>
        
        <form id="adminSendMessageForm" onsubmit="window.sendAdminMessage(event)">
          <div style="margin-bottom: 12px;">
            <label for="adminScopeSelect" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Message Scope</label>
            <select id="adminScopeSelect" onchange="window.handleAdminScopeChange(this.value)" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
              <option value="school">School-wide Announcement</option>
              <option value="department">Department-only Announcement</option>
              <option value="direct">Direct Message</option>
            </select>
          </div>

          <div id="adminDepartmentContainer" style="display: none; margin-bottom: 12px;">
            <label for="adminDepartmentSelect" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Target Department</label>
            <select id="adminDepartmentSelect" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
              <option value="Computer Science & Information Systems">Computer Science & Information Systems</option>
              <option value="Management Information Systems">Management Information Systems</option>
            </select>
          </div>
          
          <div id="adminRecipientContainer" style="display: none; margin-bottom: 12px;">
            <label for="adminRecipientSelect" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Recipient Faculty</label>
            <select id="adminRecipientSelect" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
              ${lecturers.map(l => `
                <option value="${l.id}">${l.name} (${l.role})</option>
              `).join('')}
            </select>
          </div>
          
          <div style="margin-bottom: 12px;">
            <label for="adminMessageTitle" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Message Title</label>
            <input type="text" id="adminMessageTitle" required placeholder="e.g. Annual Report Submission" style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none;">
          </div>
          
          <div style="margin-bottom: 16px;">
            <label for="adminMessageContent" style="display: block; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; color: var(--text-body); margin-bottom: 4px;">Message Content</label>
            <textarea id="adminMessageContent" required rows="4" placeholder="Enter message text here..." style="width: 100%; border: 1px solid #c8d8ea; background: #fff; border-radius: 4px; padding: 8px 10px; font-size: 0.88rem; outline: none; resize: vertical; font-family: inherit;"></textarea>
          </div>
          
          <button type="submit" class="btn btn-primary" style="width: 100%; justify-content: center; height: 40px; font-weight: 600;">Send Message</button>
        </form>
      </div>
    </div>
  `;
}

function getAuthHeaders() {
  const token = localStorage.getItem('sotssToken');
  return token ? { 'Authorization': `Bearer ${token}` } : {};
}

async function loadDynamicData() {
  try {
    const resLecturers = await fetch('/api/public/lecturers');
    const resPubs = await fetch('/api/public/publications');
    
    if (resLecturers.ok) {
      const dbLecturers = await resLecturers.json();
      const dbPubs = resPubs.ok ? await resPubs.json() : [];
      
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
    const resCount = await fetch('/api/lecturer/publications', { headers });
    if (resCount.ok) {
      const pubs = await resCount.json();
      const unverified = pubs.filter(p => p.status === 'unverified');
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
      const res = await fetch('/api/lecturer/me', { headers });
      if (res.ok) {
        const lecturer = await res.json();
        const localL = faculty.find(l => l.email.toLowerCase() === lecturer.email.toLowerCase());
        lecturer.projects = localL ? localL.projects : [];
        html = renderIntranetProfile(lecturer);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load profile details. Server returned ${res.status}.</div>`;
      }
    } else if (tabName === 'verification') {
      const res = await fetch('/api/lecturer/publications', { headers });
      if (res.ok) {
        const publications = await res.json();
        html = renderIntranetVerification(publications);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load publications details. Server returned ${res.status}.</div>`;
      }
    } else if (tabName === 'messages') {
      const res = await fetch('/api/messages', { headers });
      if (res.ok) {
        const messages = await res.json();
        html = renderIntranetMessages(messages);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load intranet inbox. Server returned ${res.status}.</div>`;
      }
    } else if (tabName === 'admin') {
      const res = await fetch('/api/public/lecturers');
      if (res.ok) {
        const lecturers = await res.json();
        html = renderIntranetAdmin(lecturers);
      } else {
        html = `<div style="color:#b91c1c; font-weight:600; padding:20px; text-align:center;">Failed to load admin panel details. Server returned ${res.status}.</div>`;
      }
    }
    
    if (container) {
      container.innerHTML = html;
      spinner.style.display = 'none';
      container.style.display = 'block';
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

async function handleVerificationAction(id, action) {
  const statusMsg = document.getElementById('verifyStatusMessage');
  if (statusMsg) {
    statusMsg.style.display = 'none';
  }
  
  try {
    const res = await fetch(`/api/publications/${id}/${action}`, {
      method: 'POST',
      headers: {
        ...getAuthHeaders()
      }
    });
    
    if (res.ok) {
      const data = await res.json();
      if (statusMsg) {
        statusMsg.className = 'status-message';
        statusMsg.style.backgroundColor = '#dcfce7';
        statusMsg.style.color = '#15803d';
        statusMsg.style.border = '1px solid #bbf7d0';
        statusMsg.textContent = data.message || `Publication successfully ${action === 'verify' ? 'verified' : 'rejected'}.`;
        statusMsg.style.display = 'block';
      }
      
      await loadDynamicData();
      
      const resPubs = await fetch('/api/lecturer/publications', { headers: getAuthHeaders() });
      if (resPubs.ok) {
        const pubs = await resPubs.json();
        const tabContent = document.getElementById('intranetTabContent');
        if (tabContent) {
          tabContent.innerHTML = renderIntranetVerification(pubs);
        }
      }
    } else {
      const err = await res.json();
      if (statusMsg) {
        statusMsg.className = 'status-message';
        statusMsg.style.backgroundColor = '#fef2f2';
        statusMsg.style.color = '#b91c1c';
        statusMsg.style.border = '1px solid #fca5a5';
        statusMsg.textContent = err.detail || 'Action failed.';
        statusMsg.style.display = 'block';
      }
    }
  } catch (err) {
    console.error(err);
    if (statusMsg) {
      statusMsg.className = 'status-message';
      statusMsg.style.backgroundColor = '#fef2f2';
      statusMsg.style.color = '#b91c1c';
      statusMsg.style.border = '1px solid #fca5a5';
      statusMsg.textContent = 'Connection error.';
      statusMsg.style.display = 'block';
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

// Make intranet helper functions globally accessible
window.switchIntranetTab = switchIntranetTab;
window.handleVerificationAction = handleVerificationAction;
window.runAdminScan = runAdminScan;
window.sendAdminMessage = sendAdminMessage;
window.handleAdminScopeChange = handleAdminScopeChange;

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
  } else if (r === 'introduction') {
    viewHTML = introduction();
    activeTab = 'introduction';
  } else if (r === 'research') {
    viewHTML = research();
    activeTab = 'research';
  } else if (r === 'contact') {
    viewHTML = contact();
    activeTab = 'contact';
  } else if (r === 'cooperation') {
    viewHTML = cooperation();
    activeTab = 'cooperation';
  } else if (r === 'news') {
    viewHTML = newsList();
    activeTab = 'news';
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
    activeTab = 'profile';
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
    if (!email.endsWith('@gimpa.edu.gh') && !email.endsWith('@adj.gimpa.edu.gh') && !email.endsWith('@st.gimpa.edu.gh')) {
      errorMsg.textContent = 'Only GIMPA email addresses ending in @gimpa.edu.gh, @adj.gimpa.edu.gh, or @st.gimpa.edu.gh are allowed to log in.';
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

// Bootstrapping the application
async function initApp() {
  await loadDynamicData();
  render();
}
initApp();

