require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const { info: logger } = require('console');

const { NODE_ENV, PORT } = process.env;

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  if( NODE_ENV === 'local' ) app.use(cors());

  app.listen(PORT, ()=>{
    logger(`Router is running on localhost: ${PORT}`);
  });
};

main();
