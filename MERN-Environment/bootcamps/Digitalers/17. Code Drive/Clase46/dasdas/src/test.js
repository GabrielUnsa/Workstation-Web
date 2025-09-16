// Entidades
function Link({ code, message, expires_at, created_at }) {
	this.code = code;
	this.message = message;
	this.expires_at = expires_at;
	this.created_at = created_at;
}

// Casos de Uso
// POST /m
function generarNuevoLink({ message, death_time }) {

    let code = Math.random().toString(36).substring(2, 10);
    code = code.charAt(0).toUpperCase() + code.slice(1)

	return new Link({ code, message, expires_at: '', created_at: '' });
}

// GET /m/:code
function obtenerLink(code)
{

}

console.log(
    generarNuevoLink({ message: 'Hola mundo', death_time: '1h' })
);