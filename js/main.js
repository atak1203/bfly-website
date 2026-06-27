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