// Header fixed
window.onscroll = function showHeader(){
  let header = document.querySelector('.header__container')
  

  if(window.pageYOffset > 50){
    header.classList.add('header__fixed');
  } else {
    header.classList.remove('header__fixed');
  }
}

// AOS Animation ---------------
AOS.init();

// Slider swiper ---------------
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
