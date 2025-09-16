import Sala from '../../../assets/img/departamentos/Gorriti2/Sala.jpg';
import Dormitorio from '../../../assets/img/departamentos/Gorriti2/Dormitorio.jpg';
import Dormitorio_2 from '../../../assets/img/departamentos/Gorriti2/Dormitorio2.jpg';
import Balcon from '../../../assets/img/departamentos/Gorriti2/Balcon.jpg';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Living',
    img:Sala,
  },
  {
    label: 'Dormitorio',
    img: Dormitorio,
  },
  {
    label:'Dormitorio',
    img: Dormitorio_2,
  },
  {
    label: 'Balcon',
    img: Balcon,
  },
]

const CarouselG2 = () => (
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
export default CarouselG2;
