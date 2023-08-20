import React from 'react'

const Writer = ({image, name, title, star}) => {
  return (
    <div className="writer">
      <img src={image} alt="" />
          <span className="writer-name">{ name}</span>
          <span className="writer-title">{title}</span>
          <span className="writer-star">
    <img src={star} alt="" /> 
          </span>
    </div>
  );
}

export default Writer