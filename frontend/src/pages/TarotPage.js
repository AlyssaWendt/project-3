import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
//import Tarot from '../models/Tarot'

export default function TarotPage() {
    let tarotCards = useParams()
   
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '27b2fcd65amshd9e52ce4afe7f43p129f81jsn5b961c0c2dc4',
        'X-RapidAPI-Host': 'tarot-api.p.rapidapi.com'
      }
    };
    const [cards, setCards] = useState(null);
    const getCards = async () => {
        const response = await fetch('https://tarot-api.p.rapidapi.com/all-cards', options);
        const data = await response.json();
        //console.log(tarotCards)
        //console.log(data[tarotCards])
        setCards(data[tarotCards.name]);
      };
      useEffect(() => {
        getCards();
        // eslint-disable-next-line
    },[]);
    const loaded = () => {
        //console.log(cards);
        return (
          <div className="show">
            <h1>{cards.name} </h1>
            <p><strong>Upright Meaning:</strong> {cards.meaning_up} </p>
            <p><strong>Reversed Meaning:</strong> {cards.meaning_rev}</p>
            <h3>Card Description</h3>
            <p>{cards.desc}</p>
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
    
