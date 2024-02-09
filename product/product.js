import { LocalStorageData } from '../utils/storage.js';

const productSection = document.querySelector('.products');
const logoutBtn = document.querySelector('.logout');
const emailPreview = document.querySelector('.email-preview');
const links = document.querySelector('.links');
// `
//     <div class="col mb-3">
//        <div class="card" style="width: 18rem;">
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNIpXj7OPolk69NoNREhMM2Um99PBMhMMw&usqp=CAU" class="card-img-top" alt="...">
//           <div class="card-body">
//               <h3 class="card-title">${product.title}</h3>
//               <p class="card-text">${product.description}</p>
//               <div class="d-flex justify-content-between align-items-center">
//                   <a href="#" class="btn btn-primary">buy</a>
//                   <span>${product.price}$</span>
//               <div>
//           </div>
//       </div>
//     </div>

//        `;

// check the user is allowed or not
const checkUser = async () => {
  try {
    const token = LocalStorageData.getData('user');
    console.log(token);

    if (token) {
      const res = await fetch(`http://localhost:3000/users?id=${token}`);
      const user = await res.json();
      console.log(user);

      if (user.length < 1) {
        window.location.replace('/form/signin/signin.html');
      } else {
        // other things
        // show the uesr email
        emailPreview.textContent = 'welcome ' + user[0].email;
        emailPreview.style.color = 'lightgreen';

        // if the user was an admin show the admin panel button
        if (
          user[0].email === 'abolfazl@gmail.com' &&
          user[0].password === 'abolfazl'
        ) {
          console.log('in the if condition for admin');
          const panelAdminButton = document.createElement('a');
          console.log(panelAdminButton);
          // console.log(panelAdminButton);
          panelAdminButton.textContent = 'admin panel';
          panelAdminButton.href = '../admin/adminPanel.html';
          panelAdminButton.className = 'btn btn-outline-danger';
          links.append(panelAdminButton);
          return;
        }
      }
    } else {
      window.location.replace('/form/signin/signin.html');
    }
  } catch (error) {
    // window.location.replace('/form/signin/signin.html');
    // console.log(error);
  }
};

checkUser();

// show the products

window.addEventListener('DOMContentLoaded', async (e) => {
  const res = await fetch('http://localhost:3000/products');
  const prodcuts = await res.json();

  prodcuts.forEach((product) => {
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

console.log(logoutBtn);

logoutBtn.addEventListener('click', (e) => {
  LocalStorageData.removeData('user');
  window.location.replace('/home/index.html');
});
