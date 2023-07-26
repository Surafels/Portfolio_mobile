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
const project=[
  {
    id:'card1',
    title:'Tonic',
    projectInfo:{
      campony:'CANOPY',
      role:'Back End Dev',
      year:2015
    },
  snapshoot:"asset/Snapshoot Portfolio.png",
description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  skills:['HTML','CSS','JavaScript'] ,
  }
]