import React from "react";

import "./leaderboardHome.css";

export default function LeaderboardHome() {
  const [leaderboard, setLeaderboard] = React.useState([]);

  React.useEffect(() => {
    setLeaderboard([
      { rank: 1, name: "Aishna Shrivastava", points: 100 },
      { rank: 2, name: "Keya Shah", points: 90 },
      { rank: 3, name: "Ritika Singh", points: 80 },
      { rank: 4, name: "Keya Shah", points: 70 },
      { rank: 5, name: "Ritika Singh", points: 60 },
      { rank: 6, name: "Keya Shah", points: 50 },
      { rank: 7, name: "Ritika Singh", points: 40 },
      { rank: 8, name: "Keya Shah", points: 30 },
      { rank: 9, name: "Ritika Singh", points: 20 },
      { rank: 10, name: "Keya Shah", points: 10 },
    ]);
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
        <div className="leaderboard-home-container">{leaderboardList}</div>
      </div>
    </section>
  );
}
