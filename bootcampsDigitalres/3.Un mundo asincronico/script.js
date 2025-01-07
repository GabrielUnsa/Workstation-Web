/* JS Asincronico */
setTimeout( () => {
	console.log("hola");
},1000)
console.log("1");
console.log("2");

/*AJAX - XHR*/
let xhr = new XMLHttpRequest;
console.log(xhr.readyState);
xhr.open( "get", "text.txt");
console.log(xhr.readyState);
xhr.send();
//console.log(xhr.response); //No nos mostrará nada

/*Registrando cambio de pedidos XHR*/
let xhr = new XMLHttpRequest;
xhr.open("get", "text.txt");
xhr.addEventListener("readystatechange", () => {
	console.log(xhr.readyState);
	if ( xhr.readyState == 4 ){
		console.log(xhr.response);
	}
});
	/*Validando respuesta XHR*/
 if ( xhr.readyState == 2 ){
	//let headers = xhr.getAllResponseHeaders(); Trae todas las cabeceras
	let tipo = xhr.getResponseHeader("content-type"); //Especifico que cabezera quiero que me lo traiga
	if ( tipo != "text/html" ){
		xhr.abort(); 
	}
 }
/*Resolviendo un pedido con demora*/
xhr.addEventListener("timeout", () => {
	console.log("el pedido se ha excedido de tiempo");
})
xhr.timeout = 1; //Espero un milisegundo para que se resuelva el xhr
/*Resolviendo Pedido exitoso*/
xhr.addEventListener("load", () => {
	if (xhr.status == 200 ){
		console.log(xhr.response);
	}
})
xhr.send();


