import React from "react";
import "./about.css";


import Hero from "../Hero";
import Img1 from "../../assets/home/desc1.png";
import Img2 from "../../assets/home/desc2.png";

import abt1 from '../../assets/home/abt1.png'
import abt2 from '../../assets/home/abt2.png'
import abt3 from '../../assets/home/abt3.png'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about">
      <div className="hero-about">
        <Hero title="ABOUT US" />
      </div>

      <div className="about-desc">
        <div className="descr">
          <div className="descr-txt">
            <h2>
              What <span className="redfont"> we do </span>
            </h2>
            <p>
              We value thought-provoking, informative reviews that credit the
              technicality and themes of a piece as much as the actual content
              on-screen. We lean heavily toward in-depth recaps that detail the
              majority of plot points that occur, mostly for series we believe
              may be renewed or green-lit for another season. We write full
              season reviews for almost every show we’ve covered on a weekly
              basis as a spoiler-free accompanying piece, acting as a more
              constructive, thoughtful and analytical review alongside our
              episodic snapshots.
            </p>
          </div>

          <div className="descr-img">
            <img src={Img1} alt="" />
          </div>
        </div>

        <div className="descr">
          <div className="descr-img">
            <img src={Img2} alt="" />
          </div>
          <div className="descr-txt">
            <h2>
              We are your <span className="redfont"> best bet </span>
            </h2>
            <p>
              Screened is the premiere online destination for movie enthusiasts,
              providing the latest news and information on casting and
              development, release dates, interviews and all movies rated gist.
              Screened keeps users connected to all their favorites, past,
              present and future movies/tv series. Our sole aim is to become one
              of the best review websites on the internet where you discover,
              watch and discuss the movies you love.
            </p>
          </div>
        </div>
      </div>

      <div className="abt-cat">
        <div className="abt-card">
          <span style={{ backgroundColor: "rgba(37, 61, 91, 1)" }}>
            <Link className="link" to='/movies' style={{color:'#fff'}}>Movies</Link>
            <br />
            We offer you updated information on your favorite movie categories
            ranging from the best of hollywood, bolllywood, nollywood, kdramas.
            and more
          </span>

          <img src={abt1} alt="" />
        </div>

        <div className="abt-card">
          <img src={abt2} alt="" />
          <span style={{ backgroundColor: "rgba(56, 0, 54, 1)" }}>
            <Link className="link" to='/movies' style={{color:'#fff'}}>TV Series</Link>
            <br />
            Your best bet on where to find the latest TV Series? We are yes and
            truly are! Explore our site to enjoy the whole deal we have packed
            in for just you!
          </span>
        </div>

        <div className="abt-card">
          <span style={{ backgroundColor: "rgba(76, 102, 99, 1)" }}>
            <Link className="link" to='/movies' style={{color:'#fff'}}>Movies</Link>
            <br />
            Anime lover? Welcome home! We have the best and most fun to watch
            anime collections. We exist that your world of fantast may abound!
          </span>{" "}
          <img src={abt3} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
