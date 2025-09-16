import Header from '../../components/header/header';
import CarouselGallery from '../../components/carousel/carousel';
import CardsDepartament from '../../components/department/department';
import ServiceGrid from '../../components/services/serviceGrid';
import Contacts from '../../components/contacts/contacts';
import Maps from '../../components/maps/maps';

export default function Home(){
  return(
    <div>
      <Header />      
      <br />
      <br />
      <br />
      <CarouselGallery />
      <CardsDepartament />
      <ServiceGrid />
      <Maps />
      <Contacts />
    </div>
  );
}
