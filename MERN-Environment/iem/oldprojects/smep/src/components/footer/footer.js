import unsa from './../../img/unsa.png';
import iem from './../../img/iem.png';
import { MDBContainer as Container, MDBFooter } from 'mdb-react-ui-kit';
import './footer.css';

const Footer = () => {
  return(
    <footer>
      <Container fluid className="footer-container">
        <img src={unsa} alt="UNSa" className="img-footer" />
         <MDBFooter className="text-center"> 
          Universidad Nacional de Salta
          <br/>
          Instituto de Educacion Media 
          <br />
          "Dr. Arturo Oñativia"
          <br />
           Copyright © 2021
        </MDBFooter>
        <img src={iem} alt="IEM" className="img-footer"/>
      </Container>
    </footer>
  );
}

export default Footer;
