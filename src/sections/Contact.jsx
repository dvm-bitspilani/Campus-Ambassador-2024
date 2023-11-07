  import React from "react";
  import "./Contact.css";

  const Contact = () => {
    return (
      <div className="contact">
        <div className="contact-heading">
          <span>Contact Us</span>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-info-name">Aishna Shrivastava</div>
            <div className="contact-info-desc">
              <div className="contact-phone"><a href="tel:+91 7020787628">+91 7020787628</a></div>
              <div className="contact-mail">
                <a href="mailto:f20220006@pilani.bits-pilani.ac.in">f20220006@pilani.bits-pilani.ac.in</a>
              </div>
            </div>
          </div>
          <div className="contact-info">
            <div className="contact-info-name">Keya Shah</div>
            <div className="contact-info-desc">
              <div className="contact-phone"><a href="tel:+91 9167379148">+91 9167379148</a></div>
              <div className="contact-mail">
                <a href="mailto:f20221080@pilani.bits-pilani.ac.in">f20221080@pilani.bits-pilani.ac.in</a>
              </div>
            </div>
          </div>

          <div className="contact-desc">For any technical issues click here</div>
        </div>
      </div>
    );
  };

  export default Contact;
