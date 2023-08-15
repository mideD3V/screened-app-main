import React from 'react'
import { Link } from 'react-router-dom';
import Data from '../../data'

const TagsData = [
  "Kdrama",
  "Romance",
  "Spanish",
  "Horror",
  "Action",
  "Hindi",
  "Anime",
  "Sci-fi",
  "Kids",
  "Drama",
  "Love",
  "Teens",
  "Series",
  "Tech",
  "18+",
];

// const alltags = ['A', 'B', 'C', 'D']


const Tags = TagsData.map((data) => {
    return <Link className='tags link'>{data}</Link>
})

export default Tags