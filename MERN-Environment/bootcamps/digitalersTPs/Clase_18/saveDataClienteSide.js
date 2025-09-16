/*Para guardad los datos desde el lado del cliente tenemos 3 espacios definidos:
 * LocalStorage
 * SessionStorage
 * Cookies
 * Dependera de cada empresa donde guarden los datos y sos forma de uso
 * Normalmente se guarda todo lo que nos permite el formato JSON */
//Instrucciones fueron ingresadas desde la consola en clases y se usan para el localStorage y sessionStorage

//Para guardar los datos en localStorage
localStorage.setItem('keyName', 'valueKey');

//Para acceder a los datos guardados
localStorage.getItem('keyName');

//Ejemplo de uso
localStorage.setItem('test', JSON.stringify({ test: 'Esto es un objeto prueba' }));
console.log( JSON.parse(localStorage.getItem('test')) );

//Cookies
//En las cookies no tienen un campo key y value especifico para carga sino que se trabaja como un string separado por un =
//Ejemplo
document.cookie = 'prueba=esta_es_mi_prueba';
document.cookie = 'otraPrueba=esta_es_otra_prueba';
document.cookie //Nos mostrara las dos cookies juntas separada por ; y un espacio
//"prueba=esta_es_mi_prueba; otraPrueba=esta_es_otra_prueba"
//Entonces para trabajar con ellas tenemos que hacer splits hasta obtener la key y el value
let cookieSeparadas = document.cookie.split('; ');
cookieSeparadas.map( (cookieSimple) => console.log(cookieSimple.split('=')) ); //aqui recien obtendremos las key y los values en forma de array
//Para eliminar una cookie podemos setearla con nada
document.cookie = 'prueba=';
document.cookie;
