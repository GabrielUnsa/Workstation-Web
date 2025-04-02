import { Container, Row, Col } from 'react-bootstrap';
import { GiHomeGarage } from 'react-icons/gi';
import { BsPeopleFill } from 'react-icons/bs';
import { IoIosBed } from 'react-icons/io';
import { MdBalcony, MdMicrowave, MdPlace } from 'react-icons/md';
import './tServices.css';

const ServicesRv  = () => (
<div id="servicios"> 
  <br />
  <br />
  <Container >
    <br />
    <Row className="leftText">
      <Col> <h4> <BsPeopleFill /> 2 Personas </h4> </Col>
      <Col> <h4> <IoIosBed /> 1 Sommier Matrimonial </h4> </Col>
      <Col> <h4> <MdBalcony/> Balcon </h4> </Col>
    </Row>
    <br />
    <Row className="leftText">
    <Col>
      <h4> <GiHomeGarage /> Opcional </h4>
    </Col>
   <Col>
      <h4> <MdPlace /> Zona Centrica </h4>
    </Col>
    <Col>
      <h4> <MdMicrowave /> Cocina & Horno a Gas </h4>
    </Col>
   </Row>
  </Container>
  <br />
</div>
);
export default ServicesRv;
