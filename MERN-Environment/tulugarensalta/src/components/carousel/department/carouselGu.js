import { Carousel, Container } from 'react-bootstrap';
import Entrada from '../../../assets/img/departamentos/Guemes/Entrada.jpg';
import Sala from '../../../assets/img/departamentos/Guemes/Sala.jpg';
import Dormitorio from '../../../assets/img/departamentos/Guemes/Dormitorio.jpg';
import Dormitorio2 from '../../../assets/img/departamentos/Guemes/Dormitorio2.jpg';
import Baño from '../../../assets/img/departamentos/Guemes/Baño.jpg';
import Baño2 from '../../../assets/img/departamentos/Guemes/Baño2.jpg';
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
    label: 'Dormitorio',
    img: Dormitorio2
  },
  {
    label: 'Baño',
    img: Baño
  },
  {
    label: 'Baño',
    img: Baño2
  },
]

const CarouselGu = () => (
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
export default CarouselGu;
