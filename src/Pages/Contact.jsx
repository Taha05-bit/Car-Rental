import { IconMail, IconMailOpened, IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPage";
import { IconLocation } from "@tabler/icons-react";
import BackToTop from "../components/BackToTop";

function Contact() {
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                Contact our support agent who will guide you.
              </p>
              <a href="/">
                <IconPhone /> &nbsp; 123-456-7869
              </a>
              <a href="/">
                <IconMail /> &nbsp; RentCar123@carmail.com
              </a>
              <a href="/">
                <IconLocation />
                &nbsp; Dublin Ireland
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Paul Doe"'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

                <button type="submit">
                  <IconMailOpened />
                  &nbsp; Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
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

export default Contact;