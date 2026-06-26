/* =============================================
   BFL'Y — gallery.js
   Lightbox for gallery page
   ============================================= */

const lightbox     = document.getElementById('lightbox');
const lightboxImg  = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// Sadece gerçek <img> olan itemları topla (placeholder'ları atla)
let images = [];
let currentIndex = 0;

function buildImageList() {
  images = Array.from(
    document.querySelectorAll('.gallery-item:not(.placeholder) img')
  );
}

function openLightbox(index) {
  if (images.length === 0) return;
  currentIndex = index;
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
  lightbox.removeAttribute('hidden');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.setAttribute('hidden', '');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex].src;
  lightboxImg.alt = images[currentIndex].alt;
}

// Click on gallery items
document.getElementById('galleryGrid').addEventListener('click', (e) => {
  const item = e.target.closest('.gallery-item:not(.placeholder)');
  if (!item) return;
  buildImageList();
  const img = item.querySelector('img');
  const index = images.indexOf(img);
  if (index !== -1) openLightbox(index);
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', showPrev);
lightboxNext.addEventListener('click', showNext);

// Backdrop click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (lightbox.hasAttribute('hidden')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   showPrev();
  if (e.key === 'ArrowRight')  showNext();
});