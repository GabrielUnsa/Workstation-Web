//Eventos
const textElem = document.getElementById("text");
const buttonPlus = document.querySelector("#plus");
const buttonMinus = document.querySelector("#minus");

function clickEvent(e, tipo){
    e.preventDefault();
    let textNumber = Number(textElem.innerText);
    if (tipo === 'suma') {
        textElem.innerText = textNumber + 1;
    } else if (tipo === 'resta'){
        textElem.innerText = textNumber - 1;
    }
}
/* buttonPlus.addEventListener('click', function (e) {
    e.preventDefault();
    let textNumber = Number(textElem.innerText);
    textElem.innerText = ++textNumber;
});
buttonMinus.addEventListener('click', function (e) {
    e.preventDefault();
    let textNumber = Number(textElem.innerText);
    textElem.innerText = --textNumber;
});
 */
buttonPlus.addEventListener('click', function(e){
    clickEvent(e, 'suma');
});
buttonMinus.addEventListener('click', function(e){
    clickEvent(e, 'resta');
});