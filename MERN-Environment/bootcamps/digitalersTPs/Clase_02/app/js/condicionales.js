//Un condicional me permite evaluar condiciones y ejecutar dependiendo de la respeusta 

const age = prompt('Cual es tu edad?');

//Condicional Simple
/* if ( age > 18) document.querySelector('#seleccion').innerHTML = "Tuki"; */

//Condicional con valor por defecto
/* if (age > 18) {
    console.log('Tienes permitido pasar');
} else {
    console.log('No tienes permitido pasar');    
}*/

//let rol = prompt('Cual es tu rol?'); 

//Usando diferentes estilos (En bloque)
/* let message;
if ( rol === 'admin') {
    message = 'Ingrese admin';
} else if ( rol === 'user') {
    message = 'Ingrese user';
} else {
    message = 'Ingreso no valido';
}

alert(message);
console.log(message);
document.write(message);
 */

//Usando diferentes estilos (En linea)
/* let message = 'No tienes los permisos para ingresar';
rol === 'admin'? message = 'Ingrese admin' :
rol === 'user'? message = 'Ingrese user' : 
message = 'Ingreso no valido';
alert(message);
console.log(message);
document.write(message); */

let message;
if (age >= 18){
    const rol = prompt('Cual es tu rol?');
    message = 'Ingresaste como ';
    if( rol === 'admin' || rol === 'user' ) rol == 'admin'? message += 'admin' : message += 'user';
}
console.log(message);
document.write(message);