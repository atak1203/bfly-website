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
      sp_baykar_desc:  "Baykar stands alongside BFL'Y throughout every stage of design and production, providing professional-grade manufacturing support for our carbon fiber airframes and components.",

      sp_t3_tag:       'Financial · SUAS & Savaşan',
      sp_t3_desc:      "T3 Foundation provided financial support for our SUAS and Teknofest Savaşan UAV competitions, backing BFL'Y as part of its mission to empower young Turkish engineers.",

      sp_skydagger_tag:  'Financial · Savaşan',
      sp_skydagger_desc: "Skydagger provided financial support for our Teknofest Savaşan UAV competition campaign, helping BFL'Y compete at the highest level in the national arena.",

      sp_345_tag:      'Financial · SUAS',
      sp_345_desc:     "Üç Dört Beş Yayınları provided financial support for our SUAS competition efforts, contributing to BFL'Y's continued growth and engineering development.",

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
      sp_baykar_desc:  "Baykar, tasarım ve üretimin her aşamasında BFL'Y'nin yanında yer alarak karbon fiber gövde ve bileşenlerimiz için profesyonel üretim desteği sağlıyor.",

      sp_t3_tag:       'Finansal · SUAS & Savaşan',
      sp_t3_desc:      "T3 Vakfı, SUAS ve Teknofest Savaşan İHA yarışmaları kapsamında BFL'Y'ye maddi destek sağlayarak genç Türk mühendislerini güçlendirme misyonuna katkıda bulunuyor.",

      sp_skydagger_tag:  'Finansal · Savaşan',
      sp_skydagger_desc: "Skydagger, Teknofest Savaşan İHA yarışma kampanyamız için maddi destek sağlayarak BFL'Y'nin ulusal arenada en üst düzeyde yarışmasına katkıda bulundu.",

      sp_345_tag:      'Finansal · SUAS',
      sp_345_desc:     "Üç Dört Beş Yayınları, SUAS yarışma çalışmalarımız için maddi destek sağlayarak BFL'Y'nin sürekli gelişimine ve mühendislik ilerleyişine katkıda bulunuyor.",

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