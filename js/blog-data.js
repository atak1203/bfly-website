/* =============================================
   BFL'Y — blog-data.js
   Tek kaynak haber/blog verisi.
   blog.js (liste), main.js (anasayfa slider) ve
   blog/post/ (detay sayfası) bu diziyi kullanır.

   Yeni haber eklemek için bu diziye nesne ekleyin.
   content_en / content_tr → detay sayfasında gösterilen
   uzun metin. Paragrafları "\n\n" ile ayırın.
   ============================================= */
window.BFLY_NEWS = [
  {
    id: 1,
    date_en: 'October 16, 2025',     date_tr: '16 Ekim 2025',
    category_en: 'Announcement',  category_tr: 'Duyuru',
    featured: true,
    title_en: 'Our 14-Person BFL\'Y Team Has Been Formed!',
    title_tr: '14 Kişilik BFL\'Y Takımımız Kuruldu!',
    excerpt_en: 'Our team BFL\'Y was founded by 14 members who share big ideals. In its very first meeting, the team defined its vision and slogan. Our vision: to always aim higher and to develop innovative technologies. Our slogan: "From the Roots to the Skies..."',
    excerpt_tr: 'BFL\'Y takımımız, büyük idealler doğrultusunda 14 kişi olarak kuruldu. İlk toplantısında vizyonunu ve sloganını belirledi. Vizyonumuz: Her zaman daha iyisini hedefleyen ve yenilikçi teknolojiler üreten bir takım olmak. Sloganımız ise: "Köklerden Göklere..."',
    content_en: `Our team BFL'Y was founded by 14 members who share big ideals. In its very first meeting, the team defined its vision and slogan, along with the sub-systems that would carry the project forward: mechanical design, electronics and avionics, software, PR, and budget.

Our vision: to always aim higher and to develop innovative technologies that represent Baykar Science High School on national and international stages. Our slogan, "From the Roots to the Skies...", captures exactly that journey — starting from a classroom and a shared idea, and working our way toward fully autonomous flight.

In the weeks following the founding meeting, the team split into working groups, assigned early tasks, and began researching the SUAS and TEKNOFEST Combat UAV competitions we would go on to target. It was the first step of a journey that would eventually include a carbon-fiber airframe, a fully autonomous mission stack, and a trip across the Atlantic.`,
    content_tr: `BFL'Y takımımız, büyük idealler doğrultusunda 14 kişi olarak kuruldu. İlk toplantısında vizyonunu, sloganını ve projeyi ileriye taşıyacak alt sistemlerini belirledi: mekanik tasarım, elektronik/aviyonik, yazılım, PR ve bütçe.

Vizyonumuz: Baykar Fen Lisesi'ni ulusal ve uluslararası platformlarda temsil eden, her zaman daha iyisini hedefleyen ve yenilikçi teknolojiler üreten bir takım olmak. "Köklerden Göklere..." sloganımız da tam olarak bu yolculuğu anlatıyor — bir sınıfta, ortak bir fikirle başlayıp tam otonom uçuşa doğru ilerleyen bir yolculuk.

Kuruluş toplantısının ardından takım çalışma gruplarına ayrıldı, ilk görev dağılımı yapıldı ve hedeflediğimiz SUAS ile TEKNOFEST Savaşan İHA yarışmaları üzerine araştırmalara başlandı. Bu, karbon fiber gövdeli, tam otonom bir görev yazılımına sahip bir uçağın ve Atlantik'i aşan bir yolculuğun ilk adımıydı.`,
    image: '/assets/images/blog/1.jpeg',
    link: '/blog/post/?id=1'
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
    content_en: `Following its first two flight tests, Delifişek completed its third flight trial. In this attempt, the aircraft managed to fly autonomously for several minutes, holding altitude and heading well within our target tolerances.

The mechanical and avionics teams used the data gathered from the first two flights to fine-tune the control surfaces and re-balance the center of gravity. The result was a noticeably smoother climb-out and a more stable cruise phase than in previous attempts.

With this third flight behind us, the team is now shifting focus toward mission-specific testing — payload drops, waypoint navigation accuracy, and endurance — ahead of our SUAS and TEKNOFEST Combat UAV submissions.`,
    content_tr: `İlk iki uçuş denemesinin ardından Delifişek, üçüncü uçuş denemesini de gerçekleştirdi. Bu denemede araç, hedeflediğimiz toleransların oldukça içinde kalarak yükseklik ve rotasını koruyup dakikalarca otonom uçmayı başardı.

Mekanik ve aviyonik ekipleri, ilk iki uçuştan elde edilen verileri kullanarak kontrol yüzeylerini hassaslaştırdı ve ağırlık merkezini yeniden dengeledi. Sonuç, önceki denemelere kıyasla belirgin şekilde daha yumuşak bir tırmanış ve daha stabil bir seyir fazı oldu.

Bu üçüncü uçuşun ardından takım, SUAS ve TEKNOFEST Savaşan İHA başvurularımız öncesinde görev bazlı testlere — yük bırakma, rota noktası hassasiyeti ve dayanıklılık — odaklanıyor.`,
    image: '/assets/images/blog/2.jpg',
    link: '/blog/post/?id=2'
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
    content_en: `After months of production, Delifişek successfully completed its first flight. From wing rib layup to fuselage assembly, every stage of this aircraft was designed, manufactured, and tested by our own team — and seeing it leave the ground for the first time was an emotional moment for everyone involved.

The flight itself was short and cautious by design: a straight take-off, a wide circuit, and a controlled landing, all flown to confirm basic airworthiness before pushing into more demanding maneuvers. Every system — from the flight controller to the communication link — performed as expected.

This flight became a great source of hope for us on our journey. It validated months of design decisions, late nights in the workshop, and the trust the whole team placed in this project. From here, the roadmap turns toward autonomous mission testing.`,
    content_tr: `Aylar süren üretim sürecinin ardından Delifişek, ilk uçuşunu başarıyla gerçekleştirdi. Kanat kaburgalarının üretiminden gövde montajına kadar bu uçağın her aşaması kendi ekibimiz tarafından tasarlandı, üretildi ve test edildi — yerden ilk kez kesildiğini görmek, projede emeği geçen herkes için duygusal bir andı.

Uçuşun kendisi bilinçli olarak kısa ve temkinliydi: düz bir kalkış, geniş bir tur ve kontrollü bir iniş — daha zorlu manevralara geçmeden önce temel uçuşa elverişliliği doğrulamak amacıyla gerçekleştirildi. Uçuş kontrolcüsünden haberleşme hattına kadar tüm sistemler beklendiği gibi çalıştı.

Bu uçuş, yolculuğumuzda bizler için büyük bir umut kaynağı oldu. Aylarca süren tasarım kararlarını, atölyede geçirilen geç saatleri ve tüm takımın bu projeye duyduğu güveni doğruladı. Bundan sonraki yol haritamız otonom görev testlerine odaklanıyor.`,
    image: '/assets/images/blog/3.jpg',
    link: '/blog/post/?id=3'
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
    content_en: `Our team, preparing to travel to the United States for the SUAS competition, has successfully completed all visa procedures. This was one of the largest logistical milestones on our roadmap to competing internationally, involving paperwork, interviews, and coordination across the entire team and our advisors.

With travel arrangements now cleared, the team can shift its full attention back to the aircraft — finishing test flights, refining the autonomous mission software, and preparing our technical documentation for the competition committee.

We're grateful to everyone who supported us through this process, from our school administration to our sponsors, and we're looking forward to representing Baykar Science High School on American soil.`,
    content_tr: `SUAS yarışması kapsamında Amerika'ya gitmeye hazırlanan takımımız, vize işlemlerini başarıyla tamamladı. Bu, uluslararası arenada yarışma yol haritamızdaki en büyük lojistik kilometre taşlarından biriydi; evrak işleri, mülakatlar ve tüm takım ile danışmanlarımız arasındaki koordinasyonu içeriyordu.

Seyahat düzenlemeleri tamamlandığına göre takım, tüm dikkatini yeniden uçağa verebilir — test uçuşlarını tamamlamak, otonom görev yazılımını iyileştirmek ve yarışma komitesi için teknik dokümantasyonumuzu hazırlamak.

Bu süreçte bizi destekleyen herkese, okul idaremizden sponsorlarımıza kadar teşekkür ediyoruz ve Baykar Fen Lisesi'ni Amerika topraklarında temsil etmeyi dört gözle bekliyoruz.`,
    image: '/assets/images/blog/4.jpg',
    link: '/blog/post/?id=4'
  },
];
