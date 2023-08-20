import React from 'react'
import './error.css'

import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div id="errorpage">
      <h1>Ooops!</h1>
      <p>
        The page you are looking for doesn't exist. It may have been moved or
        removed altogether. Please try searching for some other page, or return
        to the website's homepage to find what you're looking for.
      </p>
      <Link className='redfont' to='/' >Take me home</Link>
    </div>
  );
}

export default ErrorPage