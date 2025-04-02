import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import './buttonImg.css'
import mapa from '../../assets/img/mapa.png';

class Maps extends Component {
  render() {
    return (
      <div id="ubicacion">
        <Container>
          <br />
          <br />
          <br />
          <h1 className="display-4"> Ubicacion </h1>
          <br />
          <Button className="buttonImage" variant="light" href="https://www.google.com.ar/maps/place/Tu+Lugar+en+Salta/@-24.7903307,-65.4219527,17z/data=!3m1!4b1!4m5!3m4!1s0x941bc3b1cd30405b:0xf62df3e4c48273e9!8m2!3d-24.7903402!4d-65.4196769" target="_blank" rel="noopener noreferrer">
            <img
              className="img-fluid"
              src={mapa}
              alt="Mapa"
            />
          </Button>
       </Container>
      </div>
   );
  }
}

export default Maps;
