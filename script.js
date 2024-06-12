"use strict";

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
//   lerp: 0.09,
// });

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

// open Menu

function openMenu() {
  document.querySelector(".menu").classList.add("hidden");
  document.querySelector(".close").classList.remove("hidden");
  document
    .querySelector("#mobile-nav")
    .classList.remove("translate-x-[-36rem]");
  document
    .querySelector("#mobile-nav")
    .classList.add("translate-x-[0rem] duration-500");
}
function closeMenu() {
  document.querySelector(".menu").classList.remove("hidden");
  document.querySelector(".close").classList.add("hidden");
  document.querySelector("#mobile-nav").classList.add("translate-x-[-36rem]");
  document.querySelector("#mobile-nav").classList.remove("translate-x-[0rem]");
}

document.addEventListener("scroll", () => {
  const scrollPos =
    window.scrollY ||
    window.scrollTop ||
    document.getElementsByTagName("html").scrollTop;
  const sideNav = document.querySelector(".side-nav");
  const back = document.querySelector(".back-to-top");
  if (scrollPos > 10) {
    sideNav.classList.remove("hidden");
    sideNav.classList.add("block");
    back.classList.remove("hidden");
    back.classList.add("block");
  } else {
    sideNav.classList.remove("block");
    sideNav.classList.add("hidden");
    back.classList.remove("block");
    back.classList.add("hidden");
  }

  console.log(scrollPos);
});
