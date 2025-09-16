//Funciones
 function sum( num1, num2 ){
    const added = num1 + num2;
    function log(){
        console.log(added);
    }
    log();
    return added;
 }
const result = sum(2,4);
console.log('Result', result);