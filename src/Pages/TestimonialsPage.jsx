import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPage";
import Testimonials from "../components/Testimonials";
import BackToTop from "../components/BackToTop";

function TestimonialsPage() {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
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
      </section>
    </>
  );
}

export default TestimonialsPage;