import React, { useState } from "react";
import "./Testimonials.css";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import LeftArrowImage from "../../public/Left.svg";
import RightArrowImage from "../../public/Right.svg";
import CarouselBox from "./CarouselBox";

import { DATA } from "./data";

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

const Testimonials = () => {
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
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="test-header">
          <h1>Testimonials</h1>
        </div>
        <div className="test-carousel">
          <div className="carousel">
            <div className="sliderContainer">
              <div className="slider">
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
                    <CarouselBox
                      image={DATA[activeImageIndex].image}
                      name={DATA[activeImageIndex].name}
                      desc={DATA[activeImageIndex].desc}
                    ></CarouselBox>
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

            {/* <div className="thumbnails">
        {DATA.map(image => (
          <div
            key={image.id}
            onClick={() => skipToImage(image.id)}
            className="thumbnailContainer"
          >
            <img src={image.DATArc} alt="Musician" />
            <div
              className={`$"activeIndicator" ${
                image.id === activeImageIndex ? carousel["active"] : null
              }`}
            />
          </div>
        ))}
      </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
