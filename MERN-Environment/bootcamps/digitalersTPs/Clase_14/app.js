/* 
Clase 14 - Inicio de promesas
//Promesas -> Algo que ocurre en el tiempo que nosotros podemos esperar
// -> Un suceso que ocurre por fuera de la secuencialidad del codigo

//Creamos nuestra primera promesa
console.log(1);
console.log(2);
//las promesas tiene que tener sii resolve y reject porque uno devuelve cuando cumple la promesa otro si ocurre un error
const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(3);
            reject(new Error ('Aqui ocurrio un error'));
        },1000);
    });

promise.then( (value) => { 
    console.log(value);
}).then( () => {
    console.log(4);
    console.log(5);
}); 

//Para no perdernos en los callback de los then JS crea sugar syntax
//Recreemos el codigo anterior usando sugar syntax
const start = async () => {
    console.log(1);
    console.log(2);
    const promiseValue = await new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(3);
            reject(new Error ('Aqui ocurrio un error'));
        },1000);
    });
    console.log( promiseValue );
    console.log(4);
		console.log(5);
}
start();
*/
//Podemos esperar bien declaremos la promesa o cuando necesitemos el valor
const start = async () => {
    console.log(1);
    console.log(2);   
    const promiseValue = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(3);
            reject(new Error ('Aqui ocurrio un error'));
        },1000);
    });
    console.log( await promiseValue );
    console.log(4);
		console.log(5);
}
start();

