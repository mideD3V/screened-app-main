import React from 'react'
import './searchbar.css'
import { BiSolidMoviePlay, BiSolidDownArrow, BiSearch } from "react-icons/bi";

const Searchbar = () => {
  return (
    <div id="search">
      <div className='searchbox'>
        <div className="category">
          <BiSolidMoviePlay />
          <p>Movies</p>
          <BiSolidDownArrow />
        </div>
        <span id='search-divider'> </span>
        <input
          type="search"
          name="searchbox"
          id="search-input"
          placeholder="Search by categories"
        />
        <BiSearch id="search-icon" />
      </div>
    </div>
  );
}

export default Searchbar