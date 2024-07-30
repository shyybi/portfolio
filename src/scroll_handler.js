const slideDiv = document.querySelector(".slides");
const scrollSvg = document.querySelector(".scrollsvg");
const interestSlideshow = document.querySelector(".passions .slideshow");

slideDiv.addEventListener("scroll", function() {
  document.querySelector(".scrollsvg").style.display = "none";
}, { once: true });

scrollSvg.addEventListener("click", function() {
  document.querySelector(".slide2").scrollIntoView({ behavior: "smooth" });
}, { once: true });

const pointerScroll = (elem) => {
  const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
  const dragEnd = (ev) => elem.releasePointerCapture(ev.pointerId);
  const drag = (ev) => elem.hasPointerCapture(ev.pointerId) && (elem.scrollLeft -= ev.movementX);

  elem.addEventListener("pointerdown", dragStart);
  elem.addEventListener("pointerup", dragEnd);
  elem.addEventListener("pointermove", drag);
};

document.querySelectorAll(".horizontal-scroll").forEach(pointerScroll);

// Check every 100 ms if the about page slideshow is overflown and if not, set the pointer events to none and the cursor to default
setInterval(() => {
  if (!isOverflown(interestSlideshow)) interestSlideshow.classList.remove("horizontal-scroll");
  else interestSlideshow.classList.add("horizontal-scroll");
}, 100);
