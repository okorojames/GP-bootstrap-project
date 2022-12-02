const isotopBtn = document.querySelectorAll(".isotope");
isotopBtn.forEach((isotopButton) => {
  isotopButton.addEventListener("mouseover", function (e) {
    isotopButton.classList.toggle("isotop-active");
  });
});

$(".single-item").slick({
  infinite: true,
  autoplay: true,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
});
