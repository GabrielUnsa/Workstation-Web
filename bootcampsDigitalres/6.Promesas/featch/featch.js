//Fetch
let texto = featch( "info.txt" );

texto
	.then( valor => {
		//valor -> Reponse{}
		return valor.text(); //Promise{} 
	});
	.then( valor => {
		console.log( valor ); //String...
	});

//Fetch 
let url = `https://jsonplacerholder.typicode.com`;

/*
 * .then( valor => { return valor.json() );
 * Es lo mismo que
 * .then( valor => valor.json() );
*/

let primer_pedido = fetch( `${url}/users` );
primer_pedido
	.then( valor => valor.json() );
	.then( valor => {
		let usuario_id = valor[4].id;
		return fetch( `${url}/post?userId=${usuario_id}` );
	});
	.then( valor => valor.json() );
	.then( valor => console.log(valor); );
	.catch( err =>{ console.log(err); });
