/* =============================================
   BFL'Y — main.js
   Index-page specific: video fallback
   ============================================= */

// ---------- VIDEO FALLBACK ----------
document.addEventListener('DOMContentLoaded', () => {
  const heroVideo = document.querySelector('.hero-video');
  if (heroVideo) {
    heroVideo.addEventListener('error', () => {
      const wrap = document.querySelector('.hero-video-wrap');
      if (wrap) wrap.style.display = 'none';
    });
  }
});

// ---------- NEWS SLIDER ----------
const TICKER_NEWS = [
  {
    date_en: 'May 12, 2025',    date_tr: '12 Mayıs 2025',
    category_en: 'Competition', category_tr: 'Yarışma',
    title_en: 'We Advanced to the Finals at TEKNOFEST 2025!',
    title_tr: 'TEKNOFEST 2025\'te Finale Kaldık!',
    excerpt_en: 'BFL\'Y qualified first from the regional heats at TEKNOFEST İstanbul 2025, advancing to the grand final with both technical performance and presentation.',
    excerpt_tr: 'Bölgesel elemelerden birinci çıkarak büyük finale yükseldik. Hem teknik hem sunum performansımızla jüriyi etkiledik.',
    image: 'assets/images/teknofest.jpeg',
    link: 'pages/blog.html'
  },
  {
    date_en: 'April 28, 2025',  date_tr: '28 Nisan 2025',
    category_en: 'Technical',   category_tr: 'Teknik',
    title_en: 'SkyWipe v2.3 Software Update Released',
    title_tr: 'SkyWipe v2.3 Yazılım Güncellemesi Yayında',
    excerpt_en: 'A 40% improvement was achieved in the autonomous obstacle avoidance module. New mission planning algorithms are now active.',
    excerpt_tr: 'Otonom engel kaçınma modülünde yüzde 40 iyileştirme sağlandı. Yeni görev planlama algoritmaları devrede.',
    image: 'assets/images/software.jpeg',
    link: 'pages/blog.html'
  },
  {
    date_en: 'April 10, 2025',  date_tr: '10 Nisan 2025',
    category_en: 'Event',       category_tr: 'Etkinlik',
    title_en: 'Joint Workshop with the Rocket Club',
    title_tr: 'Roket Kulübü ile Ortak Atölye Çalışması',
    excerpt_en: 'AI-powered flight control and sensor fusion were the focus of the joint design sprint held with the school\'s rocket club.',
    excerpt_tr: 'Okul roket kulübüyle ortak tasarım sprint\'inde yapay zeka destekli uçuş kontrolü ve sensör füzyonu ele alındı.',
    image: 'assets/images/workshop.jpeg',
    link: 'pages/blog.html'
  },
  {
    date_en: 'March 5, 2026',   date_tr: '5 Mart 2026',
    category_en: 'Competition', category_tr: 'Yarışma',
    title_en: 'Europe Student UAV Challenge — Registration Confirmed',
    title_tr: 'Avrupa Student UAV Challenge — Kayıt Onayı',
    excerpt_en: 'Our team\'s application to compete on the international stage has been officially accepted. Preparations are underway.',
    excerpt_tr: 'Uluslararası arenada katılım başvurumuz resmi olarak kabul gördü. Hazırlıklar başladı.',
    image: null,
    link: 'pages/blog.html'
  },
  {
    date_en: 'April 2, 2025',   date_tr: '2 Nisan 2025',
    category_en: 'Announcement',category_tr: 'Duyuru',
    title_en: 'New Season Team Applications Open',
    title_tr: 'Yeni Sezon Takım Alımları Başladı',
    excerpt_en: 'We are accepting new members in software, mechanical, and electronics for the 2025-2026 season. Apply before May 1st.',
    excerpt_tr: '2025-2026 sezonu için yazılım, mekanik ve elektronik alanlarında yeni üye alıyoruz. 1 Mayıs\'a kadar başvurun.',
    image: null,
    link: 'pages/blog.html'
  },
];

function buildNewsSlider() {
  const slides   = document.getElementById('newsSlides');
  const dotsWrap = document.getElementById('newsDots');
  const prevBtn  = document.getElementById('newsPrev');
  const nextBtn  = document.getElementById('newsNext');
  if (!slides) return;

  let current = 0;
  let autoTimer = null;

  function render() {
    const lang = window.BFLY_CURRENT_LANG || 'en';

    slides.innerHTML = TICKER_NEWS.map((n, i) => `
      <a class="news-slide${i === 0 ? ' active' : ''}" href="${n.link}" data-index="${i}">
        <div class="news-slide-img">
          ${n.image
            ? `<img src="${n.image}" alt="${n[`title_${lang}`]}" loading="lazy" />`
            : `<div class="news-slide-img-placeholder">BFL'Y</div>`}
        </div>
        <div class="news-slide-content">
          <div class="news-slide-meta">
            <span class="news-slide-cat">${n[`category_${lang}`]}</span>
            <span class="news-slide-date">${n[`date_${lang}`]}</span>
          </div>
          <h3 class="news-slide-title">${n[`title_${lang}`]}</h3>
          <p class="news-slide-excerpt">${n[`excerpt_${lang}`]}</p>
          <span class="news-slide-cta">Read More →</span>
        </div>
      </a>`).join('');

    dotsWrap.innerHTML = TICKER_NEWS.map((_, i) =>
      `<button class="news-dot${i === 0 ? ' active' : ''}" data-dot="${i}" aria-label="Go to slide ${i+1}"></button>`
    ).join('');

    dotsWrap.querySelectorAll('.news-dot').forEach(dot => {
      dot.addEventListener('click', () => goTo(+dot.dataset.dot));
    });
  }

  function goTo(index) {
    const allSlides = slides.querySelectorAll('.news-slide');
    const allDots   = dotsWrap.querySelectorAll('.news-dot');
    allSlides[current].classList.remove('active');
    allDots[current].classList.remove('active');
    current = (index + TICKER_NEWS.length) % TICKER_NEWS.length;
    allSlides[current].classList.add('active');
    allDots[current].classList.add('active');
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 3500);
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));

  // YENİ — bununla değiştir:
  function updateLang() {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    slides.querySelectorAll('.news-slide').forEach((slide, i) => {
      const n = TICKER_NEWS[i];
      slide.querySelector('.news-slide-cat').textContent    = n[`category_${lang}`];
      slide.querySelector('.news-slide-date').textContent   = n[`date_${lang}`];
      slide.querySelector('.news-slide-title').textContent  = n[`title_${lang}`];
      slide.querySelector('.news-slide-excerpt').textContent = n[`excerpt_${lang}`];
      const img = slide.querySelector('.news-slide-img img');
      if (img) img.alt = n[`title_${lang}`];
    });
  }

  document.getElementById('langToggle')?.addEventListener('click', () => {
    setTimeout(updateLang, 20);
  });

  render();
  resetAuto();
}

document.addEventListener('DOMContentLoaded', buildNewsSlider);