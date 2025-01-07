/*Introduccion a Construcciones de Variables*/
var nombre = "ambito.com";
let edad = 20;
const live = true;

//Funciones Lambda o Funciones Flechas
//Las funciones normalmente podemos definir de las siguientes formas:
function foo(){} //Funciones Definidas
var f = function foo(){} //Funciones Anonimas
var foo = () => {} //Funcion Lambda

//Funcion con un unico parametro
var foo = function(item){
	//....code
}
//Funcion Lambda
var foo = item => {
 consol.log(item);
}
//Retorna un valor
var foo = function( item ){
	return item * 2;
}
var foo item => item * 2;

/*Variables Primitivas - Objetos*/
var a,b
a = 1
b = a
a = 10
console.log(a) //10
console.log(b) //1

var arr = [1,2,3]
var arr_copy = arr
arr[0] = 10
console.log(arr) //[10,2,3]
console.log(arr_copy) // [10,2,3]

/*Interactuando con el DOM*/
document.getElementById("name")
document.getElementByClassName("name")
document.getElementByTagName("name")
/* ------> */
var titulo = document.getElementById("titulo");
titulo.id /*titulo*/
titulo.className /*titulo*/
titulo.innerText = "New Title" // Nos trae el titulo y ademas podemos modificiarlo.
//Funciones que nos permite crear elementos a nuestro html
document.createElement() //Crea nuevo elementos
document.appendChild() //Agrega nuevo elemento al DOM
document.removeChild() //Quita elementos del DOM

var p = document.createElement("p"); //El parametro es unico cual debe ser el nombre de alguna etiqueta de HTML5
p.innerText = "New Element"; //debemos insertar el parrafo en algun elemento existente en el html

var body = document.getElementByTagName("body")[0];
body.appnedChild(p);








