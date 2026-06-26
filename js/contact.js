const form       = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

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

  const data = {
    name:    document.getElementById('name').value,
    email:   document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });

    const result = await response.json();

    if (response.ok) {
      formStatus.textContent = 'Message sent successfully. We\'ll get back to you soon!';
      formStatus.className = 'form-status success';
      form.reset();
    } else {
      console.error('Formspree error:', result);
      throw new Error(result.error || 'Server error');
    }
  } catch (err) {
    console.error('Fetch error:', err);
    formStatus.textContent = 'Something went wrong. Please try emailing us directly.';
    formStatus.className = 'form-status error';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});

form.querySelectorAll('[required]').forEach(field => {
  field.addEventListener('input', () => field.classList.remove('error'));
});