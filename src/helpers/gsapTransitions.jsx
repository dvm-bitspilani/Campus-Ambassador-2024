import gsap from "gsap";
import { Observer } from "gsap/all";

export default function gsapInit(isFormOpen) {
  gsap.registerPlugin(Observer);

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
          gsap.set(".left-satellite", {
            x: 0,
          });
          gsap.set(".right-satellite", {
            x: 0,
          });
          gsap.set(".home-register", {
            autoAlpha: 1,
          });
          gsap.set(".home-heading-wrapper", {
            autoAlpha: 1,
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
        .fromTo(".home-heading-wrapper", { autoAlpha: 1 }, { autoAlpha: 0 }, 0)
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
        .fromTo(".home-register", { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
        .fromTo(
          ".home-heading-wrapper",
          { autoAlpha: 0 },
          { autoAlpha: 1 },
          "<"
        );
    }
  }

  function transition2(direction) {
    const section1 = sections[1];
    const section2 = sections[2];

    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power2.inOut",
      },
      onStart: () => {
        if (direction === 1) {
          gsap.set(section2, {
            zIndex: 1,
            xPercent: 0,
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
        .fromTo("#mars-surface", { y: 0 }, { y: 400, duration: 1 }, "-=0.3")
        .fromTo(
          section1,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: "power2.inOut", duration: 1 },
          "-=0.8"
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
          "-=0.5"
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
          { scale: 1, ease: "power2.inOut", stagger: 0.15 },
          "-=0.3"
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
        { xPercent: 100, ease: "power2.inOut" }
      )
        .fromTo(
          section2,
          { xPercent: -100 },
          { xPercent: 0, ease: "power2.inOut" },
          0
        )
        .fromTo(
          ".test-header>h1",
          { y: 100 },
          { y: 0, ease: "power2.inOut" },
          "-=0.3"
        )
        .fromTo(
          ".carousel",
          { scale: 0 },
          { scale: 1, ease: "power2.inOut" },
          "<"
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

  function transition5(direction) {
    const section1 = sections[4];
    const section2 = sections[5];

    const faqs = document.querySelectorAll(".MuiPaper-root");

    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
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
            yPercent: 0,
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
        { yPercent: 0 },
        { yPercent: -100, ease: "power2.inOut" }
      )
        .fromTo(
          section2,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power2.inOut" },
          0
        ).fromTo(
          faqs,
          { scale: 0 },
          { scale: 1, ease: "power2.inOut", stagger: 0.2 },
          ">"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "40%" },
          { backgroundPositionY: "50%", ease: "power2.inOut", duration: 2 },
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
          { backgroundPositionY: "50%" },
          { backgroundPositionY: "40%" },
          0
        );
    }
  }

  function transition6(direction) {
    const section1 = sections[5];
    const section2 = sections[6];

    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
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
          { scale: 0.9, ease: "power2.inOut" },
          "-=0.3"
        )
        .fromTo(
          "body",
          { backgroundPositionY: "50%" },
          { backgroundPositionY: "60%", ease: "power2.inOut", duration: 2 },
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
          { backgroundPositionY: "60%" },
          { backgroundPositionY: "50%" },
          0
        );
    }
  }

  function generalTransition(index, direction) {
    const section1 = sections[currentIndex];
    const section2 = sections[index];

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
            xPercent: 0, // for section 3
          });
          gsap.set(section1, {
            zIndex: 0,
            xPercent: 0,
          });
        } else {
          gsap.set(section2, {
            autoAlpha: 0,
            zIndex: 1,
            xPercent: 0,
          });
          gsap.set(section1, {
            zIndex: 0,
            autoAlpha: 1,
            xPercent: 0,
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
          gsap.set(section1, {
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
          "body",
          { backgroundPositionY: `${currentIndex * 10}%` },
          {
            backgroundPositionY: `${index * 10}%`,
            ease: "power2.inOut",
            duration: 2,
          },
          0
        );
    } else {
      tl.fromTo(
        section2,
        { autoAlpha: 0 },
        { autoAlpha: 1, ease: "power2.inOut" }
      )
        .fromTo(
          section1,
          { autoAlpha: 1 },
          { autoAlpha: 0, ease: "power2.inOut" },
          "<"
        )
        .fromTo(
          "body",
          { backgroundPositionY: `${currentIndex * 10}%` },
          { backgroundPositionY: `${index * 10}%` },
          0
        );
    }
  }

  function deactivateHam() {
    document.querySelector(".nav-hamburger-menu").classList.remove("active");

    document.querySelectorAll(".line").forEach((line) => {
      line.classList.remove("active");
    });
  }

  function gotoSection(index, direction) {
    if (index < 0 || index >= sections.length || animating) return;

    // Deactive Hamburger Menu
    deactivateHam();

    animating = true;

    // console.log({ currentIndex, index, direction });

    if (
      (currentIndex === 0 && index === 1) ||
      (currentIndex === 1 && index === 0)
    ) {
      transition1(direction);
    } else if (
      (currentIndex === 1 && index === 2) ||
      (currentIndex === 2 && index === 1)
    ) {
      transition2(direction);
    } else if (
      (currentIndex === 2 && index === 3) ||
      (currentIndex === 3 && index === 2)
    ) {
      transition3(direction);
    } else if (
      (currentIndex === 3 && index === 4) ||
      (currentIndex === 4 && index === 3)
    ) {
      transition4(direction);
    } else if (
      (currentIndex === 4 && index === 5) ||
      (currentIndex === 5 && index === 4)
    ) {
      transition5(direction);
    }else if (
      (currentIndex === 5 && index === 6) ||
      (currentIndex === 6 && index === 5)
    ) {
      transition6(direction);
    } else {
      generalTransition(index, direction);
      console.log("generalTransition");
    }
    currentIndex = index;
  }

  let mainObserver = null;

  // Observer
  if (!isFormOpen) {
    mainObserver = Observer.create({
      targets: "body",
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () =>
        !animating &&
        !isFormOpen &&
        gotoSection(currentIndex - 1, -1),
      onUp: () =>
        !animating && !isFormOpen && gotoSection(currentIndex + 1, 1),
      tolerance: 30,
      preventDefault: true,
    });
  }

  // On click of nav icons, goToSection is called
  document.querySelectorAll(".nav-home").forEach((nav) => {
    nav.addEventListener("click", () => {
      const index = 0;
      if (currentIndex !== index && !animating) gotoSection(index, -1);
    });
  });
  document.querySelectorAll(".nav-perks").forEach((nav) => {
    nav.addEventListener("click", () => {
      const index = 2;
      if (currentIndex !== index && !animating)
        gotoSection(index, currentIndex < index ? 1 : -1);
    });
  });
  document.querySelectorAll(".nav-responsibilities").forEach((nav) => {
    nav.addEventListener("click", () => {
      const index = 3;
      if (currentIndex !== index && !animating)
        gotoSection(index, currentIndex < index ? 1 : -1);
    });
  });
  document.querySelectorAll(".nav-testimonials").forEach((nav) => {
    nav.addEventListener("click", () => {
      const index = 4;
      if (currentIndex !== index && !animating)
        gotoSection(index, currentIndex < index ? 1 : -1);
    });
  });
  document.querySelectorAll(".nav-faqs").forEach((nav) => {
    nav.addEventListener("click", () => {
      const index = 5;
      if (currentIndex !== index && !animating)
        gotoSection(index, currentIndex < index ? 1 : -1);
    });
  });
  document.querySelectorAll(".nav-contact").forEach((nav) => {
    nav.addEventListener("click", () => {
      const index = 6;
      if (currentIndex !== index && !animating)
        gotoSection(index, currentIndex < index ? 1 : -1);
    });
  });

  return mainObserver;
}
