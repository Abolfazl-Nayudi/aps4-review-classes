const tbody = document.querySelector('.users-row');

const renderUsers = async () => {
  const res = await fetch('http://localhost:3000/users');
  const users = await res.json();
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
};

renderUsers();

tbody.addEventListener('click', (e) => {
  if (e.target.localName === 'button') {
    const id = e.target.parentElement.parentElement.getAttribute('id');
    console.log(id);
    if (id !== '1') {
      fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
      });
      e.target.parentElement.parentElement.remove();
    }
  }
});
