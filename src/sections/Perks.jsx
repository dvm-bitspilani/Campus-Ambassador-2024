// import React from "react";
import "./Perks.css";

const Perks = () => {
  return (
    <section className="perks">
      <div className="perks-container">
        <div className="perks-left">
          <div className="perks-left-top">
            <div className="perks-box">
              <div className="perks-box-heading">
                Cash Prizes and Passes Worth 2 Lakhs to be Won
              </div>
              <div className="perks-box-desc">
                Top Campus ambassadors will get assured working opportunities
                with Du Express, Dare2Compete and also internship opportunities
                through the Summer in Startup programme of BITS Pilani.
              </div>
            </div>
          </div>
          <div className="perks-left-bottom">
            <div className="perks-left-bottom-1">
              <div className="perks-box">
                <div className="perks-box-heading">Goodies and Merchandise</div>
                <div className="perks-box-desc">
                  APOGEE and sponsor merchandise will be given to ALL
                  ambassadors.
                </div>
              </div>
            </div>
            <div className="perks-left-bottom-2">
              <div className="perks-box">
                <div className="perks-box-heading">Free Coupons</div>
                <div className="perks-box-desc">
                  GeeksForGeeks Coupons worth rupees 300 for completion of first
                  2 tasks will be provided.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="perks-right">
          <div className="perks-heading">REWARDS AND INCENTIVES</div>
          <div className="perks-right-bottom">
            <div className="perks-box">
              <div className="perks-box-heading">LORs and Certificates</div>
              <div className="perks-box-desc">
                CA will get a certificate from BITS Pilani appreciating their
                work and the top best performing ambassadors will get a letter
                of recommendation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
