var globalVar = 'Variable Global';
let globalLet = 'Let Global';
const globalConst = 'Const Global';

function myFunction(){
    var localVar = 'Variable Local';

    function logger(){
        console.log(localVar);
        console.log(globalVar);
        console.log(globalLet);
        console.log(globalConst);
    }
    logger();
}

myFunction();

//Var como global
var i = 0;

for (let i = 0; i < 4; i++) {
    console.log(i);
}
console.log("Fuera del FOR: ", i);

//Var dentro del for
for (var i = 0; i < 4; i++) {
    console.log(i);
}
console.log("Fuera del FOR: ", i);

//Var como global en funciones
/* var message = "Mi mensaje global";
function changeMessage(){
    var message = "Mi mensaje local";
    console.log("Mensaje Interno: ", message);
}
function messageOriginal(){
    console.log("Mensaje Original: ", message);
}
changeMessage();
messageOriginal();
console.log("Mensaje Externo: ",message); */

//Let global
let message = "Mi mensaje global";
function changeMessage(){
    let message = "Mi mensaje local";
    console.log("Mensaje Interno: ", message);
}
function messageOriginal(){
    console.log("Mensaje Original: ", message);
}
changeMessage();
messageOriginal();
console.log("Mensaje Externo: ",message);