const isotopBtn = document.querySelectorAll(".isotope");
isotopBtn.forEach((isotopButton) => {
  isotopButton.addEventListener("mouseover", function (e) {
    isotopButton.classList.toggle("isotop-active");
  });
});

/**************/
/*  CAROUSEL */
/************/
$(".single-item").slick({
  infinite: true,
  autoplay: true,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
/*******************/
/*****testimonial carousel*****/
/*******************/
// $(".testimonial-section-carousel").slick({
//   infinite: true,
//   autoplay: true,
//   arrows: false,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   dots: true,
// });
/*************/
/* TYPED JS */
/***********/
// let typed = new Typed(".type-it", {
//   strings: ["", "Powerful", "Efficient", "Great"],
//   backSpeed: "8",
//   typeSpeed: "7",
//   loop: true,
// });

/*=======================*/
/*OFF SECTION ICONS CODE*/
/*=====================*/
let offSection = document.querySelectorAll(".off-section-icons");
offSection.forEach((offSec) => {
  offSec.addEventListener("mouseover", function (e) {
    offSec.classList.toggle("okay");
  });
});
/*=============*/
/*COUNTER CODE*/
/*===========*/
$(".counter").counterUp({
  delay: 1,
  time: 300,
});
