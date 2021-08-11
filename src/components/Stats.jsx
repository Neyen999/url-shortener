import React from 'react';
import brandRecognition  from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

export const Stats = () => {
  return (
    <div className="stats">
      <div className="stats--title">
        <h2>Advanced statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard</p>
      </div>
      <div className="stats--details">
        <div className="box1">
          <div className="logo--container">
            <img src={brandRecognition}  />
          </div>
          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.</p>
        </div>
        <div className="box2">
          <div className="logo--container">
            <img src={detailedRecords}  />
          </div>
          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>
        <div className="box3">
          <div className="logo--container">
            <img src={fullyCustomizable}  />
          </div>
          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </div>
  )
}
