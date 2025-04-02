import bedroom from '../../../assets/img/departamentos/Rivadavia/Dormitorio1.jpg';
import bedroom2 from '../../../assets/img/departamentos/Rivadavia/Dormitorio2.jpg';
import kitchen from '../../../assets/img/departamentos/Rivadavia/Cocina1.jpg';
import kitchen2 from '../../../assets/img/departamentos/Rivadavia/Cocina2.jpg';
import livingroom from '../../../assets/img/departamentos/Rivadavia/Living.jpg';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Dormitorio Cama Matrimonial',
    img:bedroom,
  },
  {
    label: 'Dormitorio Sommier 1 Plaza',
    img: bedroom2,
  },
  {
    label:'Cocina',
    img: kitchen,
  },
  {
    label: 'Cocina',
    img: kitchen2,
  },
  {
    label: 'Sala Comedor',
    img: livingroom,
  },
]

const CarouselRv = () => (
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
export default CarouselRv;
