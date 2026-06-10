const faculty = [
  { id:'felicia-engmann', name:'Dr. Felicia N. A. Engmann', role:'Head of Department', email:'csshead@gimpa.edu.gh', photo:'../assets/images/felicia-engmann.png', spec:'Data Science, AI, Curriculum Leadership', office:'Department Office, SOT Main Block', phone:'+233 (0) 332095432', projects:['AI for Academic Success','Women in Tech Mentorship','Curriculum Modernization 4.0'], pubs:['Learning analytics for retention prediction in emerging universities (2025)','Ethical AI integration for tertiary-level computing programmes (2024)'] },
  { id:'joseph-budu', name:'Dr. Joseph Budu', role:'Senior Lecturer', email:'josbudu@gimpa.edu.gh', photo:'../assets/images/joseph-budu.png', spec:'Digital Forensics, Cybersecurity', office:'SOT Block B, Room 2.11', phone:'+233 (0) 501620138', projects:['Cybercrime Evidence Readiness','Secure Campus Identity'], pubs:['Digital evidence governance for public sector institutions (2025)'] },
  { id:'gamel-wiredu', name:'Prof. Gamel O. Wiredu', role:'Professor', email:'gwiredu@gimpa.edu.gh', photo:'../assets/images/gamel-wiredu.png', spec:'Information Systems, Digital Transformation', office:'SOT Block A, Room 1.04', phone:'+233 (0) 501620138', projects:['Digital Governance Readiness','Data-driven Policy Lab'], pubs:['Institutional pathways for digital transformation (2026)'] }
];

const root = document.getElementById('root');
const routes = [['home','Home'],['introduction','Introduction'],['research','Research'],['contact','Contact'],['cooperation','Cooperation']];

function route(){ return location.hash.replace('#','') || 'home'; }
function nav(active){ return routes.map(([id,l])=>`<a href="#${id}" class="${active===id?'active':''}">${l}</a>`).join(''); }

function topAndHeader(active){
  return `<div class="top"><div class="wrap"><div>GIMPA Home · LMS · Apply Now</div><div>Staff Mail · Student Mail</div></div></div>
  <header class="header"><div class="wrap row"><a class="logo" href="#home"><div class="badge">CS</div><div class="brand"><h2>Computer Science & IS</h2><small>GIMPA · SCHOOL OF TECHNOLOGY</small></div></a><div class="search"><input placeholder="Search website (local compare)"/></div><nav class="nav">${nav(active)}</nav></div></header>`;
}

function hero(title, body){ return `<section class="hero"><div class="wrap"><h1>${title}</h1><p>${body}</p></div></section>`; }
function footer(){ return `<footer class="footer"><div class="wrap">© 2026 GIMPA - Local compare site</div></footer>`; }

function home(){ return hero("Shaping Ghana's Digital Future Through Computing Excellence","Local comparison version (offline-safe).") + `<section class="section wrap"><h2 class="title">Explore the Department</h2><div class="grid"><article class="card"><img src="../assets/icons/icon-document.svg"><h3>Introduction</h3><p>Department history and mission.</p></article><article class="card"><img src="../assets/icons/icon-screen.svg"><h3>Research</h3><p>AI and data research themes.</p></article><article class="card"><img src="../assets/icons/icon-people.svg"><h3>Contact</h3><p>Faculty and staff profiles.</p></article><article class="card"><img src="../assets/icons/icon-cooperate.svg"><h3>Cooperation</h3><p>Industry partnerships and outreach.</p></article></div></section>`; }
function introduction(){ return hero('Introduction to the Department','Established through merger in 2023, with strong programmes and modern lab support.') + `<section class="section wrap"><h2 class="title">Mission and Vision</h2><div class="grid"><article class="card"><img src="../assets/icons/icon-document.svg"><h3>Mission</h3><p>Deliver relevant computing education and research.</p></article><article class="card"><img src="../assets/icons/icon-screen.svg"><h3>Vision</h3><p>Lead digital transformation in Africa.</p></article></div></section>`; }
function research(){ return hero('Advancing Computing Through Research','Predictive analytics, IoT, AI, and cybersecurity.') + `<section class="section wrap"><h2 class="title">Research Focus Areas</h2><div class="grid"><article class="card"><img src="../assets/icons/icon-document.svg"><h3>Predictive Analytics</h3><p>Data-driven modelling and decision support.</p></article><article class="card"><img src="../assets/icons/icon-library.svg"><h3>Cybersecurity</h3><p>Digital forensics and resilient systems.</p></article></div></section>`; }
function contact(){
  return `<section class="section wrap"><h2 class="title">Faculty Members</h2><div class="staff">${faculty.map(f=>`<a href="#profile/${f.id}" class="card"><img class="photo" src="${f.photo}" alt="${f.name}"><h3>${f.name}</h3><p class="muted">${f.role}</p><p>${f.email}</p></a>`).join('')}</div></section>`;
}
function cooperation(){ return hero('Cooperation and Partnerships','Collaboration with industry, alumni, and global academic partners.') + `<section class="section wrap"><div class="grid"><article class="card"><img src="../assets/icons/icon-cooperate.svg"><h3>Industry Cooperation</h3><p>Internships and joint projects.</p></article><article class="card"><img src="../assets/icons/icon-badge.svg"><h3>International Partnerships</h3><p>Global research exchanges.</p></article></div></section>`; }

function profile(id){
  const f = faculty.find(x=>x.id===id);
  if(!f) return `<section class="section wrap"><h2 class="title">Profile not found</h2></section>`;
  return `<section class="profile-hero"><div class="wrap"><div class="profile-row"><img src="${f.photo}" alt="${f.name}"><div><h1 style="margin:0 0 8px">${f.name}</h1><h3 style="margin:0 0 8px;color:#7ec5ed">${f.role}</h3><div style="color:#d6e0eb">Department of Computer Science & Information Systems</div></div></div><div class="meta"><div><strong>Email</strong><div>${f.email}</div></div><div><strong>Specialization</strong><div>${f.spec}</div></div><div><strong>Office</strong><div>${f.office}</div></div><div><strong>Phone</strong><div>${f.phone}</div></div></div></div></section><section class="section wrap"><div class="grid"><div class="list"><h3>Projects</h3><ul>${f.projects.map(p=>`<li>${p}</li>`).join('')}</ul></div><div class="list"><h3>Publications</h3><ul>${f.pubs.map(p=>`<li>${p}</li>`).join('')}</ul></div></div></section>`;
}

function render(){
  const r = route();
  let content = '';
  if(r==='home') content = home();
  else if(r==='introduction') content = introduction();
  else if(r==='research') content = research();
  else if(r==='contact') content = contact();
  else if(r==='cooperation') content = cooperation();
  else if(r.startsWith('profile/')) content = profile(r.split('/')[1]);
  else content = home();
  root.innerHTML = topAndHeader(r.startsWith('profile/') ? 'contact' : r) + content + footer();
}

window.addEventListener('hashchange', render);
render();
