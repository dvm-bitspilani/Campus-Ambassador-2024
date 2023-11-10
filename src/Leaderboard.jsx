import React from 'react'

import Navbar from './components/LeaderboardNavbar'
import LeaderboardHome from './leaderboardSections/leaderboardHome'
import LeaderboardIncentives from './leaderboardSections/LeaderboardIncentives';

import {motion} from "framer-motion";

import gsapInit from './helpers/gsapTransitionsLeaderboard';

export default function Leaderboard() {

  React.useEffect(() => {
    gsapInit();

    return () => {
      // window.location.reload();
    }
  }, [])

  return (<motion.div
    initial={{opacity: 0, x: 100}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5, ease: "easeInOut", delay: 0}}
  >
    <Navbar />
    <LeaderboardHome />
    <LeaderboardIncentives />
  </motion.div>
  )
}
