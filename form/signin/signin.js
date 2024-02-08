import { Authentication } from '../../utils/auth.js';
import { LocalStorageData } from '../../utils/storage.js';

const signInForm = document.querySelector('form');
const messagePreview = document.querySelector('.message');

signInForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = e.target.email;
  const password = e.target.password;

  try {
    const user = new Authentication(email.value.trim(), password.value.trim());
    // verify that the data is correct
    user.verifyData();
    // if correct sign in the user
    const res = await user.login();
    console.log(res);
    if (res.statusCode === 404) {
      console.log('hi there');
      messagePreview.textContent = res.message;
      messagePreview.style.color = 'crimson';
    }

    if (res.statusCode === 200) {
      LocalStorageData.setData(res.data);
      location.replace('/product/product.html');
    }
  } catch (err) {
    console.log('in catch block');
    console.log(err);
  }
});
