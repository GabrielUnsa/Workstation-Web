//Este archivo veremos como se utiliza handlebars
/*
 * Empezando con Handlebars
const Handlebars = require('handlebars');
const div = '<div>{{ change_me }}</div>'; //Para saber la estructura ver la documentación
const template = Handlebars.compile(div); //compilamos el handlebars
console.log(template({change_me: () => 'Hola Handlebars'})); //cambiamos el contenido por medio de las variables declaradas y dando una function rrow
*/
const express = require('express');
const app = express();
const PORT = 4000;

app.use((req, res, next) =>{
  console.log('pase el primer middleware de express');
  //next(new Error('testing error'));
  next();
});

app.get('/', (req, res) => {
  res.json({id: 1});
});

/*
app.get('/hola', (req, res) => {
  console.log('pase el segundo middleware de express');
  throw new Error('Esto es un error generado'); //genera el error y no se detiene la ejecicion pasa e aejecutarse el siguente middleware
  res.send( 'hello world' );
});

//Los nombre de las variables no influye en los argumentos del middleware
app.use((err, req, res, next) =>{
  console.log('pase el tercer middleware de express');
  res.status(400).json({ error: 'esto es un error ' })
});
*/

/*app.get('/hola', (req, res, next) => {
  console.log('pase el segundo middleware de express');
  next();
});

//Como nos comunicamos entre apis
app.use((req, res, next) => {
  console.log('pase por el tercer middleware de express');
  next();
  return res.send('Esto me hablitia a poder utilizar la mismarespuesta en todas las apis');
});

app.use((err, req, res, next) =>{
  res.status(400).json({ error: 'esto es un error ' })
});*/

app.get('/hola', (req, res, next) => {
  console.log('pase por el primer middleware de express');
  next();
}, (req, res, next) => {
  console.log('pase por el segundo middleware de express');
  next();
}, (req, res, next) => {
  console.log('pase por el tercero y Terminamos');
  //res.send('Terminamos');
  //next('test'); //funciona como el send
  //Esto es lo que me realiza cuando hago un res.JSON
  res.status(200).res.setHeader('content-type','application/json') ;
  next(JSON.stringify({test: 'test'}));
})


app.listen( PORT, () =>{
 console.log(`LListening on http://localhost:${PORT}`);
});
