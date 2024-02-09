import { Authentication } from '../utils/auth.js';

const tbody = document.querySelector('.users-row');
const searchInput = document.querySelector('.search');
const addUserForm = document.querySelector('.addUserForm');
const emailPreview = document.querySelector('.email-message');
const passwordPreview = document.querySelector('.password-message');
const generalMessagePreview = document.querySelector('.message');
// `

//                 <tr class="user" id="${user.id}">
//                     <th scope="row">${user.id}</th>
//                     <td>${user.email}</td>
//                 <td>${user.password}</td>
//                     <td>
//                     <button class="btn btn-outline-danger">Delete</button>
//                     </td>
//                 </tr>
//         `;

const showUsers = async () => {
  const res = await fetch('http://localhost:3000/users');
  const users = await res.json();
  console.log(users);

  users.forEach((user) => {
    tbody.innerHTML += `
                <tr class="user" id="${user.id}">
                    <th scope="row">${user.id}</th>
                    <td>${user.email}</td>
                <td>${user.password}</td>
                    <td>
                    <button class="btn btn-outline-danger">Delete</button>
                    </td>
                </tr>
        `;
  });

  search();
};

showUsers();

// use event delegation
tbody.addEventListener('click', async (e) => {
  console.log(e.target);
  if (e.target.localName === 'button') {
    const user = e.target.parentElement.parentElement;
    console.log(user.id);
    // const res = await fetch(`http://localhost:3000/users?id=${user.id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    // });
    if (user.id !== '1') {
      const res = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      console.log(data);
      user.remove();
    }
  }
});

// search functionality
async function search() {
  const users = document.querySelectorAll('.user');

  searchInput.addEventListener('keyup', (e) => {
    console.log(e.target.value);

    users.forEach((user) => {
      const userEmail = user.children[1].textContent.toLowerCase();
      const inputField = e.target.value.toLowerCase().trim();
      if (!userEmail.startsWith(inputField)) {
        user.style.display = 'none';
      } else {
        user.style.display = 'table-row';
      }
    });
  });
}

// add user from admin panel
addUserForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const emailInput = e.target.email;
  const passwordInput = e.target.password;

  // clean up the message fields
  emailPreview.textContent = '';
  passwordPreview.textContent = '';

  try {
    const user = new Authentication(
      emailInput.value.trim(),
      passwordInput.value.trim()
    );

    user.verifyData();

    const response = await user.signup();

    if (response.statusCode === 409) {
      generalMessagePreview.textContent = response.message;
      generalMessagePreview.style.color = 'crimson';
    }

    if (response.statusCode === 201) {
      alert('user added successfully');
    }
  } catch (error) {
    if (error.message === 'emailError') {
      emailPreview.textContent = 'email is not valid';
      emailPreview.style.color = 'crimson';
    }
    if (error.message === 'passwordError') {
      passwordPreview.textContent = 'password must be at least 5 characters';
      passwordPreview.style.color = 'crimson';
    }
  }
});
