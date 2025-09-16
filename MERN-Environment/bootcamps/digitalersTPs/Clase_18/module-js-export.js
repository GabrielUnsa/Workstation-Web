//Yo puedo exportar una constante o una variable
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
//JS exporta una constante
export const app = new Application(window, document);
//Exporta por default es lo que se exporta cuando invoco el archivo tambien puedo elegir que exportar
export default Application;
