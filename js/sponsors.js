/* =============================================
   BFL'Y — sponsors.js
   Translations
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  const sponsorTranslations = {
    en: {
      /* page hero */
      sponsors_eyebrow: 'Our Supporters',
      sponsors_title:   'Sponsors',
      sponsors_accent:  'Sponsors',
      sponsors_desc:    "BFL'Y exists because of the people and organizations who believed in us. Thank you.",

      /* sponsor cards */
      sp_baykar_tag:   'Manufacturing Support',
      sp_baykar_desc:  "Baykar provides critical manufacturing support to BFL'Y, enabling the team to produce carbon fiber airframes and components with professional-grade resources.",

      sp_t3_tag:       'Strategic Partner',
      sp_t3_desc:      "T3 Foundation supports BFL'Y as part of its mission to empower the next generation of Turkish engineers and technology leaders.",

      sp_skydagger_tag:  'Financial · Savaşan',
      sp_skydagger_desc: 'Provided financial support for our Savaşan competition campaign.',

      sp_345_tag:      'Financial Support',
      sp_345_desc:     "3-4-5 Yayıncılık contributes financial support to BFL'Y's ongoing development and competition efforts.",

      /* cta */
      sp_cta_eyebrow: 'Partner With Us',
      sp_cta_title:   'Become a Sponsor',
      sp_cta_desc:    "We are always looking for partners who share our passion for engineering and innovation. If you'd like to support BFL'Y, we'd love to hear from you.",
      sp_cta_btn:     'Get In Touch',
    },
    tr: {
      sponsors_eyebrow: 'Destekçilerimiz',
      sponsors_title:   'Sponsorlar',
      sponsors_accent:  'Sponsorlar',
      sponsors_desc:    "BFL'Y, bize inanan kişi ve kuruluşlar sayesinde var olmaya devam ediyor. Teşekkürler.",

      sp_baykar_tag:   'Üretim Desteği',
      sp_baykar_desc:  "Baykar, BFL'Y'ye kritik üretim desteği sağlayarak takımın profesyonel kaynaklarla karbon fiber gövde ve bileşen üretmesine olanak tanıyor.",

      sp_t3_tag:       'Stratejik Ortak',
      sp_t3_desc:      "T3 Vakfı, Türk mühendis ve teknoloji liderlerinin bir sonraki neslini güçlendirme misyonu kapsamında BFL'Y'yi destekliyor.",

      sp_skydagger_tag:  'Finansal · Savaşan',
      sp_skydagger_desc: 'Savaşan yarışma kampanyamız için finansal destek sağladı.',

      sp_345_tag:      'Finansal Destek',
      sp_345_desc:     "3-4-5 Yayıncılık, BFL'Y'nin süregelen gelişim ve yarışma çalışmalarına finansal katkıda bulunuyor.",

      sp_cta_eyebrow: 'Bizimle Ortak Olun',
      sp_cta_title:   'Sponsor Olun',
      sp_cta_desc:    'Mühendislik ve inovasyon tutkumuzu paylaşan ortaklar arıyoruz. BFL\'Y\'yi desteklemek isterseniz, sizden haber almak isteriz.',
      sp_cta_btn:     'İletişime Geçin',
    }
  };

  if (window.BFLY_TRANSLATIONS) {
    Object.keys(sponsorTranslations).forEach(lang => {
      Object.assign(window.BFLY_TRANSLATIONS[lang], sponsorTranslations[lang]);
    });
    if (window.applyLanguage) applyLanguage(window.BFLY_CURRENT_LANG || 'en');
  }
});