import AppBar from "../components/AppBar";
import me from "../assets/me.jpg";
import story from "../assets/story.png";
import Footer from "../components/Footer";
import {aboutMe,skills,hobbies} from "../constants/texts";


const icon = <img src={story} style={{ width: "16px", height: "16px" }} />;


function Home() {
  return (
    <>
      <AppBar />
      <div style={{ display: "block", width: "100%" }}>
        <section
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className="img-wrapper">
            <img
              src={me}
              style={{ width: "200px", height: "200px", borderRadius: "50%" }}
            />
          </div>
          <h3 className="quote">"The journey starts somewhere with a first step"</h3>
        </section>
        <section
          style={{
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         
          <h3>About me</h3>
          <p>
            {aboutMe}
          </p>
          <h3>Skills</h3>
          <div className="skill-container">
            <p>
              <ul className="skills">
                {skills.map((skill,i) => (<li>{icon} {skill}</li>))}
              </ul>
            </p>
          </div>
          <h3>Hobbies</h3>
          <div className="skill-container">
            <p>
              <ul className="hobbies">
                {hobbies.map((hobby,i) => (<li>{icon} {hobby}</li>))}
              </ul>
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
