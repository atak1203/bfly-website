/* =============================================
   BFL'Y — components.js
   Shared Navbar · Page Hero · Footer · Lang
   ============================================= */

const LOGO_PATH_ROOT  = 'assets/images/LogoButun.png';
const LOGO_PATH_PAGES = '../assets/images/LogoButun.png';

function isInPages() {
  return window.location.pathname.includes('/pages/');
}

const logoSrc    = isInPages() ? LOGO_PATH_PAGES : LOGO_PATH_ROOT;
const homeHref   = isInPages() ? '../index.html'  : 'index.html';
const pagePrefix = isInPages() ? '' : 'pages/';

const NAV_LINKS = [
  { href: `${homeHref}`,                key: 'nav_home',     label_en: 'Home',      label_tr: 'Ana Sayfa'  },
  { href: `${pagePrefix}team.html`,     key: 'nav_team',     label_en: 'Team',      label_tr: 'Takım'      },
  { href: `${pagePrefix}vehicle.html`,  key: 'nav_vehicle',  label_en: 'Vehicle',   label_tr: 'Araç'       },
  { href: `${pagePrefix}blog.html`,     key: 'nav_blog',     label_en: 'Blog',      label_tr: 'Blog'       },
  { href: `${pagePrefix}gallery.html`,  key: 'nav_gallery',  label_en: 'Gallery',   label_tr: 'Galeri'     },
  { href: `${pagePrefix}sponsors.html`, key: 'nav_sponsors', label_en: 'Sponsors',  label_tr: 'Sponsorlar' },
  { href: `${pagePrefix}contact.html`,  key: 'nav_contact',  label_en: 'Contact',   label_tr: 'İletişim'   },
];

function buildNavLinks() {
  return NAV_LINKS.map(l => {
    const current = window.location.pathname;
    const isActive = (l.href.includes('index') && (current.endsWith('/') || current.endsWith('index.html')))
      || (!l.href.includes('index') && current.includes(l.href.replace('../', '').replace('pages/', '')));
    return `<li><a href="${l.href}" class="nav-link ${isActive ? 'active' : ''}" data-i18n="${l.key}">${l.label_en}</a></li>`;
  }).join('');
}

/* ===== NAVBAR ===== */
function injectNavbar() {
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  navbar.id = 'navbar';
  navbar.setAttribute('role', 'navigation');
  navbar.setAttribute('aria-label', 'Main navigation');
  navbar.innerHTML = `
    <div class="nav-container">
      <a href="${homeHref}" class="nav-logo" aria-label="BFL'Y Home">
        <img src="${logoSrc}" alt="BFL'Y Logo" class="nav-logo-img" />
      </a>
      <ul class="nav-links" role="list">${buildNavLinks()}</ul>
      <div class="nav-right">
        <button class="lang-toggle" id="langToggle" aria-label="Switch language">
          <span class="lang-option active" data-lang="en">EN</span>
          <span class="lang-divider">/</span>
          <span class="lang-option" data-lang="tr">TR</span>
        </button>
        <button class="hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="mobileMenu" role="dialog" aria-label="Mobile navigation">
      <ul role="list">${buildNavLinks()}</ul>
    </div>
  `;
  document.body.prepend(navbar);
}

/* ===== PAGE HERO ===== */
/*
  Kullanım: body tag'ine şu attribute'ları ekle:
  data-page-hero="true"
  data-hero-eyebrow-en="Our Aircraft"   data-hero-eyebrow-tr="Hava Araçlarımız"
  data-hero-title-en="Vehicles"         data-hero-title-tr="Araçlar"
  data-hero-accent="Vehicles"           ← Bu kelime/harf accent renginde olur
  data-hero-desc-en="Three generations" data-hero-desc-tr="Üç nesil..."
*/
function injectPageHero() {
  const body = document.body;
  if (body.dataset.pageHero !== 'true') return;

  const lang = window.BFLY_CURRENT_LANG || 'en';

  const eyebrow = body.dataset[`heroEyebrow${lang.charAt(0).toUpperCase() + lang.slice(1)}`] || body.dataset.heroEyebrowEn || '';
  const title   = body.dataset[`heroTitle${lang.charAt(0).toUpperCase() + lang.slice(1)}`]   || body.dataset.heroTitleEn   || '';
  const accent  = body.dataset.heroAccent || '';
  const desc    = body.dataset[`heroDesc${lang.charAt(0).toUpperCase() + lang.slice(1)}`]    || body.dataset.heroDescEn    || '';

  // Accent kelimesini title içinde renklendir
  const titleHtml = accent
    ? title.replace(new RegExp(`(${accent})`, 'i'), '<em class="accent">$1</em>')
    : title;

  const hero = document.createElement('section');
  hero.className = 'page-hero';
  hero.id = 'page-hero';
  hero.setAttribute('aria-labelledby', 'page-hero-title');
  hero.innerHTML = `
    <div class="page-hero-bg"></div>
    <div class="page-hero-grid"></div>
    <div class="container page-hero-content">
      <p class="section-eyebrow page-hero-eyebrow" data-hero-key="eyebrow">${eyebrow}</p>
      <h1 class="page-hero-title" id="page-hero-title" data-hero-key="title">${titleHtml}</h1>
      ${desc ? `<p class="page-hero-desc" data-hero-key="desc">${desc}</p>` : ''}
    </div>
  `;

  // Navbar'dan hemen sonraya ekle
  const navbar = document.getElementById('navbar');
  navbar.insertAdjacentElement('afterend', hero);
}

