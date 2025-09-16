//Cuando realizamos un import tengo acceso al Defalt o variables o funciones que deseo importar
//Si usamos {} exportamos modulos que deseamos, si no usamos {} exportamos el default, podemos usar ambas a la vez
import Application, { app } from './module-js-export.js';
console.log("Por Default");
console.log(Application);
console.log("Por Import Module");
console.log(app);
console.log("/****************************************************/");
console.log(app.name);
console.log(app.appWindow);

const newApp = new Application('test');
console.log(newApp.appWindow);
