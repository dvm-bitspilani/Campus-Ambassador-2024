import { Link } from "react-router-dom";
import "./Navbar.css";

import gsap from "gsap";

const Navbar = () => {
  const handleLeaderboard = () => {
    gsap.to("body", {
      backgroundPositionY: "0%",
      ease: "power2.inOut",
      duration: 2,
    });
  };
  return (
    <>
      <HamburgerMenu />
      <div className="navbar leaderboard-navbar">
        <Link to="/" className="nav-heading">
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
            <div className="leaderboard-ham-button">
              <div className="line line1"></div>
              <div className="line line2"></div>
              <div className="line line3"></div>
            </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

function HamburgerMenu() {
  return (
    <div className="leaderboard-hamburger-menu">
      <ul className="leaderboard-hamburger-menu-list">
        <li className="leaderboard-nav-leaderboard">Leaderboard</li>
        <li className="leaderboard-nav-incentives">Incentives</li>
        <li className="leaderboard-nav-responsibilities">Responsibilities</li>
        <li className="leaderboard-nav-points">Points Scheme</li>
        <Link to="/" className="home-link">
          Home
        </Link>
      </ul>
    </div>
  );
}
