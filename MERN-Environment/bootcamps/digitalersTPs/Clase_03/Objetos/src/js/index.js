//Objetos
//Objetos Basicos
const myObjct = {
    test: "esto es una propiedad del objeto",
};

const myDeepObject = {
    prop1: 'Cadenas de texto',
    prop2: 24,
    prop3: true,
    prop4:{
        prop1: 'Esta es una propiedad hija',
    }
};

//Accediendo a las propiedades de un objeto
const instructor = 'instructor';
const person = {
    name: 'Diego',
    age: '32',
    role: 'instructor',
    children:{
        name: 'hija',
        age: 15,
    }
};

//Accediendo a propiedades que son objetos
console.log(person.name);
console.log(person.age);
console.log(person.role);
console.log(person.children.name);

//Algunos metodos de los Objetos
const newObj = Object.assign(person, {fullname: 'Diego Garcia'});
console.log(newObj);
console.log("Person:", person);

const freezeObj = Object.freeze(person);
person.test = 'esto no se puede modificar';
console.log(freezeObj);

//Key, Values, Entries
console.log('keys', Object.keys(freezeObj));
console.log('values', Object.values(freezeObj));
console.log('entries', Object.entries(freezeObj));

//Arreglos (Arrays)
const fruits = ['manzana', 'pera', 'uva', 'naranja'];
console.log(fruits);

//Accediendo a los elementos de un arreglos
console.log(fruits[0]);
fruits[0] = 'sandia';
console.log(fruits[0])

//Metodos
console.log(fruits.length);
console.log(fruits.sort());