import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <Link to="/" className="nav-heading">APOGEE &apos;24</Link>
        <ul className="nav-tabs">
            <li className='leaderboard-nav-leaderboard'>Leaderboard</li>
            <li className='leaderboard-nav-incentives'>Incentives</li>
            <li className='leaderboard-nav-responsibilities'>Responsibilities</li>
            <li className='leaderboard-nav-points'>Points Scheme</li>
            <Link to="/" className="home-link">Home</Link>
        </ul>
    </div>
  )
}

export default Navbar