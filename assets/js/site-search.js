(function () {
  const input = document.getElementById('siteSearch');
  const results = document.getElementById('siteSearchResults');
  if (!input || !results) return;

  const isPeoplePage = window.location.pathname.includes('/people/') || window.location.href.includes('/people/');
  const base = isPeoplePage ? '../' : '';

  const pages = [
    { title: 'Home', href: 'index.html', keywords: 'home department computer science information systems gimpa' },
    { title: 'Introduction', href: 'introduction.html', keywords: 'introduction about department mission vision programmes' },
    { title: 'Research', href: 'research.html', keywords: 'research machine learning ai data science cybersecurity analytics' },
    { title: 'Contact', href: 'contact.html', keywords: 'contact faculty staff lecturer email phone office' },
    { title: 'Cooperation', href: 'cooperation.html', keywords: 'cooperation partnership industry alumni internship collaboration' },
    { title: 'Dr. Joseph Budu', href: 'people/joseph-budu.html', keywords: 'joseph budu cybersecurity digital forensics senior lecturer' },
    { title: 'Prof. Gamel O. Wiredu', href: 'people/gamel-wiredu.html', keywords: 'gamel wiredu professor information systems mis' },
    { title: 'Dr. Felicia N. A. Engmann', href: 'people/felicia-engmann.html', keywords: 'felicia engmann head of department data science ai' },
    { title: 'Prof. Emmanuel S. Adabor', href: 'people/emmanuel-adabor.html', keywords: 'emmanuel adabor professor industrial analytics optimization' },
    { title: 'Dr. Nana Assyne', href: 'people/nana-assyne.html', keywords: 'nana assyne lecturer software engineering hci' },
    { title: 'Dr. Emmanuel Antwi-Boasiako', href: 'people/emmanuel-antwi-boasiako.html', keywords: 'emmanuel antwi boasiako lecturer cyber policy identity' }
  ];

  function render(items) {
    if (!items.length) {
      results.innerHTML = '<div class="no-results">No pages found.</div>';
      results.classList.add('active');
      return;
    }

    results.innerHTML = items.slice(0, 8).map((item) => {
      const href = isPeoplePage && item.href.startsWith('people/') ? item.href.replace('people/', '') : base + item.href;
      const section = item.href.includes('people/') ? 'Faculty profile' : 'Main page';
      return '<a href="' + href + '"><span class="result-title">' + item.title + '</span><span class="result-meta">' + section + '</span></a>';
    }).join('');
    results.classList.add('active');
  }

  input.addEventListener('input', function () {
    const term = input.value.trim().toLowerCase();
    if (!term) {
      results.classList.remove('active');
      results.innerHTML = '';
      return;
    }
    const filtered = pages.filter(function (page) {
      return page.title.toLowerCase().includes(term) || page.keywords.includes(term);
    });
    render(filtered);
  });

  document.addEventListener('click', function (event) {
    if (!results.contains(event.target) && event.target !== input) {
      results.classList.remove('active');
    }
  });
})();
