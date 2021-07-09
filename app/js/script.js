$(function(){

  //time
   let hours, minutes;
  function loop() {
    let date = new Date();

    hours = 24 - date.getHours();
    minutes = 60 - date.getMinutes();

    if (hours.toString().length < 2) hours = `0${hours}`;
    if (minutes.toString().length < 2) hours = `0${hours}`;

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;

    setTimeout(loop, 1000/60);
  }
  loop();

   //hamburger
  /* window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.header__item'),
    hamburger = document.querySelector('.header__hamburger');
  
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger_active');
        menu.classList.toggle('header__menu_active');
    });
  
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('header__hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
  })  */

  //slider
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
    speed: 600,
    infinite: false,

  });

  //tabs
  $('ul.menu__tabs').on('click', 'li:not(.menu__tab_active)', function() {
    $(this)
      .addClass('menu__tab_active').siblings().removeClass('menu__tab_active')
      .closest('div.container').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active');
  });

  //scroll
  $('a.header__menu-link').click(function(){
    $('html, body').animate({scrollTop:$($(this).attr('href')).offset().top},2000);
  }); 

  
});