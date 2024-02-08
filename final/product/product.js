import { LocalStorageData } from '../utils/storage.js';

const productSection = document.querySelector('.products');
const logoutBtn = document.querySelector('.logout');
const emailPreview = document.querySelector('.email-preview');
const links = document.querySelector('.links');

const checkUser = async () => {
  const userId = LocalStorageData.getData('user');
  console.log(userId);
  if (userId) {
    const res = await fetch(`http://localhost:3000/users?id=${userId}`);
    const user = await res.json();

    if (user.length === 0) {
      console.log('in condition');
      location.replace('/form/signin/signin.html');
      return;
    } else {
      // add the email to the preview
      emailPreview.textContent = 'welocme ' + user[0].email;
      emailPreview.style.color = 'lightgreen';
      console.log(user);
      // add admin panel link
      if (
        user[0].email === 'abolfazl@gmail.com' &&
        user[0].password === 'abolfazl'
      ) {
        console.log('in the condition');
        const adminButton = document.createElement('a');
        adminButton.href = '../admin/adminPanel.html';
        adminButton.className = 'btn btn-outline-danger ';
        adminButton.textContent = 'admin panel';
        links.append(adminButton);
      }
    }
  } else {
    location.replace('/form/signin/signin.html');
    return;
  }
};

checkUser();

window.addEventListener('DOMContentLoaded', async (e) => {
  const res = await fetch('http://localhost:3000/product');
  const products = await res.json();
  console.log(products);

  products.forEach((product) => {
    productSection.innerHTML += `
    <div class="col mb-3">
       <div class="card" style="width: 18rem;">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNIpXj7OPolk69NoNREhMM2Um99PBMhMMw&usqp=CAU" class="card-img-top" alt="...">
          <div class="card-body">
              <h3 class="card-title">${product.title}</h3>
              <p class="card-text">${product.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                  <a href="#" class="btn btn-primary">buy</a>
                  <span>${product.price}$</span>
              <div>
          </div>
      </div>
    </div>

       `;
  });
});

logoutBtn.addEventListener('click', (e) => {
  LocalStorageData.removeData();
  location.replace('/home/');
});
