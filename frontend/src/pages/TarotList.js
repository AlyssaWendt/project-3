import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function TarotList() {
  const [ tarot, setTarot ] = useState([])

  
  async function getTarot() {
    const response = await fetch('https://tarot-api.p.rapidapi.com/all-cards');
    const data = await response.json();
    console.log(data)
    setTarot(data.results);
  }
  useEffect(() => {
    // eslint-disable-next-line
    getTarot();
  }, []);
  const loaded = () => {

    return (

<div className="tarot">
{tarot.map((card, idx) => {
     const cards = {
         name: card.name,
        img: card.img
     }
    cards.key = idx
    console.log(cards);

    return (
        <Link  to={`${idx}`}>
            <img src={cards.img} alt={cards.img}/>
            <p>{cards.name}</p>
        </Link>
    );
})} 

</div>
) }
const loading = () => {
    return (<h1>Loading...</h1>);
  };

  // if starships has data, run the loaded function, otherwise, run loading
return tarot ? loaded() : loading();
}





