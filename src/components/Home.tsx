import "./Home.scss";
import "./home-dark-link.scss";
import thebucksLogo from "../assets/images/0bda7c26-c65a-48bf-b6c0-316887a25a8c.jpeg";
import Members from "./Members";
import Contact from "./Contact";
import Shows from "./Shows";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1 className="mainHdr">The Bucks - Band</h1>
        <h2 className="shFont">You Know, Good Old Rocking Music!</h2>
        <div className="logo-container">
          <img className="logo" src={thebucksLogo} />
        </div>

        <div>
          <br />
          <br />
          <h2>Let's Light Up the Night! - Check out our Promo Clip</h2>
          <br />
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mL7u1dGVx-w?si=_s5aFPdgqZme_TnP"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div>
          <div className="linkHeading">
            See and Listen to The Bucks Sample Clip on YouTube
          </div>
          <a
            target="_blank"
            className="linkBoost"
            href="https://www.youtube.com/embed/mL7u1dGVx-w?si=_s5aFPdgqZme_TnP"
          >
            The Bucks Sample Clip on YouTube (in new window / full-screen)
          </a>
        </div>
        <div>
          <div>
            <div className="linkHeading">
              Follow the band on Facebook and Social Media (link - below)
            </div>
            <div className="linkHeading">
              Where we post the Next Shows, see who is coming, and have Live
              Clips!
            </div>
            <a
              target="_blank"
              className="linkBoost linkUnderline"
              href="https://www.facebook.com/TheBucksBand"
            >
              Link to Follow The Bucks on Facebook (in new window / full-screen)
            </a>
          </div>
          <div></div>
          <Members />
        </div>
        <div>
          <Contact />
        </div>
        <div>
          <Shows />
        </div>
      </div>
    </>
  );
};

export default Home;
