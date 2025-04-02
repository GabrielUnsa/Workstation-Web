import Header from '../components/header/header';
import TitleIndex from '../components/tituloIndex/titleIndex'
import TableIndex from '../components/tablaDocentesIndex/tableIndex';
import './page.css';

export default function IndexPage(){
  return(
    <div className="pagina">
      <Header />
      <TitleIndex />
      <TableIndex />
    </div>
  );
}
