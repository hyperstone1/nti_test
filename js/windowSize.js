// Получаем ширину и высоту окна браузера
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
let userLi = document.querySelectorAll('.navbar_user_li');
const notebookBlur = document.querySelector('.best_products_right__notebook img');
const cardTitle = document.querySelectorAll('.card_title')[0];
const cardSubTitle4 = document.querySelectorAll('.card_description')[3];
const cardTitle4 = document.querySelectorAll('.card_title')[3];
const contactsContainer = document.querySelector('.contacts_container');

// Добавляем обработчик события onresize, чтобы получать размер окна при его изменении
window.addEventListener('resize', function () {
  windowWidth = this.screen.width;
  windowHeight = this.screen.height;
  console.log('Ширина окна: ' + windowWidth + ' Высота окна: ' + windowHeight);
  // if (innerWidth < 376) {
  //   userLi.forEach((item, id) => {
  //     if (id === 1 || id === 2) {
  //       item.classList.add('hide');
  //     }
  //   });
  // }
  if (windowWidth <= 375) {
    notebookBlur.setAttribute('src', './assets/notebook_blur_2.png');
    console.log(cardTitle);
    cardTitle.textContent = 'У нас самые выгодные и низкие цены';
    cardSubTitle4.textContent =
      'Мы лучший официальный поставщик продукции DELL в России и странах СНГ';
    cardTitle4.textContent = 'Мы являемся официальным партнером DELL';
    contactsContainer.classList.remove('container');
  }
});
const body = document.querySelector('body');
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.burger-menu');
let popup = document.querySelector('.popup');
const navbarLi = document.querySelectorAll('.navbar_li');

menuBtn.addEventListener('click', function () {
  menu.classList.toggle('active');
  popup.classList.toggle('active');
  body.classList.toggle('no-scroll');
  if (menu.classList.contains('active')) {
    document.addEventListener('click', closeMenu);
  } else {
    document.removeEventListener('click', closeMenu);
  }
});

function closeMenu(event) {
  if (
    (!event.target.closest('.menu-btn') && !event.target.closest('.burger-menu')) ||
    event.target.closest('.navbar_li')
  ) {
    menu.classList.remove('active');
    popup.classList.remove('active');
    body.classList.remove('no-scroll');
    document.removeEventListener('click', closeMenu);
  }
}
