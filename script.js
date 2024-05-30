"use strict";

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp: 0.09,
});

gsap.from("#Main-top", {
  x: -100,
  opacity: 0,
  duration: 2,
  ease: "power4.out",
});
gsap.from("#main-heading", {
  y: 0,
  scale: 0.8,
  opacity: 0,
  duration: 1,
});
gsap.from("#main-para", {
  y: -100,
  opacity: 0,
  duration: 1,
});

const sl = document.querySelector("#swippe-lef");

gsap.from(sl, {
  x: sl.clientWidth - innerWidth * -1,
  repeat: -1,
  duration: 1,
  yoyo: true,
});
gsap.from("#swippe-right", {
  x: 0,
  repeat: -1,
  duration: 5,
  yoyo: true,
});
gsap.to("#swippe-left", {
  x: -200,
  repeat: -1,
  duration: 5,
  yoyo: true,
});
