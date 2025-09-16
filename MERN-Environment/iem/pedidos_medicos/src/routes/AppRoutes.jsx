import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from '../pages/index';
import NewPedidoMedico from '../pages/nuevo_pedido_medico';
import FormularioNewPM from '../pages/formulario_nuevo_pedido';

export default function AppRouter(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <IndexPage /> } />
        <Route path="/nuevo_pedido_medico" element={ <NewPedidoMedico /> }/>
        <Route path="/formulario_nuevo_pedido" element={ <FormularioNewPM /> } />
      </Routes>
    </Router>
  );
}
