import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouters from './routes/AppRoutes';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App" id="home">
      <AppRouters />
      <Footer/>
    </div>
  );
}

export default App;
