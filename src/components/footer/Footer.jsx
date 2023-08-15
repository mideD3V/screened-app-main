import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import {FaFacebookF} from 'react-icons/fa'


const PageFooter = () => {
  return (
    <div className="footer">
      <div className="quote">
        <em>“Let me live, love, and say it well in good sentences”</em>
        <br />
        <br />
        <p>- Sylvia Plath</p>
      </div>

      <div className="footerlinks">
        <Link className="link ">Privacy Policy</Link>
        <Link className="link ">Write for us</Link>
        <div className="socials">
          Follow us:{" "}
          <span className="social-icons">
            <a href="http://twitter.com/" target="_blank" rel="noopener noreferrer">
              <AiOutlineTwitter />
            </a>
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram />
            </a>
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
          </span>
        </div>
        <Link className="link ">Terms and conditions</Link>
        <Link to='/contact' className="link ">Contact us</Link>
        <Link className="redfont link ">CREDITS</Link>
      </div>
      <div className="copy">Copyright@screened2022</div>
    </div>
  );
};

export default PageFooter;
