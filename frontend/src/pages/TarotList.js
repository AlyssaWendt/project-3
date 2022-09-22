import React, { useState, useEffect } from 'react';
import Images from "../models/Tarot.json"
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

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
   /// const response = await fetch( 'https://tarot-api.p.rapidapi.com/all-cards',options);
    //const data = await response.json();
    //console.log(data)
    setTarot([]);
  }
  useEffect(() => {
    getTarot();
    // eslint-disable-next-line
  }, []);

  const loaded = () => {
    return (

<div className="tarot">
{tarot.map((card, id) => {
    const image = Images.find(i =>{
        return i.name === card.name
        if (true){
          return i.image
        }
      })
    console.log(image)
     const cards = {
         name: card.name,
        img: 'asdf'
     }
    cards.key = cards.name.replace(/\s+/g, '');
    //console.log(cards);


    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cards.img} />
        <Card.Body>
          <Card.Title>{cards.name}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Link to={`${id }`}>
          <Button variant="primary">Full Meaning</Button>
          </Link>
        </Card.Body>
      </Card> 
     
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





