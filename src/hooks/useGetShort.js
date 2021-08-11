import { useState, useEffect } from 'react'

export const useGetShort = (inputValue) => {

  const [data, setData] = useState({});
  const API_URL = `https://api.shrtco.de/v2/shorten?`;
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_URL + `url=${inputValue}`);
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error)
      }
    };
    getData()
  }, [inputValue])

  return { data }

}
