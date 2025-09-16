/**
 * Definimos un constructor usando el patron builder para armar una pizza a pedido
 * utilizamos setter para ir agregando ingredientes
 */
class Pizza{
    constructor(){
        this._ingredients = [];
    }

    setJamon(){
        this._ingredients.push('jamon');
        return this;
    }
    
    setMuzza(){
        this._ingredients.push('muzzarella');
        return this;
    }

    setAceituna(){
        this._ingredients.push('aceituna');
        return this;
    }

    setSalsa(){
        this._ingredients.push('salsa');
        return this;
    }
}

const pedido1 = new Pizza();
pedido1.setAceituna().setJamon().setSalsa();

const pedido2 = new Pizza();
pedido2.setSalsa().setMuzza();

console.log(pedido1._ingredients);
console.log(pedido2._ingredients);
