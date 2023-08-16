import React from "react";
import "./account.css";
import Empty from "../Construction";
import { Link } from "react-router-dom";
import Hero from "../Hero";

const Login = () => {
  return (
    <section id="login">
      <div className="hero-signup">
        <Hero title="LOG IN" />
      </div>
      <form action="" method="get">
        <input type="text" name="email" id="email" placeholder="Email" />

        <input
          type="text"
          name="password"
          id="password"
          placeholder="Password"
        />
        <span>
          <Link to='/reset' className="link">Forgot password?</Link>
        </span>

        <div className="btn-ctn">
          <Link className="primary-btn">Log In</Link>
          <Link to="/signup" className="sec-btn">
            Sign up
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
