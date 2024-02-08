import { Authentication } from '../../utils/auth.js';
import { LocalStorageData } from '../../utils/storage.js';
const signUpForm = document.querySelector('.signup');
const messagePreview = document.querySelector('.message');

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.email;
  const password = e.target.password;

  try {
    const user = new Authentication(email.value.trim(), password.value.trim());
    user.verifyData();
    const res = await user.signup();

    console.log(res);

    if (res.statusCode === 409) {
      messagePreview.textContent = res.message;
      messagePreview.style.color = 'crimson';
    }

    if (res.statusCode === 201) {
      console.log(res);
      LocalStorageData.setData(res.data);
      location.replace('/product/product.html');
    }
  } catch (error) {
    console.log('in catch block');
    console.log(error);
  }
});
