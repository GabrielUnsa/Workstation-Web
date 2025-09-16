import { useState } from "react";
import { connect } from 'react-redux';

function LoginForm(props) {
    const [usuario, setUsuario] = useState('');
    const [pass, setPass] = useState('');

    const enviar = () => {

    }

	return (
		<div>
			<h2>Iniciar Sesión</h2>
			<div>
				Usuario:
				<input type="text" value={usuario} onInput={(e) => setUsuario(e.target.value)}  />
			</div>
			<div>
				Contraseña:
				<input type="password" value={pass} onInput={(e) => setPass(e.target.value)} />
			</div>
			<div>
				<button onClick={enviar}>Iniciar sesion</button>
			</div>
		</div>
	);
}

const mapDispatch = (dispatch) => ({
    
});

export default connect(null, mapDispatch)(LoginForm);