// import React from "react";
import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [tech, setTech] = useState(false);

  const handleTech = () => {
    setTech(true);
  };
  const handleQueries = () => {
    setTech(false);
  };
  return (
    <section className="contact">
      <div className="contact-heading">
        {tech ? <span>Developers</span> : <span>Contact Us</span>}
      </div>
      <div className="contact-container">
        {tech ? (
          <div className="contact-info">
            <div className="contact-info-name">Raj Clerk</div>
            <div className="contact-info-desc">
              <div className="contact-mail tech-mail">
                <a href="mailto:f20220080@pilani.bits-pilani.ac.in">
                  f20220080@pilani.bits-pilani.ac.in
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="contact-info">
            <div className="contact-info-name">Aishna Shrivastava</div>
            <div className="contact-info-desc">
              <div className="contact-phone">
                <a href="tel:+91 7020787628">+91 7020787628</a>
              </div>
              <div className="contact-mail">
                <a href="mailto:f20220006@pilani.bits-pilani.ac.in">
                  f20220006@pilani.bits-pilani.ac.in
                </a>
              </div>
            </div>
          </div>
        )}
        {tech ? (
          <>
          <div className="contact-info">
            <div className="contact-info-name">Shreyas Gantayet</div>
            <div className="contact-info-desc">
              <div className="contact-mail tech-mail">
                <a href="mailto:f20220622@pilani.bits-pilani.ac.in">
                  f20220598@pilani.bits-pilani.ac.in
                </a>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-info-name">Luv Gupta</div>
            <div className="contact-info-desc">
              <div className="contact-mail tech-mail">
                <a href="mailto:f20220622@pilani.bits-pilani.ac.in">
                  f20220622@pilani.bits-pilani.ac.in
                </a>
              </div>
            </div>
          </div>
          </>
        ) : (
          <div className="contact-info">
            <div className="contact-info-name">Keya Shah</div>
            <div className="contact-info-desc">
              <div className="contact-phone">
                <a href="tel:+91 9167379148">+91 9167379148</a>
              </div>
              <div className="contact-mail">
                <a href="mailto:f20221080@pilani.bits-pilani.ac.in">
                  f20221080 @pilani.bits-pilani.ac.in
                </a>
              </div>
            </div>
          </div>
        )}
        {tech ? (
          <div onClick={handleQueries} className="contact-desc">
            For any queries click here
          </div>
        ) : (
          <div onClick={handleTech} className="contact-desc">
            For any technical issues click here
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
