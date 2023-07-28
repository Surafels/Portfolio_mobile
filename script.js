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

const project = [
  {
    id: 1,
    title: 'Tonic',
    projectInfo: {
      campany: 'CANOPY',
      tech: 'Back End Dev',
      year: 2015,
    },
    snapshoot: 'asset/Snapshoot Portfolio.png',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    seeLive: 'https://github.com/Surafels/Portfolio_Mobile',
    seeSource: 'https://github.com/Surafels/Portfolio_Mobile.git',
  },
  {
    id: 2,
    title: 'Multi-Post Stories',
    snapshoot: 'asset/Snapshoot Portfolio (1).png',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    projectInfo: {
      campany: 'Facebook',
      tech: 'Back End Dev',
      year: 2016,
    },
    seeLive: 'https://github.com/Surafels/Portfolio_Mobile',
    seeSource: 'https://github.com/Surafels/Portfolio_Mobile.git',
  },
  {
    id: 3,
    title: 'Facebook 360',
    snapshoot: 'asset/Snapshoot Portfolio (2).png',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    projectInfo: {
      campany: 'Facebook',
      tech: 'Back End Dev',
      year: 2017,
    },
    seeLive: 'https://github.com/Surafels/Portfolio_Mobile',
    seeSource: 'https://github.com/Surafels/Portfolio_Mobile.git',
  },
  {
    id: 4,
    title: 'Uber Navigation',
    snapshoot: 'asset/Snapshoot Portfolio (3).png',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',

    description: 'Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    skills: ['HTML', 'CSS', 'Ruby', 'JavaScript'],
    projectInfo: {
      campany: 'Uber',
      tech: 'Back End Dev',
      year: 2018,
    },
    seeLive: 'https://github.com/Surafels/Portfolio_Mobile',
    seeSource: 'https://github.com/Surafels/Portfolio_Mobile.git',
  },
];
const section = document.createElement('section');
section.className = 'cards';
const body = document.querySelector('body');
project.forEach((project) => {
  const popupWindow = document.createElement('div');
  popupWindow.className = 'popup-window';
  popupWindow.id = `card-${project.id}`;
  popupWindow.innerHTML = `
  <section class="card-popup">
  <div class="pop-header">
      <h2 class="p-title">${project.title}</h2>
      <i id="close-${project.id}" class="close-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#67798E"/>
    </svg></i>
  </div>
  <div class="popup-skills">
     <ul class="list-cty">
          <li class="list-item canopy">${project.projectInfo.campany}</li>
          <li class="tech-b">${project.projectInfo.tech}</li>
          <li class="year">${project.projectInfo.year}</li>
        </ul>
  </div>
      <div class="portfolio-popup-image">
        <img class="popup-image" src="${project.snapshoot}" alt="Snap image for background">
      </div>
      <div class="popup-wrap">
       
      
        <div class="btn-descr">
        <p class="card-text">${project.projectDescription} <br>
        ${project.description}
        </p>
        <div class="card-buttons">
        <div class="btn-popup">
          <button class="ski-btn" type="button" name="button">${project.skills[0]}</button>
          <button class="ski-btn" type="button" name="button">${project.skills[1]}</button>
          <button class="ski-btn" type="button" name="button">${project.skills[2]}</button>
          <button class="ski-btn" type="button" name="button">${project.skills[3]}</button>
        </div>
        <div class="see-bot-container">
        <span class="Separetor"></span>
          <button class="see-bot" type="button" name="button">See Live <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="#6070FF"/>
        </svg><i class="bi bi-box-arrow-up-right"></i></button>
          <button class="see-bot" type="button" name="button">See Source <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
          <g clip-path="url(#clip0_39_524)">
            <path d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="#6070FF"/>
          </g>
          <defs>
            <clipPath id="clip0_39_524">
              <rect width="18" height="20" fill="white"/>
            </clipPath>
          </defs>
        </svg><i class="bi bi-github"></i></button>
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

/* Contact form */
const ContactForm = document.getElementById('contact-form');
const email = document.getElementById('email');
const nameF = document.getElementById('name');
const message = document.getElementById('message');
const errorMsg = document.getElementById('errormsg');
function contactForm(event) {
  if (email.value === '') {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Please enter your email';
    event.preventDefault();
  } else if (
    email.value !== email.value.toLowerCase()) {
    errorMsg.innerHTML = 'Please enter you email in Lowercase ';
    event.preventDefault();
  } else if (
    /[A-Z]/.test(email.value)) {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Please enter your email in Lower Case';
    event.preventDefault();
  } else if (nameF.value === '') {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Please write your name';
    event.preventDefault();
  } else if (message.value === '') {
    errorMsg.style.display = 'block';
    errorMsg.innerHTML = 'Please write your message';
    event.preventDefault();
  }
}
ContactForm.addEventListener('submit', contactForm);
  
                 /*store data*/
                 const localStorageObject = {
  name: '',
  email: '',
  message: '',
};
const storageObjectName = 'formDataPm';
const existingObject = localStorage.getItem(storageObjectName);
if (existingObject) {
  const name = document.getElementsByClassName('user-name')[0].value;
  const email = document.getElementsByClassName('user-email')[0].value;
  const message = document.getElementById('user_message').value;
  const objectData = JSON.parse(existingObject);
  name.value = objectData.name;
  email.value = objectData.email;
  message.value = objectData.message;
}

function storeFormInLocalStorage(data) {
  const objectString = JSON.stringify(data);
  const existingObject = localStorage.getItem(storageObjectName);
  if (existingObject) {
    localStorage.removeItem(storageObjectName);
  }
  localStorage.setItem(storageObjectName, objectString);
}

function manageEvent() {
  const name = document.getElementsByClassName('user-name')[0].value;
  const email = document.getElementsByClassName('user-email')[0].value;
  const message = document.getElementById('user_message').value;
  localStorageObject.name = name;
  localStorageObject.email = email;
  localStorageObject.message = message;
  storeFormInLocalStorage(localStorageObject);
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myForm');
  if (form) {
    const formInputFields = form.querySelectorAll('input, select, textarea');
    for (let i = 0; i < formInputFields.length; i += 1) {
      formInputFields[i].addEventListener('input', manageEvent);
    }
  }
});

/* Preserve data in the browser*/
contactForm.addEventListener('submit',() => {
  const dataStore ={
    storeName : nameF.vale,
    storeEmail:email.value,
    storeMessage:message.value,
  };
  localStorage.setItem('dataStore', JSON.stringify(dataStore));
});
window.onload=function dataLoad(){
  const data = JSON.parse(localStorage.getItem('dataStore'));
  if(data){
    nameF.value = data.storeName;
    email.value = data.storeEmail;
    message.value = data.storeMessage;
  }
}