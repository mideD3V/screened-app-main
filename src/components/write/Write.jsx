import React from "react";
import "./write.css";
import Empty from "../Construction";
import Hero from "../Hero";
import { Link } from "react-router-dom";
import Writer from "./Writer";

//writers image
import Writer1 from "../../assets/write/wr1.png";
import Writer2 from "../../assets/write/wr2.png";
import Writer3 from "../../assets/write/wr3.png";
import Writer4 from "../../assets/write/wr4.png";
import Writer5 from "../../assets/write/wr5.png";
import Writer6 from "../../assets/write/wr6.png";

import star5 from "../../assets/write/starf.png";
import star4 from "../../assets/write/starnf.png";


const Write = () => {
  return (
    <section id="write">
      <div className="hero-write">
        <Hero title="WRITE FOR US" />
      </div>

      <div className="write-ctn">
        <h2>
          Are you a writer? <span className="redfont">We need you!</span>
        </h2>
        <p>
          <b> Interested in being a writer for MovieWeb? </b>
          <br />
          We are always looking for strong passionate writers who are motivated
          to develop and write engaging content.
          <br />
          <br />
          <b>What We Are Looking For </b>
          <br />
          We are looking for writers who can produce in-depth premium content
          with expert knowledge in one or more of Screened featured categories.
          <br />
          <br />
          <b> Contributor Program Facts </b>
          <br />
          Two very important facts about our contributor program:
          <ul>
            <li>Will I get credit as the author? YES!</li>
            <li> Will I get paid? YES! </li>
          </ul>
          <br />
          <b>Apply Today! </b>
          <br />
          If you think you have what it takes and you are ready to write
          in-depth premium content, apply today to become a contributor.{" "}
          <Link to="/signup">CLICK HERE</Link>
          <br />
          <br />
          <span className="redfont"> Note:</span> We do not accept any guest
          posts at the moment.
        </p>

        <div className="top-writers">
          <h2>
            Meet our <span className="redfont"> top writers</span>
          </h2>
          <div className="writers">
            <Writer
              image={Writer1}
              name="Stephany Karl"
              title="Script Writer"
              star={star5}
            />
            <Writer
              image={Writer2}
              name="Jeremy  Smith "
              title="Script Writer"
              star={star5}
            />
            <Writer
              image={Writer3}
              name="Emily Brown "
              title=" Editor"
              star={star4}
            />
            <Writer
              image={Writer4}
              name="Stephany Karl"
              title="Script Writer"
              star={star4}
            />
            <Writer
              image={Writer5}
              name="Jeremy  Smith "
              title="Script Writer"
              star={star5}
            />
            <Writer
              image={Writer6}
              name="Emily Brown "
              title=" Editor"
              star={star4}
            />
          </div>
          <p className="join-writers">
            Want to join our team of writers?{" "}
            <Link
              className="redfont"
              to="/signup"
            >
              {" "}
              Start Here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Write;
