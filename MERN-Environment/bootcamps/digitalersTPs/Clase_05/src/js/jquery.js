//Selector
const elemTexto = $('.main #text');
console.log(elemTexto.html('<div>Lo ingrese con JQUERY</div>'));

$('.main2 #text-input')
    .addClass('agregada-jquery')
    .val(30);

//Eventos
$('#plus').click(function (){
    $('#text-input').val(Number($('#text-input').val()) + 1);
});
$('#minus').click(function (){
    $('#text-input').val(Number($('#text-input').val()) - 1);
});