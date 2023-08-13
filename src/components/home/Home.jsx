import React from 'react'
import './home.css'
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <div id="home">
      <div className="hero">
        <h1> WELCOME TO SCREENED</h1>
        <p>
          We are a multi-author blog for movie lovers and writers. We are
          focused on providing our users with the best user experience and
          up-to-date contents on the services we provide.
        </p>

        <Link to="/about" className="primary-btn">
          Read more about us
        </Link>
      </div>
    </div>
  );
}

export default Home