//BOM (Browser Object Model) y DOM (Document Object Model)
//ES6
    //let
    //const
    //for of, for in
/* for (let index = 0; index < array.length; index++){
    const element = array[index];
}
for (const element of array){

}
for (const element of object){

}
for (const key in object){
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
    }
} */
const fruits = ['manzana', 'pera', 'uva'];
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (const fruit of fruits){
    console.log(fruit);
}

const person = {
    fullname: 'Juan Gomez',
    age: 25,
    country: 'Argentina'
}
for (const key in person){
    if(Object.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(person);
        console.log(key);
        console.log(element);
    }
}
let personKeys = Object.keys(person);
let personValues = Object.values(person);
let personEntries = Object.entries(person);
for (let i=0; i < personEntries.length; i++){
    console.log(personEntries[i]);
}

//Desctructuring & Constructuring
const person2 = {
    fullname: 'Gabi Marmanillo',
    age: 33,
    profession: 'Developer',
    salary: 1000,
    country: 'Argentina',
    city: 'Buenos Aires',
    hobbies: ['programming', 'music', 'sports'],
    address: {
        street: 'Av. Libertador',
        number: 1000
    },
    jobs: {
        IEM: 'Profesor',
        UBA: 'Developer',
    }
}
console.log(person2.fullname);
console.log(person2.age);
console.log(person2.profession);
console.log(person2.salary);
console.log(person2.country);
console.log(person2.jobs.UBA);
console.log('*********************');
let {
    fullname: fullNameChanged, 
    age, 
    profession, 
    salary, 
    country, 
    jobs: {IEM} 
} = person2;
console.log(fullNameChanged);
console.log(age);
console.log(profession);
console.log(salary);
console.log(country);
console.log(IEM);
fullNameChanged = 'Wal Marmanillo';
console.log(fullNameChanged);
console.log(person2.fullname);

const fruits2 = ['manzana', 'pera', 'durazno'];
const [fruit1, fruit2, fruit3] = fruits2;
console.log(fruit1, fruit2, fruit3);

//Rest Operator
const [apple, ...restOfFruits] = fruits2;
console.log(apple, restOfFruits);
const [, pear] = fruits2;
console.log(pear);
const {fullname, ...restOfPerson} = person2;
console.log(fullname, restOfPerson);
console.log({...person2, jobs: 'Profesor'});
console.log({...person2, job: 'Profesor'});

const worker = {
    fullname: person2.fullname,
    age: person2.age,
    job: 'Profesor',
}
console.log(worker);
//Es lo mismo que:
console.log({...person2, jobs: 'Profesor'});

const moreFruits = [...fruits2, 'anana'];
console.log(moreFruits);

const newWorker = {...person2, fullname: 'Carly Cabrera'};
console.log(newWorker);

