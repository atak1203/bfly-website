/* =============================================
   BFL'Y — blog-post.js
   Blog detay sayfası: ?id= parametresine göre
   window.BFLY_NEWS içinden ilgili yazıyı render eder.
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {

  const postTranslations = {
    en: {
      post_back:      '← Back to Blog',
      post_back_btn:  '← All Posts',
      post_not_found: 'Post not found.',
      post_not_found_desc: 'This story may have been moved or no longer exists.',
    },
    tr: {
      post_back:      '← Blog\'a Dön',
      post_back_btn:  '← Tüm Yazılar',
      post_not_found: 'Yazı bulunamadı.',
      post_not_found_desc: 'Bu içerik taşınmış veya kaldırılmış olabilir.',
    }
  };

  if (window.BFLY_TRANSLATIONS) {
    Object.keys(postTranslations).forEach(lang => {
      Object.assign(window.BFLY_TRANSLATIONS[lang], postTranslations[lang]);
    });
  }

  function t(key) {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    return (window.BFLY_TRANSLATIONS?.[lang]?.[key]) || key;
  }

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  const NEWS = window.BFLY_NEWS || [];
  const post = NEWS.find(n => n.id === id);

  const titleEl   = document.getElementById('post-title');
  const metaEl    = document.getElementById('post-meta');
  const imgWrap   = document.getElementById('post-image-wrap');
  const contentEl = document.getElementById('post-content');
  const tabTitle  = document.getElementById('post-tab-title');
  const ogTitle   = document.getElementById('og-title');
  const ogDesc    = document.getElementById('og-desc');

  function field(item, key) {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    return item[`${key}_${lang}`] || item[`${key}_en`] || '';
  }

  function render() {
    if (!post) {
      titleEl.textContent = t('post_not_found');
      metaEl.innerHTML = '';
      imgWrap.innerHTML = '';
      contentEl.innerHTML = `<p class="body-text">${t('post_not_found_desc')}</p>`;
      tabTitle.textContent = "BFL'Y — Blog";
      return;
    }

    const title   = field(post, 'title');
    const excerpt = field(post, 'excerpt');
    const content = field(post, 'content') || excerpt;

    titleEl.textContent = title;
    metaEl.innerHTML = `
      <span class="article-cat">${field(post, 'category')}</span>
      <span class="meta-dot"></span>
      <span class="article-date">${field(post, 'date')}</span>
    `;

    imgWrap.innerHTML = post.image
      ? `<img src="${post.image}" alt="${title}" />`
      : '';

    contentEl.innerHTML = content
      .split('\n\n')
      .map(p => `<p>${p.trim()}</p>`)
      .join('');

    tabTitle.textContent = `${title} — BFL'Y`;
    ogTitle.setAttribute('content', title);
    ogDesc.setAttribute('content', excerpt);
    document.querySelector('meta[name="description"]')?.setAttribute('content', excerpt);
  }

  render();

  document.getElementById('langToggle')?.addEventListener('click', () => {
    setTimeout(render, 20);
  });
});
