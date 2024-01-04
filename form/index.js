const formEl = document.querySelector('form');
const emailInput = document.querySelector('.email input');
const passwordInput = document.querySelector('.password input');
const emailPreview = document.querySelector('.email-preview');
const passwordPreview = document.querySelector('.password-preview');

passwordInput.addEventListener('input', (e) => {
  // const input = e.target;
  // input.value = input.value.trim();
  if (input.value.length > 6) {
    passwordPreview.textContent = 'normal';
    passwordPreview.style.color = 'orange';
    // @ $
    if (input.value.includes('@') || input.value.includes('$')) {
      passwordPreview.textContent = 'strong';
      passwordPreview.style.color = 'lightgreen';
    }
  } else {
    passwordPreview.textContent = 'not strong enough';
    passwordPreview.style.color = 'crimson';
  }

  if (input.value.length === 0) {
    passwordPreview.textContent = '';
  }
});

// emailInput.addEventListener('input', (e) => {
//   const input = e.target;
//   input.value = input.value.trim();
// });

const submitForm = () => {
  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const eamilInput = e.target.email;
    const passwordInput = e.target.password;

    passwordPreview.textContent = '';
    emailPreview.textContent = '';

    if (emailInput.value.trim() === '') {
      emailPreview.textContent = 'enter an email';
      emailPreview.style.color = 'crimson';
    }

    if (passwordInput.value.trim() === '') {
      passwordPreview.textContent = 'enter a password';
      passwordPreview.style.color = 'crimson';
    }
  });
};

submitForm();
