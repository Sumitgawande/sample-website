import React from 'react'
import './HeroComponent.css'
/**
* @author
* @function Hero
**/

const Hero = (props) => {
    return (
        <div className="hero-container">
            <div className="img-container">
                <img className="img-main" src={'/travel_agency.jpg'} />
                <img className="img-main-mobile" src={'/responsive-hero.jpg'} />
                <div className="text-overlap">
                <h3 className="heading-text">AWESOME BLOGS</h3>
                <p className="image-text">Get the latest information</p>
                </div>
            </div>
        </div>
    )

}

export default Hero