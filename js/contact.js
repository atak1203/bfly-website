/* =============================================
   BFL'Y — contact.js
   Translations · Form submit
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ===== TRANSLATIONS ===== */
  const contactTranslations = {
    en: {
      contact_h1:           "Let's <em>Talk</em>.",
      contact_subhead:      'Questions, partnership inquiries, or just want to say hello — we\'d love to hear from you.',
      contact_direct:       'Direct Contact',
      contact_social:       'Social Media',
      contact_address_label:'Address',
      contact_open_maps:    'Open in Google Maps ↗',
      contact_form_label:   'Send a Message',
      form_name:            'Name',
      form_email:           'Email',
      form_subject:         'Subject',
      form_message:         'Message',
      form_name_ph:         'Your name',
      form_email_ph:        'your@email.com',
      form_subject_ph:      'What is this about?',
      form_message_ph:      'Your message...',
      form_send:            'Send Message',
      form_sending:         'Sending...',
      form_success:         "Message sent. We'll get back to you soon!",
      form_error_fields:    'Please fill in all required fields.',
      form_error_server:    'Something went wrong. Please email us directly.',
    },
    tr: {
      contact_h1:           'Bizimle <em>İletişime</em> Geçin.',
      contact_subhead:      'Sorularınız, iş birliği teklifleriniz ya da sadece merhaba demek istiyorsanız — sizi duymak isteriz.',
      contact_direct:       'Doğrudan İletişim',
      contact_social:       'Sosyal Medya',
      contact_address_label:'Adres',
      contact_open_maps:    'Google Maps\'te Aç ↗',
      contact_form_label:   'Mesaj Gönder',
      form_name:            'Ad Soyad',
      form_email:           'E-posta',
      form_subject:         'Konu',
      form_message:         'Mesaj',
      form_name_ph:         'Adınız',
      form_email_ph:        'eposta@adresiniz.com',
      form_subject_ph:      'Konu nedir?',
      form_message_ph:      'Mesajınız...',
      form_send:            'Gönder',
      form_sending:         'Gönderiliyor...',
      form_success:         'Mesajınız iletildi. En kısa sürede geri döneceğiz!',
      form_error_fields:    'Lütfen tüm zorunlu alanları doldurun.',
      form_error_server:    'Bir sorun oluştu. Lütfen doğrudan e-posta gönderin.',
    }
  };

  if (window.BFLY_TRANSLATIONS) {
    Object.keys(contactTranslations).forEach(lang => {
      Object.assign(window.BFLY_TRANSLATIONS[lang], contactTranslations[lang]);
    });
    if (window.applyLanguage) applyLanguage(window.BFLY_CURRENT_LANG || 'en');
  }

  /* ===== APPLY PLACEHOLDERS on lang change ===== */
  function updatePlaceholders() {
    const lang = window.BFLY_CURRENT_LANG || 'en';
    const t = window.BFLY_TRANSLATIONS?.[lang] || {};
    const ph = {
      name:    t.form_name_ph,
      email:   t.form_email_ph,
      subject: t.form_subject_ph,
      message: t.form_message_ph,
    };
    Object.entries(ph).forEach(([id, val]) => {
      const el = document.getElementById(id);
      if (el && val) el.placeholder = val;
    });
  }

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setTimeout(updatePlaceholders, 20);
    });
  }
  updatePlaceholders();

  /* ===== FORM SUBMIT ===== */
  const form       = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = window.BFLY_CURRENT_LANG || 'en';
    const t    = window.BFLY_TRANSLATIONS?.[lang] || {};

    /* Validation */
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      } else {
        field.classList.remove('error');
      }
    });

    if (!valid) {
      formStatus.textContent = t.form_error_fields || 'Please fill in all required fields.';
      formStatus.className   = 'form-status error';
      return;
    }

    const submitBtn = form.querySelector('.form-submit');
    submitBtn.disabled    = true;
    submitBtn.textContent = t.form_sending || 'Sending...';
    formStatus.textContent = '';
    formStatus.className   = 'form-status';

    const data = {
      name:    document.getElementById('name').value,
      email:   document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    try {
      const response = await fetch(form.action, {
        method:  'POST',
        body:    JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      });

      const result = await response.json();

      if (response.ok) {
        formStatus.textContent = t.form_success || "Message sent. We'll get back to you soon!";
        formStatus.className   = 'form-status success';
        form.reset();
        updatePlaceholders();
      } else {
        throw new Error(result.error || 'Server error');
      }
    } catch (err) {
      console.error('Contact form error:', err);
      formStatus.textContent = t.form_error_server || 'Something went wrong. Please email us directly.';
      formStatus.className   = 'form-status error';
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = t.form_send || 'Send Message';
    }
  });

  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });
});