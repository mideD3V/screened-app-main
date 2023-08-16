import React from 'react'
import "./account.css";
import Hero from '../Hero';
import { Link } from 'react-router-dom';
import {GiCheckMark} from 'react-icons/gi'
const Reset = () => {
  return (
    <section id="reset">
      <div className="hero-reset">
        <Hero title="RESET" />
      </div>

      <form action="" method="get">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your registered Email"
        />

        <div className="btn-ctn">
          <Link className="primary-btn">Enter</Link>
        </div>

        <span>
          Didn't receive the code?
          <Link to="/reset" className="link redfont">
            Resend in 30s
          </Link>
        </span>
      </form>

      <div className="reset-modal">
        <GiCheckMark />
        <p>
          A reset link has been sent to your
          <a
            href="http:/gmail.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="redfont link modal-link"
          >
            email.
          </a>{" "} 
          Kindly check your inbox to reset your password
        </p>
      </div>
    </section>
  );
}

export default Reset