import React from 'react'

import Navbar from './components/LeaderboardNavbar'
import LeaderboardHome from './leaderboardSections/leaderboardHome'
import LeaderboardIncentives from './leaderboardSections/LeaderboardIncentives';
import LeaderboardResponsibilities from './leaderboardSections/LeaderboardResponsibilities';
import LeaderboardPoints from './leaderboardSections/LeaderboardPoints';

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
    <LeaderboardResponsibilities />
    <LeaderboardPoints />
  </motion.div>
  )
}
