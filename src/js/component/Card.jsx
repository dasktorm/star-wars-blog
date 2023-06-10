import React from 'react';
import Button from 'react-bootstrap/Button';
import BSCard from 'react-bootstrap/Card';

const Card = () => {
  return (
<BSCard style={{ width: '18rem' }}>
  <BSCard.Img variant="top" src="holder.js/100px180" />
  <BSCard.Body>
    <BSCard.Title>Card Title</BSCard.Title>
    <BSCard.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </BSCard.Text>
    <Button variant="primary">Go somewhere</Button>
  </BSCard.Body>
</BSCard>
)
}

export default Card;