import { Authentication } from '../../utils/auth.js';
import { LocalStorageData } from '../../utils/storage.js';

const signInForm = document.querySelector('form');
const messagePreview = document.querySelector('.message');
signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const emailInput = e.target.email;
  const passwordInput = e.target.password;
  try {
    const user = new Authentication(
      emailInput.value.trim(),
      passwordInput.value.trim()
    );
    user.verifyData();
    const response = await user.singin();

    if (response.statusCode === 404) {
      console.log('404 condition');
      messagePreview.textContent = 'email or password incorrect';
      messagePreview.style.color = 'crimson';
    }

    if (response.statusCode === 200) {
      console.log(response);
      LocalStorageData.setData(response.data);
      window.location.replace('/product/product.html');
    }

    console.log(response);
  } catch (error) {
    // console.log(error);
    if (error.message === 'passwordError' || error.message === 'emailError') {
      messagePreview.textContent = 'email or password incorrect';
      messagePreview.style.color = 'crimson';
    }
  }
});
