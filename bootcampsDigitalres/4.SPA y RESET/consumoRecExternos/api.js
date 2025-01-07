let xhr = new XMLHttpRequest;
let url = "https://glosbe.com/gapi/translate?from=es&dest=en&phrase=hola&format=json";

xhr.open( "get", "https://jsonplaceholder.typicode.com/users");
//Glosbe Translate API
xhr.open( "get", "https://glosbe.com/gapi/translate?from=es&dest=en&phrase=hola&format=json&callback=unCallback");

xhr.addEventListener( "load", () => {
	if ( xhr.status == 200 ) {
		let respuesta = JSON.parse( xhr.response );
		console.log( xhr.response );
	}
});

xhr.addEventListener( "error", () =>{
	let script = document.createElement( "script" );
	script.src = `${url}&callback=algunCallback`;
	document.body.appendChild(script);
});
xhr.send();

function algunCallback(resultado){
	console.log(resultado);
}
