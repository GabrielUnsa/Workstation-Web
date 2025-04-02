import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/login/login';

export default function AppRouter(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
      </Routes>
    </Router>
  );
}
