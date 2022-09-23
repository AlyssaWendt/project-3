import React, { useState, useEffect } from 'react';
import Images from "../models/Tarot"
import Card from 'react-bootstrap/Card';
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function TarotList() {
  const [ tarot, setTarot ] = useState('')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '341200c68bmshf3028e7a16cc7e3p145209jsn6e7b33fd36f5',
      'X-RapidAPI-Host': "tarot-api.p.rapidapi.com" 
    }
  };

  async function getTarot() {
    const response = await fetch( 'https://tarot-api.p.rapidapi.com/all-cards',options);
    const data = await response.json();
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
  const image = Images[card.name]?.image|| "https://picsum.photos/300/300"
     const cards = {
         name: card.name,
        img: image
     }
    cards.key = cards.name.replace(/\s+/g, '');

    return (
      <div className='grid-wrapper'>
        <Card style={{ width: '18rem' }} className="card">
        <Card.Img variant="top" src={cards.img} className="image" />
        <Card.Body>
          <Card.Title>{cards.name}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Link to={`${id }`}>
          <Button variant="primary">Full Meaning</Button>
          </Link>
        </Card.Body>
      </Card> 
     </div>
    );

})} 

</div>
) }
const loading = () => {
    return (<h1>Loading...</h1>);
  };

  
return tarot ? loaded() : loading();
}





