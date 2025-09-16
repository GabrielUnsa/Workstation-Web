//Bucles (iteración)
//FOR
for (let index = 0; index < fruits.length; index++) {
    console.log(fruits[index].toLowerCase());    
}

const salad = [
    {ingrediente: 'manzana', type: 'fruta'},
    {ingrediente: 'lechuga', type: 'verdura'},
    {ingrediente: 'tomate', type: 'verdura'},
    {ingrediente: 'rucula', type: 'verdura'},
    {ingrediente: 'chocolate', type: 'dulce'},
    {ingrediente: 'pepino', type: 'verdura'},
];

for (let i = 0; i < salad.length; i++) {
    const elem=salad[i];
    if (elem.type === 'verdura') {
        console.log('El vegetal ' + elem.ingrediente);
        continue;        
    }
    if (elem.type === 'dulce') {
        console.log('El dulce ' + elem.ingrediente);
        break;        
    }
    console.log('La fruta ' + elem.ingrediente);
}

var i=0;
while (i < salad.length) {
    const elem=salad[i];
    i++;
    if (elem.type === 'verdura') {
        console.log('El vegetal ' + elem.ingrediente);
        continue;        
    }
    if (elem.type === 'dulce') {
        console.log('El dulce ' + elem.ingrediente);
        break;        
    }
    console.log('La fruta ' + elem.ingrediente);
}

//ES6
//forEach
salad.forEach(element => {
    console.log('Este es un ingrediente: ', element.ingrediente);
    console.log('Este es un tipo: ', element.type);
    if (element.type === 'verdura') {
        console.log('El vegetal ' + element.ingrediente);
        return;        
    } else  if (element.type === 'fruta') { 
        console.log('El fruta ' + element.ingrediente);
        return;
    }
    console.log('No puedo realizar una ensalada con esto');
});

//map
const newNumbers = [1,2,3,4];
const doubles = newNumbers.map(element => {
    return element * 2;
});
console.log(doubles);

//filter
const pairs = newNumbers.filter(element => {
    return element % 2 === 0;
}); 
console.log(pairs);

const newPairs = newNumbers.filter(element => {
    return !(element % 2);
});
console.log(newPairs);

//find
const newFruits = ['banana', 'manzana', 'pera', 'kiwi'];
const found = newFruits.find(element => {
    return element === 'kiwi';
});
console.log(found);