document.addEventListener('DOMContentLoaded', () => {
  const notebookBlur = document.querySelector('.best_products_right__notebook img');
  const cardTitle = document.querySelector('.card_title');
  const cardSubTitle4 = document.querySelectorAll('.card_description')[3];
  const cardTitle4 = document.querySelectorAll('.card_title')[3];
  const contactsContainer = document.querySelector('.contacts_container');
  const body = document.querySelector('body');
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.burger-menu');
  const popup = document.querySelector('.popup');
  const user = document.querySelector('.user');
  const userNav = document.querySelector('.user_nav');

  function handleWindowResize() {
    const { width: windowWidth, height: windowHeight } = screen;
    console.log(`Ширина окна: ${windowWidth} Высота окна: ${windowHeight}`);

    if (windowWidth <= 375) {
      notebookBlur.src = './assets/notebook_blur_2.png';
      cardTitle.textContent = 'У нас самые выгодные и низкие цены';
      cardSubTitle4.textContent =
        'Мы лучший официальный поставщик продукции DELL в России и странах СНГ';
      cardTitle4.textContent = 'Мы являемся официальным партнером DELL';
      contactsContainer.classList.remove('container');
    }
  }

  function closeMenu(event) {
    const menuBtnClicked = event.target.closest('.menu-btn');
    const burgerMenuClicked = event.target.closest('.burger-menu');
    const navbarLiClicked = event.target.closest('.navbar_li');

    if ((!menuBtnClicked && !burgerMenuClicked) || navbarLiClicked) {
      menu.classList.remove('active');
      popup.classList.remove('active');
      body.classList.remove('no-scroll');
      document.removeEventListener('click', closeMenu);
    }
  }

  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  user.addEventListener('click', function toggleUser() {
    userNav.classList.toggle('active');
  });

  menuBtn.addEventListener('click', function toggleMenu() {
    menu.classList.toggle('active');
    popup.classList.toggle('active');
    body.classList.toggle('no-scroll');
    if (menu.classList.contains('active')) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
  });

  window.addEventListener('DOMContentLoaded', handleWindowResize);
  window.addEventListener('resize', handleWindowResize);
});
