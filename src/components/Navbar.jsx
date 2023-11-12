import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Navbar.css";
import Apogee from "../../public/apogee-heading.png";

const Navbar = () => {
  const handleLeaderboard = () => {
    gsap.to("body", { backgroundPositionY: "0%", duration: 1 });
  };
  const handleHamClick = () => {
    // Button Animation
    document.querySelectorAll(".line").forEach((line) => {
      line.classList.toggle("active");
    });

    // Menu Animation
    document.querySelector(".nav-hamburger-menu").classList.toggle("active");
  };
  return (
    <div className="navbar">
      <HamburgerMenu />
      <Link to="/" className="nav-heading">
        <span> APOGEE &apos;24</span>
        <img src={Apogee} alt="APOGEE '24" />
      </Link>
      <ul className="nav-tabs">
        <li className="nav-home">Home</li>
        <li className="nav-perks">Perks</li>
        <li className="nav-responsibilities">Responsibilities</li>
        <li className="nav-testimonials">Testimonials</li>
        <li className="nav-faqs">FAQs</li>
        <li className="nav-contact">Contact Us</li>
        <Link
          to="/leaderboard"
          className="leaderboard"
          onClick={handleLeaderboard}
        >
          Leaderboard
        </Link>
      </ul>
      <div className="leaderboard-ham-button" onClick={handleHamClick}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </div>
    </div>
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
        <li className="nav-home">Home</li>
        <li className="nav-perks">Perks</li>
        <li className="nav-responsibilities">Responsibilities</li>
        <li className="nav-testimonials">Testimonials</li>
        <li className="nav-faqs">FAQs</li>
        <li className="nav-contact">Contact Us</li>
        <Link
          to="/leaderboard"
          className="leaderboard"
          onClick={handleLeaderboard}
        >
          Leaderboard
        </Link>
      </ul>
    </div>
  );
}
