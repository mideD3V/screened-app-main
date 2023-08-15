import * as React from 'react'
import Logo from '../../assets/logo.jpg'
import './header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div id="header">
      <Link to="/" id="logo">
        <img src={Logo} alt="" />
      </Link>
      <nav>
        <ul>
          <Link to="/" className="navlink">
            Home
          </Link>
          <Link to="/about" className="navlink">
            About
          </Link>
          <Link to="/movies" className="navlink">
            Movies
          </Link>
          <Link to="/series" className="navlink">
            TV Series
          </Link>
        </ul>{" "}
      </nav>
      <div className='nav2'>
        <div id="action">
          <Link to="/write" className="navlink">
            Write for us
          </Link>
          <Link to="/contact" className="navlink">
            Contact us
          </Link>
        </div>
<span></span>
        <div id="account">
          <Link to="/signup" className="navlink">
            Sign up
          </Link>
          <Link to="/login" className="navlink">
            Log in
          </Link>
        </div>
      </div>
      {/* <div id="theme-selector">
        <span>theme:</span>
      </div> */}
    </div>
  );
}

export default Header