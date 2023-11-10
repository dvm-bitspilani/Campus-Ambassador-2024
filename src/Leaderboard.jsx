import React from 'react'

import Navbar from './components/LeaderboardNavbar'
import LeaderboardHome from './leaderboardSections/leaderboardHome'

import {motion} from "framer-motion";

export default function Leaderboard() {

  React.useEffect(() => {
    console.log(document.querySelector(".leaderboard-home-container"))
  },[])

  return (<motion.div
    initial={{opacity: 0, x: 100}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: -100}}
    transition={{duration: 0.5, ease: "easeInOut", delay: 0}}
  >
    <Navbar />
    <LeaderboardHome />
  </motion.div>
  )
}
