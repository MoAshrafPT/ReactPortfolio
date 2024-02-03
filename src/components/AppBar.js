import { Link } from "react-router-dom";
function AppBar() {
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="title-container">
            <Link to="/">
              <h2 className="title hover-underline-animation">Mo Ashraf</h2>{" "}
            </Link>
          </div>
          <div className="nav-actions">
            <div className="nav-action">
              <Link to="/">
                <h2 className="hover-underline-animation">About me</h2>
              </Link>
            </div>
            <div className="nav-action">
              <Link to="/posts">
                <h2 className="hover-underline-animation"> Posts</h2>
              </Link>
            </div>
            <div className="nav-action">
              <Link to="/contact">
                <h2 className="hover-underline-animation" >Contact</h2>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default AppBar;
