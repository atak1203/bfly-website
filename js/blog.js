/* =============================================
   BFL'Y — blog.js
   Translations · Render · Category filter
   ============================================= */

/* ===== TRANSLATIONS ===== */
document.addEventListener('DOMContentLoaded', () => {

  const blogTranslations = {
    en: {
      blog_publication_center: 'PUBLICATION CENTER',
      blog_team_label:         'BAYKAR SCIENCE HIGH SCHOOL · SUAS',
      blog_all_news:           'All News',
      blog_featured_badge:     'Featured',
      blog_read_more:          'Read More',
      blog_no_results:         'No posts in this category yet.',
    },
    tr: {
      blog_publication_center: 'YAYIN MERKEZİ',
      blog_team_label:         'BAYKAR FEN LİSESİ · SUAS',
      blog_all_news:           'Tüm Haberler',
      blog_featured_badge:     'Öne Çıkan',
      blog_read_more:          'Devamını Oku',
      blog_no_results:         'Bu kategoride henüz haber yok.',
    }
  };

  /* Merge into global translations */
  if (window.BFLY_TRANSLATIONS) {
    Object.keys(blogTranslations).forEach(lang => {
      Object.assign(window.BFLY_TRANSLATIONS[lang], blogTranslations[lang]);
    });
  }

  /* ===== NEWS DATA =====
     Yeni haber eklemek için bu diziye nesne ekleyin.
     Alanlar:
       id         : benzersiz sayı
       date_en    : "May 12, 2025"
       date_tr    : "12 Mayıs 2025"
       category_en: "Competition" | "Technical" | "Event" | "Announcement"
       category_tr: "Yarışma" | "Teknik" | "Etkinlik" | "Duyuru"
       featured   : true ise ana haber olur (en son true olan seçilir)
       title_en   : İngilizce başlık
       title_tr   : Türkçe başlık
       excerpt_en : İngilizce kısa açıklama
       excerpt_tr : Türkçe kısa açıklama
       image      : görsel yolu veya renk kodu ("#1e3a63")
       link       : detay sayfası (opsiyonel, şimdilik "#")
  ===== */
  const NEWS = [
    {
      id: 1,
      date_en: 'May 12, 2025',     date_tr: '12 Mayıs 2025',
      category_en: 'Competition',  category_tr: 'Yarışma',
      featured: true,
      title_en: 'We Advanced to the Finals at TEKNOFEST 2025!',
      title_tr: 'TEKNOFEST 2025\'te Finale Kaldık!',
      excerpt_en: 'Our team BFL\'Y qualified first from the regional heats at TEKNOFEST İstanbul 2025 Swarm UAV Competition, advancing to the grand final. Our members impressed the jury with both technical performance and presentation skills.',
      excerpt_tr: 'Takımımız BFL\'Y, TEKNOFEST İstanbul 2025 Sürü İHA Yarışması\'nda bölgesel elemelerden birinci çıkarak büyük finale yükseldi. Zorlu seçme aşamalarından geçen üyelerimiz, hem teknik hem de sunum performansıyla jüriyi etkiledi.',
      image: '../assets/images/teknofest.jpeg',
      link: '#'
    },
    {
      id: 2,
      date_en: 'April 28, 2025',   date_tr: '28 Nisan 2025',
      category_en: 'Technical',    category_tr: 'Teknik',
      featured: false,
      title_en: 'SkyWipe v2.3 Software Update Released',
      title_tr: 'SkyWipe v2.3 Yazılım Güncellemesi Yayında',
      excerpt_en: 'A 40% improvement was achieved in the autonomous obstacle avoidance module.',
      excerpt_tr: 'Otonom engel kaçınma modülünde yüzde 40 iyileştirme sağlandı.',
      image: '../assets/images/software.jpeg',
      link: '#'
    },
    {
      id: 3,
      date_en: 'April 10, 2025',   date_tr: '10 Nisan 2025',
      category_en: 'Event',        category_tr: 'Etkinlik',
      featured: false,
      title_en: 'Joint Workshop with the Rocket Club',
      title_tr: 'Roket Kulübü ile Ortak Atölye Çalışması',
      excerpt_en: 'AI-powered flight control was discussed at the design sprint where both clubs came together.',
      excerpt_tr: 'İki kulübün bir araya geldiği tasarım sprint\'inde yapay zeka destekli uçuş kontrolü ele alındı.',
      image: '../assets/images/workshop.jpeg',
      link: '#'
    },
    {
      id: 4,
      date_en: 'April 2, 2025',    date_tr: '2 Nisan 2025',
      category_en: 'Announcement', category_tr: 'Duyuru',
      featured: false,
      title_en: 'New Season Team Applications Open',
      title_tr: 'Yeni Sezon Takım Alımları Başladı',
      excerpt_en: 'We are accepting new members in software, mechanical, and electronics for the 2025-2026 season.',
      excerpt_tr: '2025-2026 sezonu için yazılım, mekanik ve elektrik alanlarında yeni üye alıyoruz.',
      image: '#1e3a63',
      link: '#'
    },
    {
      id: 5,
      date_en: 'March 18, 2025',   date_tr: '18 Mart 2025',
      category_en: 'Technical',    category_tr: 'Teknik',
      featured: false,
      title_en: 'Talon-X Carbon Fiber Body Test Completed',
      title_tr: 'Talon-X Karbon Fiber Gövde Testi Tamamlandı',
      excerpt_en: '120% of design targets were reached in three-axis load tests.',
      excerpt_tr: 'Üç eksenli yük testlerinde tasarım hedeflerinin yüzde 120\'sine ulaşıldı.',
      image: '#1a2e1a',
      link: '#'
    },
    {
      id: 6,
      date_en: 'March 5, 2026',    date_tr: '5 Mart 2026',
      category_en: 'Competition',  category_tr: 'Yarışma',
      featured: false,
      title_en: 'Europe Student UAV Challenge — Registration Confirmed',
      title_tr: 'Avrupa Student UAV Challenge — Kayıt Onayı',
      excerpt_en: 'Our team\'s application to compete on the international stage has been officially accepted.',
      excerpt_tr: 'Uluslararası arenada takımımızın katılım başvurusu resmi olarak kabul gördü.',
      image: '#1a1a2e',
      link: '#'
    }
  ];

  /* ===== HELPERS ===== */
  const ArrowIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;

  function imgEl(src, alt) {
    if (!src || src.startsWith('#')) {
      return `<div style="width:100%;height:100%;background:${src || '#111'};"></div>`;
    }
    return `<img src="${src}" alt="${alt}" loading="lazy" />`;
  }

  function t(key) {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    return (window.BFLY_TRANSLATIONS?.[lang]?.[key]) || key;
  }

  function newsField(item, field) {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    return item[`${field}_${lang}`] || item[`${field}_en`] || '';
  }

  function metaHTML(item) {
    return `<div class="article-meta">
      <span class="article-cat">${newsField(item, 'category')}</span>
      <span class="meta-dot"></span>
      <span class="article-date">${newsField(item, 'date')}</span>
    </div>`;
  }

  /* ===== RENDER ===== */
  function renderFeaturedRow(items) {
    const featuredRow = document.getElementById('featured-row');
    if (!items.length) { featuredRow.innerHTML = ''; return; }

    const main  = [...items].reverse().find(n => n.featured) || items[0];
    const sides = items.filter(n => n.id !== main.id).slice(0, 3);

    const mainHTML = `
      <article class="featured-card" onclick="location.href='${main.link}'">
        <div class="featured-img-wrap">
          ${imgEl(main.image, newsField(main, 'title'))}
          <div class="featured-badge">${t('blog_featured_badge')}</div>
        </div>
        <div class="featured-content">
          ${metaHTML(main)}
          <h2 class="featured-title">${newsField(main, 'title')}</h2>
          <p class="featured-excerpt">${newsField(main, 'excerpt')}</p>
          <span class="read-more">${t('blog_read_more')} ${ArrowIcon}</span>
        </div>
      </article>`;

    const sideHTML = `
      <div class="side-stack">
        ${sides.map(n => `
          <article class="side-card" onclick="location.href='${n.link}'">
            <div class="side-img-wrap">${imgEl(n.image, newsField(n, 'title'))}</div>
            <div class="side-content">
              ${metaHTML(n)}
              <h3 class="side-title">${newsField(n, 'title')}</h3>
              ${newsField(n, 'excerpt') ? `<p class="side-excerpt">${newsField(n, 'excerpt')}</p>` : ''}
            </div>
          </article>`).join('')}
      </div>`;

    featuredRow.innerHTML = mainHTML + sideHTML;
  }

  function renderGrid(items, featuredId) {
    const grid = document.getElementById('posts-grid');
    const rest  = items.filter(n => n.id !== featuredId);
    if (!rest.length) { grid.innerHTML = ''; return; }

    grid.innerHTML = rest.map(n => `
      <article class="post-card" onclick="location.href='${n.link}'">
        <div class="post-img-wrap">${imgEl(n.image, newsField(n, 'title'))}</div>
        <div class="post-content">
          ${metaHTML(n)}
          <h3 class="post-title">${newsField(n, 'title')}</h3>
          ${newsField(n, 'excerpt') ? `<p class="post-excerpt">${newsField(n, 'excerpt')}</p>` : ''}
          <span class="read-more" style="font-size:.62rem;">${t('blog_read_more')} ${ArrowIcon}</span>
        </div>
      </article>`).join('');
  }

  function renderPage(filter) {
    const lang     = window.BFLY_CURRENT_LANG || 'en';
    const filtered = (filter === '__all__')
      ? NEWS
      : NEWS.filter(n => n[`category_${lang}`] === filter);

    const noResults   = document.getElementById('no-results');
    const dividerSpan = document.getElementById('divider-label');

    if (dividerSpan) dividerSpan.textContent = t('blog_all_news');

    if (!filtered.length) {
      document.getElementById('featured-row').innerHTML = '';
      document.getElementById('posts-grid').innerHTML   = '';
      noResults.style.display = 'flex';
      noResults.querySelector('p').textContent = t('blog_no_results');
      return;
    }
    noResults.style.display = 'none';

    const main = [...filtered].reverse().find(n => n.featured) || filtered[0];
    renderFeaturedRow(filtered);
    renderGrid(filtered, main.id);
  }

  /* ===== CATEGORIES ===== */
  function getCategories() {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    return [...new Set(NEWS.map(n => n[`category_${lang}`]))];
  }

  function buildCategories() {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    const cats  = getCategories();
    const bar   = document.getElementById('category-bar');

    bar.innerHTML = [
      `<button class="cat-btn active" data-filter="__all__" data-i18n="blog_all_news">${t('blog_all_news')}</button>`,
      ...cats.map(c => `<button class="cat-btn" data-filter="${c}">${c}</button>`)
    ].join('');

    bar.addEventListener('click', e => {
      const btn = e.target.closest('.cat-btn');
      if (!btn) return;
      bar.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPage(btn.dataset.filter);
    });
  }

  /* ===== DATE LINE ===== */
  function updateDateLine() {
    const lang   = window.BFLY_CURRENT_LANG || 'en';
    const locale = lang === 'tr' ? 'tr-TR' : 'en-US';
    const el     = document.getElementById('blog-date-line');
    if (el) el.textContent = new Date().toLocaleDateString(locale, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  }

  /* ===== PAGE TITLE + LABEL ===== */
  function updateStaticText() {
    const titleEl = document.getElementById('blog-page-title-text');
    const labelEl = document.getElementById('blog-header-meta');
    if (titleEl) titleEl.textContent = t('blog_publication_center');
    if (labelEl) labelEl.textContent = t('blog_team_label');
  }

  /* ===== LANG CHANGE LISTENER ===== */
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setTimeout(() => {
        updateDateLine();
        updateStaticText();
        buildCategories();
        renderPage('__all__');
      }, 20);
    });
  }

  /* ===== INIT ===== */
  if (window.BFLY_TRANSLATIONS) {
    Object.keys(blogTranslations).forEach(lang => {
      Object.assign(window.BFLY_TRANSLATIONS[lang], blogTranslations[lang]);
    });
  }

  updateDateLine();
  updateStaticText();
  buildCategories();
  renderPage('__all__');
});