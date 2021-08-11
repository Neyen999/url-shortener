import React, { useState, useEffect } from 'react'
import ilustration from "../images/illustration-working.svg";
// import { useGetShort } from '../hooks/useGetShort';

export const Banner = ({ inputInitialValue, setInitialValue }) => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = `https://api.shrtco.de/v2/shorten?`;

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await fetch(API_URL + `url=${inputInitialValue}`);
  //       const apidata = await response.json();
  //       setData(apidata);
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   };
  //   getData()
  // }, [inputInitialValue])


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
        {/* <div>
          image
        </div> */}
      </div>
      <div className="form--container">
        <form onSubmit={handleSubmit}>
          <input placeholder="Shorten your link here" type="text" onChange={handleInput} value={inputInitialValue} />
          <button>Shorten it!</button>
        </form>
      </div>
      <div className="shorted--links">
        {
          loading && (
          <>
          <h2>Preparando su enlace...</h2>
          <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          </>
          )
        }
        {/* {
          data.ok === true ? (
            <>
              <h2>Your Short Link</h2>
              <p>{data.result.short_link}</p>
            </>
          ) : null
        } */}
        {
          data.length > 0 ? <h2>Your Short Link</h2> : null
        }
        {
          data.length > 0 ? data.map((key) => (
            <div key={key.result.code}>
              <p>{key.result.short_link}</p>
            </div>
          )) : null
        }
      </div>
    </div>
  )
}
