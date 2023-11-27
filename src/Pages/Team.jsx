import { IconPhone } from "@tabler/icons-react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPage";
import Person1 from "../images/team/person 1.avif";
import Person2 from "../images/team/person2.avif";
import Person3 from "../images/team/person5.avif";
import Person4 from "../images/team/person6.avif";
import Person5 from "../images/team/person3.avif";
import Person6 from "../images/team/person4.avif";
import BackToTop from "../components/BackToTop";

function Team() {
  const teamPpl = [
    { img: Person1, name: "Marlene", job: "Salesman" },
    { img: Person2, name: "Joel Miller", job: "Business Owner" },
    { img: Person3, name: "Dina", job: "Photographer" },
    { img: Person4, name: "Ellie Williams", job: "Car Detailist" },
    { img: Person5, name: "Bill", job: "Mechanic" },
    { img: Person6, name: "Tommy Miller", job: "Manager" },
  ];
  return (
    <>
      <section className="team-page">
        <HeroPages name="Our Team" />
        <div className="cotnainer">
          <div className="team-container">
            {teamPpl.map((ppl, id) => (
              <div key={id} className="team-container__box">
                <div className="team-container__box__img-div">
                  <img src={ppl.img} alt="team_img" />
                </div>
                <div className="team-container__box__descr">
                  <h3>{ppl.name}</h3>
                  <p>{ppl.job}</p>
                </div>
              </div>
            ))}
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

export default Team;