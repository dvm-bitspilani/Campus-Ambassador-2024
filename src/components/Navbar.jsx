import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-heading">APOGEE &apos;24</div>
        <ul className="nav-tabs">
            <li className='nav-home'>Home</li>
            <li className='nav-perks'>Perks</li>
            <li className='nav-responsibilities'>Responsibilities</li>
            <li className='nav-testimonials'>Testimonials</li>
            <li className='nav-faqs'>FAQs</li>
            <li className='nav-contact'>Contact Us</li>
            <Link to="/leaderboard" className="leaderboard">Leaderboard</Link>
        </ul>
    </div>
  )
}

export default Navbar