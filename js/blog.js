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