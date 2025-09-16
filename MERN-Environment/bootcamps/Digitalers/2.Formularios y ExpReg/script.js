let form = document.getElementById("formulario");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	console.log("click");
}) //el formulario obvia esta parte del programa y recarga la pagina

//Submit
form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log("click");
})

/*HTMLElement - HTMLInputElement*/
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
	//Element.checkValidity() -> bool
	console.log(input.checkValidity());
})

/*Validacion Customizada y Funciones utiles de validacion*/
let form = document.querySelector("form")
let input = document.querySelector("input")

form.addEventListener("submit", (e) =>{
	e.preventDefault();
	let valor = input.value;
	let longitud = valor.length;
	let valor_con_trim = valor.trim();
	let longitud = valor_con_trim.length;
	encodeURIcomponent(valor_con_trim);
	if ( longitud > 3 ){
		//.... send form
	}else{
		//Element.setCustomValidity()
		input.setCustomValidity("Este campo debe tener mas de 3 caracteres");
	}
})

/*Expresiones Regulares*/
let ExpRegular = /a/

/*Aplicacion de las Expresiones Regulares*/
let form = document.querySelector("form")
let input = document.querySelector("input")
form.addEventListener("submit", (e) => {
	e.preventDefault();
	let valor = input.value;
	let expreg = /^\w{5,10}$/
	if ( expreg.test(valor) ){
		console.log("Valido")
	}else{
		console.log("No valido")
	}
})
