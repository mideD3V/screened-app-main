import React from "react";
import "./account.css";
import Empty from "../Construction";
import Hero from "../Hero";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section id="signup">
      <div className="hero-signup">
        <Hero title="SIGN UP" />
      </div>{" "}
      {/* so so so much<Empty /> */}
      <form action="" method="get">
        {/* <h2>Sign Up</h2> */}
        <input type="text" name="fname" id="fname" placeholder="Firstname" />

        <input type="text" name="lname" id="lname" placeholder="Lastname" />

        <input type="text" name="email" id="email" placeholder="Email" />

        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
        />

        <input
          type="text"
          name="password"
          id="password"
          placeholder="Re-enter password"
        />

        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />

        <label htmlFor="agree" className="agree">
          <input type="checkbox" name="agree" id="agree" /> I agree to the{" "}
          <Link to='privacy' className="redfont link">Privacy Policy</Link> and{" "}
          <Link to='terms' className="redfont link"> Terms of Service</Link>
        </label>
        <div className="btn-ctn">
          <Link className="primary-btn">Sign up</Link>
          <Link to="/login" className="sec-btn">
            Log in
          </Link>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
