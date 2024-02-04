import AppBar from "../components/AppBar";
import facebook from "../assets/facebook-icon.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { useEffect } from "react";

export default function Contact() {
  useEffect(()=>{
    document.title = "Contact me"
  },[]);
  return (
    <>
      <AppBar />
      <section>
        <h3 style={{ textAlign: "center", marginTop: "100px" }}>
          Follow Me For More!
        </h3>
        <div className="cards-container">
          <Card
            src={facebook}
            title="Facebook"
            link="https://www.facebook.com/mohamed.achraf.961/about/"
          />
          <Card
            src={instagram}
            title="Instagram"
            link="https://www.instagram.com/mohamed_ashraf_02/"
          />
          <Card
            src={linkedin}
            title="LinkedIn"
            link="https://www.linkedin.com/in/mohamed-ashraf-b3a644245/"
          />
        </div>
      </section>
      <section>
        <h3 style={{ textAlign: "center", marginTop: "100px" }}>
          Check out my GitHub
        </h3>
        <div
          className="cards-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Card
            src={github}
            title="Github"
            link="https://github.com/MoAshrafPT"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}
