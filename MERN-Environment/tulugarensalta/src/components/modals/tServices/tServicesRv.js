import { Container, Row, Col } from 'react-bootstrap';
import { BsPeopleFill } from 'react-icons/bs';
import { IoTvSharp } from 'react-icons/io5';
import { IoIosBed } from 'react-icons/io';
import { MdBalcony, MdMicrowave, MdPlace } from 'react-icons/md';
import './tServices.css';

const ServicesP  = () => (
<div id="servicios"> 
  <br />
  <br />
  <Container >
    <br />
    <Row className="leftText">
      <Col> <h4> <BsPeopleFill /> 2 - 4 Personas </h4> </Col>
      <Col> <h4> <IoIosBed /> 1 Sommier Matrimonial </h4> </Col>
      <Col> <h4> <MdBalcony/> Balcon </h4> </Col>
    </Row>
    <br />
    <Row className="leftText">
    <Col>
      <h4> <IoTvSharp /> NETFLIX </h4>
    </Col>
    <Col>
      <h4> <MdPlace /> Zona Balcarce</h4>
    </Col>
    <Col>
      <h4> <MdMicrowave /> Cocina con horno </h4>
    </Col>
  </Row>
  </Container>
  <br />
</div>
);
export default ServicesP;
