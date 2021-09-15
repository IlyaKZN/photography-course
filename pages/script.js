const siteLogo = document.querySelector('.header__logo');
const appointmentForm = document.querySelector('.appointment__form');
const appointmentButton = document.querySelector('.appointment__button');
const compositionLink = document.getElementById('composition-link');
const cameraLink = document.getElementById('camera-link');
const searchLink = document.getElementById('search-link');
const detailsLink = document.getElementById('more-details');
const appointmentLinks = document.querySelectorAll('.appointment-link');
const compositionSection = document.getElementById('composition');
const cameraSection = document.getElementById('camera');
const searchSection = document.getElementById('search');
const appointmentSection = document.getElementById('appointment');
const navButton = document.querySelector('.header__nav-button');
const navList = document.querySelector('.nav-list');
let rotate = 90;

//Функциональность кнопки "Записаться!"
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  appointmentButton.textContent = 'Спасибо!';
};
appointmentForm.addEventListener('submit', handleProfileFormSubmit);


//Функциональность кнопок скролла на секции
compositionLink.addEventListener('click', () => focusSection(compositionSection)); //кнопка "Композиция"
cameraLink.addEventListener('click', () => focusSection(cameraSection)); //кнопка "Камера"
searchLink.addEventListener('click', () => focusSection(searchSection)); //кнопка "Поиск заказов"
detailsLink.addEventListener('click', () => focusSection(compositionSection)); //кнопка "Подробнее"
appointmentLinks.forEach(element => {                                          //кнопки "Записаться!"
  element.addEventListener('click', () => focusSection(appointmentSection));
});

//Функция скролла на секции
function focusSection (section) {
  section.scrollIntoView({behavior: "smooth"});
};

navButton.addEventListener('click', function () {
  navButton.classList.toggle('header__nav-button_active'); 
  navList.classList.toggle('nav-list_active');
  siteLogo.classList.toggle('header__logo_disable');
})