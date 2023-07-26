const humbergerMenu = document.querySelector('#menu-t');
const closingMenu = document.querySelector('#cancel');
const mobileMenuContainer = document.querySelector('#mobile-menu');
const mobileList = document.querySelector('.mobile-list');
function openmenu() {
  mobileMenuContainer.classList.remove('hidden');
}
humbergerMenu.addEventListener('click', openmenu);

function closemenu() {
  mobileMenuContainer.classList.add('hidden');
}
closingMenu.addEventListener('click', closemenu);
mobileList.addEventListener('click', closemenu);
