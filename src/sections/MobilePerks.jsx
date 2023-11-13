import React, { useState } from "react";
import "./MobilePerks.css";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import LeftArrowImage from "../../public/Left.svg";
import RightArrowImage from "../../public/Right.svg";
import MobileTestimonials from "../components/MobileTestimonials";
import { DATA } from "../components/rewards";
import { RESPONSIBILITIES } from "../components/responsibilities";

const sliderVariants = {
  incoming: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0,
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: (direction) => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2,
  }),
};

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

const MobilePerks = ({ section }) => {
  const [[imageCount, direction], setImageCount] = useState([0, 0]);

  const activeImageIndex = wrap(0, DATA.length, imageCount);

  const swipeToImage = (swipeDirection) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const dragEndHandler = (dragInfo) => {
    const draggedDistance = dragInfo.offset.x;
    const swipeThreshold = 50;
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1);
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1);
    }
  };
  return (
    <section className="mobile-perks">
      <div className="testimonials-container">
        <div className="test-header">
          <h1>
            {section === "perks"
              ? "REWARDS AND INCENTIVES"
              : "RESPONSIBILITIES"}
          </h1>
        </div>
        <div className="test-carousel">
          <div className="carousel">
            <div className="sliderContainer">
              <div className="slider rewards-slider">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.div
                    key={imageCount}
                    custom={direction}
                    variants={sliderVariants}
                    initial="incoming"
                    animate="active"
                    exit="exit"
                    transition={sliderTransition}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
                    className="image"
                  >
                    {section === "perks" ? (
                      <MobileTestimonials
                        type="rewards"
                        name={DATA[activeImageIndex].name}
                        desc={DATA[activeImageIndex].desc}
                      ></MobileTestimonials>
                    ) : (
                      <MobileTestimonials
                        type="rewards"
                        name={RESPONSIBILITIES[activeImageIndex].name}
                        desc={RESPONSIBILITIES[activeImageIndex].desc}
                      ></MobileTestimonials>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="buttons">
                <button onClick={() => swipeToImage(-1)}>
                  <img src={LeftArrowImage} alt="<"></img>
                </button>
                <button onClick={() => swipeToImage(1)}>
                  <img src={RightArrowImage} alt=">"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePerks;
