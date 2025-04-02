import './footer.css';
import { Card } from 'react-bootstrap';

const Footer = () => {
  return(
    <footer>
      <Card.Footer className="text-center"> 
        Instituto de Educacion Media 
        <br />
        "Dr. Arturo Oñativia"
        <br />
         Copyright © 2021
      </Card.Footer>
    </footer>
  );
}

export default Footer;
