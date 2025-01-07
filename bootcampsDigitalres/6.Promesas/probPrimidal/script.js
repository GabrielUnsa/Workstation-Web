let url = "https://jsonplaceholder.typicode.com";
let btn = document.querySelector("button");


/* 
Intento traer como cascada de un usuario dado los posteos y comentarios que realizo. 
*/
btn.addEventListener( "click", () => {
	ajax({
		metodo: "GET",
		url: `${url}/users`,
		load: firstCallback
	});
});

//Refactorizacion de callback
let firstCallback = respuesta =>{ 
			let usuario = respuesta[4];
			let id_usuario = usuario.id;
			ajax({
				metodo: "GET",
				url: `${url}/post?userId=${id_usuario}`,
				load: secundCallback	
			});
		}  

let secundCallback =  posteos => {
					posteos.forEach( post => {
						ajax({
							metodo: "GET",
							url: `${url}/post?userId=${id_usuario}`,
							load: thirdCallback 	
						});
					});
				}

let thirdCallback = comentarios => {
								console.log(comentarios);
							}


function ajax( config ){
	let xhr = new XMLHttpRequest;
	xhr.open( config.metodo, config.url );
	xhr.addEventListener( "load", ()=>{
		if ( xhr.status == 200 ) {
			config.load( JSON.parse( xhr.response ) );
		}
	});
	xhr.send(config.data);
}
