import Sala from '../../../assets/img/departamentos/Alvarado2/Sala 1.jpg';
import Sala_2 from '../../../assets/img/departamentos/Alvarado2/Sala 2.jpg';
import Dormitorio from '../../../assets/img/departamentos/Alvarado2/Dormitorio 1.jpg';
import Dormitorio_2 from '../../../assets/img/departamentos/Alvarado2/Dormitorio 2.jpg';
import Dormitorio_3 from '../../../assets/img/departamentos/Alvarado2/Dormitorio 3.jpg';
import Cocina from '../../../assets/img/departamentos/Alvarado2/Cocina 1.JPG';
import Cocina_2 from '../../../assets/img/departamentos/Alvarado2/Cocina 2.jpg';
import Cocina_3 from '../../../assets/img/departamentos/Alvarado2/Cocina 3.jpg';
import Baño from '../../../assets/img/departamentos/Alvarado2/Baño 1.jpg';
import Baño_2 from '../../../assets/img/departamentos/Alvarado2/Baño 2.jpg';
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
    label: 'Somier 1 Plaza',
    img: Dormitorio_3,
  },
  {
    label: 'Cocina',
    img: Cocina,
  }, 
  {
    label: 'Cocina',
    img: Cocina_2,
  },
  {
    label: 'Cocina',
    img: Cocina_3,
  },
  {
    label: 'Baño',
    img: Baño,
  },
  {
    label: 'Baño',
    img: Baño_2,
  },
]

const CarouselA2 = () => (
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
export default CarouselA2;
