/* =============================================
   BFL'Y — main.js
   Navbar scroll · Mobile menu · Language toggle · Video fallback
   ============================================= */

// ---------- NAVBAR SCROLL ----------
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// ---------- MOBILE MENU ----------
const hamburger = document.getElementById('hamburger');
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

// ---------- VIDEO FALLBACK ----------
// If video fails to load (slow connection / missing file), hide the
// video wrapper so the page still looks fine with just the overlay.
const heroVideo = document.querySelector('.hero-video');
if (heroVideo) {
  heroVideo.addEventListener('error', () => {
    const wrap = document.querySelector('.hero-video-wrap');
    if (wrap) wrap.style.display = 'none';
  });
}

// ---------- LANGUAGE TOGGLE ----------
const translations = {
  en: {
    hero_eyebrow:         'Baykar ScIence High School',
    hero_subtitle:        'Grounded in roots,<br>reaching for the sky',
    hero_desc:            'A student-built carbon fiber fixed-wing UAV competing in one of the world\'s most prestigious autonomous systems competitions — AUVSI SUAS.',
    hero_cta_vehicle:     'Our Vehicle',
    hero_cta_team:        'Meet the Team',
    stat_carbon:          'Years of flight',
    stat_competition:     'AUVSI Competition',
    stat_level:           'Among University Teams',
    about_eyebrow:        'Who We Are',
    about_title:          'A high school team<br>with an engineering mindset.',
    about_body:           'We are BFL\'Y, the SUAS team of Baykar Science High School. Competing against universities from around the world, we design, manufacture, and fly our own fully autonomous fixed-wing UAV — from carbon fiber layup to autonomous mission planning.',
    about_cta:            'Learn More About Us',
    vehicle_eyebrow:      'Our Aircraft',
    vehicle_title:        'Carbon. Autonomous. Precise.',
    vcard1_title:         'Carbon Fiber Airframe',
    vcard1_body:          'Hand-laminated carbon fiber structure for maximum strength-to-weight ratio.',
    vcard2_title:         'Autonomous Systems',
    vcard2_body:          'Full autonomous mission capability including waypoint navigation and target detection.',
    vcard3_title:         'Custom Avionics',
    vcard3_body:          'Custom-integrated flight control and payload systems designed in-house.',
    vehicle_cta:          'Full Vehicle Documentation',
    footer_school:        'Baykar Science High School · SUAS Team',
    footer_contact_label: 'Contact',
  },
  tr: {
    hero_eyebrow:         'Baykar ScIence High School',
    hero_subtitle:        'Lise öğrencileri tarafından yapıldı.<br>Rekabet için mühendislendi.',
    hero_desc:            'Dünyanın en prestijli otonom sistemler yarışmalarından biri olan AUVSI SUAS\'a katılan, öğrenciler tarafından üretilmiş karbon fiber sabit kanatlı bir İHA.',
    hero_cta_vehicle:     'Uçağımız',
    hero_cta_team:        'Takımımızla Tanış',
    stat_carbon:          'Karbon Fiber Gövde',
    stat_competition:     'AUVSI Yarışması',
    stat_level:           'Üniversiteler Arasında',
    about_eyebrow:        'Biz Kimiz',
    about_title:          'Mühendislik zihniyetine sahip<br>bir lise takımı.',
    about_body:           'Biz BFL\'Y, Baykar Fen Lisesi\'nin SUAS takımıyız. Dünyanın dört bir yanındaki üniversitelerle rekabet ederek kendi tam otonom sabit kanatlı İHA\'mızı tasarlıyor, üretiyor ve uçuruyoruz.',
    about_cta:            'Hakkımızda Daha Fazla',
    vehicle_eyebrow:      'Uçağımız',
    vehicle_title:        'Karbon. Otonom. Hassas.',
    vcard1_title:         'Karbon Fiber Gövde',
    vcard1_body:          'Maksimum mukavemet-ağırlık oranı için elle laminasyon yapılmış karbon fiber yapı.',
    vcard2_title:         'Otonom Sistemler',
    vcard2_body:          'Rota navigasyonu ve hedef tespiti dahil tam otonom görev kapasitesi.',
    vcard3_title:         'Özel Aviyonik',
    vcard3_body:          'Ekibimiz tarafından tasarlanmış özel entegre uçuş kontrolü ve yük sistemleri.',
    vehicle_cta:          'Tam Araç Dokümantasyonu',
    footer_school:        'Baykar Fen Lisesi · SUAS Takımı',
    footer_contact_label: 'İletişim',
  }
};

let currentLang = 'en';

const langToggle = document.getElementById('langToggle');

langToggle.addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'tr' : 'en';
  applyLanguage(currentLang);

  langToggle.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === currentLang);
  });
});

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
  document.documentElement.lang = lang;
}