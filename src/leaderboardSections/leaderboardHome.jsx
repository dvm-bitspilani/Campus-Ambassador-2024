import React from "react";

import "./leaderboardHome.css";

import { motion } from "framer-motion";

export default function LeaderboardHome() {
  const [leaderboard, setLeaderboard] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://bits-apogee.org/2024/main/collegeambassador/leaderboard",
      );
      const data = await response.json();
      setLeaderboard(data.data);
    }
    fetchData();
  }, []);

  const leaderboardList = leaderboard.map((item, index) => {
    return (
      <div className="leaderboard-home-item" key={index}>
        <div className="leaderboard-home-item-rank">{item.rank}</div>
        <div className="leaderboard-home-item-name">{item.name}</div>
        <div className="leaderboard-home-item-points">{item.points} Points</div>
      </div>
    );
  });

  return (
    <section className="leaderboard-home">
      <div className="leaderboard-home-heading">
        <span>Leaderboard</span>
      </div>
      <div className="leaderboard-home-wrapper">
        {leaderboardList.length && (
          <motion.div
            className="leaderboard-home-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {leaderboardList}
          </motion.div>
        )}
      </div>
    </section>
  );
}
