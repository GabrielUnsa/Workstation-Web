import { Container, Row, Col } from 'react-bootstrap'
import { BsPeopleFill } from 'react-icons/bs';
import { IoIosBed } from 'react-icons/io';
import { GiBunkBeds, GiHomeGarage } from 'react-icons/gi';
import { MdPool } from 'react-icons/md';
import { BiRestaurant } from 'react-icons/bi';
import './tServices.css';

const ServicesBz  = () => (
<div id="servicios"> 
  <br />
  <br />
  <Container >
    <br />
    <Row className="leftText">
      <Col> <h4> <BsPeopleFill /> 2 Personas </h4> </Col>
      <Col> <h4> <IoIosBed/> 1 Cama Matrimonial o </h4> </Col>
      <Col> <h4> <GiBunkBeds/> 2 Sommier una Plaza </h4> </Col>
    </Row>
    <br />
    <Row className="leftText">
    <Col>
      <h4> <MdPool/> Piscina </h4>
    </Col>
    <Col>
      <h4> <BiRestaurant /> Restaurante </h4>
    </Col>
    <Col>
      <h4> <GiHomeGarage /> Opcional </h4>
    </Col>
   </Row>
  </Container>
  <br />
</div>
);
export default ServicesBz;
