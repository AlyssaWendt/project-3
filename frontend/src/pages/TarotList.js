import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export default function TarotList() {
  const [ tarot, setTarot ] = useState('')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '27b2fcd65amshd9e52ce4afe7f43p129f81jsn5b961c0c2dc4',
      'X-RapidAPI-Host': 'tarot-api.p.rapidapi.com'
    }
  };

  async function getTarot() {
    const response = await fetch( 'https://tarot-api.p.rapidapi.com/all-cards',options);
    const data = await response.json();
    console.log(data)
    setTarot(data);
  }
  useEffect(() => {
    getTarot();
    // eslint-disable-next-line
  }, []);

  const loaded = () => {
    return (

<div className="tarot">
{tarot.map((card, id) => {
     const cards = {
         name: card.name,
        img: card.img
     }
    cards.key = cards.name
    //console.log(cards);

    return (
        <Link  to={`${id}`}>
            <p>{cards.name}</p>
        </Link>
       
    );
})} 

</div>
) }
const loading = () => {
    return (<h1>Loading...</h1>);
  };

  // if tarot has data, run the loaded function, otherwise, run loading
return tarot ? loaded() : loading();
}





