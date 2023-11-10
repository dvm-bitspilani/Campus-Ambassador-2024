import React from 'react'

import Navbar from './components/LeaderboardNavbar'
import LeaderboardHome from './leaderboardSections/leaderboardHome'
import LeaderboardIncentives from './leaderboardSections/LeaderboardIncentives';

import {motion} from "framer-motion";

export default function Leaderboard() {

  return (<motion.div
    initial={{opacity: 0, x: 100}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: -100}}
    transition={{duration: 0.5, ease: "easeInOut", delay: 0}}
  >
    <Navbar />
    <LeaderboardHome />
    <LeaderboardIncentives />
  </motion.div>
  )
}
