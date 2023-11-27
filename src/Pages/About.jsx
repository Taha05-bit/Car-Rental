import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPage";
import PlanTrip from "../components/TripPlan";
import AboutMain from "../images/about/buying car.jpg";
import Box1 from "../images/about/icons8-car-48.png";
import Box2 from "../images/about/car-rental_5910056.png";
import Box3 from "../images/about/clipart652890.png";
import BackToTop from "../components/BackToTop";

function About() {
  return (
    <>
      <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>Start your journey in just a few minutes.</h2>
              <p>
                Our Company makes sure you your time isn't wasted, so you can start you journey in a few minutes.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                  <img src={Box1} alt="car-icon" />
                  <span>
                    <h4>27</h4>
                    <p>Car Types</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box2} alt="car-icon" />
                  <span>
                    <h4>60</h4>
                    <p>Rental Outlets</p>
                  </span>
                </div>
                <div className="about-main__text__icons__box">
                  <img src={Box3} alt="car-icon" className="last-fk" />
                  <span>
                    <h4>80</h4>
                    <p>Repair Shops</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <PlanTrip />
        </div>
      </section>
      <div className="book-banner">
        <div className="book-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Wanna book a car? Get in touch with us</h2>
            <span>
              <IconPhone width={40} height={40} />
              <h3>123-456-7869</h3>
            </span>
          </div>
        </div>
      </div>
      <BackToTop />
      <Footer />
    </>
  );
}

export default About;