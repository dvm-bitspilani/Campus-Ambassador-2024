import gsap from "gsap";
import { Observer } from "gsap/all";

export default function gsapInit() {
  gsap.registerPlugin(Observer);

  const sections = document.querySelectorAll("section");

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
          ">"
        )
        .fromTo(
          section2,
          { autoAlpha: 0 },
          { autoAlpha: 1, ease: "power2.inOut", duration: 0.5 },
          "<"
        )
        .fromTo(
          "#mars-surface",
          { y: 400 },
          { y: 0, ease: "power2.inOut", duration: 0.5 },
          ">"
        )
        .fromTo("#mars-rover", { x: 1000 }, { x: 0, ease: "power2.inOut", duration:0.5 }, ">")
        .fromTo(
          "body",
          { backgroundPositionY: "0%" },
          { backgroundPositionY: "10%" },
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
        reversed: direction === -1,
      },
      onStart: () => {
        gsap.set(direction === 1 ? section2 : section1, {
          autoAlpha: 1,
          zIndex: 1,
        });
      },
      onComplete: () => {
        animating = false;
        gsap.set(direction === 1 ? section1 : section2, {
          autoAlpha: 0,
          zIndex: 0,
        });
      },
    });

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
        { backgroundPositionY: "10%" },
        { backgroundPositionY: "20%" },
        0
      );
  }

  function transition3(direction) {
    const section1 = sections[2];
    const section2 = sections[3];

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
        reversed: direction === -1,
      },
      onStart: () => {
        gsap.set(direction === 1 ? section2 : section1, {
          autoAlpha: 1,
          zIndex: 1,
        });
      },
      onComplete: () => {
        animating = false;
        gsap.set(direction === 1 ? section1 : section2, {
          autoAlpha: 0,
          zIndex: 0,
        });
      },
    });

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
        { backgroundPositionY: "20%" },
        { backgroundPositionY: "30%" },
        0
      );
  }

  function transition4(direction) {
    const section1 = sections[3];
    const section2 = sections[4];

    const tl = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
        reversed: direction === -1,
      },
      onStart: () => {
        gsap.set(direction === 1 ? section2 : section1, {
          autoAlpha: 1,
          zIndex: 1,
        });
      },
      onComplete: () => {
        animating = false;
        gsap.set(direction === 1 ? section1 : section2, {
          autoAlpha: 0,
          zIndex: 0,
        });
      },
    });

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
        { backgroundPositionY: "30%" },
        { backgroundPositionY: "40%" },
        0
      );
  }

  function gotoSection(index, direction) {
    if (index < 0 || index >= sections.length || animating) return;

    console.log({ currentIndex, index });

    animating = true;

    const currentSection = sections[currentIndex];
    const nextSection = sections[index];

    // const tl = gsap.timeline({
    //   defaults: { duration: 1, ease: "power2.inOut" },
    //   onStart: () => {
    //     gsap.set(nextSection, { autoAlpha: 1, zIndex: 1 });
    //   },
    //   onComplete: () => {
    //     animating = false;
    //     currentIndex = index;
    //     gsap.set(currentSection, { autoAlpha: 0, zIndex: 0 });
    //   },
    // });

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
  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && gotoSection(currentIndex - 1, -1),
    onUp: () => !animating && gotoSection(currentIndex + 1, 1),
    tolerance: 30,
    preventDefault: true,
  });
}
