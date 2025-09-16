import Sala from '../../../assets/img/departamentos/Gorriti1/Sala 1.jpg';
import Sala_2 from '../../../assets/img/departamentos/Gorriti1/Sala 2.jpg';
import Dormitorio from '../../../assets/img/departamentos/Gorriti1/Dormitorio.jpg';
import Dormitorio_2 from '../../../assets/img/departamentos/Gorriti1/Dormitorio 2.jpg';
import Cocina from '../../../assets/img/departamentos/Gorriti1/Cocina.jpg';
import Cocina_2 from '../../../assets/img/departamentos/Gorriti1/Cocina2.jpg';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Living',
    img: Sala,
  },
  {
    label:'Living',
    img: Sala_2,
  },
  {
    label: 'Cama Matrimonial',
    img: Dormitorio,
  },
  {
    label: 'Cama Matrimonial',
    img: Dormitorio_2,
  },
  {
    label: 'Cocina',
    img: Cocina,
  }, 
  {
    label: 'Cocina',
    img: Cocina_2,
  },
]

const CarouselG1 = () => (
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
export default CarouselG1;
