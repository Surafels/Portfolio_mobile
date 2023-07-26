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
    id:1,
    title:'Tonic',
    projectInfo:{
      campony:'CANOPY',
      tech:'Back End Dev',
      year:2015
    },
  snapshoot:"asset/Snapshoot Portfolio.png",
description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  skills:['HTML','CSS','JavaScript'] ,
  seeLive:'https://github.com/Surafels/Portfolio_Mobile',
  seeSource:'https://github.com/Surafels/Portfolio_Mobile.git',
  },
  {
    id: 2,
    title:'Mlti-Post Stories',
    snapshoot:'asset/Snapshoot Portfolio.png',
    description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills:['HTML','CSS','Ruby','JavaScript'] ,
    projectInfo:{
      campony:'Facebook',
      tech:'Back End Dev',
      year:2016
    },
    seeLive:'https://github.com/Surafels/Portfolio_Mobile',
    seeSource:'https://github.com/Surafels/Portfolio_Mobile.git',
  },
  {
    id: 3,
    title:'Facebook 360',
    snapshoot:'asset/Snapshoot Portfolio.png',
    description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills:['HTML','CSS','Ruby','JavaScript'] ,
    projectInfo:{
      campony:'Facebook',
      tech:'Back End Dev',
      year:2017
    },
    seeLive:'https://github.com/Surafels/Portfolio_Mobile',
    seeSource:'https://github.com/Surafels/Portfolio_Mobile.git',
  },
  {
    id: 4,
    title:'Uber Navigation',
    snapshoot:'asset/Snapshoot Portfolio.png',
    description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills:['HTML','CSS','Ruby','JavaScript'] ,
    projectInfo:{
      campony:'Uber',
      tech:'Back End Dev',
      year:2018
    },
    seeLive:'https://github.com/Surafels/Portfolio_Mobile',
    seeSource:'https://github.com/Surafels/Portfolio_Mobile.git',
  }
];
