// burger
let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.mobile__menu');
let disableScroll = document.querySelector('body');

if (menuBtn) {
  menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    disableScroll.classList.toggle('body-scroll');
  });
}



