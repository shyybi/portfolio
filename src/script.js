slideDiv = document.querySelector(".slides");
scrollSvg = document.querySelector(".scrollsvg");

slideDiv.addEventListener("scroll", function() {
  document.querySelector(".scrollsvg").style.display = "none";
}, { once: true });

scrollSvg.addEventListener("click", function() {
  document.querySelector(".slide2").scrollIntoView({ behavior: "smooth" });
}, { once: true });

// Function to check if the element is visible in the viewport
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) ||
        (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};

// Function to loop until the element is visible and then execute the instruction
const waitForElementToBeVisible = (selector, instruction, partiallyVisible = false, checkInterval = 100) => {
  const interval = setInterval(() => {
    const element = document.querySelector(selector);
    if (element && elementIsVisibleInViewport(element, partiallyVisible)) {
      clearInterval(interval); // Stop the interval once the element is visible
      instruction(); // Execute the instruction
    }
  }, checkInterval); // Check every 100ms by default
};

// Run for the slideshow
waitForElementToBeVisible('.slideshow', () => {
  setTimeout(() => {
    document.querySelectorAll('.project').forEach((object) => object.classList.add('hintmove'));
  }, 1000);
});

const pointerScroll = (elem) => {

  const dragStart = (ev) => elem.setPointerCapture(ev.pointerId);
  const dragEnd = (ev) => elem.releasePointerCapture(ev.pointerId);
  const drag = (ev) => elem.hasPointerCapture(ev.pointerId) && (elem.scrollLeft -= ev.movementX);

  elem.addEventListener("pointerdown", dragStart);
  elem.addEventListener("pointerup", dragEnd);
  elem.addEventListener("pointermove", drag);
};

document.querySelectorAll(".horizontal-scroll").forEach(pointerScroll);
