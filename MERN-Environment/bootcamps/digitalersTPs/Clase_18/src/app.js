/**
 * Creamos Hamburguesas que nos serviran para realizar un pedido
 */
class Hamburger{
    
    constructor(){
        this.ingredients = [];
    }

    setMeat(){
        if(!this.meat){
            this.meat = {
                quantity: 0,
                price: 200,
                name: 'Carne'
            }
        }
        this.meat.quantity += 1;
        return this;       
    }
    
    setCheese(){
        this.ingredients.push('Mheese');
        return this;
    }
    
    setLettuce(){
        this.ingredients.push('Lettuce');
        return this;
    }
    
    setBread(){
        this.ingredients.push('Bread');
        return this;
    }
}

let hamburguer = new Hamburger();
//Creamos un evento que nos ingresar el ingrediente seleccionado e ir armando la hamburguesa
document.querySelector('#add-ingredient-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const ingredient = document.querySelector('#ingredients').value; //obtenemos el ingrediente
    hamburguer[`set${ingredient}`](); //lo agregamos a la hamburguesa
});

//Evento: una vez terminado de agregar los ingredientes entonces lo mapeamos en la pagina
document.querySelector('#finish-order-btn').addEventListener('click', (e) =>{
    e.preventDefault();
    document.querySelector('#order-list').innerHTML = hamburguer.ingredients.map( ingredient => `<li> ${ingredient} </li>`).join('');
    hamburguer = new Hamburger();
});
