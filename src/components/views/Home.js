import React from 'react';
import Image from 'react-bootstrap/Image';

import Avatar from '../images/Avatar.jpg'


const styles = {
  about:{
    marginTop:'25px',
    marginLeft:"10%",
    marginRight:"10%",
    alignItems:'center',
  },
  image:{
    maxHeight:"20%",
    maxWidth:"20%",
    marginTop:'25px'
  },
};

export default function Home() {
  return (
    <div style={styles.about} className="d-flex flex-column">
      <h1
        style={{
          fontFamily:'monospace',
        }}
      >About Me</h1>

        <div style={styles.image}>
          <Image className="img-fluid rounded-circle" src={Avatar}>

          </Image>
        </div>

      <p
        style={{
          marginTop:"25px",
        }}
      >My name is Spencer Nelson and I live in Seattle, Washington. In my spare time I enjoy coding, playing video-games, drawing, writing, and taking my dog to the park. I spend most evenings
      playing computer games and hosting small gaming events and servers. 
      </p>

      <p>
        If you'd like to learn more about my career and work life, please check out the Resume page.
      </p>
    </div>
  );
}
