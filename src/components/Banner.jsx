import React from 'react'
import ilustration from "../images/illustration-working.svg";

export const Banner = ({ inputInitialValue, setInitialValue, data, setData, loading, setLoading }) => {

  const API_URL = `https://api.shrtco.de/v2/shorten?`;


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await fetch(API_URL + `url=${inputInitialValue}`);
    const apidata = await response.json();
    setData(data.concat(apidata));
    setLoading(false)
    setInitialValue("");
  }



  const handleInput = (e) => {
    const newValue = e.target.value;
    setInitialValue(newValue)
  }

  return (
    <div className="banner">
      <div>
        <div className="banner--title">
          <div className="banner--img__container">
            <img className="banner--img" src={ilustration} alt="" />
          </div>
          <h2>More than just shorter links</h2>
          <p>build your brand's recognition and get detailed insigths on how your links are performing</p>
          <div className="button--container">
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={`form--container ${loading ? "disabled--form" : ""}`}>
        <input disabled={loading ? "disabled" : null} placeholder="Shorten your link here" type="text" onChange={handleInput} value={inputInitialValue} />
        <button disabled={loading ? "disabled" : null}>Shorten it!</button>
      </form>
    </div>
  )
}
