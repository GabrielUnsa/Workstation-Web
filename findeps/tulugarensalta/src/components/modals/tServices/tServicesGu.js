import { Container, Row, Col } from 'react-bootstrap'
import { BsPeopleFill } from 'react-icons/bs';
import { IoTvSharp } from 'react-icons/io5';
import { IoIosBed } from 'react-icons/io';
import { GiHomeGarage, GiSofa, GiMountains } from 'react-icons/gi';
import './tServices.css';

const ServicesGu  = () => (
<div id="servicios"> 
  <br />
  <br />
  <Container >
    <br />
    <Row className="leftText">
      <Col> <h4> <BsPeopleFill /> 2 - 3 Personas </h4> </Col>
      <Col> <h4> <GiSofa /> 1 Sofá-cama </h4> </Col>
      <Col> <h4> <IoIosBed /> 1 Sommier Matrimonial </h4> </Col>
    </Row>
    <br />
    <Row className="leftText">
    <Col>
      <h4> <IoTvSharp /> NETFLIX </h4>
    </Col>
    <Col>
      <h4> <GiMountains /> Vista a las montañas</h4>
    </Col>
    <Col>
      <h4> <GiHomeGarage /> Opcional </h4>
    </Col>
   </Row>
  </Container>
  <br />
</div>
);
export default ServicesGu;
