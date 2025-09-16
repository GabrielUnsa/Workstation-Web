import LoginCard from './../../components/cards/login/login';
import './login.css';

export default function LoginPage(){
  return(
    <div className="flex align-content-center justify-content-center flex-wrap loginDiv backgroundImg">
      <LoginCard />
    </div>
  );
}
