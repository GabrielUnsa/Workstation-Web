require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const { info: logger } = require('console');

const { connection } = require('./db/conn');
const apiRouter = require('./api/router');

const { NODE_ENV, PORT } = process.env;

const main = async () => {
  await connection();
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  if (NODE_ENV === 'local') app.use(cors());

  app.use([apiRotuer]);

  //eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (err === 'Could no authenticate the curret service') return res.status(401).json({ message: err });
    return res.status(500).json({ message: err });
  });

  app.listen(PORT, () =>{
    logger(`Router is running on localhost: ${PORT}`);
  });
};
main();
