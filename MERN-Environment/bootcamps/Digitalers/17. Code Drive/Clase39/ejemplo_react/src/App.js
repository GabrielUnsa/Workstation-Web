/**
 * POR PROPOSITO DE PRUEBA DE REDUX
**/
import Boton from "./prueba/boton/boton.component"
import Texto from "./prueba/texto/texto.component"
import Titulo from "./prueba/titulo/titulo.componente"

import {Provider} from 'react-redux';
import store from './prueba/redux/store';

export default function App()
{
  return ( 
    <Provider store={store}>
      <div>
        <Titulo />
        <Texto />
        <Boton />
      </div>
    </Provider>
  )
}
