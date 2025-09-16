//Arrays
const fruits = ['manzana', 'pera', 'mandarina'];
console.log(fruits);

/* Metodos
- length
- sort
- splice
- slice 
- concat
- pop
- unshift
- shift
- push */

/*----------------- LENGTH ------------------------------*/
//Devuelve la cantidad de elementos del array
//console.log(fruits.length);
//const emptyArray = [];
//console.log('array vacio', emptyArray); 
//if(emptyArray.length < 0) throw new Error("El arreglo está vacío");
//if(emptyArray.length === 0) throw new Error("El arreglo está vacío");
//if(!emptyArray.length) throw new Error("El arreglo está vacío");

/*----------------- SORT --------------------------------*/
//Ordena el array
console.log(fruits);
fruits.sort();
console.log(fruits);

/*----------------- PUSH --------------------------------*/
//Agrega un elemento al final del array
fruits.push('durazno');
console.log(fruits);

/*---------------- UNSHIFT-------------------------------*/
//Agrega un elemento al inicio del array
fruits.unshift('frutilla');
console.log(fruits);

/*----------------- POP ---------------------------------*/
//Elimina el último elemento del array
const lastFruit = fruits.pop();
console.log(fruits);
console.log(lastFruit);

/*---------------- SHIFT --------------------------------*/
//Elimina el primer elemento del array
const firstFruit = fruits.shift();
console.log(firstFruit);
console.log(fruits);

/*---------------- SPLICE -------------------------------*/
//Elimina un elemento en la posición indicada
let numbers = [1,2,3,4,5,6,7,8,9,10];
let newArr = numbers.splice(2,5);
console.log(newArr);
console.log(numbers);
newArr = numbers.slice(2);
console.log(newArr);

/*----------------- CONCAT -------------------------------*/
//Concatena dos arrays
newArrFruits = fruits.concat(['durazno', 'frutilla']);
console.log(newArrFruits);
newArr = numbers.concat(fruits);
console.log(newArr);

/*-----------------SPLICE--------------------------------*/
//Agrega un elemento en la posición indicada
numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.splice(2,3,'ingrese1', 'ingrese2', 'ingrese3');
console.log(numbers);
numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.splice(4,0,'test');
console.log(numbers);
numbers = [1,2,3,4,5,6,7,8,9,10];
numbers.splice(4,0,10,15,35);
console.log(numbers);

/*------------------SLICE------------------------------*/
//Devuelve una copia del array
numbers = [1,2,3,4,5,6,7,8,9,10];
newArr = numbers.slice(2,5);
console.log(newArr);
console.log(numbers);

