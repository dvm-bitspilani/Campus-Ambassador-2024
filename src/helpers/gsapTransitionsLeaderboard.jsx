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
          { backgroundPositionY: `${currentIndex * 20}%` },
          {
            backgroundPositionY: `${index * 20}%`,
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
          { backgroundPositionY: `${currentIndex * 20}%` },
          { backgroundPositionY: `${index * 20}%` },
          0
        );
    }
  }

  function gotoSection(index, direction) {
    if (index < 0 || index >= sections.length || animating) return;

    animating = true;

    console.log({ currentIndex, index, direction });

    generalTransition(index, direction);

    currentIndex = index;
  }

  // Adding event listeners to navigation buttons
  // On click of nav icons, goToSection is called
  document
    .querySelector(".leaderboard-nav-leaderboard")
    .addEventListener("click", () => {
      const index = 0;
      if (currentIndex !== index && !animating) gotoSection(index, -1);
    });
  document
    .querySelector(".leaderboard-nav-incentives")
    .addEventListener("click", () => {
      const index = 1;
      if (currentIndex !== index && !animating)
        gotoSection(index, currentIndex < index ? 1 : -1);
    });

  document
    .querySelector(".leaderboard-nav-responsibilities")
    .addEventListener("click", () => {
      const index = 2;
      if (currentIndex !== index && !animating)
        gotoSection(index, currentIndex < index ? 1 : -1);
    });
  document
    .querySelector(".leaderboard-nav-points")
    .addEventListener("click", () => {
      const index = 3;
      if (currentIndex !== index && !animating)
        gotoSection(index, currentIndex < index ? 1 : -1);
    });
}
