import React from "react";
import bgShape from "../images/hero/78788.jpg";
import Navbar from "./Navbar";
import HeroCar from "../images/cars/PngItem_1214642.png"

function Hero(){
    return (
        <section id="home" className="hero-section">
        <Navbar/>
            <div className="container">
                <img className="bg-shape" src={bgShape} />
                   <div className="hero-content">
                      <div className="hero-content__text">
                          
                <h4>Planning a trip?</h4>
                <h1>
                Save <span>$Money</span> with our car rental
                </h1>
                <p>
                  Rent the car of your dreams. Unbeatable prices, unlimited miles,
                  flexible pick-up options and much more.
                </p>
            <div className="hero-content__text__btns">
                <button className="hero-content__text__btns__book-ride">Book Ride </button>
                <button className="hero-content__text__btns__learn-more">Learn More </button>
            </div>          

            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
                
            </div>                  
            </div>
            </div>
        </section>
    )
}
export default Hero;