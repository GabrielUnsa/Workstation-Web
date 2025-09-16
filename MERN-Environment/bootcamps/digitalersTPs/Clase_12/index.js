/* window.location //cambiar el lugar por medio de una url
//history tiene estado
window.history //Controla el historial de navegacion
window.history.back() //va al usuario para atras
window.history.forward() //va al usuario para adelante
window.history.go() //Puedo ir a un hitorial adelante y atras con numero positivos o negativos respectivamente
window.length //devuelve el tamaño del historial
window.history.state() //Puedo ir agregando estados en el historial
window.history.pushState(datas, titule, url) //añadir entrada a la historial parametro de url
window.history.pushState({test: 'testing'}, 'about', 'about.html'); 
window.history.state() //Podemos visualizar test: 'testing' que son los datos que tenemos */
//evento generado por pushState Veamos como podemos capturar los eventos de los sitios
/* window.history.pushState({historial: 'historial 1'}, 'index', 'index.html');
window.onpopstate = function(e) {
    console.log(e);
    console.log(e.state);
    console.log(window.location);
}
window.history.pushState({historial: 'historial 2'}, 'about', 'about.html');
window.onpopstate = function(e) {
    console.log(e);
    console.log(e.state);
    console.log(window.location);
}

 */

 //Listeners

 /**
  * Guarda el estado de la pagina y sus valores
  * @param {string} page - pagina de donde viene
  * @param {string} prevState - valor que tenia del campo de entrada
  */
 function loadPage(page, prevState){
    const xhr = new XMLHttpRequest();
    xhr.open('get', `http://127.0.0.1:5501/${page}.html`);
    xhr,addEventListener('load', (e) => {
        if(xhr.status === 200){
            window.history.pushState(
                {
                    html: xhr.response,
                    prevState
                },
                page,
                page
            );
            document.querySelector('#app').innerHTML = xhr.response;
        }
    });
    xhr.send();
 }

 window.onload = function (){
    const button1 = document.querySelector('.next-button');
    button1.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        loadPage('about', {inputValue: document.querySelector('input').value});
/*         window.history.pushState(
            { inputValue: document.querySelector('input').value, 
              url: 'about.html',
              prevUrl: 'index.html' 
            },
            'about',
            'about.html'
        ); */
        //window.location = './about.html' Si hacemos un location se pierde todo el state
    });
 }

 window.onpopstate = function (e){
    console.log(e.state);
 }
