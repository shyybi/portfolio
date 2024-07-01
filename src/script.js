slideDiv = document.querySelector(".slides");
scrollSvg = document.querySelector(".scrollsvg");

slideDiv.addEventListener("scroll", function() {
  document.querySelector(".scrollsvg").style.display = "none";
}, { once: true });

scrollSvg.addEventListener("click", function () {
  document.querySelector(".slide2").scrollIntoView({ behavior: "smooth" });
}, { once: true });