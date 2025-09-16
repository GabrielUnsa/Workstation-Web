/*
 *Comando que utilizamos en el navegador para ver el contexto de una variable. 
 */
window //Scope Global
/*Scope Local*/
function scope1(){
    const var1 = 'test'; //Local
    console.log(var1, window);
}
console.log(var2);
scope1();
const var2 = 'otra variable'; //Global
function scope2(){
    console.log(var2);
}
scope2();
/* Scope Local usando ademas Scope Global */
function scope3(){
    const var3 = 'esta variables es scope3';
    try {
        console.log(var2, var3);
        const var4 = 'esta variable es del try catch'; //Scope de Bloque del Try Catch
    } catch (e) {
        console.log(e);
    }
    console.log(var4);
}
scope3();
//31Min
/* EN OTRA VENTANA */
function scope1(){
    const var1 = 'esta constante fue definida en el scope1';
}
function scope2(){
    scope1();
    console.log(var1); //No puedo acceder aunque invoque a la funcion
}
scope2();

//* Existe ademas el Scope Anidado 
function contador() {
  let count = 0; // Variable de la función externa

  return function() {
    count++; // La función interna recuerda "count"
    console.log(count);
  };
}

const incrementar = contador();
incrementar(); // 1
incrementar(); // 2 (mantiene el estado)

/*Todo en JS tiene un prototipo
Ejemplo si tenemos un texto el prototipo de este es el Objeto String y hereda todos los metodos String. 
las funciones contructoras crean protipos de un objeto*/