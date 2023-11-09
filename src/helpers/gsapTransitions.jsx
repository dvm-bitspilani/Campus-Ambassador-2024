import gsap from "gsap";
import { Observer } from "gsap/all";

export default function gsapInit() {
  gsap.registerPlugin(Observer);

  // console.log("isFormOpen (inside function) : ", isFormOpen);
  let isFormOpen = false;

  document.querySelector(".home-register-button").addEventListener("click", () => {
    console.log("register clicked");
    // On mouse down on .home-register-button, isFormOpen is set to true
    isFormOpen = true;

    document.querySelector(".home-register-button").removeEventListener("click", () => {
      isFormOpen = true});
    // On mouse down on .register-back button, isFormOpen is set to false
    setTimeout(() => {
    document.querySelector(".register-back").addEventListener("click", () => {
      console.log("back clicked");
      isFormOpen = false;
    });
    }, 200);
  });

  const sections = document.querySelectorAll("section");
  const boxAnimatables1 = document.querySelectorAll(".perks-animatable1");
  const boxAnimatables2 = document.querySelectorAll(".box-animatable2");

  // sections 1 to end should have alpha 0
  gsap.set(sections, { autoAlpha: 0, zIndex: 0 });
  gsap.set(sections[0], { autoAlpha: 1, zIndex: 1 });

  let animating = false;
  let currentIndex = 0;

  function transition1(direction) {
    const section1 = sections[0];
    const section2 = sections[1];

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
      onStart: () => {
        if (direction === 1) {
          gsap.set(section2, {
            zIndex: 1,
          });
        } else {
          gsap.set(section1, {
            autoAlpha: 0,
            // zIndex: 1,
          });
          gsap.set(section2, {
            zIndex: 0,
            autoAlpha: 1,
          });
        }
      },
      onComplete: () => {
        animating = false;
        if (direction === 1) {
          gsap.set(section1, {
            autoAlpha: 0,
            zIndex: 0,
          });
        } else {
          gsap.set(section2, {
            zIndex: 0,
          });
        }
      },
    });

    if (direction === 1) {
      tl.fromTo(".left-satellite", { x: 0 }, { x: -1000 })
        .fromTo(".right-satellite", { x: 0 }, { x: 1000 }, 0)
        .fromTo(".home-register", { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
        .fromTo(
          section1,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: "power2.inOut", duration: 0.5 },
          0
        )
        .fromTo(
          section2,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power2.inOut", duration: 0.5 },
          ">"
        )
        .fromTo(
          "#mars-surface",
          { y: 400 },
          { y: 0, ease: "power2.inOut", duration: 0.5 },
          ">"
        )
        .fromTo(
          "#mars-rover",
          { x: 1000 },
          { x: 0, ease: "power2.inOut", duration: 0.5 },
          ">"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "0%" },
          { backgroundPositionY: "10%", ease: "power2.inOut", duration: 2 },
          0
        );
    } else {
      tl.fromTo(
        section1,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power2.inOut" }
      )
        .fromTo(
          section2,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: "power2.inOut" },
          "<"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "10%" },
          { backgroundPositionY: "0%" },
          0
        )
        .fromTo(".left-satellite", { x: -1000 }, { x: 0 }, ">")
        .fromTo(".right-satellite", { x: 1000 }, { x: 0 }, "<")
        .fromTo(".home-register", { autoAlpha: 0 }, { autoAlpha: 1 }, "<");
    }
  }

  function transition2(direction) {
    const section1 = sections[1];
    const section2 = sections[2];

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
      onStart: () => {
        if (direction === 1) {
          gsap.set(section2, {
            zIndex: 1,
          });
        } else {
          gsap.set(section1, {
            autoAlpha: 0,
            // zIndex: 1,
          });
          gsap.set(section2, {
            zIndex: 0,
            autoAlpha: 1,
          });
          gsap.set("#mars-rover", {
            x: 0,
          });
          gsap.set("#mars-surface", {
            y: 0,
          });
        }
      },
      onComplete: () => {
        animating = false;
        if (direction === 1) {
          gsap.set(section1, {
            autoAlpha: 0,
            zIndex: 0,
          });
        } else {
          gsap.set(section2, {
            zIndex: 0,
          });
        }
      },
    });

    if (direction === 1) {
      tl.fromTo(
        "#mars-rover",
        { x: 0 },
        { x: -10000, duration: 1.3, ease: "power2.inOut" }
      )
        .fromTo("#mars-surface", { y: 0 }, { y: 400, duration: 0.3 }, "-=0.3")
        .fromTo(
          section1,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: "power2.inOut", duration: 1 },
          "-=0.3"
        )
        .fromTo(
          section2,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power2.inOut" },
          "<"
        )
        .fromTo(
          boxAnimatables1,
          { scale: 0 },
          { scale: 1, ease: "power2.inOut", stagger: 0.2 },
          ">"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "10%" },
          { backgroundPositionY: "20%", ease: "power2.inOut", duration: 2 },
          0
        );
    } else {
      tl.fromTo(
        section1,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power2.inOut" }
      )
        .fromTo(
          section2,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: "power2.inOut" },
          "<"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "20%" },
          { backgroundPositionY: "10%" },
          0
        );
    }
  }

  function transition3(direction) {
    const section1 = sections[2];
    const section2 = sections[3];

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
      onStart: () => {
        if (direction === 1) {
          gsap.set(section2, {
            zIndex: 1,
            autoAlpha: 1,
          });
        } else {
          gsap.set(section1, {
            autoAlpha: 0,
            // zIndex: 1,
            xPercent: 0,
          });
          gsap.set(section2, {
            zIndex: 0,
            autoAlpha: 1,
          });
        }
      },
      onComplete: () => {
        animating = false;
        if (direction === 1) {
          gsap.set(section1, {
            autoAlpha: 0,
            zIndex: 0,
          });
        } else {
          gsap.set(section2, {
            zIndex: 0,
          });
        }
      },
    });

    if (direction === 1) {
      tl.fromTo(
        section1,
        { xPercent: 0 },
        { xPercent: -100, ease: "power2.inOut" }
      )
        .fromTo(
          section2,
          { xPercent: 100 },
          { xPercent: 0, ease: "power2.inOut" },
          0
        )
        .fromTo(
          boxAnimatables2,
          { scale: 0 },
          { scale: 1, ease: "power2.inOut", stagger: 0.2 },
          ">"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "20%" },
          { backgroundPositionY: "30%", ease: "power2.inOut", duration: 2 },
          0
        );
    } else {
      tl.fromTo(
        section1,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power2.inOut" }
      )
        .fromTo(
          section2,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: "power2.inOut" },
          "<"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "30%" },
          { backgroundPositionY: "20%" },
          0
        );
    }
  }

  function transition4(direction) {
    const section1 = sections[3];
    const section2 = sections[4];

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
      onStart: () => {
        if (direction === 1) {
          gsap.set(section2, {
            zIndex: 1,
            autoAlpha: 1,
          });
        } else {
          gsap.set(section1, {
            autoAlpha: 0,
          });
          gsap.set(section2, {
            zIndex: 0,
            autoAlpha: 1,
          });
        }
      },
      onComplete: () => {
        animating = false;
        if (direction === 1) {
          gsap.set(section1, {
            autoAlpha: 0,
            zIndex: 0,
          });
        } else {
          gsap.set(section2, {
            zIndex: 0,
          });
        }
      },
    });

    if (direction === 1) {
      tl.fromTo(
        section1,
        { autoAlpha: 1 },
        { autoAlpha: 0, ease: "power2.inOut" }
      )
        .fromTo(
          section2,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power2.inOut" },
          0
        )
        .fromTo(
          ".contact-container",
          { scale: 0 },
          { scale: 1, ease: "power2.inOut" },
          ">"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "30%" },
          { backgroundPositionY: "40%", ease: "power2.inOut", duration: 2 },
          0
        );
    } else {
      tl.fromTo(
        section1,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power2.inOut" }
      )
        .fromTo(
          section2,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: "power2.inOut" },
          "<"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "40%" },
          { backgroundPositionY: "30%" },
          0
        );
    }
  }

  function gotoSection(index, direction) {
    if (index < 0 || index >= sections.length || animating) return;

    animating = true;

    if (currentIndex === 0 || (currentIndex === 1 && index === 0)) {
      transition1(direction);
    } else if (currentIndex === 1 || (currentIndex === 2 && index === 1)) {
      transition2(direction);
    } else if (currentIndex === 2 || (currentIndex === 3 && index === 2)) {
      transition3(direction);
    } else if (currentIndex === 3 || (currentIndex === 4 && index === 3)) {
      transition4(direction);
    }
    currentIndex = index;
  }

  // Observer
  const mainObserver = Observer.create({
    targets: "body",
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () =>
      !animating && !isFormOpen && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && !isFormOpen && gotoSection(currentIndex + 1, 1),
    tolerance: 30,
    preventDefault: true,
  });

  return mainObserver;
}
