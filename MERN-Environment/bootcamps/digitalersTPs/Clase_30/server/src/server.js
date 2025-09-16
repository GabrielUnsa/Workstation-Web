require('dotenv-flow').config();
const httpServer = require('http').createServer();

require('./events/main');
const createApp = require('./app');
const createSocket = require('./socket');
const mongodb = require('./db/mongo');

const main = async () => {
  await mongodb.connect();
  await createSocket(httpServer);

  const app = await createApp();

  [[app, 'App', 4000], [httpServer, 'Socket', 5000]].forEach(([server, name, port]) => {
    server.listen( port, () => {
      console.log(`[${name}]: listening on port ${port}`);
    });
  });
};

main();
