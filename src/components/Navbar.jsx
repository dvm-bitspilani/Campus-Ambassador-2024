import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-heading">APOGEE '24</div>
        <ul className="nav-tabs">
            <li className='nav-home'>Home</li>
            <li className='nav-perks'>Perks</li>
            <li className='nav-testimonials'>Testimonials</li>
            <li className='nav-responsibilities'>Responsibilities</li>
            <li className='nav-faqs'>FAQs</li>
            <li className='nav-contact'>Contact Us</li>
            <li className="leaderboard">Leaderboard</li>
        </ul>
    </div>
  )
}

export default Navbar