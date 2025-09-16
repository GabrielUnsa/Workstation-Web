import './config/environment';
// import dontenv from 'dotenv-flow';
import express from 'express';
import { log as logger } from 'console';
import apiRouter from './api/router';

// dontenv.config();

const { PORT } = process.env;

const main = async () => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use([apiRouter]);
  app.listen(PORT, () => {
    logger(`App is running in localhost:${PORT}`);
  });
};

main();
