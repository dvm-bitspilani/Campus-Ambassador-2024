// import { useEffect, useState } from "react";
import "./Home.css";
import SpaceStation from "../../public/SpaceStation.png";
import LeftSatellite from "../../public/LeftSatellite.png";
import RightSatellite from "../../public/RightSatellite.png";
import {
  // easeIn,
  easeInOut,
  // easeOut,
  motion,
  useAnimation,
} from "framer-motion";
import Register from "../components/Register";

import PropTypes from "prop-types";

const Home = ({isFormOpen, setIsFormOpen}) => {
  const regControls = useAnimation();
  const textControls = useAnimation();
  const boxControls = useAnimation();

  // const [isFormOpen, setIsFormOpen] = useState(false);

  const handleRegister = async () => {
    // await textControls.start({
    //   opacity: 0,
    //   display: "none",
    // });
    await Promise.all([ animateBox()]);
    setIsFormOpen(true)
  };
  // const animateButton = async () => {
  //   await regControls.start({
  //     letterSpacing: "10px",
  //   });
  // };
  const animateBox = async () => {
    await boxControls.start({
      // height: "90%",
      // rotate: -90,
      // scale: 1.75,
      // justifyContent: "flex-start",
      // gap: ".25rem",
      opacity: 0
    });
  };

  return (
    <section className="home">
      <div className="home-heading-wrapper">
        <div className="home-logo">
          <img src="/apogee-logo.svg" alt="logo" />
        </div>
        <div className="home-heading">
          <span className="home-heading-text">Campus</span> <br />
          <span className="home-heading-subtext">Ambassador</span>
          </div>
      </div>
      <motion.div
        className="home-register"
        initial={{
          height: "fit-content",
          rotate: 0,
          scale: 1,
          justifyContent: "center",
        }}
        animate={boxControls}
        transition={{ duration: 0.05, ease: easeInOut }}
      >
        <motion.div
          className="home-text"
          initial={{ opacity: 1 }}
          animate={textControls}
          transition={{ duration: 0.05 }}
        >
          Become the Leader of your College
        </motion.div>
        <motion.button
          initial={{ letterSpacing: "1px" }}
          animate={regControls}
          onClick={handleRegister}
          transition={{ ease: easeInOut, duration: 0.05 }}
          className="home-register-button"
        >
          REGISTER
        </motion.button>
      </motion.div>
      {isFormOpen ? (
          <motion.div
            className="register-container"
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: easeInOut }}
          >
            <Register setIsFormOpen={setIsFormOpen} textControls={textControls} boxControls={boxControls} regControls={regControls} />
          </motion.div>
        ) : (
          ""
        )}
      <div className="space-station">
        <img src={SpaceStation} alt="" />
      </div>
      <div className="left-satellite">
        <img src={LeftSatellite} alt="" />
      </div>
      <div className="right-satellite">
        <img src={RightSatellite} alt="" />
      </div>
    </section>
  );
};

export default Home;

Home.propTypes = {
  isFormOpen: PropTypes.bool.isRequired,
  setIsFormOpen: PropTypes.func.isRequired
}