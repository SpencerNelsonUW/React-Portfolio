import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// const styles = {
//   portfolioCard:{
  
//   }
// };

export default function Portfolio() {
    return (
    <div className='d-flex flex-row'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"/public/Images/Timer1.jpg"} />
      <Card.Body>
        <Card.Title>Homeward-Bound</Card.Title>
        <Card.Text>
          Help lost pets find their way home again.

          https://github.com/bburton5/homeward-bound
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Star-Gazer</Card.Title>
        <Card.Text>
          Find the perfect night to go star gazing.

          https://github.com/night-hike/star-gazer
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Time-Tracker</Card.Title>
        <Card.Text>
          Keep track of your time spent on anything, easily.

          https://github.com/SpencerNelsonUW/Time-Tracker
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    );
  }