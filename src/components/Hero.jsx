import React from 'react'
import { Link } from 'react-router-dom';

const Hero = ({image, title, par, btn, link}) => {
  return (
    <div className="hero">
      <h1> { title}</h1>
      <p>
        {par}
      </p>

      <Link to={link} className="primary-btn">
        {btn}
      </Link>
    </div>
  );
}

export default Hero