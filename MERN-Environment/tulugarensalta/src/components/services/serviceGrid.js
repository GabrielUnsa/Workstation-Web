import { Container, Row, Col } from 'react-bootstrap'
import { HiWifi } from 'react-icons/hi';
import { IoSnowOutline } from 'react-icons/io5';
import { GiHomeGarage, GiElevator } from 'react-icons/gi';
import { MdOutlineKitchen, MdMicrowave, MdLocationCity, MdFlatware } from 'react-icons/md';
import { FaBath } from 'react-icons/fa';
import { FiTv } from 'react-icons/fi';
import { ReactComponent as ImageHeirDryer } from './hair-dryer.svg';
import ImageBlanket from './blanket.png';
import './services.css';

const ServiceGrid  = () => (
<div id="servicios"> 
  <br />
  <br />
  <h1 className="display-4"> Servicios </h1>
  <Container >
    <br />
    <Row className="leftText">
      <Col> <h2> <HiWifi /> Wifi </h2> </Col>
      <Col> <h2> <IoSnowOutline /> Aire Acondicionado </h2> </Col>
      <Col> <h2> <GiHomeGarage /> *Cochera (opcional) </h2> </Col>
    </Row>
    <br />
    <Row className="leftText">
      <Col> <h2> <MdOutlineKitchen /> Cocina </h2>  </Col>
      <Col> <h2> <MdMicrowave /> Horno Electrico  </h2> </Col>
      <Col> <h2> <MdFlatware /> Vajilla Completa  </h2> </Col>
    </Row>
    <br />
    <Row className="leftText">
      <Col> <h2> <FaBath /> Baño Privado </h2>  </Col>
      <Col> <h2> <ImageHeirDryer className="sizeIcon"/> Secador </h2> </Col>
      <Col> <h2> <img src={ImageBlanket} alt="" className="sizeIcon" /> Ropa Blanca y Sabanas </h2> </Col>
    </Row>
    <br />
    <Row className="leftText">
      <Col> <h2> <FiTv /> TV </h2> </Col>
      <Col> <h2> <GiElevator /> Portero 24 Hs </h2> </Col>
      <Col> <h2> <MdLocationCity /> Ubicacion Centrica </h2> </Col>
    </Row>
  </Container>
  <br />
</div>
);
export default ServiceGrid;
