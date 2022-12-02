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
});
/*************/
/* TYPED JS */
/***********/
let typed = new Typed(".type-it", {
  strings: ["", "Powerful", "Efficient", "Great"],
  backSpeed: "8",
  typeSpeed: "7",
  loop: true,
});
