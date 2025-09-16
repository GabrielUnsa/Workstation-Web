const formElem = document.querySelector('#ajax-form'); //Obtengo mi formulario
const nameElem = document.getElementById('name'); //Obtengo el campo nombre del formulario
const emailElem = document.querySelector('#email'); //Obtengo el campo email del formulario
const passElem = document.getElementById('password'); //Obtengo el campo password del formulario

/**
 * valida si una cadena tiene el patron de exigido para ser aceptada
 * @date
 * @param {string} elem - cadena a evaluar
 * @param {function} validator - validador de la cadena a utilizar
 * @return {boolean} - Paso o no la validacion
 */
const getValidatedElemValue = (elem, validator) => {
    const {value} = elem || {};
    return typeof validator === 'function' && validator(value) && value;
}

/**
 * Añade alerta a nuestro HTML. La alerta puede ser Exito o Error
 * @param {string} message - Texto de Exito o Error
 * @param {string} type - success (Default), danger
 */
const addAlert = (message, type = 'success') => {
    const alert = document.createElement('div');
    alert.classList.add('alert', `alert-${type}`);
    alert.setAttribute('role', 'alert');
    const alertText = document.createTextNode(message);
    alert.appendChild(alertText);
    const body = document.querySelector('body');
    const container = document.querySelector('.container');
    body.insertBefore(alert,container);
}

function removeAlert() {
    document.querySelector('.alert').remove();
}

formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    //Validamos que todos los campos sean correctos
    const nameValue = getValidatedElemValue(nameElem, validateName);
    const emailValue = getValidatedElemValue(emailElem, validateEmail);
    const passValue = getValidatedElemValue(passElem, validatePassword);
    console.log(nameValue, emailValue, passValue);

    //Si no paso la validacion entonces cortamos la tarea
    if(!nameValue || !emailValue || !passValue){
        //console.log('No paso la validación')
        return;
    }
    //Paso la validación
    //Creamos un JSON para enviar a los campos
    const requestText = JSON.stringify({ name: nameValue, email: emailValue, password: passValue});
    console.log('Request Text' + requestText);

    //Creamos el AJAX para enviar (Asynchronous Javascript And XML)
    const ajax = new XMLHttpRequest(); //Creamos el objeto ajax que nos permite la asincronia

    /**
     * ajax.onreadystatechange evento que nos permite monitorear el cambio de estado de la peticion AJAX
     */
    ajax.onreadystatechange = function() {
        if (this.readyState === 4) {
            if(this.status === 200){
                const { id } = JSON.parse(this.responseText);
                addAlert(`El usuario con el id ${id} fue creado existosamente`);
                return;
            }else{
                addAlert(`Error en el usuario con el id ${id}`, 'danger');
            }
            setTimeout(() => {
                removeAlert();
            }, 3000);
            /* console.log(this.status);
            console.log(this.responseText);
            console.log(JSON.parse(this.responseText)); */
        }
    }
    
    /**
     * open - Configuramos la solicitud
     *
     * @param {string} Metodo
     * @param {string} URL
     * @param {boolean} Asincronia
     */
    ajax.open('POST','http://localhost:4000/signup', true);

    /**
     * setRequestHeader.
     * Nos permite agregar o modificar headers HTTP en la peticion AJAX antes de enviar al servidor.
     * @param {string} header
     * @param {string} value
     */
    ajax.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    ajax.setRequestHeader('Content-Type', 'application/json');
    //ajax.setRequestHeader('Access-Control-Allow-Origin', '*');
    ajax.send(requestText);

});
