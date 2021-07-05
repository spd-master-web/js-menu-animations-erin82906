document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const close = document.querySelector('.close');

  hamburger.addEventListener('click', (event) => {
    // animate here when open the menu
    console.log(event);

    gsap.to(".hamburger", {
      x: 0,
      y: -50,
      duation: 0.2,
    });

    gsap.to("aside", {
      x: 0,
      y: -1,
      duration: 1.3,
      ease: "elastic.out(1, 0.6) ",
    });

    gsap.to("aside li", {
      duration: 1,
      opacity: 1,
      stagger: 0.3,
    });

    gsap.to("aside .copy", {
      opacity: 1,
      rotation: 1080,
      duration: 1,
      y: -1,
      delay: 0.1,
    });

    gsap.to(".close", {
      x: 0,
      y: -1,
      duration: 0.2,
      ease: "power3",
    });
  })


  close.addEventListener('click', (event) => {
    console.log(event);

    gsap.to(".close", {
      x: 0,
      y: 1,
      duration: 0.2,
      ease: "power3",
    });

    gsap.to("aside li", {
      opacity: 0,
      duration: 0.5,
      stagger: -0.5,
    });

    gsap.to("aside. copy", {
      x: 0,
      y: -2,
      opacity: 0,
      roation: 1080,
      duration: 1,
    });

    gsap.to(".hamburger", {
      x: 0,
      y: -1,
    });

    gsap.to("aside", {
      delay: 2,
      x: 0,
      y: 1,
      duration: 0.7,
    });

  })

})