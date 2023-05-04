document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const header = document.querySelector('header');
  //элементы, которые необходимо изменять при разрешении экрана для моб.
  const notebookBlur = document.querySelector('.best_products_right__notebook img');
  const cardTitle = document.querySelector('.card_title');
  const cardSubTitle4 = document.querySelectorAll('.card_description')[3];
  const cardTitle4 = document.querySelectorAll('.card_title')[3];
  const contactsContainer = document.querySelector('.contacts_container');

  //Кнопка бургер-меню
  const menuBtn = document.querySelector('.menu-btn');

  // элементы: бургер меню и 
  const menu = document.querySelector('.burger-menu');
  const overlay = document.querySelector('.overlay');

  //иконка юзера и меню для него
  const user = document.querySelector('.user');
  const userNav = document.querySelector('.user_nav');

  // Форма и инпуты в ней
  const form = document.querySelector('form');
  const nameInput = document.getElementById('fullname');
  const phoneInput = document.getElementById('phone');
  const commentInput = document.getElementById('comment');

  // Функция получения разреров экрана
  function handleWindowResize() {
    const { width: windowWidth, height: windowHeight } = screen;

    // Изменение контента внутри элементов
    if (windowWidth <= 375) {
      notebookBlur.src = './assets/notebook_blur_2.png';
      cardTitle.textContent = 'У нас самые выгодные и низкие цены';
      cardSubTitle4.textContent =
        'Мы лучший официальный поставщик продукции DELL в России и странах СНГ';
      cardTitle4.textContent = 'Мы являемся официальным партнером DELL';
      contactsContainer.classList.remove('container');
    } else {
      if (!contactsContainer.classList.contains('container')) {
        contactsContainer.classList.add('container');
      }
      notebookBlur.src = './assets/notebook_blur.png';
      cardTitle.textContent = 'Самые выгодные и низкие цены';
      cardSubTitle4.textContent = 'Официальный поставщик продукции DELL в России и странах СНГ';
      cardTitle4.textContent = 'Официальный партнер DELL';
    }
  }

  // Обработчик беругер-меню
  function closeMenu(event) {
    const menuBtnClicked = event.target.closest('.menu-btn');
    const burgerMenuClicked = event.target.closest('.burger-menu');
    const navbarLiClicked = event.target.closest('.navbar_li');

    if ((!menuBtnClicked && !burgerMenuClicked) || navbarLiClicked) {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
      document.removeEventListener('click', closeMenu);
    }
  }
  // Отправка формы
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const errors = {};
    // проверяем корректность имени
    if (!/^[a-zA-Zа-яА-Я ]{2,30}$/.test(nameInput.value)) {
      nameInput.classList.add('error');
      errors.name = 'Пожалуйста, введите корректное имя';
    } else {
      if (nameInput.classList.contains('error')) {
        nameInput.classList.remove('error');
      }
      delete errors.name;
    }

    // проверяем корректность номера телефона
    if (!/^\+?[0-9]{8,14}$/.test(phoneInput.value)) {
      phoneInput.classList.add('error');
      errors.phone = 'Пожалуйста, введите корректный номер телефона';
    } else {
      if (phoneInput.classList.contains('error')) {
        phoneInput.classList.remove('error');
      }
      delete errors.phoneInput;
    }

    // проверяем корректность комментария
    if (commentInput.value.length < 10 || commentInput.value.length > 500) {
      errors.comments = 'Пожалуйста, введите комментарий длиной от 10 до 500 символов';
      commentInput.classList.add('error');
    } else {
      if (commentInput.classList.contains('error')) {
        commentInput.classList.remove('error');
      }
      delete errors.comments;
    }

    if (Object.keys(errors).length > 0) {
      alert('Пожалуйста, введите корректные данные');
    } else {
      // если все проверки пройдены успешно, отправляем форму
      form.submit();
    }
  });

  // Слайдер для best_products
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  // Ивенты для юзер меню
  header.addEventListener('mouseleave', function () {
    userNav.classList.remove('active');
  });
  user.addEventListener('mouseenter', function () {
    userNav.classList.add('active');
  });

  // ивент для открытия/закрытия меню
  menuBtn.addEventListener('click', function toggleMenu() {
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll');
    if (menu.classList.contains('active')) {
      document.addEventListener('click', closeMenu);
    } else {
      document.removeEventListener('click', closeMenu);
    }
  });
  // слушатели для получения разреров экрана при загрузке DOM и при изменении разреров экрана
  window.addEventListener('DOMContentLoaded', handleWindowResize);
  window.addEventListener('resize', handleWindowResize);
});
