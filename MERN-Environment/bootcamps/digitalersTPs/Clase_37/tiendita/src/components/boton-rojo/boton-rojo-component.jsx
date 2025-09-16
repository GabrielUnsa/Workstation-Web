import './boton-rojo-styles.css';
import { useState } from 'react';

function BotonRojo(props){
    const [pressed, setPressed] = useState(false);

    const cambiarBackgroundColor = () => {
        setPressed(!pressed);
    };

    let boton = <button onClick={cambiarBackgroundColor}> {props.text} </button>;
    if (pressed) {
        boton = (
            <button style={{ backgroundColor: "green"}} onClick={cambiarBackgroundColor}> 
                {props.text} 
            </button>
        );
    }
    return boton;
};

export default BotonRojo;