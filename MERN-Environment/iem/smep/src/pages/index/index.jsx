import './index.css';
import SystemCards from './../../components/cards/systems/selectSystem';
import ManubarAll from './../../components/manubar/menubar';
import { Navbar } from './../../components/navbar/navbar';

export default function IndexPage(){
  return(
    <>
      <Navbar />
        <div className="flex align-content-center justify-content-center flex-wrap" >
        <SystemCards />
      </div>
  </>
  );
}
