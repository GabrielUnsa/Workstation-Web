import NavbarSistemas from '../../components/navbar/seleccion/headerUser';
import Sistemas from '../../components/cards/seleccionSistemas/sistemas';
import Footer from '../../components/footer/footer';
import { MDBContainer as Container } from 'mdb-react-ui-kit';
import './index.css';

export default function IndexPage(){
  return(
    <>
    <NavbarSistemas />
    <Container>
      <Container className="cardsContainer d-flex align-items-center justify-content-center">
        <Sistemas />
      </Container>
      <Footer />
    </Container>
    </>
  );
}
