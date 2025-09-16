
const time = 30;

//Son funciones autoconvocadas al momento de crear (aqui creo)(aqui invoco)
//Los Scope se mantienene solo las variables que estan dentro de nuestra funcion seran visibles.
(function(name) {
    //console.log(time);
    class Application{
        constructor(name) {
            this.name = name;
        }
    }
    const app = new Application(name);
    console.log(app.name);
})('Diego'); //Cree la funcion name y la invoque con el nombre de diego
//No puedo tener acceso a las variables despues del modulo

const app = (function (window, document) {
    class Application{
        constructor(appWindow, appDocument) {
            this._appWindow = appWindow;
            this._appDocument = appDocument;
        }
        get name(){
            return 'application';
        }
        get appWindow(){
            return this._appWindow;
        }
        get appDocument(){
            return this._appDocument;
        }
    }

    return new Application(window, document);
})(window,document);
console.log(app.appDocument.querySelector('body'));
