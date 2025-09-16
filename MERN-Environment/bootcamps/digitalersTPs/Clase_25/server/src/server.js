require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const { log: logger } = require('console');
const mongoDb = require('./libs/mongo');
const dbMiddleware = require('./middlewares/db-middleware');
const apiRoutes = require('./apis/router');
const app = express();

const { NODE_ENV, PORT } = process.env;

//Probamos que levantes las variabels globales
//console.log("Servidor: "+ process.env.NODE_ENV + " Puerto: " + process.env.PORT);

const main = async () => {
  await mongoDb();
  if( NODE_ENV === 'local' ){
    app.use(cors());
  }
  app.use(apiRoutes);
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(dbMiddleware);

  /*Conexion a nuestra base de datos y carga de datos
  app.get('/', async (req, res) => {
    //logger(req.db); Control de conexion de base de datos
    await req.db.collection('testing').insertOne({
      test: 'testing',
    });
    res.send('Hola Mundo!');
  });
  */

  app.listen(PORT, () => {
    logger(`Application listening on port ${PORT}`);
  });

};
main();
