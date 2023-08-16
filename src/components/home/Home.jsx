import React from "react";
import "./home.css";

import { Link } from "react-router-dom";
import { GoDotFill } from "react-icons/go";

import Hero from "../Hero";
import Card from "../card/Card";

//IMPORT IMAGES
//home Images
import Img1 from "../../assets/home/Frame1.png";
import Img2 from "../../assets/home/Frame2.png";

// Trending Images
import T1 from "../../assets/home/t1.png";
import T2 from "../../assets/home/t2.png";
import T3 from "../../assets/home/t3.png";
// Popular Images
import P1 from "../../assets/home/p1.png";
import P2 from "../../assets/home/p2.png";
import P3 from "../../assets/home/p3.png";
// Hot Anim
import H1 from "../../assets/home/h1.png";
import H2 from "../../assets/home/h2.png";
import H3 from "../../assets/home/h3.png";
// Coming Out Soon
import C1 from "../../assets/home/c1.png";
import C2 from "../../assets/home/c2.png";
import C3 from "../../assets/home/c3.png";
// Explore
import Ex1 from "../../assets/home/ex1.png";
import Ex2 from "../../assets/home/ex2.png";
import Ex3 from "../../assets/home/ex3.png";
import Ex4 from "../../assets/home/ex4.png";
import Ex5 from "../../assets/home/ex5.png";

//import tags
import Tags from "./Tags";

const Home = () => {
  return (
    <div id="home">
      <div className="hero-home">
        <Hero
          title="WELCOME TO SCREENED"
          par="WhatsAppWe are a multi-author blog for movie lovers and writers. We are focused
        on providing our users with the best user experience and up-to-date
        contents on the services we provide."
          btn="Read more about us"
          link="/about"
        />
      </div>
      {/* BODY */}
      <div id="home-body">
        <section className="offer">
          <img src={Img1} alt="" />
          <div className="desc">
            <h2>
              New <span className="redfont"> Here? </span>
            </h2>
            <p>
              We are a movie-themed multi-author brand that is focused on giving
              our audience (witers and visitors) the best experience and
              information they need.
            </p>
            <p>
              Our site is up and running 24 hours daily, 7 days weekly, 365 days
              yearly. Simply put, we are a brand that responds to our users
              needs in real-time.
            </p>

            <Link to="/about" className="redfont">
              ...Read more
            </Link>

            <br />
          </div>
        </section>

        <section className="offer">
          <div className="desc">
            <h2>
              What we <span className="redfont"> offer </span>
            </h2>
            <p>
              We provide our visitors with with latest movie collections and
              suggestions. At Screened, you get top movie recommendations and
              also get to share your opinion on a movie with us for feedback.
            </p>
            <p>
              Are you a writer that is skilled in writing movie scripts? We need
              you and have been looking for you! Visit our{" "}
              <Link to="/write" className="redfont">
                {" "}
                Write for Us{" "}
              </Link>
              page to get started.
            </p>
            <br />
          </div>

          <img src={Img2} alt="" />
        </section>
        <section className="cat-ctn">
          <div className="home-cat">
            <h2>
              TRENDING <span className="redfont"> MOVES </span>
            </h2>
            <div className="cards">
              <Card image={T1} title="Half Time" />
              <Card image={T2} title="Scream" />
              <Card image={T3} title="The Pirates" />
            </div>
          </div>
          <div className="home-cat">
            <h2>
              POPULAR <span className="redfont"> TV SCREENS </span>
            </h2>
            <div className="cards">
              <Card image={P1} />
              <Card image={P2} />
              <Card image={P3} />
            </div>
          </div>
          <div className="home-cat">
            <h2>
              HOT <span className="redfont"> ANIME PICK </span>
            </h2>
            <div className="cards">
              <Card image={H1} />
              <Card image={H2} />
              <Card image={H3} />
            </div>
          </div>
          <div className="home-cat">
            <h2>
              COMING <span className="redfont"> OUT SOON </span>
            </h2>
            <div className="cards">
              <Card image={C1} />
              <Card image={C2} />
              <Card image={C3} />
            </div>
          </div>
        </section>



        {/* Explore section  */}
        <section id="explore">
          
          <h2>
            Explore <span className="redfont"> our movies page </span>
          </h2>

          <div className="exp-cat">
            <div className="hollywood">
              <div className="cat-title">
                <span className="catline-ctn">
                  <hr id="cat-line" />
                  <span className="cat-dot">
                    <GoDotFill />
                  </span>
                </span>

                <p className="redfont">Hollywood</p>
              </div>

              <figure>
                <img src={Ex1} alt="" />
                <figcaption>
                  <Link className="link">The Exorcism of God</Link>
                </figcaption>
              </figure>
            </div>

            {/* Bollywood  */}
            <div className="bollywood">
              <div className="cat-title">
                <span className="catline-ctn">
                  <hr id="cat-line" />
                  <span className="cat-dot">
                    <GoDotFill />
                  </span>
                </span>

                <p>Bollywood</p>
              </div>

              <figure>
                <img src={Ex2} alt="" />
                <figcaption>
                  <Link className="link">RRR</Link>
                </figcaption>
              </figure>
            </div>

            {/* Nollywood  */}
            <div className="nollywood">
              <div className="cat-title">
                <span className="catline-ctn">
                  <hr id="cat-line" />
                  <span className="cat-dot">
                    <GoDotFill />
                  </span>
                </span>
                <p>Nollywood</p>
              </div>

              <figure>
                <img src={Ex3} alt="" />
                <figcaption>
                  <Link className="link">King of Boys</Link>
                </figcaption>
              </figure>
            </div>

            {/* kdrama */}
            <div className="kdrama">
              <div className="cat-title">
                <span className="catline-ctn">
                  <hr id="cat-line" />
                  <span className="cat-dot">
                    <GoDotFill />
                  </span>
                </span>
                <p>K-drama</p>
              </div>

              <figure>
                <img src={Ex4} alt="" />
                <figcaption>
                  <Link className="link">Alchemy of Souls</Link>
                </figcaption>
              </figure>
            </div>

            <div className="tvseries">
              <div className="cat-title">
                <span className="catline-ctn">
                  <hr id="cat-line" />
                  <span className="catline-ctn">
                    <br />
                    <hr id="cat-line" />
                    <span className="cat-dot">
                      <hr />
                    </span>
                  </span>
                </span>
                <p>TV-Series</p>
              </div>

              <figure>
                <img src={Ex5} alt="" />
                <figcaption>
                  <Link className="link">Euphoria</Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        {/* Browse by tags */}

        <section id="browse">
          <h2>
            Browse by <span className="redfont"> tags</span>
          </h2>
          <ul>{Tags}</ul>
        </section>
      </div>
    </div>
  );
};

export default Home;
