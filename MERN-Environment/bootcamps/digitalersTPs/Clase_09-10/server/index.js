//Backend con Express y Cors
/*al usuar typescript utilizamos require en otros caso podemos usar import */
const express = require('express'); //importamos la libreria express
const cors = require('cors'); //importamos cors para permitir la solicitudes HTTP

const app = express();

/*Usamos cors para que permita cualquier dominio*/
app.use(cors({
    origin: '*'
}));

//Utilizaremos Middlewares para interpretar y parsear los datos enviados en el cuerpo de las solicitudes HTTP
/*Parseamos los datos que vienen en el cuerpo en formato JSON*/
app.use(express.json()); //Habilitamos el parse de JSON

/*Parse los datos enviados en formato URL-encoded
    * convierte el body en un objeto JS */
app.use(express.urlencoded({extended: true})); //Permitimos objetos anidados


app.post('/signup', (req, res) => {
    const {name, email, password} = req.body; //desconstruimos el objetos JSON
    console.log("BODY " + req.body);
    //return res.send(`Nombre: ${name}, Email: ${email}, Password: ${password}`);
    return res.json({id:1, name, email, token: 'secret-token' }); //al pasword lo convertimos en un token para despues convertirlo en JSON
});

//Especificamos en que puerto estaremos escuchando
app.listen( 4000, () => {
    console.log('App is running on localhost:4000');
});

/**
 *npm init -y "-y Crea pordefault el init
 *npm i express cors
 *npm i -D nodemon "-D dependencia
 *
 *
 * */
