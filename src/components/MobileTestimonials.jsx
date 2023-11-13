import React from "react";
import "./MobileTestimonials.css";

const MobileTestimonials = ({ image, name, desc, type }) => {
  return (
    <div className="mobile-carousel-box">
      <div className="mobile-carousel-box-image">
        {image ? <img src={image} alt="" /> : null}
        <span className={type === "test" ? "mcb-content-heading" : "mcb-rewards"}>{name}</span>
      </div>
      <div className="mobile-carousel-box-content">
        <div className="mcb-content-desc">{desc}</div>
      </div>
    </div>
  );
};

export default MobileTestimonials;
