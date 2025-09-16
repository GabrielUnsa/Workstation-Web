import Header from '../components/header/header';
import TitleNPM from '../components/titlenpm/titleNpm';
import TableSearchPersonal from '../components/searchpersonal/searchpersonal';
import './page.css';

export default function NewPedidoMedico(){
  return(
    <div className="pagina">
      <Header />
      <TitleNPM />
      <TableSearchPersonal />
    </div>
  );
}
