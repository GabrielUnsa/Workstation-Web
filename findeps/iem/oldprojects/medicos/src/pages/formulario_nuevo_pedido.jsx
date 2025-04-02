import Header from '../components/header/header';
import TitleNPM from '../components/titlenpm/titleNpm';
import NewPM from '../components/newpm/newpm';
import './page.css';

export default function FormularioNewPM(){
  return(
    <div className="pagina">
      <Header />
      <TitleNPM />
      <NewPM />
    </div>
  );
}
