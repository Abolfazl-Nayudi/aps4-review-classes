const pagesLink = document.querySelector('.pages-link');
const menuIcon = document.querySelector('.menu-icon');
const hamburgerMenu = document.querySelector('.hambarger-menu');
const closeIcon = document.querySelector('.close-icon');
const logoImg = document.querySelector('.logo img');

if (window.innerWidth < 800) {
  pagesLink.style.display = 'none';
  menuIcon.style.display = 'block';
} else {
  pagesLink.style.display = 'block';
  menuIcon.style.display = 'none';
  hamburgerMenu.classList.add('close');
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 800) {
    pagesLink.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    pagesLink.style.display = 'block';
    menuIcon.style.display = 'none';
    hamburgerMenu.classList.add('close');
  }
});

// open hamburger menu
menuIcon.addEventListener('click', () => {
  hamburgerMenu.classList.remove('close');
});

// close hamburger menu
// DRY => don't repeat yourself
closeIcon.addEventListener('click', (e) => {
  //   console.log(this);
  //   console.log(e);
  closeIcon.parentElement.classList.add('close');
});

const logoPosition = () => {
  let top = 0;
  let left = 0;
  window.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowUp':
        top -= 5;
        break;
      case 'ArrowDown':
        top += 5;
        break;
      case 'ArrowLeft':
        left -= 5;
        break;
      case 'ArrowRight':
        left += 5;
    }

    logoImg.style.top = `${top}px`;
    logoImg.style.left = `${left}px`;
  });
};
logoPosition();
