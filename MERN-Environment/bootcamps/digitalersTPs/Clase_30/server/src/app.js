const express = require('express');
const cors = require('cors');

const { corsConfig } = require('./config');
const apiRouter = require('./api/router');

const app = express();

module.exports = async () => {
  app.use(cors(corsConfig));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(apiRouter);
  return app;
};
