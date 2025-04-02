import bedroom8A from '../../../assets/img/departamentos/8A/Dormitorio 1.jpg';
import bedroom8A_2 from '../../../assets/img/departamentos/8A/Dormitorio 2.jpg';
import kitchen8A from '../../../assets/img/departamentos/8A/Cocina Lavador.jpg';
import kitchen8A_2 from '../../../assets/img/departamentos/8A/Cocina.jpg';
import diningroom8A from '../../../assets/img/departamentos/8A/Comedor.jpg';
import livingroom8A from '../../../assets/img/departamentos/8A/Sala de Estar.jpg';
import bathroom8A from '../../../assets/img/departamentos/8A/Baño.jpg';
import { Carousel, Container } from 'react-bootstrap';

const images = [
  {
    label: 'Somier 1 Plaza',
    img:bedroom8A,
  },
  {
    label: 'Cama Matrimonial',
    img: bedroom8A_2,
  },
  {
    label:'Lavador',
    img: kitchen8A,
  },
  {
    label: 'Cocina',
    img: kitchen8A_2,
  },
  {
    label: 'Comedor',
    img: diningroom8A,
  },
  {
    label: 'Living',
    img: livingroom8A,
  },
  {
    label: 'Baño',
    img: bathroom8A,
  }, 
]

const Carousel8A = () => (
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
export default Carousel8A;
