'use strict';

/**
 * custom cuRsor
 */

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e) {
  
  const posX = e.clientX;
  const posY = e.clientY;
  
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;
  
  // use this foR cursor without animation
  // cursorOutline.style.left = `${posX}px`;
  // cursorOutline.style.top = `${posY}px`;
  
  // cuRsor animation
  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, { duration: 500, fill: 'forwards' });
  
});
