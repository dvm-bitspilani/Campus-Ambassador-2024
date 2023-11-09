// import React from "react";
import "./About.css";
import Mars from '../../public/mars.png'
import Rover from "../../public/rover.png"

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-heading">
          <img src="/apogee-logo.svg" alt="logo" />
          <h1>
            WHAT IS <span>APOGEE?</span>
          </h1>
        </div>
        <div className="about-desc">
          APOGEE, the international technical festival of BITS Pilani, is in its
          42nd year now and is bigger than ever. Considered to be one of the
          biggest platforms to discover, nurture and accelerate fresh ideas from
          bright minds all over the country, this festival attracts more than
          10000 students, spanning over a 600 colleges.
        </div>
      </div>
      <div className="about-surface">
        <img id="mars-surface" src={Mars} alt="" />
        <div className="about-rover">
            <img id="mars-rover" src={Rover} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
