import { Container, Row } from 'react-bootstrap';
import { BsWhatsapp, BsInstagram } from 'react-icons/bs';
import { SiMaildotru } from 'react-icons/si';
import { ImFacebook } from 'react-icons/im';
import './contacts.css';

export default function DataContact(){
  return(
    <Container>
      <h3> Contactanos </h3>
      <br />
      <br />     
      <br /> 
      <Row md="auto" className="justify-content-start">
        <a href="https://api.whatsapp.com/send?phone=3874049071" target="_blank" rel="noopener noreferrer" className="link-dark"> <h3> <BsWhatsapp /> {' '} +54 3874049071 </h3></a>
      </Row>
      <br />   
      <Row md="auto" className="justify-content-start">
        <a href="mailto:tulugarensalta@gmail" className="link-dark" target="_blank" rel="noopener noreferrer"> <h3> <SiMaildotru /> {' '} tulugarensalta@gmail.com </h3> </a>
      </Row>
      <br />
      <Row md="auto" className="justify-content-start">
        <a href="https://www.facebook.com/RamiroGutierrezTLeS" className="link-dark" target="_blank" rel="noopener noreferrer"> <h3> <ImFacebook /> {' '} Tu Lugar en Salta </h3> </a>
      </Row>
      <br />
      <Row md="auto" className="justify-content-start">
<a href="https://www.instagram.com/_tulugarensalta_/" className="link-dark" target="_blank" rel="noopener noreferrer"> <h3> <BsInstagram /> {' '} _tulugarensalta_ </h3> </a>
      </Row>
    </Container>
  );
}
