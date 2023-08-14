import React from "react";
import "./card.css";
import ImgSample from '../../assets/home/IMG-20221015-WA0059 1.png'
import { Link } from "react-router-dom";

const Card = ({ image, title }) => {
  return (
    <Link  id="card">
      <img src={image} alt="" />
      <p>{title}</p>
    </Link>
  );
};

Card.defaultProps = {
  image: {ImgSample},
  title: "Movie Title"
}

export default Card;
