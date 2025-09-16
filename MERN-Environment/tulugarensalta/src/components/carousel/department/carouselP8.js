import { Carousel, Container } from 'react-bootstrap';
import Entrada from '../../../assets/img/departamentos/Pueyrredon 8/Entrada.jpg';
import Sala from '../../../assets/img/departamentos/Pueyrredon 8/Living.jpg';
import Dormitorio from '../../../assets/img/departamentos/Pueyrredon 8/Dormitorio.jpg';
import Cocina from '../../../assets/img/departamentos/Pueyrredon 8/Cocina.jpg';
import Cocina2 from '../../../assets/img/departamentos/Pueyrredon 8/Cocina2.jpg';
import Baño from '../../../assets/img/departamentos/Pueyrredon 8/Bano.jpg';
import Balcon from '../../../assets/img/departamentos/Pueyrredon 8/Balcon.jpg';
import '../carousel.css';

const images = [
  {
    label: 'Entrada',
    img: Entrada
  },
  {
    label: 'Living',
    img: Sala
  },
  {
    label: 'Dormitorio',
    img: Dormitorio
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
    label: 'Baño',
    img: Baño
  },
  {
    label: 'Balcon',
    img: Balcon
  },
]

const CarouselP8 = () => (
<Container> 
  <Carousel>
    { images.map((step) => (
    <Carousel.Item key={step.img}>
      <img
        className="img-fluid imgCoursel d-block"
        src={step.img}
        alt="First slide"
        width='auto'
        height='70hv'
      />
      <Carousel.Caption>
        <h2>{ step.label }</h2>
      </Carousel.Caption>
    </Carousel.Item>
    ))}
  </Carousel>
</Container>
  );
export default CarouselP8;
