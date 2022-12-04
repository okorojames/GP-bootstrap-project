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

// BACK TO TOP BTN:
let mybutton = document.querySelector(".back-to-top-icon");

// When the user scrolls down 80px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*=========================*/
/* PORTFOLIO SECTION CODE */
/*=======================*/
$(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

// ISOTOPE BTNS
const isotopeBtn = document.querySelectorAll(".isotope-btn");
isotopeBtn.forEach((isotope) => {
  isotope.addEventListener("click", function (e) {
    isotope.classList.remove("active");
    isotope.classList.add("active");
  });
});
