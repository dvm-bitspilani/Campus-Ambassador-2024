import React from "react";
import './MobileTestimonials.css'

const MobileTestimonials = ({ image, name, desc }) => {
  return (
    <div className="mobile-carousel-box">
      <div className="mobile-carousel-box-image">
        <img src={image} alt="" />
        <span className="mcb-content-heading">{name}</span>
      </div>
      <div className="mobile-carousel-box-content">
        <div className="mcb-content-desc">{desc}</div>
      </div>
    </div>
  );
};

export default MobileTestimonials;
