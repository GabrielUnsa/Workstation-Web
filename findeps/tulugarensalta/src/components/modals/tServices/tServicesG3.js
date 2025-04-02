import { Container, Row, Col } from 'react-bootstrap'
import { BsPeopleFill } from 'react-icons/bs';
import { IoIosBed } from 'react-icons/io';
import { GiBunkBeds, GiHomeGarage, GiMountains } from 'react-icons/gi';
import { MdOutdoorGrill } from 'react-icons/md';
import './tServices.css';

const ServicesG3  = () => (
<div id="servicios"> 
  <br />
  <br />
  <Container >
    <br />
    <Row className="leftText">
      <Col> <h4> <BsPeopleFill /> 2 - 4 Personas </h4> </Col>
      <Col> <h4> <IoIosBed/> 1 Cama Matrimonial </h4> </Col>
      <Col> <h4> <GiBunkBeds/> 2 Sommier una Plaza </h4> </Col>
    </Row>
    <br />
    <Row className="leftText">
    <Col>
      <h4> <MdOutdoorGrill/> Quincho</h4>
    </Col>
    <Col>
      <h4> <GiMountains /> Vista a las montañas </h4>
    </Col>
    <Col>
      <h4> <GiHomeGarage /> Opcional </h4>
    </Col>
   </Row>
  </Container>
  <br />
</div>
);
export default ServicesG3;
