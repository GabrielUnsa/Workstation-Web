import Balcon from '../../../assets/img/departamentos/Gorriti3/Balcon.jpg';
import Cocina from '../../../assets/img/departamentos/Gorriti3/Cocina.jpg';
import Dormitorio from '../../../assets/img/departamentos/Gorriti3/Dormitorio1.jpg';
import Living from '../../../assets/img/departamentos/Gorriti3/Linving.jpg';
import Living_2 from '../../../assets/img/departamentos/Gorriti3/Living 2.jpg';
import Living_3 from '../../../assets/img/departamentos/Gorriti3/Living 3.jpg';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Balcon',
    img: Balcon,
  },
  {
    label: 'Cocina',
    img: Cocina,
  },
  {
    label: 'Dormitorio',
    img: Dormitorio,
  },
  {
    label: 'Living',
    img: Living,
  },
  {
    label: 'Living',
    img: Living_2,
  },
  {
    label: 'Living',
    img: Living_3,
  },
  ]

const CarouselG3 = () => (
<Container> 
  <Carousel>
    { images.map((step) => (
    <Carousel.Item key={step.img}>
      <img
        className="img-fluid"
        src={step.img}
        alt="First slide"
        width='100%'
        height='auto'
      />
      <Carousel.Caption>
        <h2>{ step.label }</h2>
      </Carousel.Caption>
    </Carousel.Item>
    ))}
  </Carousel>
</Container>
  );
export default CarouselG3;
