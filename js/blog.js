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
     Tek kaynak veri artık /js/blog-data.js içinde (window.BFLY_NEWS).
     Yeni haber eklemek için o dosyayı düzenleyin. ===== */
  const NEWS = window.BFLY_NEWS || [];

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