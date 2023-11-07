import React from "react";
import "./Responsibility.css";

const Responsibility = () => {
  return (
    <div className="responsibility">
      <div className="repsonsibility-container">
        <div className="respo-left">
          <div className="perks-heading respo-heading">RESPONSIBILITIES</div>
          <div className="perks-box">
            <div className="perks-box-desc">
              As a campus ambassador,the primary task will be to coordinate with
              APOGEE to strategize campaigns to make the fest bigger and better,
              you will also have certain responsibilities like managing social
              media, publicity and organising workshops.
            </div>
          </div>
        </div>
        <div className="respo-right">
          <div className="respo-right-top">
            <div className="perks-box">
              <div className="perks-box-heading">SOCIAL MEDIA PLATFORMS</div>
              <div className="perks-box-desc">
                The campus ambassador has to maintain a strong social media
                presence on Facebook and Instagram to represent APOGEE and hence
                increase its popularity.
              </div>
            </div>
          </div>
          <div className="respo-right-bottom">
            <div className="perks-box">
              <div className="perks-box-heading">CAMPUS PUBLICITY</div>
              <div className="perks-box-desc">
                Publicity of APOGEE by sending route mails and messages on
                college WhatsApp groups along with visual presentation of the
                fest through posters, fliers etc.
              </div>
            </div>
            <div className="perks-box">
              <div className="perks-box-heading">WORKSHOPS</div>
              <div className="perks-box-desc">
                Organising technical events workshops in their college under the
                guidance of APOGEE, BITS Pilani.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
