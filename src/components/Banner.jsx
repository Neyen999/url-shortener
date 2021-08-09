import React from 'react'
import ilustration from "../images/illustration-working.svg";

export const Banner = () => {
  return (
    <div className="banner">
      <div>
        <div className="banner-title">
        <img src={ilustration} alt="" />
        <h2>More than just shorter links</h2>
        <p>build your brand's recognition and get detailed insigths on how your links are performing</p>
        <button>Get Started</button>
        </div>
        {/* <div>
          image
        </div> */}
      </div>
      <div className="form--container">
        <form>
          <input type="text" />
          <button>short it</button>
        </form>
      </div>
    </div>
  )
}
