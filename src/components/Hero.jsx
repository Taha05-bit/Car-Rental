import React, { useState } from "react";
import { Link } from "react-router-dom";
import bgShape from "../images/hero/78788.jpg";
import HeroCar from "../images/cars/bmw m5.png"

function Hero(){

    const bookBtn = () => {
        document
          .querySelector("#booking-section")
          .scrollIntoView({ behavior: "smooth" });
      };

    return (
        <>
        <section id="home" className="hero-section">
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
                <Link
                  onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride
                </Link>
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
        </>
    )
}
export default Hero;