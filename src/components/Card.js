import me from "../assets/me.jpg";
import story from "../assets/story.png";

const icon = <img src={story} style={{ width: "16px", height: "16px" }} />;

function Card(props) {
  return (
    <a href={props.link} className="social-link" >
      <div
        className="card"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img className="socialicon" style={{ width: "100px", height: "100px" }} src={props.src} />
        <p>{props.title}</p>
      </div>
    </a>
  );
}

export default Card;
