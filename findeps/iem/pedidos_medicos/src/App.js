import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routes/AppRoutes';
import Footer from './components/footer/footer';

function App() {
  return (
    <div>
      <AppRouter />
      <Footer />
    </div>
     );
}

export default App;

