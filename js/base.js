window.onload = function(){
	gsap.registerPlugin(ScrollTrigger);
};

const scroll = new LocomotiveScroll({
  el: document.querySelector('.smooth'),
  smooth: true,
	smoothMobile: true, 
  // multiplier: 0.5,
  lerp: 0.09, 
});

gsap.registerPlugin(ScrollTrigger);

scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".c-scrollbar", {
  scrollTop(value) {
    return arguments.length
      ? scroll.scrollTo(value, 0, 0)
      : scroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },

  pinType: document.querySelector(".c-scrollbar").style.transform
    ? "transform"
    : "fixed"
});

// scroll.on("scroll", function() {
//   console.log(scroll.scroll.instance.scroll.y);
// });
ScrollTrigger.defaults({
  scroller: ".c-scrollbar"
});

let lastPos = 0;
const header = document.querySelector(".header");
scroll.on('scroll', (instance) => {
  const currentPos = instance.scroll.y;
  if (currentPos > 0) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  if (lastPos > currentPos) {
    header.style.transform = "translateY(0)";
  } else if (lastPos < currentPos) {
    header.style.transform = "translateY(-100%)";
    header.classList.remove("active");
  }
  lastPos = currentPos;
});

let sticky = gsap.timeline({
  scrollTrigger: {
    trigger: '.about', // 객체기준범위
    start: "0% 0%", // 시작 지점
    end: "100% 80%", // 끝 지점
    scrub: 1, // 부드러운 스크러빙
  },
});

sticky.to(".about__txt", {
  y: (document.querySelector(".about__img").offsetHeight) - (document.querySelector(".about__txt").offsetHeight)
});

// let largeSquareMove = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.animation_view', // 객체기준범위
//     start: "0% 0%", // 시작 지점
//     end: "100% 100%", // 끝 지점
//     scrub: 1, // 부드러운 스크러빙
//     markers: true,
//   },
// });

// largeSquareMove.to(".large_square", {
//   x: "-100 / 1920 * 100vw",
// });

