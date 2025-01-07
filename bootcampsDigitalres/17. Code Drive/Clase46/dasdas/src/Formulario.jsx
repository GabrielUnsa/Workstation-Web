import React from "react";

export default function Formulario(props) {
	const [user, setUser] = useState("");

	const [state, setState] = useState();

	setState("incial");

	const onSubmit = (e) => {
		setState("enviando");
		e.preventDefault();

		// Validar datos

		const formData = new FormData();
		formData.append("username", user);

		fetch("/procesarFormulario", {
			method: "POST",
			headers: {
				"Content-type": "multipart/form-data",
				"X-Access-Token": "jwt token",
			},
			body: formData,
		}).then(() => {
			setState("completado");
		});
	};

	return (
		<div>
			<form action="" method="post" onSubmit={onSubmit}>
				<input type="text" onChange={(e) => setUser(e.target.value)} />
				<button>Enviar</button>
			</form>

			<div>
				<input type="text" onChange={(e) => setUser(e.target.value)} />
				<button onClick={onSubmit}>Enviar</button>
			</div>

			{state == "enviando"
				? "Enviando formulario..."
				: state == "completado"
				? "Completado"
				: "Inicial"}
		</div>
	);
}