/* ===== FOOTER ===== */
function injectFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.setAttribute('role', 'contentinfo');
  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-left">
        <img src="${logoSrc}" alt="BFL'Y Logo" class="footer-logo-img" />
        <p data-i18n="footer_school">Baykar Science High School · Aviation Team</p>
      </div>
      <div class="footer-right">
        <p data-i18n="footer_contact_label">Contact</p>
        <a href="mailto:bflysavasaniha@gmail.com" class="footer-link">bflysavasaniha@gmail.com</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 BFL'Y — Baykar Science High School · Aviation Team</p>
    </div>
  `;
  document.body.append(footer);
}

/* ===== NAVBAR SCROLL ===== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ===== MOBILE MENU ===== */
function initMobileMenu() {
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  mobileMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* ===== TRANSLATIONS ===== */
window.BFLY_TRANSLATIONS = {
  en: {
    nav_home:             'Home',
    nav_team:             'Team',
    nav_vehicle:          'Vehicles',
    nav_blog:             'Blog',
    nav_gallery:          'Gallery',
    nav_sponsors:         'Sponsors',
    nav_contact:          'Contact',
    hero_eyebrow:         'Baykar Science High School',
    hero_subtitle:        'Grounded in roots,<br>reaching for the sky',
    stat_years:           'Years of Flight',
    stat_members:         'Team Members',
    stat_aircrafts:       'Aircrafts',
    about_eyebrow:        'Who We Are',
    about_title:          'A high school team<br>with an engineering mindset.',
    about_body:           'Founded in 2024 at Baykar Science High School, our 13-member UAV team is driven by the National Technology Initiative. Go toe-to-toe with university teams globally, we design next-gen aerospace solutions to pioneer our country’s independent future.',
    about_cta:            'Learn More About Us',
    vehicle_eyebrow:      'Our Aircrafts',
    vehicle_title:        'Advanced Engineering',
    vcard1_title:         'SkyWipe',
    vcard1_body:          'SkyWipe is our debut UAV project, featuring a 100% custom design and in-house production. Built for TEKNOFEST, this drone redefines utility with its signature window-cleaning technology.<br><br>',
    vcard2_title:         'TurcoFighter',
    vcard2_body:          'TurcoFighter, a Talon model aircraft, was built for our first-ever Combat UAV competition. This project served as the ultimate launchpad for our team’s competitive journey in the skies.<br><br>',
    vcard3_title:         'DeliFisek',
    vcard3_body:          'Delifişek is our latest aircraft built for TEKNOFEST and SUAS. Currently in active development, this project allows us to push our limits by competing side-by-side with seasoned teams in high-stakes tournaments.<br><br>',
    vehicle_cta:          'Full Vehicle Documentation',
    footer_school:        'Baykar Science High School · Aviation Team',
    footer_contact_label: 'Contact',
    news_eyebrow:         'Latest',
    news_title:           'News',
    /* vehicle page */
    veh_page_eyebrow:     'Our Aircraft',
    veh_page_title:       'Vehicles',
    veh_page_desc:        'Three generations of student-built UAVs — each one pushing further than the last.',
    veh1_name:            'Skywipe',
    veh1_desc:            'Our first carbon fiber fixed-wing UAV. Built to learn, designed to compete.',
    veh1_cta:             'View Aircraft →',
    veh2_name:            'Turcofighter',
    veh2_desc:            'Refined aerodynamics, upgraded avionics. Turcofighter pushed our autonomous capabilities further.',
    veh2_cta:             'View Aircraft →',
    veh3_name:            'X',
    veh3_desc:            'Our most advanced platform yet. Competing in SUAS 2025 with full autonomous mission capability.',
    veh3_cta:             'View Aircraft →',
    veh_badge_current:    'Current',
  },
  tr: {
    nav_home:             'Ana Sayfa',
    nav_team:             'Takım',
    nav_vehicle:          'Araçlar',
    nav_blog:             'Blog',
    nav_gallery:          'Galeri',
    nav_sponsors:         'Sponsorlar',
    nav_contact:          'İletişim',
    hero_eyebrow:         'Baykar Fen Lisesi',
    hero_subtitle:        'Köklerden Göklere...',
    stat_years:           'Uçuş Yılı',
    stat_members:         'Takım Üyesi',
    stat_aircrafts:       'Hava Aracı',
    about_eyebrow:        'Biz Kimiz',
    about_title:          'Mühendislik zihniyetine sahip<br>bir lise takımı.',
    about_body:           'Baykar Fen Lisesi bünyesinde, milli teknoloji hamlesi vizyonuyla 2024 yılında kurulan 13 kişilik bir İHA takımıyız. Ulusal ve uluslararası arenalarda üniversite ekiplerine karşı lise ruhuyla rekabet ederek geleceğin hava teknolojilerini geliştiriyoruz. Milli değerlerimizle ülkemizin tam bağımsız yarınlarına öncülük etmeyi hedefliyoruz.',
    about_cta:            'Hakkımızda Daha Fazla',
    vehicle_eyebrow:      'Hava Araçlarımız',
    vehicle_title:        'İleri Mühendislik',
    vcard1_title:         'SkyWipe',
    vcard1_body:          'SkyWipe, tamamen kendi tasarım ve üretimimiz olan ilk İHA projemizdir. TEKNOFEST için geliştirdiğimiz bu drone, cam silme fonksiyonuyla öne çıkmaktadır.<br><br>',
    vcard2_title:         'TurcoFighter',
    vcard2_body:          'TurcoFighter, Savaşan İHA yarışmasına katıldığımız ilk yıl hazırladığımız hazır talon model uçağımızdır. Bu proje, takımımızın gökyüzündeki rekabetçi mücadelesinin ilk adımı olmuştur.<br><br>',
    vcard3_title:         'DeliFişek',
    vcard3_body:          'Delifişek, TEKNOFEST ve SUAS için geliştirdiğimiz en güncel uçağımızdır. Aktif gelişimdeki bu projeyle, zorlu turnuvalarda tecrübeli ekiplerle bir arada yarışarak kendimizi geliştiriyoruz.<br><br>',
    vehicle_cta:          'Tam Araç Dokümantasyonu',
    footer_school:        'Baykar Fen Lisesi · Havacılık Takımı',
    footer_contact_label: 'İletişim',
    news_eyebrow:         'Son Dakika',
    news_title:           'Haberler',
    /* vehicle page */
    veh_page_eyebrow:     'Hava Araçlarımız',
    veh_page_title:       'Araçlar',
    veh_page_desc:        'Öğrenciler tarafından üretilmiş üç nesil İHA — her biri bir öncekinden daha ileri.',
    veh1_name:            'Skywipe',
    veh1_desc:            'İlk karbon fiber sabit kanatlı İHA\'mız. Öğrenmek için üretildi, rekabet için tasarlandı.',
    veh1_cta:             'Araca Bak →',
    veh2_name:            'Turcofighter',
    veh2_desc:            'İyileştirilmiş aerodinamik, yükseltilmiş aviyonik. Turcofighter otonom kabiliyetlerimizi daha ileriye taşıdı.',
    veh2_cta:             'Araca Bak →',
    veh3_name:            'X',
    veh3_desc:            'Şimdiye kadarki en gelişmiş platformumuz. SUAS 2025\'te tam otonom görev kabiliyetiyle yarışıyor.',
    veh3_cta:             'Araca Bak →',
    veh_badge_current:    'Güncel',
  }
};

window.BFLY_CURRENT_LANG = 'en';

/* ===== LANG APPLY ===== */
window.applyLanguage = function(lang) {
  const t = window.BFLY_TRANSLATIONS[lang];
  if (!t) return;

  // Standart data-i18n elementleri
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Page hero — body attribute'larından güncelle
  const body = document.body;
  if (body.dataset.pageHero === 'true') {
    const L = lang.charAt(0).toUpperCase() + lang.slice(1);
    const eyebrow = body.dataset[`heroEyebrow${L}`] || '';
    const title   = body.dataset[`heroTitle${L}`]   || '';
    const accent  = body.dataset.heroAccent          || '';
    const desc    = body.dataset[`heroDesc${L}`]     || '';

    const titleHtml = accent
      ? title.replace(new RegExp(`(${accent})`, 'i'), '<em class="accent">$1</em>')
      : title;

    const eyebrowEl = document.querySelector('.page-hero-eyebrow');
    const titleEl   = document.querySelector('.page-hero-title');
    const descEl    = document.querySelector('.page-hero-desc');

    if (eyebrowEl) eyebrowEl.innerHTML = eyebrow;
    if (titleEl)   titleEl.innerHTML   = titleHtml;
    if (descEl)    descEl.innerHTML    = desc;
  }

  document.documentElement.lang = lang;
  window.BFLY_CURRENT_LANG = lang;
};

/* ===== LANG TOGGLE ===== */
function initLangToggle() {
  const langToggle = document.getElementById('langToggle');
  if (!langToggle) return;
  langToggle.addEventListener('click', () => {
    const next = window.BFLY_CURRENT_LANG === 'en' ? 'tr' : 'en';
    applyLanguage(next);
    langToggle.querySelectorAll('.lang-option').forEach(opt => {
      opt.classList.toggle('active', opt.dataset.lang === next);
    });
  });
}

/* ===== BOOT ===== */
document.addEventListener('DOMContentLoaded', () => {
  injectNavbar();
  injectPageHero();   // page-hero yoksa otomatik atlar
  injectFooter();
  initNavbarScroll();
  initMobileMenu();
  initLangToggle();
  applyLanguage('en');
});