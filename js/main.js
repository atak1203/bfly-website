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
      id: 1,
      date_en: 'October 16, 2025',     date_tr: '16 Ekim 2025',
      category_en: 'Announcement',  category_tr: 'Duyuru',
      featured: true,
      title_en: 'Our 13-Person BFL\'Y Team Has Been Formed!',
      title_tr: '13 Kişilik BFL\'Y Takımımız Kuruldu!',
      excerpt_en: 'Our team BFL\'Y was founded by 13 members who share big ideals. In its very first meeting, the team defined its vision and slogan. Our vision: to always aim higher and to develop innovative technologies. Our slogan: "From the Roots to the Skies..."',
      excerpt_tr: 'BFL\'Y takımımız, büyük idealler doğrultusunda 13 kişi olarak kuruldu. İlk toplantısında vizyonunu ve sloganını belirledi. Vizyonumuz: Her zaman daha iyisini hedefleyen ve yenilikçi teknolojiler üreten bir takım olmak. Sloganımız ise: "Köklerden Göklere..."',
      image: '/assets/images/blog/1.jpeg',
      link: '#'
    },
    {
      id: 2,
      date_en: 'July 3, 2026',   date_tr: '3 Temmuz 2026',
      category_en: 'Event',    category_tr: 'Etkinlik',
      featured: false,
      title_en: 'Delifişek Successfully Completes Its Third Flight Test',
      title_tr: 'Delifişek, Üçüncü Uçuş Denemesini Başarıyla Gerçekleştirdi',
      excerpt_en: 'Following its first two flight tests, Delifişek completed its third flight trial. In this attempt, the aircraft managed to fly autonomously for several minutes.',
      excerpt_tr: 'İlk iki uçuş denemesinin ardından Delifişek, üçüncü uçuş denemesini de gerçekleştirdi. Bu denemede araç, dakikalarca otonom uçmayı başardı.',
      image: '/assets/images/blog/2.jpg',
      link: '#'
    },
    {
      id: 3,
      date_en: 'June 25, 2026',   date_tr: '25 Haziran 2026',
      category_en: 'Event',        category_tr: 'Etkinlik',
      featured: false,
      title_en: 'Delifişek Successfully Completes Its First Flight!',
      title_tr: 'Delifişek İlk Uçuşunu Başarıyla Gerçekleştirdi!',
      excerpt_en: 'After months of production, Delifişek successfully completed its first flight. This flight became a great source of hope for us on our journey.',
      excerpt_tr: 'Aylar süren üretim sürecinin ardından Delifişek, ilk uçuşunu başarıyla gerçekleştirdi. Bu uçuş, yolculuğumuzda bizler için büyük bir umut kaynağı oldu.',
      image: '/assets/images/blog/3.jpg',
      link: '#'
    },
    {
      id: 4,
      date_en: 'June 24, 2026',    date_tr: '24 Haziran 2026',
      category_en: 'Announcement', category_tr: 'Duyuru',
      featured: false,
      title_en: 'All Visa Procedures Completed',
      title_tr: 'Tüm Vize İşlemleri Tamamlandı',
      excerpt_en: 'Our team, preparing to travel to the United States for the SUAS competition, has successfully completed all visa procedures.',
      excerpt_tr: 'SUAS yarışması kapsamında Amerika\'ya gitmeye hazırlanan takımımız, vize işlemlerini başarıyla tamamladı.',
      image: '/assets/images/blog/4.jpg',
      link: '#'
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