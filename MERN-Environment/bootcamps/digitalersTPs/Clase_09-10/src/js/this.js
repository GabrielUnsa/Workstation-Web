/*Creamos un objeto con funciones definidas dentro*/
const myObject = {
    firstname: 'Diego',
    lastname: 'Londono',
    getFullName(){
        //return `${this.firstname} ${this.lastname}`; //Usando el objeto this
        const {firstname, lastname} = this; //usando desconstructores
        return `${firstname} ${lastname}`;
    }
};
const fullname = myObject.getFullName();
console.log(fullname);