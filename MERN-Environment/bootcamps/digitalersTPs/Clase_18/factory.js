//Clase para crear una movilidad de la marca Ford
class Ford{
    /**
     * constructor de Ford.
     * @param {string} type - tipo de auto en nuestro caso puede ser un auto (sedan) o un pickup (camioneta)
     */
    constructor(type){
        this.name = 'Ford';
        this.type = type;
    }
}

//Clase para crear una movilidad de la marca Renault
class Renault{
    /**
     * constructor de Renault.
     * @param {string} type - tipo de auto en nuestro caso puede ser un auto (sedan) o un pickup (camioneta)
     */
    constructor(type) {
        this.name = 'Renault'
        this.type = type
    }
}

//Clase que nos permite crear una fabrica de auto
class CarFactory{
    /**
     * constructor de autos.
     * @param {string} type - modelo de auto que deseo construir
     */
    constructor(type){
        const carTypes = {
            'ford': Ford,
            'renault': Renault
        };
        this._car = carTypes[type];
    }

    getCar(){
        return new this._car('car');
    }
    
    getPickup(){
        return new this._car('pickup');
    }
}

const ford = new CarFactory('ford'); //Invocamos a la fabrica y le pedimos que me haga un auto de la marca X.
console.log(ford); //En este momento solo tenemos el objeto de la marca Ford pero no sabemos que tipo necesitamos
const fordCar = ford.getCar(); //Creamos una Ford de tipo auto
const fordPickup = ford.getPickup(); //Creamos una Ford de tipo Pickup
console.log(fordCar);
console.log(fordPickup);

//Nos paso lo mismo que el anterior caso pero ahora con Renault
const renault = new CarFactory('renault');
const renaultCar = renault.getCar();
const renaultPickup = renault.getPickup();
console.log(renaultCar);
console.log(renaultPickup);
