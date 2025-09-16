require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const { log: logger } = require('console');
const dbMiddleware = require('./middlewares/db-middleware');
const mongoDb = require('./libs/mongo');
const apiRoutes = require('./apis/router');

const app = express();
const { NODE_ENV, PORT } = process.env;
const main = async () => {
  await mongoDb();
  if (NODE_ENV === 'local') {
    app.use(cors());
  }
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(dbMiddleware);
  app.use(apiRoutes);
  /*  app.get('/', async (req, res) => {
    await req.db.collection('testing').insertOne({
      test: 'testing',
    });
    res.send('Hello World!');
  });
*/

  app.listen(PORT, () => {
    logger(`Application listening on port ${PORT}`);
  });
};

main();
