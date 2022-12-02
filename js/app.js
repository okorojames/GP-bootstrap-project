const isotopBtn = document.querySelectorAll(".isotope");
isotopBtn.forEach((isotopButton) => {
  isotopButton.addEventListener("mouseover", function (e) {
    isotopButton.classList.toggle("isotop-active");
  });
});
