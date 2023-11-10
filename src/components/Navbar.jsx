import { Link } from 'react-router-dom'
import gsap from 'gsap'
import './Navbar.css'

const Navbar = () => {
  const handleLeaderboard = () => {
    gsap.to("body", {backgroundPositionY: "0%", duration: 1})
  }
  return (
    <div className="navbar">
        <Link to='/' className="nav-heading">APOGEE &apos;24</Link>
        <ul className="nav-tabs">
            <li className='nav-home'>Home</li>
            <li className='nav-perks'>Perks</li>
            <li className='nav-responsibilities'>Responsibilities</li>
            <li className='nav-testimonials'>Testimonials</li>
            <li className='nav-faqs'>FAQs</li>
            <li className='nav-contact'>Contact Us</li>
            <Link to="/leaderboard" className="leaderboard" onClick={handleLeaderboard}>Leaderboard</Link>
        </ul>
    </div>
  )
}

export default Navbar