$(function () {
  $('.price-slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
    responsive: [
      {
        breakpoint: 1155,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 451,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
})

const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu-list');
const menuBtnLine = document.querySelector('.menu__btn-line');

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu-list--hide')
  menuBtnLine.classList.toggle('close')
})
