export default function SigninForm(props) {
	return (
		<div>
			<h2>Registrarse</h2>
			<div>
				Nombre:
				<input type="text" />
			</div>
			<div>
				Email:
				<input type="email" />
			</div>
			<div>
				Usuario:
				<input type="text" />
			</div>
			<div>
				Contraseña:
				<input type="password" />
			</div>
			<div>
				<button>Registrarse</button>
			</div>
		</div>
	);
}
