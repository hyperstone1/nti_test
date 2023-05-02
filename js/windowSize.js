// Получаем ширину и высоту окна браузера
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// Добавляем обработчик события onresize, чтобы получать размер окна при его изменении
window.addEventListener('resize', function () {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  console.log('Ширина окна: ' + windowWidth + ' Высота окна: ' + windowHeight);
});
