import "./LeaderboardIncentives.css";

export default function LeaderboardPoints() {
  return (
    <section className="leaderboard-incentives-page">
      <div className="leaderboard-incentives-heading">
        <span>Points Scheme</span>
      </div>
      <div className="leaderboard-incentives-container not-incentives">
        <ol>
          <li>
            Registration = <span>100</span> points per participant per event
          </li>
          <li>
            Participation = <span>400</span> points per participant per event
          </li>
          <li>Social Media Posts Publicity</li>
          <div className="social-container">
            <img src="/icons/fb.png" alt="fb" />
            <div className="social-points-container">
              <p className="social-points-p">
                Sharing Posts = <span>50</span> points per post
              </p>
              <p className="social-points-p">
                Sharing Posts = <span>20</span> points per share
              </p>
              <p className="social-points-p">
                Sharing Stories = <span>40</span> points per story shared
              </p>
            </div>
          </div>
          <div className="social-container">
            <img src="/icons/instagram.png" alt="instagram" />
            <div className="social-points-container">
              <p className="social-points-p">
                Sharing Stories = <span>50</span> points per story
              </p>
              <p className="social-points-p">
                Story Views = <span>5</span> points per 20 views
              </p>
            </div>
          </div>
          <div className="social-container">
            <img src="/icons/whatsapp.jpg" alt="fb" />
            <div className="social-points-container">
              <p className="social-points-p">
                Sharing Story = <span>50</span> points per story
              </p>
              <p className="social-points-p">
                Sharing Posts in Groups = <span>20</span> points per group(more than 75
                participants)
              </p>
            </div>
          </div>
          <li>One Routemail = <span>500</span> points</li>
          <li>Workshop/Minifest = <span>2024</span> points (minimum 40 participants)</li>
          <li>Informative Sessions = <span>200</span> per session (minimum 40 participants)</li>
          <li>CA Referrals = <span>800</span> per person referred to the CA programme(Must be from different college than yours)</li>
        </ol>
      </div>
    </section>
  );
}
