//Single Page Application / SPA
let links = document.querySelectorAll("a");
let main = document.querySelector("main");

links.forEach( ( link ) => {
	link.addEventListener( "click", ( e ) => {
		//e.target.id es igual a link.id
		location.hash = link.id;
		//Manipulando con el historial
		//BEGIN
		e.preventDefault();
		history.pushState(null,"",id);
		let xhr = ajax( link.id + ".html" );
		xhr.addEventListener( "load", () => {
			if( xhr.status == 200 ){
				main.innerHTML = xhr.response;
			}
		})
		//END
		//Introduccion API RESET
		//BEGIN
		e.preventDefault();
		let xhr = ajax(link.id + ".html");
		xhr.addEventListener( "load", () => {
			if ( xhr.status == 200 ) {
				main.innerHTML = xhr.response;
				history.pushState({
					template: xhr.response;
				},"",id);
			}
		})
		//END
	})
})

//Contenido de home inicial
let pag_inicial = ajax("home.html");
pag_inicial.addEventListener("load", () => {
	if (pag_inicial.status == 200 ){
		main.innerHTML = pag_inicial.response;
	}
})


function ajax( url, metodo ){
	let http_metodo = metodo || "GET";
	let xhr = new XMLHttpRequest;
	xhr.open( http_metodo, url );
	xhr.send();
	return xhr;
}

/* Solo cuando usamos manipulando con HASH */
window.addEventListener( "hashchange", ()=>{
	let xhr = ajax( location.hash.split("#")[1] + ".html" );
		xhr.addEventListener( "load", () => {
			if( xhr.status == 200 ){
				main.innerHTML = xhr.response;
			}
		})
})

/* Solo cuando manipulamos el historial */
window.addEventListener("popstate", () => {
	let url = location.pathname.split("/")[1] + ".html"
	let xhr = ajax( url );
		xhr.addEventListener( "load", () => {
			if( xhr.status == 200 ){
				main.innerHTML = xhr.response;
			}
		})
})

/*Introduccion API Reset*/
window.addEventListener("popstate", ( e ) => {
	if ( e.state.template ) {
		main.innerHTML = e.state.template;	
	}else{
		let url = location.pathname.split("/")[1] + ".html"
		let xhr = ajax( url );
		xhr.addEventListener( "load", () => {
			if( xhr.status == 200 ){
				main.innerHTML = xhr.response;
			}
		})

	}
})
