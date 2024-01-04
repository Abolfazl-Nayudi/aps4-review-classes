const formEl = document.querySelector('form');
const ulEl = document.querySelector('ul');
const liEls = document.querySelectorAll('li');
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.target.todo;

  const liEl = document.createElement('li');
  liEl.innerText = text.value;

  ulEl.append(liEl);

  text.value = '';
});

// bad practice
// liEls.forEach((li) => {
//   li.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

// good practice
ulEl.addEventListener('click', (e) => {
  if (e.target.localName === 'li') {
    e.target.remove();
  }
  // console.log(e.target);
  // e.target.remove();
});
