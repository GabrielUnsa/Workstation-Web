import { Carousel, Container } from 'react-bootstrap';
import Fachada from '../../../assets/img/departamentos/Pueyrredon 7/Fachada.jpg';
import Dormitorio from '../../../assets/img/departamentos/Pueyrredon 7/Dormitorio.jpg';
import Dormitorio2 from '../../../assets/img/departamentos/Pueyrredon 7/Dormitorio2.jpg';
import Dormitorio3 from '../../../assets/img/departamentos/Pueyrredon 7/Dormitorio3.jpg';
import Cocina from '../../../assets/img/departamentos/Pueyrredon 7/Cocina.jpg';
import Bano from '../../../assets/img/departamentos/Pueyrredon 7/Bano.jpg';
import '../carousel.css';

const images = [
  {
    label: 'Fachada',
    img: Fachada
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
    label: 'Dormitorio',
    img: Dormitorio3
  },
  {
    label: 'Cocina',
    img: Cocina
  },
  {
    label: 'Baño',
    img: Bano
  },
]

const CarouselP7 = () => (
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
export default CarouselP7;
