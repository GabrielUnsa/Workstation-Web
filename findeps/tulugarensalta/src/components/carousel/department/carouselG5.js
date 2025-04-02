import { Carousel, Container } from 'react-bootstrap';
import Living from '../../../assets/img/departamentos/Gorriti5/Living.jpg';
import Living2 from '../../../assets/img/departamentos/Gorriti5/Living2.jpg';
import Living3 from '../../../assets/img/departamentos/Gorriti5/Living3.jpg';
import Cocina from '../../../assets/img/departamentos/Gorriti5/Cocina.jpg';
import Cocina2 from '../../../assets/img/departamentos/Gorriti5/Cocina2.jpg';
import Dormitorio from '../../../assets/img/departamentos/Gorriti5/Dormitorio.jpg';
import Dormitorio2 from '../../../assets/img/departamentos/Gorriti5/Dormitorio2.jpg';
import Baño from '../../../assets/img/departamentos/Gorriti5/Baño.jpg';

const images = [
  {
    label: 'Living',
    img: Living
  },
  {
    label: 'Living',
    img: Living2
  },
  {
    label: 'Living',
    img: Living3 
  },
  {
    label: 'Cocina',
    img: Cocina
  },
  {
    label: 'Cocina',
    img: Cocina2
  },
  {
    label: 'Dormitorio',
    img: Dormitorio
  },
  {
    label: 'Dormitorio',
    img: Dormitorio2
  },
  {
    label: 'Baño',
    img: Baño
  },
]

const CarouselG5 = () => (
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
export default CarouselG5;
