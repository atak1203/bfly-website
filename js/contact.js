/* =============================================
   BFL'Y — contact.js
   Formspree form submission
   ============================================= */

const form       = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Basic client-side validation
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
    formStatus.textContent = 'Please fill in all required fields.';
    formStatus.className = 'form-status error';
    return;
  }

  const submitBtn = form.querySelector('.form-submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';
  formStatus.textContent = '';
  formStatus.className = 'form-status';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      formStatus.textContent = 'Message sent successfully. We\'ll get back to you soon!';
      formStatus.className = 'form-status success';
      form.reset();
    } else {
      throw new Error('Server error');
    }
  } catch {
    formStatus.textContent = 'Something went wrong. Please try emailing us directly.';
    formStatus.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});

// Clear error state on input
form.querySelectorAll('[required]').forEach(field => {
  field.addEventListener('input', () => field.classList.remove('error'));
});