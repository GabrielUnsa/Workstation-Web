import './footer.css';
import { Card } from 'react-bootstrap';

const Footer = () => {
  return(
    <footer>
      <Card.Footer className="text-center">
        <br />
        <p className="h5">
          Copyright © 2022
        </p>
        <br />
      </Card.Footer>
    </footer>
  );
}

export default Footer;

