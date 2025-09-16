//Funciones
function myFuction( message = 'Este es un mensajito default', log = true){
    if(log) console.log('Interno: ', message);
    return message;
}

function myNewFuction(log, message){
    if (log) {
        console.log(message);
    } else if (message) {
        return message;
    } else {
        message = 'Mensaje por default';
    }
    return message;
}

//let message = myFuction();
//message =  myFuction('Este es un argumento', false, 'Este nadie lo lee');
message = myNewFuction(true, 'Argumento 1');
console.log('Funciones: ', message);
message = myNewFuction(false, 'Argumento 2');
console.log('Funciones: ', message);
message = myNewFuction(false);
console.log('Funciones: ', message);
message = myNewFuction(true);
console.log('Funciones: ', message);

function myRandomFunction(random){
    console.log(random);
}

myRandomFunction(2);
myRandomFunction("2");
myRandomFunction(true);
myRandomFunction([1,2,3]);
myRandomFunction({myKey: "myKey"});
myRandomFunction(function passFunc(message){
    console.log('Pase una funcion: ', message);
});


//Trabajando con callbacks
function useCallback(cb){
    cb('Esto es un mensaje de callback');
}
function cb(message){
    console.log(message);
}
useCallback(cb);