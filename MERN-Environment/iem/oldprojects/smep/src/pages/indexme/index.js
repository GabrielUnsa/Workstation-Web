import NavbarMe from './../../components/navbar/sMesa/headerMesa';
import TitleMe from './../../components/titles/mesa/index/titles';
import TableMe from './../../components/tables/ultimosMesa/tableIndex';
import Pagination from './../../components/paginations/tableMesa/pagination';
import Footer from './../../components/footer/footer';
import { MDBContainer } from 'mdb-react-ui-kit';
import './../index/index.css';

export default function IndexPageME(){
  return(
    <>
      <NavbarMe />
      <br />
      <br />
      <br />
      <MDBContainer>
        <TitleMe />
        <br />
        <TableMe />
        <br />
        <Pagination />
      </MDBContainer>
      <br />
      <Footer />
   </>
  );
}
