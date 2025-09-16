const express = require('express');
const cors = require('cors');
const { log: logger } = require('console');
const routes = require('./router');

const app = express();
const PORT = 4000;

const main = async () => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  await routes(app);
  app.listen(PORT, () => {
    logger(`Listening on port ${PORT}`);
  });
};

main();
