import { Carousel, Container } from 'react-bootstrap';
import Entrada from '../../../assets/img/departamentos/BRIZO/Entrada.jpg';
import Living from '../../../assets/img/departamentos/BRIZO/Living.jpg';
import Living2 from '../../../assets/img/departamentos/BRIZO/Living 2.jpg';
import Dormitorio from '../../../assets/img/departamentos/BRIZO/Dormitorio.jpg';
import Dormitorio2 from '../../../assets/img/departamentos/BRIZO/Dormitorio 2.jpg';
import Cocina from '../../../assets/img/departamentos/BRIZO/Cocina.jpg';
import Cocina2 from '../../../assets/img/departamentos/BRIZO/Cocina 2.jpg';
import SalaEstar from '../../../assets/img/departamentos/BRIZO/Sala de estar.jpg';
import Pileta from '../../../assets/img/departamentos/BRIZO/Pileta.jpg';
import GYM from '../../../assets/img/departamentos/BRIZO/GYM.jpg';
import Vista from '../../../assets/img/departamentos/BRIZO/Vista Ciudad de Salta.jpg';

const images = [
  {
    label: 'Entrada',
    img: Entrada,
  },
  {
    label: 'Living',
    img: Living,
  },
  {
    label: 'Living',
    img: Living2,
  },
  {
    label: 'Dormitorio',
    img: Dormitorio,
  },
  {
    label: 'Dormitorio',
    img: Dormitorio2,
  },
  {
    label: 'Cocina',
    img: Cocina,
  },
  {
    label: 'Cocina',
    img: Cocina2,
  },
  {
    label: 'Sala de Estar',
    img: SalaEstar,
  },
  {
    label: 'Pileta',
    img: Pileta,
  },
  {
    label: 'GYM',
    img: GYM,
  },
  {
    label: 'Vista de la Ciudad',
    img: Vista,
  },
]

const CarouselBZ = () => (
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
export default CarouselBZ;
