import iem from './../../../imgs/iem.png';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import InputLogin from './../../forms/login/login';
import './../cards.css';

const LoginCard = () => {

    const header = (
        <img alt="IEM" src={iem} className="imgLogin"/>
    );

    return (
        <div>
            <Card title="Mesa de Entrada" className="flex justify-content-center align-items-center flex-wrap cardSize text-center" header={header}>
              <div className="flex flex-column">
                <InputLogin />
                <Button label="Ingresar" className="p-button-rounded p p-button-success" />
              </div>
            </Card>
        </div>
    )
}
export default LoginCard;
