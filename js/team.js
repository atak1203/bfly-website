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
      team_who_p1:          'We are a 13-strong UAV team founded in 2025 within Baykar Science High School, driven by the vision of the National Technology Initiative. From our first original project, TurcoFighter to our newest aircraft Delifişek, we design and build original aerospace solutions from scratch.',
      team_who_p2:          'We compete shoulder to shoulder with well-established university teams at the TEKNOFEST Combat UAV and international SUAS competitions, achieving remarkable results at high-school level. Last year we made history as the only high school team to reach the semifinals in the Combat UAV category; this year we\'re back even stronger, and we\'re fully confident we\'ll reach the finals. Inspired by our roots, we are shaping tomorrow\'s aviation technologies today.',
      stat_members_label:   'Active Members',
      stat_subsystems:      'Sub-systems',
      stat_goal:            'Shared Goal',
      stat_problems:        'Problems to Solve',
      timeline_eyebrow:     'Our Journey',
      timeline_title:       'Team timeline',
      tl1_date:             'October 2025',
      tl1_title:            'Team Founded',
      tl1_body:             'BFL\'Y officially began operating within Baykar Science High School. At the first meeting, the team\'s goals, sub-systems, and task assignments were defined.',
      tl2_date:             'November 2025',
      tl2_title:            'Delifişek\'s Design Finalized',
      tl2_body:             'The overall structure and technical specifications of Delifişek were determined, and the roadmap and goals for the project were clarified.',
      tl3_date:             'December 2025',
      tl3_title:            'Production Began',
      tl3_body:             'The first materials for Delifişek were procured, and production officially began.',
      tl4_date:             'February 2026',
      tl4_title:            'First Wings Produced',
      tl4_body:             'Production of the first wings was successfully completed, and the team moved on to fuselage production.',
      tl5_date:             'April 2026',
      tl5_title:            'Fuselage Production Completed',
      tl5_body:             'All production processes for the aircraft were completed, most remaining issues were resolved, and a date was set for the first flight.',
      tl6_date:             'June 2026',
      tl6_title:            'Delifişek\'s First Flight',
      tl6_body:             'Delifişek successfully completed its first flight. The aircraft\'s performance was evaluated, remaining issues were identified, and preparations began for the second flight.',
      members_eyebrow:      'Our Team',
      members_title:        '13 people, one goal',
      filter_all:           'All',
      filter_mech:          'Mechanical',
      filter_elec:          'Electronics',
      filter_soft:          'Software',
      filter_pr:            'PR',
      filter_danisman:      'Advisor',
    },
    tr: {
      team_hero_eyebrow:    'Baykar Fen Lisesi · Havacılık Takımı',
      team_hero_title:      'Biz <em>BFL\'Y</em>\'iz.',
      team_hero_desc:       'Tasarımdan uçuşa, yazılımdan entegrasyona — ortak bir hedef için çalışan 13 kişilik bir ekip.',
      team_who_eyebrow:     'Biz Kimiz',
      team_who_title:       'Mühendislik bir ekip sporudur.',
      team_who_p1:          'Millî Teknoloji Hamlesi vizyonuyla yola çıkan, Baykar Fen Lisesi bünyesinde 2025 yılında kurulmuş 13 kişilik bir insansız hava aracı takımıyız. İlk özgün projemiz TurcoFighter\'dan  en yeni aracımız Delifişek\'e uzanan bir yolculukla, sıfırdan özgün havacılık ve uzay çözümleri tasarlıyor, üretiyoruz.',
      team_who_p2:          'TEKNOFEST Savaşan İHA ve uluslararası SUAS yarışmalarında, köklü üniversite takımlarıyla omuz omuza yarışarak lise seviyesinde büyük başarılara imza atıyoruz. Geçtiğimiz yıl Savaşan İHA kategorisinde yarı finale kalan tek lise takımı olarak tarihe geçtik; bu yıl çok daha güçlü bir şekilde geri döndük ve finale kalacağımıza tüm kalbimizle inanıyoruz. Köklerimizden aldığımız ilhamla, yarının havacılık teknolojilerini bugünden şekillendiriyoruz.',
      stat_members_label:   'Aktif Üye',
      stat_subsystems:      'Alt Sistem',
      stat_goal:            'Ortak Hedef',
      stat_problems:        'Çözülecek Problem',
      timeline_eyebrow:     'Yolculuğumuz',
      timeline_title:       'Takım zaman çizelgesi',
      tl1_date:             'Ekim 2025',
      tl1_title:            'Takımın Kuruluşu',
      tl1_body:             'BFL\'Y, Baykar Fen Lisesi bünyesinde resmi olarak faaliyetlerine başladı. Yapılan ilk toplantıda takımın hedefleri, alt sistemleri ve görev dağılımları netleştirildi.',
      tl2_date:             'Kasım 2025',
      tl2_title:            'Delifişek\'in Tasarımı Netleşti',
      tl2_body:             'Delifişek\'in genel yapısı ve teknik özellikleri belirlendi; proje için yol haritası ve hedefler netleştirildi.',
      tl3_date:             'Aralık 2025',
      tl3_title:            'Üretim Çalışmaları Başladı',
      tl3_body:             'Delifişek için gerekli ilk malzemeler temin edildi ve üretim sürecine resmen başlandı.',
      tl4_date:             'Şubat 2026',
      tl4_title:            'İlk Kanatlar Üretildi',
      tl4_body:             'İlk kanat üretimleri başarıyla tamamlandı ve ardından gövde üretimine geçildi.',
      tl5_date:             'Nisan 2026',
      tl5_title:            'Gövde Üretimi Tamamlandı',
      tl5_body:             'Aracın tüm üretim süreçleri tamamlandı, eksik kalan noktaların büyük bölümü giderildi ve ilk uçuş için tarih belirlendi.',
      tl6_date:             'Haziran 2026',
      tl6_title:            'Delifişek\'in İlk Uçuşu',
      tl6_body:             'Delifişek, ilk uçuşunu başarıyla gerçekleştirdi. Aracın performansı değerlendirildi, tespit edilen eksiklikler kayıt altına alındı ve ikinci uçuş için hazırlıklara başlandı.',
      members_eyebrow:      'Ekibimiz',
      members_title:        '13 kişi, bir hedef',
      filter_all:           'Tümü',
      filter_mech:          'Mekanik',
      filter_elec:          'Elektronik',
      filter_soft:          'Yazılım',
      filter_pr:            'PR',
      filter_danisman:      'Danışman',
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
    const map = {
      'all':       teamTranslations[lang].filter_all,
      'Mekanik':   teamTranslations[lang].filter_mech,
      'Elektronik':teamTranslations[lang].filter_elec,
      'Yazılım':   teamTranslations[lang].filter_soft,
      'PR':        teamTranslations[lang].filter_pr,
      'Danışman':  teamTranslations[lang].filter_danisman,
    };
    Object.keys(map).forEach(filterKey => {
      const el = document.querySelector(`[data-filter="${filterKey}"]`);
      if (el) el.textContent = map[filterKey];
    });
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