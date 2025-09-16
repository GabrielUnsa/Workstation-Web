import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './../pages/home/home';

export default function AppRouters(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </Router>
  );
}
