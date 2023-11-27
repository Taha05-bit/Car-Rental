import React from "react";
import BackToTop from "../components/BackToTop";
import Hero from "../components/Hero";
import BookCar from "../components/BookCar";
import PlanTrip from "../components/TripPlan";
import PickCar from "../components/PickCar";
import Banner from "../components/Banner";
import ChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/DownloadApp";
import Footer from "../components/Footer";

function Home(){
    return(
        <div>
        <Hero />
        <BookCar />
        <PlanTrip />
        <PickCar />
        <Banner />
        <ChooseUs />
        <Testimonials />
        <Faq />
        <Download />
        <Footer />
        <BackToTop/>
        </div>
    )
}

export default Home;