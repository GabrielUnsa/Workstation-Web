let promesas = new Promise( ( resolver, rechazar ) =>{
	resolver( 1 );
	rechazar( 2 );
});

//Promesas con Ajax
let promesa = new Promise( ( resolver, rechazar ) =>{
	let xhr = new XMLHttpRequest;
	xhr.open( "get", "info.txt" );
	xhr.addEventListener( "load", () =>{
		if ( xhr.status == 200 ){
			resolver( xhr.response );
		}
	});
	xhr.send();
});

promesa.then( ( valor ) => {
	console.log( "Promesa Resuelta", valor );
});

promesa.catch( ( valor ) =>{
	console.log( "Promesa Inconclusa", valor );
});

//Principio de Encadenamiento
let promesa = new Promise ( ( resolver, rechazar ) => {
	let xhr = new XMLHttpRequest;
	xhr.open( "get", "info.txt" );
	xhr.addEventListener( "load", () =>{
		if ( xhr.status == 200 ){
			resolver( xhr.response );
		}
	});
	xhr.send();
}); 

promesa
	.then( valor => {
		console.log( "Promesa 1 resuelta!", valor );
		return new Promise( ( resolver, rechazar ) => {
			let xhr = new XMLHttpRequest;
			xhr.open( "get", "info.txt");
			xhr.addEventListener( "load", () => {
				if( xhr.status == 200 ){
					resolver( xhr.response + valor );
				}
			});
			xhr.send();
		});
	});
	.then( valor => {
		console.log( "Promesa 2 resuelta", valor );
		console.log( valor );
	});
	.catch( () => {
		console.log("error");
	});
