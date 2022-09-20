import { useState, useEffect } from "react";

import { useParams } from 'react-router-dom'

export default function TarotPage() {
    let tarotCards = useParams()
   

    const [cards, setCards] = useState(null);
    const getCards = async () => {
        const response = await fetch('https://tarot-api.p.rapidapi.com/all-cards');
        const data = await response.json();
        console.log(tarotCards.id)
        console.log(data.results[tarotCards])
        setCards(data.results[tarotCards.id]);
      };
      useEffect(() => {
        getCards();
        // eslint-disable-next-line
    },[]);
    const loaded = () => {
        console.log(cards);
        return (
          <div>
            <h1>{cards.name} </h1>
            <img src={cards.img} alt={cards.img}/>
            <p>{cards.desc}</p>
            <p>{cards.meaning_up} </p>
            <p> {cards.meaning_rev}</p>
          </div>
        );
      };
    
      // Function for when data doesn't exist
      const loading = () => {
        return (<h1>Loading...</h1>);
      };
    
      // if cards has data, run the loaded function, otherwise, run loading
      return cards ? loaded() : loading();
    };
