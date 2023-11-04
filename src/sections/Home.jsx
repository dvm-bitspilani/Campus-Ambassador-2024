import React from "react";
import "./Home.css";
import SpaceStation from "../../public/SpaceStation.png";
import LeftSatellite from "../../public/LeftSatellite.png";
import RightSatellite from "../../public/RightSatellite.png";
import {
  easeIn,
  easeInOut,
  easeOut,
  motion,
  useAnimation,
} from "framer-motion";
import Register from "../components/Register";

const Home = () => {
  const regControls = useAnimation();
  const textControls = useAnimation();
  const boxControls = useAnimation();
  const handleRegister = async () => {
    await textControls.start({
      opacity: 0,
      display: "none",
    });
    await Promise.all([animateButton(), animateBox()]);
  };
  const animateButton = async () => {
    await regControls.start({
      letterSpacing: "10px",
    });
  };
  const animateBox = async () => {
    await boxControls.start({
      height: "90%",
      rotate: -90,
      scale: 1.75,
      justifyContent: "flex-start",
      gap: ".25rem",
    });
  };

  return (
    <div className="home">
      <motion.div
        className="home-register"
        initial={{
          height: "fit-content",
          rotate: 0,
          scale: 1,
          justifyContent: "center",
        }}
        animate={boxControls}
        transition={{ duration: 0.75, ease: easeInOut, delay: 0.25 }}
      >
        <motion.div
          className="home-text"
          initial={{ opacity: 1 }}
          animate={textControls}
          transition={{ duration: 0.25, delay: 0.25 }}
        >
          Become the Leader of your College
        </motion.div>
        <motion.button
          initial={{ letterSpacing: "1px" }}
          animate={regControls}
          onClick={handleRegister}
          transition={{ ease: easeInOut, delay: 0.5, duration: 0.75 }}
        >
          REGISTER
        </motion.button>
        <motion.div
          className="register-container"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{duration: .75, ease: easeInOut}}
        >
          <Register />
        </motion.div>
      </motion.div>
      <div className="space-station">
        <img src={SpaceStation} alt="" />
      </div>
      <div className="left-satellite">
        <img src={LeftSatellite} alt="" />
      </div>
      <div className="right-satellite">
        <img src={RightSatellite} alt="" />
      </div>
    </div>
  );
};

export default Home;
