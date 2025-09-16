const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');

console.log(button1);
console.log(button2);

/* button1.addEventListener('click', (e) => {
    console.log('Evento Externo');
    //e.preventDefault();
    //e.stopPropagation(); //Corta la propagacion de eventos pero seguira ejecutando los listener anidados, no corta el flujo
    //e.stopImmediatePropagation(); //Corta imadiatamente la propagacion de eventos no se ejecuta los listener anidados, corta el flujo
    //El listener de abajo se suscribe en el segundo click
    button1.addEventListener('click', (e) => {
        e.stopPropagation();
        console.log('event interno');
        //e.stopImmediatePropagation(); //Solo se ejecuta una vez por cada listener.
    });
}); */
/* button1.addEventListener('click', (e) => {
    console.log('event 1');
});
button1.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('event 2');
}); */
//True nos permite capturalo al evento y al tener el e.stopPropagation hace que corte la propagacion, evitando asi el burbujeo, teniendo un equivalente a stopImmediatePropagation.
button1.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('event 1');
}, true);  
button1.addEventListener('click', (e) => {
    console.log('event 2');
});