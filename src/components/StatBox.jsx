import React from 'react';

export const StatBox = ({ brand, title, description }) => {
  return (
    <div className={`box box-${title}`}>
      <div className="logo--container">
        <img src={brand}  alt={title}/>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
