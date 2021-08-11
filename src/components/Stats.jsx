import React from 'react';
import { StatBox } from './StatBox';
import { Loader } from './Loader';
import { ShortLink } from './ShorLink';
import brandRecognition  from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

export const Stats = ({ loading, data }) => {
  return (
    <div className="stats">
      <div className="stats--title">
      {
          loading && (
          <>
          <h2>Preparando su enlace...</h2>
          <Loader />
          </>
          )
        }
        {
          data.length > 0 ? <h2>Your Short Link</h2> : null
        }
        {
          data.length > 0 ? data.map((key) => (
            <ShortLink key={key.result.code} linkData={key}/>
          )) : null
        }
        <h2>Advanced statistics</h2>
        <p className="advanced--description">Track how your links are performing across the web with our advanced statistics dashboard</p>
      </div>
      <div className="stats--details">
        <StatBox 
        brand={brandRecognition} 
        title="Brand Recognition" 
        description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content." />
        <StatBox 
        brand={detailedRecords} 
        title="Detailed Records" 
        description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." />
        <StatBox 
        brand={fullyCustomizable} 
        title="Fully Customizable" 
        description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement." />
      </div>
    </div>
  )
}
