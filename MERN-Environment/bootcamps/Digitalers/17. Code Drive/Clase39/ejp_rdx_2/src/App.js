import Texto from "./components/texto/texto.component";
import Boton from "./components/boton/boton.component";

import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Contador</h1>
        <Texto />
        <Boton />
      </div>
    </Provider>
  );
}

export default App;
