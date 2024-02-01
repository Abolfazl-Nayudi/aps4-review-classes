// https://jsonplaceholder.typicode.com/todos/
const ul = document.querySelector('ul');
// fetch('https://jsonplacehold.typicode.com/todos/')
//   .then((res) => {
//     // coding
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.forEach(({ completed, title }) => {
//       const li = document.createElement('li');
//       li.textContent = title;
//       completed ? (li.style.textDecoration = 'line-through') : '';

//       ul.append(li);
//     });
//   })
//   .catch((err) => console.dir(err));

// omid ++

const row = document.querySelector('.row');

const getData = async () => {
  const res = await fetch('https://65b5468e41db5efd2867894d.mockapi.io/users');
  const data = await res.json();
  return data;
};
async function renderData(func) {
  const data = await func();
  data.forEach((user) => {
    const card = ` 
    <div class="col">
    <div class="card" style="width: 18rem;">
  <img src="${user.avatar}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${user.name}</h5>
    <p class="card-text">${user.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
    `;

    row.innerHTML += card;
  });
}

// renderData(getData);

// fetch('https://icanhazdadjoke.com/', {
//   headers: {
//     Accept: 'application/json',
//   },
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

fetch('https://ssd-api.jpl.nasa.gov/fireball.api', {
  headers: {
    'content-type': 'application/json',
  },
})
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
