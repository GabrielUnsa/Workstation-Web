import unsa from './../../img/unsa.png';
import iem from './../../img/iem.png';
import { Container, Card } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
  return(
    <footer>
      <Container fluid className="footer-container">
        <img src={unsa} alt="UNSa" className="img-footer" />
         <Card.Footer className="text-center"> 
          Universidad Nacional de Salta
          <br/>
          Instituto de Educacion Media 
          <br />
          "Dr. Arturo Oñativia"
          <br />
           Copyright © 2021
        </Card.Footer>
        <img src={iem} alt="IEM" className="img-footer"/>
      </Container>
    </footer>
  );
}

export default Footer;
