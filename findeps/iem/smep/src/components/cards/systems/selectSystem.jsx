import { Card } from 'primereact/card';
import data from './../../../datas/systems.json';
import './../cards.css';

const SystemCards = () =>{
  return (
    <div className="grid">
      { data.map( (step) => (
        <div className="col-fixed">
          <Card title={step.title} className="flex justify-content-center align-items-center flex-wrap cardSize text-center" header=
            <a href={step.hrefto}>
              <img alt={step.imgalt} src={step.imgpath} className="sizeImg"/>
            </a> 
          >
         </Card>
       </div>
      ) ) }
    </div>
 );
}

export default SystemCards;
