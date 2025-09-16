import { Carousel } from 'react-bootstrap';
import imgC1 from '../../assets/img/departamentos/Alvarado1/Dormitorio 1.jpg';
import imgC2 from '../../assets/img/departamentos/Alvarado1/Sala.jpg';
import imgC3 from '../../assets/img/departamentos/Alvarado2/Dormitorio 1.jpg';
import imgC4 from '../../assets/img/departamentos/Alvarado2/Cocina 2.jpg';
import imgC5 from '../../assets/img/departamentos/Gorriti1/Dormitorio 2.jpg';
import imgC6 from '../../assets/img/departamentos/Gorriti1/Sala 2.jpg';
import imgC7 from '../../assets/img/departamentos/Gorriti2/Dormitorio.jpg';
import imgC8 from '../../assets/img/departamentos/Gorriti2/Sala.jpg';
import imgC9 from '../../assets/img/departamentos/Gorriti5/Dormitorio.jpg';
import imgC10 from '../../assets/img/departamentos/Gorriti5/Living.jpg';
import imgC11 from '../../assets/img/departamentos/Guemes/Dormitorio.jpg';
import imgC12 from '../../assets/img/departamentos/Guemes/Sala.jpg';
import imgC13 from '../../assets/img/departamentos/Pueyrredon 8/Dormitorio.jpg'
import './carousel.css';

const images = [
  {
    label: 'Alvarado 1',
    img: imgC1,
  },
  {
    label: 'Alvarado 1',
    img: imgC2,
  },
  {
    label: 'Alvarado 2',
    img: imgC3,
  },
  {
    label: 'Alvarado 2',
    img: imgC4,
  },
  {
    label: 'Gorriti 1',
    img: imgC5,
  },
  {
    label: 'Gorriti 1',
    img: imgC6,
  },
  {
    label: 'Gorriti 2',
    img: imgC7,
  },
  {
    label: 'Gorriti 2',
    img: imgC8,
  },
  {
    label: 'Dep. Güemes',
    img: imgC11,
  },
  {
    label: 'Dep. Güemes',
    img: imgC12,
  },
 {
    label: 'Dep. Pueyrredon',
    img: imgC13,
  },

];


const CarouselGallery = () => (
<div>
  <Carousel>
    { images.map((step) => (
    <Carousel.Item key={step.img}>
      <img
        className="img-fluid imagesCarousel"
        src={step.img}
        alt={step.label}
      />
      <Carousel.Caption>
        <h4> {step.label} </h4>
      </Carousel.Caption>
    </Carousel.Item>
    ))}
  </Carousel>
  <br />
</div>
);
export default CarouselGallery;
