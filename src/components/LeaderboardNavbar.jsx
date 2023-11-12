import { Link } from "react-router-dom";
import "./Navbar.css";

import gsap from "gsap";
import React from "react";

const Navbar = () => {
  const handleLeaderboard = () => {
    gsap.to("body", {
      backgroundPositionY: "0%",
      ease: "power2.inOut",
      duration: 2,
    });
  };

  const handleHamClick = () => {
    // Button Animation
    document.querySelectorAll(".line").forEach((line) => {
      line.classList.toggle("active");
    });

    // Menu Animation
    document
      .querySelector(".nav-hamburger-menu")
      .classList.toggle("active");
  };

  return (
    <>
      <div className="navbar leaderboard-navbar">
        <HamburgerMenu />
        <Link to="/" className="nav-heading" onClick={handleLeaderboard}>
          APOGEE &apos;24
        </Link>
        <ul className="nav-tabs">
          <li className="leaderboard-nav-leaderboard">Leaderboard</li>
          <li className="leaderboard-nav-incentives">Incentives</li>
          <li className="leaderboard-nav-responsibilities">Responsibilities</li>
          <li className="leaderboard-nav-points">Points Scheme</li>
          <Link to="/" className="home-link" onClick={handleLeaderboard}>
            Home
          </Link>
        </ul>
        <div className="leaderboard-ham-button" onClick={handleHamClick}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

function HamburgerMenu() {
  const handleLeaderboard = () => {
    gsap.to("body", {
      backgroundPositionY: "0%",
      ease: "power2.inOut",
      duration: 2,
    });
  };

  return (
    <div className="nav-hamburger-menu">
      <ul className="nav-hamburger-menu-list">
        <li className="leaderboard-nav-leaderboard">Leaderboard</li>
        <li className="leaderboard-nav-incentives">Incentives</li>
        <li className="leaderboard-nav-responsibilities">Responsibilities</li>
        <li className="leaderboard-nav-points">Points Scheme</li>
        <Link to="/" className="home-link" onClick={handleLeaderboard}>
          Home
        </Link>
      </ul>
    </div>
  );
}
