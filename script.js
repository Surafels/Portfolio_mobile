let humbergerMenu=document.querySelector('#menu-t');
let closingMenu= document.querySelector('#cancel');
let mobileMenuContainer= document.querySelector('#mobile-menu');
let mobileList= document.querySelector('.mobile-list');
function openmenu() {
    mobileMenuContainer.classList.remove('hidden');}
humbergerMenu.addEventListener("click", openmenu);
function closemenu() {
    mobileMenuContainer.classList.add("hidden");
}
closingMenu.addEventListener("click",closemenu);
mobileList.addEventListener("click",closemenu);
