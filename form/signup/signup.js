import { Authentication } from '../../utils/auth.js';
import { LocalStorageData } from '../../utils/storage.js';

const signUpForm = document.querySelector('.signup');
const messagePreview = document.querySelector('.message');
console.log(signUpForm);

signUpForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailInput = e.target.email;
  const passwordInput = e.target.password;

  try {
    const user = new Authentication(
      emailInput.value.trim(),
      passwordInput.value.trim()
    );
    //   console.log(user);
    user.verifyData();
    const response = await user.signup();
    console.log(response);

    if (response.statusCode === 409) {
      messagePreview.textContent = response.message;
      messagePreview.style.color = 'crimson';
    }

    if (response.statusCode === 201) {
      LocalStorageData.setData(response.data);
      window.location.replace('/product/product.html');
    }
  } catch (error) {
    console.log('in catch block');
    console.log(error.message);
    if (error.message === 'passwordError') {
      messagePreview.textContent =
        'your password should be more that 5 character';
      messagePreview.style.color = 'crimson';
    }
  }
});

// function Pet(name, age, color) {
//   this.name = name;
//   this.age = age;
//   this.color = color;

//   this.walk = function () {
//     console.log('walking');
//   };
// }

// // Pet.prototype.walk = function () {
// //   return 'walking';
// // };

// const dog = new Pet('dog', 20, 'black');
// console.log(dog);
// console.log(dog.walk());
