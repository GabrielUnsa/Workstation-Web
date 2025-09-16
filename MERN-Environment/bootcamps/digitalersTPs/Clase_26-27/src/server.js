require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const { engine: exphbs } = require('express-handlebars'); 
const { log: logger } = require('console');
const dbConn = require('./config/db');
const initModels = require('./config/db/init-models');
const routes = require('./router');
const app = express();

const { PORT } = process.env;

const main = async () => {
  await dbConn();
  await initModels();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true}));
  app.use(cors());
  app.engine('.hbs', exphbs({
    layoutsDir: 'src/views/layout',
    partialsDir: 'src/views/partials',
  }));
  app.set('view engine', '.hbs');
  app.set('views', 'src/views/');

  app.use(routes);

  app.listen( PORT , () => {
    logger(`Listening on localhost:${PORT}`);
  });
};
main();
