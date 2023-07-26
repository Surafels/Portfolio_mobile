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
      campany:'CANOPY',
      tech:'Back End Dev',
      year:2015
    },
  snapshoot:"asset/Snapshoot Portfolio.png",
  projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
  skills:['HTML','CSS','JavaScript'] ,
  seeLive:'https://github.com/Surafels/Portfolio_Mobile',
  seeSource:'https://github.com/Surafels/Portfolio_Mobile.git',
  },
  {
    id: 2,
    title:'Multi-Post Stories',
    snapshoot:'asset/Snapshoot Portfolio.png',
    projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills:['HTML','CSS','Ruby','JavaScript'] ,
    projectInfo:{
      campany:'Facebook',
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
    projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',

    description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills:['HTML','CSS','Ruby','JavaScript'] ,
    projectInfo:{
      campany:'Facebook',
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
    projectDescription: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',

    description:'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills:['HTML','CSS','Ruby','JavaScript'] ,
    projectInfo:{
      campany:'Uber',
      tech:'Back End Dev',
      year:2018
    },
    seeLive:'https://github.com/Surafels/Portfolio_Mobile',
    seeSource:'https://github.com/Surafels/Portfolio_Mobile.git',
  }
];
  const bodySection = document.querySelector('container');
  const section = document.createElement('section');
  section.className= 'cards';
  /** 
project.forEach((project) => {
  section.innerHTML = <div class="snap-image"> 
   <img class='snop-img' src = {project.snapshoot} alt="#" />
    </div>;
  <div class="Ton">
    <h2 class="title">{project.title}</h2>
    <ul class="items">
      <li class='item-canopy'>{project.campony}</li>
      <li class='item-bed'>{project.tech}</li>
      <li class='item-year'>{project.year}</li>

    </ul>
   
   <p class='card-detail'>{project.description}</p>
  <div class='skils-btn'>
   <button class ='ski-btn'> {project.skills[1]}</button>
   <button class ='ski-btn'> {project.skills[2]}</button>
   <button class ='ski-btn'> {project.skills[3]}</button>
   <button class ='ski-btn'> {project.skills[4]}</button>
  </div>
  <div class='Button'>
    <button class ='b-bot' type="button" id= "btn-{project.id}">See project</button>
  </div>
  </div>
;
bodySection.append(section);
});
*/
const body = document.querySelector('body');
project.forEach((project) => {
  const popupWindow = document.createElement('div');
  popupWindow.className = 'popup-window';
  popupWindow.id = `card-${project.id}`;
  popupWindow.innerHTML = `
  <section class="card-popup">
  <div class="pop-header">
      <h2 class="p-title">${project.title}</h2>
      <i id="close-${project.id}" class="bi bi-x close-icon"></i>
  </div>
  <div class="popup-skills">
     <ul class="items popup-items">
          <li class="list-item canopy">${project.projectInfo.campany}</li>
          <li class="list-item backend-dev">${project.projectInfo.tech}</li>
          <li class="list-item year">${project.projectInfo.year}</li>
        </ul>
  </div>
      <div class="portfolio-popup-image">
        <img class="popup-image" src="${project.snapshoot}" alt="Snap image for background">
      </div>
      <div class="popup-left-block">
       
      
        <div class="card-btn-para">
        <p class="card-text">${project.projectDescription} <br>
        ${project.description}
        </p>
        <div class="card-buttons">
        <div class="card-btn btn-popup">
          <button class="sm-btn" type="button" name="button">${project.skills[0]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[1]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[2]}</button>
          <button class="sm-btn" type="button" name="button">${project.skills[3]}</button>
        </div>
        <div class="action-btn-container">
          <button class="action-btn popupBtn" type="button" name="button">See Live <i class="bi bi-box-arrow-up-right"></i></button>
          <button class="action-btn popupBtn" type="button" name="button">See Source <i class="bi bi-github"></i></button>
        </div>
        </div>
        </div>
      </div>
    </section>
 `;
  body.appendChild(popupWindow);
});

const feature1 = document.getElementById('bot-1');
const feature2 = document.getElementById('bot-2');
const feature3 = document.getElementById('bot-3');
const feature4 = document.getElementById('bot-4');

const IconClose1 = document.getElementById('close-1');
const IconClose2 = document.getElementById('close-2');
const IconClose3 = document.getElementById('close-3');
const IconClose4 = document.getElementById('close-4');

const popup1 = document.getElementById('card-1');
const popup2 = document.getElementById('card-2');
const popup3 = document.getElementById('card-3');
const popup4 = document.getElementById('card-4');
console.log(popup1)

feature1.addEventListener('click', () => {
  popup1.classList.toggle('active');
});

IconClose1.addEventListener('click', () => {
  popup1.classList.toggle('active');
});

feature2.addEventListener('click', () => {
  popup2.classList.toggle('active');
});

IconClose2.addEventListener('click', () => {
  popup2.classList.toggle('active');
});

feature3.addEventListener('click', () => {
  popup3.classList.toggle('active');
});

IconClose3.addEventListener('click', () => {
  popup3.classList.toggle('active');
});

feature4.addEventListener('click', () => {
  popup4.classList.toggle('active');
});

IconClose4.addEventListener('click', () => {
  popup4.classList.toggle('active');
});