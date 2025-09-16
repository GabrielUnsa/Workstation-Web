//Primeros pasos con express
//Recordemos si usamos ES6+ podemos usar import sino require
const express = require('express');
const cors = require('cors');
const app = express(); 

const main = async () => {
  /*Los middleware usan req (entrada), res (objeto que nos permite interactuar con la respuesta) y next (sigue o para)*/
  app.use(express.json()); //Nos permite tratar JSON con mayor facilidad
  app.use(express.urlencoded({extended: true})); //Sacamos los encoded que trae las url de las paginas
  app.use(cors());
/*
  //.get nos permite devolver un string a nuestra peticion get
  app.get('/', (req, res) => { 
    //res.send('Hola Mundo');
    res.json({hello: 'word!'});
  });

  //Cuando tengo varios get con el mismo path se toma el primero
  app.get('/hola', (req, res) => { 
    res.json({hello: 'Hola!'});
  });

  //Los metodos HTTP son independientes entre si por eso podemos tener get y post en el mismo path
  app.post('/hola', (req, res) => { 
    res.json({hello: 'postHola!'});
  });
  */
  //PathParam desde url nosotros con express lo expresamos con :
  //req.params: estan los pathParams
  //req.query: estan los queryParams
  //req.body: estara el cuerpo de lo enviado
  //url de prueba: http://localhost:4000/hola/1?query=test
  app.get('/hola/:id', (req, res) => { 
    console.log(req.params, req.query, req.body); //Me devuelven objetos (string)
    res.json({hello: 'word!'});
  });
  //resultado: [Object: null prototype] { id: '1' } [Object: null prototype] { query: 'test' } undefined (body)

  /*
   * Nos preguntamos que ocurre si usamos un post?
   * Para eso usamos la misma url y en postman le agregamos un cuerpo a un json
   * cuerpo a enviar: {"hello": "word"} (en body -> raw : JSON)
  */
  app.post('/hola/:id', (req, res) => { 
    console.log(req.params, req.query, req.body); //Me devuelven objetos (string)
    res.json({hello: 'word!'});
  });
  //resultado: [Object: null prototype] { id: '1' } [Object: null prototype] { query: 'test' } { hello: 'word' }

  //Para multiples queryParams podemos ir concatenadolos con &, y para los pathparams tenemos que especificarlos
  app.get('/hola/:id/:otro_id', (req, res) => { 
    console.log(req.params, req.query, req.body); //Me devuelven objetos (string)
    res.json({hello: 'word!'});
  });
  //resultado: [Object: null prototype] { id: '1', otro_id: '2' } [Object: null prototype] { query: 'test', otroQuery: 'test' } undefined

  //listen escucha peticiones donde le pasamos un puerto y un callback
  app.listen(4000, () => {
    console.log('Init app in port 4000. http://localhost:4000')
  });
  /*
   * Equivalencia en JSVanilla de app.listen
  const http = require ('http'); //Equivalencia de express
  http.createServer( (req, res) => {
    http.listen( 4000, () =>{
      console.log('Listen port 4000');
    }) 
  });
    */
}

main();
