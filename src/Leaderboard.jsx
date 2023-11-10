import React from 'react'

import Navbar from './components/LeaderboardNavbar'
import LeaderboardHome from './leaderboardSections/leaderboardHome'

export default function Leaderboard() {

  React.useEffect(() => {
    console.log(document.querySelector(".leaderboard-home-container"))
  },[])

  return (<>
    <Navbar />
    <LeaderboardHome />
  </>
  )
}
