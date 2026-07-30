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
// Veri kaynağı artık tek: /js/blog-data.js (window.BFLY_NEWS)
const TICKER_NEWS = window.BFLY_NEWS || [];

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