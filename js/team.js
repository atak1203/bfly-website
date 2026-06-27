/* =============================================
   BFL'Y — team.js
   Filter pills · Team-page translations
   ============================================= */

// ---------- TEAM PAGE TRANSLATIONS ----------
// components.js'deki BFLY_TRANSLATIONS objesine eklenir
document.addEventListener('DOMContentLoaded', () => {

  const teamTranslations = {
    en: {
      team_hero_eyebrow:    'Baykar Science High School · Aviation Team',
      team_hero_title:      'We are <em>BFL\'Y</em>.',
      team_hero_desc:       'From design to flight, from software to integration — a team of 13 working toward one goal.',
      team_who_eyebrow:     'Who We Are',
      team_who_title:       'Engineering is a team sport.',
      team_who_p1:          'BFL\'Y is a student engineering team operating within Baykar Science High School, preparing for international competitions in the field of Unmanned Aerial Vehicles. Members from different disciplines — mechanical design, electronics integration, and software development — work together to build aircraft from scratch.',
      team_who_p2:          'Our team is not just a competition vehicle; it\'s a platform where every member learns to think like a cross-disciplinary engineer. We make mistakes, solve them, document them, and start again.',
      stat_members_label:   'Active Members',
      stat_subsystems:      'Sub-systems',
      stat_goal:            'Shared Goal',
      stat_problems:        'Problems to Solve',
      timeline_eyebrow:     'Our Journey',
      timeline_title:       'Team timeline',
      tl1_date:             'September 2023',
      tl1_title:            'Team Founded',
      tl1_body:             'BFL\'Y was established at Baykar Science High School with 6 founding members. Goals, sub-systems, and task assignments were set at the first meeting.',
      tl2_date:             'November 2023',
      tl2_title:            'First Prototype Flight',
      tl2_body:             'Our first fixed-wing prototype successfully took off on the test runway. Motor, ESC, and flight controller integration was completed.',
      tl3_date:             'February 2024',
      tl3_title:            'TEKNOFEST Application',
      tl3_body:             'Official application to the TEKNOFEST UAV Competition was submitted. The critical design report was prepared and presented to the jury.',
      tl4_date:             'April 2024',
      tl4_title:            'New Members Join',
      tl4_body:             'The team reached 13 members and was divided into 3 main groups: software, electronics, and mechanical. Task definitions were clarified.',
      tl5_date:             'June 2024',
      tl5_title:            'Autonomous Mission Test',
      tl5_body:             'Autonomous navigation algorithms were field-tested. A computer vision system for GPS-independent target detection was activated.',
      tl6_date:             '2025 →',
      tl6_title:            'SUAS Competition',
      tl6_body:             'We are in the final system tests and integration process for participation in the international SUAS (Student Unmanned Aerial Systems) competition.',
      members_eyebrow:      'Our Team',
      members_title:        '13 people, one goal',
      filter_all:           'All',
      filter_mech:          'Mechanical',
      filter_elec:          'Electronics',
      filter_soft:          'Software',
      filter_mgmt:          'Management',
    },
    tr: {
      team_hero_eyebrow:    'Baykar Fen Lisesi · Havacılık Takımı',
      team_hero_title:      'Biz <em>BFL\'Y</em>\'iz.',
      team_hero_desc:       'Tasarımdan uçuşa, yazılımdan entegrasyona — ortak bir hedef için çalışan 13 kişilik bir ekip.',
      team_who_eyebrow:     'Biz Kimiz',
      team_who_title:       'Mühendislik bir ekip sporudur.',
      team_who_p1:          'BFL\'Y, Baykar Fen Lisesi bünyesinde faaliyet gösteren, İnsansız Hava Aracı alanında uluslararası yarışmalara hazırlanan bir öğrenci mühendislik takımıdır. Farklı branşlardan gelen üyelerimiz; mekanik tasarım, elektronik entegrasyon ve yazılım geliştirme alanlarında bir arada çalışarak sıfırdan uçabilen araçlar inşa eder.',
      team_who_p2:          'Takımımız yalnızca rekabet için değil, her üyenin disiplinlerarası bir mühendis gibi düşünmeyi öğrenmesi için bir platform. Hata yapıyoruz, çözüyoruz, belgeliyoruz, yeniden başlıyoruz.',
      stat_members_label:   'Aktif Üye',
      stat_subsystems:      'Alt Sistem',
      stat_goal:            'Ortak Hedef',
      stat_problems:        'Çözülecek Problem',
      timeline_eyebrow:     'Yolculuğumuz',
      timeline_title:       'Takım zaman çizelgesi',
      tl1_date:             'Eylül 2023',
      tl1_title:            'Takımın Kuruluşu',
      tl1_body:             'BFL\'Y, Baykar Fen Lisesi\'nde 6 kurucu üye ile faaliyetlerine başladı. İlk toplantıda hedefler, alt sistemler ve görev dağılımı belirlendi.',
      tl2_date:             'Kasım 2023',
      tl2_title:            'İlk Prototip Uçuşu',
      tl2_body:             'Sabit kanatlı ilk prototip aracımız test pistinde başarıyla havalandı. Motor, ESC ve uçuş kontrolcüsü entegrasyonu tamamlandı.',
      tl3_date:             'Şubat 2024',
      tl3_title:            'TEKNOFEST Başvurusu',
      tl3_body:             'TEKNOFEST İHA Yarışması\'na resmi başvuru tamamlandı. Kritik tasarım raporu hazırlanarak jüri değerlendirmesine sunuldu.',
      tl4_date:             'Nisan 2024',
      tl4_title:            'Takıma Yeni Üyeler',
      tl4_body:             '13 kişiye ulaşan takım, yazılım, elektronik ve mekanik alt sistemler olarak 3 ana gruba ayrıldı. Görev tanımları netleştirildi.',
      tl5_date:             'Haziran 2024',
      tl5_title:            'Özerk Görev Testi',
      tl5_body:             'Otonom navigasyon algoritmaları saha testlerinden geçirildi. GPS bağımsız hedef tespiti için bilgisayarlı görü sistemi devreye alındı.',
      tl6_date:             '2025 →',
      tl6_title:            'SUAS Yarışması',
      tl6_body:             'Uluslararası SUAS yarışmasına katılım için son sistem testleri ve entegrasyon sürecindeyiz.',
      members_eyebrow:      'Ekibimiz',
      members_title:        '13 kişi, bir hedef',
      filter_all:           'Tümü',
      filter_mech:          'Mekanik',
      filter_elec:          'Elektronik',
      filter_soft:          'Yazılım',
      filter_mgmt:          'Yönetim',
    }
  };

  // components.js'deki global translations objesine merge et
  if (window.BFLY_TRANSLATIONS) {
    Object.keys(teamTranslations).forEach(lang => {
      Object.assign(window.BFLY_TRANSLATIONS[lang], teamTranslations[lang]);
    });
    // Sayfa dilini uygula (components.js boot'tan sonra)
    if (window.applyLanguage) applyLanguage(window.BFLY_CURRENT_LANG || 'en');
  }

  // ---------- FILTER PILLS ----------
  const pills = document.querySelectorAll('.filter-pill');
  const cards = document.querySelectorAll('.member-card');

  // Filtre pill'lerinin data-filter değerlerini dile göre güncelle
  function updateFilterLabels(lang) {
    document.querySelector('[data-filter="all"]').textContent      = teamTranslations[lang].filter_all;
    document.querySelector('[data-filter="Mekanik"]').textContent  = teamTranslations[lang].filter_mech;
    document.querySelector('[data-filter="Elektronik"]').textContent = teamTranslations[lang].filter_elec;
    document.querySelector('[data-filter="Yazılım"]').textContent  = teamTranslations[lang].filter_soft;
    document.querySelector('[data-filter="Yönetim"]').textContent  = teamTranslations[lang].filter_mgmt;
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const filter = pill.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.dept === filter) ? '' : 'none';
      });
    });
  });

  // Dil değişimini dinle (components.js langToggle click'inden sonra)
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      // components.js click handler'ı dili değiştirdikten sonra
      // kısa timeout ile yeni dili oku
      setTimeout(() => {
        updateFilterLabels(window.BFLY_CURRENT_LANG);
      }, 10);
    });
  }

  updateFilterLabels('en');
});