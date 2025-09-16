import bedroom from '../../../assets/img/departamentos/Alvarado1/Dormitorio 1.jpg';
import bedroom2 from '../../../assets/img/departamentos/Alvarado1/Dormitorio 2.jpg';
import kitchen from '../../../assets/img/departamentos/Alvarado1/Cocina 1.jpg';
import kitchen2 from '../../../assets/img/departamentos/Alvarado1/Cocina 2.jpg';
import livingroom from '../../../assets/img/departamentos/Alvarado1/Sala.jpg';
import bathroom from '../../../assets/img/departamentos/Alvarado1/Baño.jpg';
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
  {
    label: 'Baño',
    img: bathroom,
  }, 
]

const CarouselA1 = () => (
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
export default CarouselA1;
