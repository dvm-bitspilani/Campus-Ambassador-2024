import React from 'react'
import './CarouselBox.css'

const CarouselBox = ({image, name, desc}) => {
  return (
    <div className="carousel-box">
        <div className="carousel-box-image">
            <img src={image} alt="" />
        </div>
        <div className="carousel-box-content">
            <div className="cb-content-heading">{name}</div>
            <div className="cb-content-desc">{desc}</div>
        </div>
    </div>
  )
}

export default CarouselBox