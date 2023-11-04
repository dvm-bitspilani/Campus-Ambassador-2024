import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-heading">APOGEE '24</div>
        <ul className="nav-tabs">
            <li>Home</li>
            <li>Perks</li>
            <li>Testimonials</li>
            <li>Responsibilities</li>
            <li>FAQs</li>
            <li>Contact Us</li>
            <li className="leaderboard">Leaderboard</li>
        </ul>
    </div>
  )
}

export default Navbar