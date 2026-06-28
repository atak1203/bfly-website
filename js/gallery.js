/* =============================================
   BFL'Y — gallery.js
   Translations · Filter pills · Lightbox
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== TRANSLATIONS ===== */
  const galleryTranslations = {
    en: {
      gallery_eyebrow:    'Visual Archive',
      gallery_title:      'Gallery',
      gallery_accent:     'Gallery',
      gallery_desc:       'Photos from our build process, test flights, and competition days.',
      gallery_filter_all: 'All',
      gallery_filter_flight:  'Flight',
      gallery_filter_build:   'Build',
      gallery_filter_team:    'Team',
      gallery_filter_comp:    'Competition',
      gallery_coming_soon:    'Photos coming soon',
    },
    tr: {
      gallery_eyebrow:    'Görsel Arşiv',
      gallery_title:      'Galeri',
      gallery_accent:     'Galeri',
      gallery_desc:       'Üretim sürecimizden, test uçuşlarından ve yarışma günlerinden kareler.',
      gallery_filter_all: 'Tümü',
      gallery_filter_flight:  'Uçuş',
      gallery_filter_build:   'Üretim',
      gallery_filter_team:    'Takım',
      gallery_filter_comp:    'Yarışma',
      gallery_coming_soon:    'Fotoğraflar yakında',
    }
  };

  if (window.BFLY_TRANSLATIONS) {
    Object.keys(galleryTranslations).forEach(lang => {
      Object.assign(window.BFLY_TRANSLATIONS[lang], galleryTranslations[lang]);
    });
    if (window.applyLanguage) applyLanguage(window.BFLY_CURRENT_LANG || 'en');
  }

  /* ===== GALLERY DATA =====
     Yeni fotoğraf eklemek için PHOTOS dizisine nesne ekleyin.
     Alanlar:
       src        : görsel yolu, örn. "../assets/images/foto.jpg"
       alt_en     : İngilizce alt text
       alt_tr     : Türkçe alt text
       caption_en : İngilizce başlık (hover'da ve lightbox'ta görünür)
       caption_tr : Türkçe başlık
       category   : "flight" | "build" | "team" | "competition"
  ===== */
  const PHOTOS = [
    {
      src: '../assets/images/galery/flight01.jpeg',
      alt_en: 'DeliFisek first flight', alt_tr: 'DeliFişek ilk uçuş',
      caption_en: 'First flight — June 2024', caption_tr: 'İlk uçuş — Haziran 2024',
      category: 'flight'
    },
    {
      src: '../assets/images/galery/team01.jpeg',
      alt_en: 'DeliFisek team photo', alt_tr: 'DeliFişek takımlı fotoğraf',
      caption_en: 'Team photo — June 2024', caption_tr: 'Takımlı fotoğraf — Haziran 2024',
      category: 'team'
    },
    {
      src: '../assets/images/galery/flight02.jpg',
      alt_en: 'DeliFisek first flight 2', alt_tr: 'DeliFişek ilk uçuş 2',
      caption_en: 'First flight — June 2024', caption_tr: 'İlk uçuş — Haziran 2024',
      category: 'flight'
    },
    {
      src: '../assets/images/galery/competition01.jpg',
      alt_en: 'Teknofest photo', alt_tr: 'Teknofest fotoğrafı',
      caption_en: 'Competition photo — June 2024', caption_tr: 'Yarışma fotoğrafı — Haziran 2024',
      category: 'competition'
    },
    {
      src: '../assets/images/galery/team02.jpg',
      alt_en: 'DeliFisek team photo 2', alt_tr: 'DeliFişek takımlı fotoğraf 2',
      caption_en: 'Team photo — June 2024', caption_tr: 'Takımlı fotoğraf — Haziran 2024',
      category: 'team'
    },
    {
      src: '../assets/images/galery/build01.jpg',
      alt_en: 'DeliFisek build photo', alt_tr: 'DeliFişek üretim fotoğrafı',
      caption_en: 'Build photo — June 2024', caption_tr: 'Üretim fotoğrafı — Haziran 2024',
      category: 'build'
    },
    {
      src: '../assets/images/galery/flight03.jpg',
      alt_en: 'DeliFisek first flight 3', alt_tr: 'DeliFişek ilk uçuş 3',
      caption_en: 'First flight — June 2024', caption_tr: 'İlk uçuş — Haziran 2024',
      category: 'flight'
    },
    {
      src: '../assets/images/galery/flight04.jpg',
      alt_en: 'DeliFisek first flight 4', alt_tr: 'DeliFişek ilk uçuş 4',
      caption_en: 'First flight — June 2024', caption_tr: 'İlk uçuş — Haziran 2024',
      category: 'flight'
    },
    {
      src: '../assets/images/galery/flight05.jpg',
      alt_en: 'DeliFisek first flight 5', alt_tr: 'DeliFişek ilk uçuş 5',
      caption_en: 'First flight — June 2024', caption_tr: 'İlk uçuş — Haziran 2024',
      category: 'flight'
    },


  ];

  /* ===== PLACEHOLDER LIST (fotoğraf yokken gösterilir) ===== */
  const PLACEHOLDERS = [
    { num: '01', category: 'flight'      },
    { num: '02', category: 'build'       },
    { num: '03', category: 'team'        },
    { num: '04', category: 'competition' },
    { num: '05', category: 'flight'      },
    { num: '06', category: 'build'       },
    { num: '07', category: 'team'        },
    { num: '08', category: 'competition' },
    { num: '09', category: 'flight'      },
  ];

  /* ===== HELPERS ===== */
  function t(key) {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    return window.BFLY_TRANSLATIONS?.[lang]?.[key] ?? key;
  }

  function field(obj, key) {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    return obj[`${key}_${lang}`] || obj[`${key}_en`] || '';
  }

  /* ===== FILTER PILLS ===== */
  const FILTERS = ['all', 'flight', 'build', 'team', 'competition'];

  function buildFilters() {
    const wrap = document.getElementById('gallery-filters');
    if (!wrap) return;
    wrap.innerHTML = FILTERS.map((f, i) =>
      `<button class="gallery-pill${i === 0 ? ' active' : ''}" data-filter="${f}">
        ${t(`gallery_filter_${f}`)}
      </button>`
    ).join('');

    wrap.addEventListener('click', e => {
      const pill = e.target.closest('.gallery-pill');
      if (!pill) return;
      wrap.querySelectorAll('.gallery-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      renderGrid(pill.dataset.filter);
    });
  }

  /* ===== RENDER GRID ===== */
  function renderGrid(filter = 'all') {
    const grid = document.getElementById('galleryGrid');
    if (!grid) return;

    const hasReal = PHOTOS.length > 0;
    const source  = hasReal ? PHOTOS : PLACEHOLDERS;

    const filtered = (filter === 'all')
      ? source
      : source.filter(p => p.category === filter);

    if (filtered.length === 0) {
      grid.innerHTML = `<p style="color:var(--text-muted);font-family:var(--font-display);font-size:0.75rem;letter-spacing:0.12em;text-transform:uppercase;padding:48px 0;">${t('gallery_coming_soon')}</p>`;
      return;
    }

    if (hasReal) {
      grid.innerHTML = filtered.map((photo, i) => `
        <div class="gallery-item" data-index="${i}" data-category="${photo.category}">
          <img src="${photo.src}" alt="${field(photo, 'alt')}" loading="lazy" />
          <span class="gallery-tag">${t(`gallery_filter_${photo.category}`)}</span>
          <span class="gallery-caption">${field(photo, 'caption')}</span>
        </div>
      `).join('');

      /* Re-index for lightbox after filtering */
      buildLightboxList();
    } else {
      grid.innerHTML = filtered.map(p => `
        <div class="gallery-item placeholder" data-category="${p.category}">
          <div class="placeholder-inner">
            <span class="placeholder-num">${p.num}</span>
            <span class="placeholder-label">${t(`gallery_filter_${p.category}`)}</span>
          </div>
        </div>
      `).join('');
    }

    /* Attach click listeners */
    grid.querySelectorAll('.gallery-item:not(.placeholder)').forEach((item, i) => {
      item.addEventListener('click', () => openLightbox(i));
    });
  }

  /* ===== LIGHTBOX ===== */
  const lightbox      = document.getElementById('lightbox');
  const lightboxImg   = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev  = document.getElementById('lightboxPrev');
  const lightboxNext  = document.getElementById('lightboxNext');
  const lightboxCap   = document.getElementById('lightboxCaption');
  const lightboxCount = document.getElementById('lightboxCounter');

  let images = [];
  let currentIndex = 0;

  function buildLightboxList() {
    images = Array.from(
      document.querySelectorAll('.gallery-item:not(.placeholder) img')
    );
  }

  function openLightbox(index) {
    if (!images.length) return;
    currentIndex = index;
    updateLightbox();
    lightbox.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.setAttribute('hidden', '');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  function updateLightbox() {
    const img = images[currentIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    if (lightboxCap)   lightboxCap.textContent   = img.closest('.gallery-item')?.querySelector('.gallery-caption')?.textContent || '';
    if (lightboxCount) lightboxCount.textContent  = `${currentIndex + 1} / ${images.length}`;
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightbox();
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    updateLightbox();
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev)  lightboxPrev.addEventListener('click', showPrev);
  if (lightboxNext)  lightboxNext.addEventListener('click', showNext);

  lightbox?.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (lightbox?.hasAttribute('hidden')) return;
    if (e.key === 'Escape')      closeLightbox();
    if (e.key === 'ArrowLeft')   showPrev();
    if (e.key === 'ArrowRight')  showNext();
  });

  /* ===== LANG CHANGE ===== */
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setTimeout(() => {
        buildFilters();
        const activePill = document.querySelector('.gallery-pill.active');
        renderGrid(activePill?.dataset.filter || 'all');
      }, 20);
    });
  }

  /* ===== INIT ===== */
  buildFilters();
  renderGrid('all');
});