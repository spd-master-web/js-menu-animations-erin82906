document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');

  hamburger.addEventListener('click', (event) => {
    // animate here when open the menu
    console.log(event);

    gsap.to(".hamburger",{
      x: 0,
      y: -50,
    });

    gsap.to("aside", {
      x: -30,
      duration: 0.7,
      ease: "back.out(1.2)",
    });

    gsap.to("aside li", {
      duration: 1,
      opacity: 1, //only 0 to 1, if opacity is 50%, it'll be 0.5 //
      stagger: 0.4,
    });

    gsap.to("aside .copy", {
      x: 2,
      duration: 1.5,
      ease: "bounce.out",
      opacity: 1,
    });

    gsap.to(".close", {
      x: 1,
      y: 0,
      duration: 0.7,
      ease: "power2",
    });
  })

  close.addEventListener('click', (event) => {
    // animate here when close the menu
    console.log(event);

    gsap.to(".close", {
      x: 0,
      y: -50,
      duration: 0.4,
      ease: "power2",
    });

    gsap.to("aside li",{
      duration: 0.4,
      opacity: 0,
      stagger: 0.4,
    });

    gsap.to("aside .copy",{
      x: -200,
      y: 0,
      opacity: 0,
      duration: 0.4,
    });

    gsap.to(".hamburger",{
      x: 0,
      y: 1,
    });

    gsap.to("aside",{
      delay: 2,
      x: -400,
      duration: 0.7,
      ease: "power4",
      });

  })
})