//Obteniendo un elemento mediante su identificador
const byId = document.getElementById('my-first-interaction');

//Obteniendo un elemento mediante una consulta (Por Id)
const byIdQuery = document.querySelector('#my-first-interaction');

//Obteniendo un elemento mediante una consulta (Por clase)
const byClassQuery = document.querySelector('.container');    

//Obteniendo un elemento mediante una consulta (Multiples)
const onlyOne = document.querySelector('.select-all');
console.log("Selecciona el primero", onlyOne);

const allClass = document.querySelectorAll('.select-all');
console.log("Selecciona todos de la clase", allClass);

/* -------------- MODIFICANDO DOM ----------------------- */
//InnerHTML e InnerText
let changeByInnerHTML = document.getElementById('my-first-interaction');
changeByInnerHTML.innerHTML = '<p class="inserted-p"> Vamos a cambiar el texto </p>';


let changeByInnerText = document.querySelector('.inserted-p');
changeByInnerText.innerText = 'Lo Cambiamos de nuevo';

//Inyectando javascript
let myBody = document.getElementById('root');
/*myBody.innerHTML = `<script> ${alert("insertado desde js")}; </script>`; //aqui esta mal pues pisa todo el HTML del body */

//Inyectando texto de forma segura
let myElem = document.createElement('p');
console.log(myElem);

let myText = document.createTextNode(`<script> ${alert("esto es un texto desde js")}; </script>`);
myElem.appendChild(myText);
myBody.appendChild(myElem);

const myDiv = document.createElement('div');
const myP = document.createElement('p');
const myTexto = document.createTextNode('Esto es un elemento completo insertado en el dom');
myP.setAttribute('class', 'bg-blue');
myP.appendChild(myTexto);
myDiv.appendChild(myP);
//myBody.appendChild(myDiv);
myBody.insertBefore(myDiv, onlyOne);

let myDiv3 = document.querySelector('#div3');
console.log(myDiv3);
myBody.insertBefore(myDiv, myDiv3);