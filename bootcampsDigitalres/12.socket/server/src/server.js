const httpServer = require('http').createServer();
const { log: logger } = require('console');

const createApp = require('./app');
const createSocket = require('./socket');

const { app: { socketsMiddleware } } = require('./middlewares');

let sockets = {};
const main = async () => {
  const io = await createSocket(httpServer);

  io.on('connection', socket => {
    logger('Socket ID: ', socket.id);
    sockets[socket.id] = socket;
    logger('Sockets inside: ', sockets);
    socket.on('disconnect', () => {
      delete sockets[socket.id];
    });
  });

  const app = await createApp();

  logger('Sockets outside: ', sockets);
  app.use((req, res, next) => {
    req.sockets = Object.values(sockets);
    next();
  });

  app.get('/', (req, res) => {
    res.json({ sockets: req.sockets.map(({ id }) => id) });
  });

  ;[[app, 'App', 4000], [httpServer, 'Socket', 5000]].forEach(([server, name, port]) => {
    server.listen(port, () => {
      logger(`[${name}]: listening on port ${port}`);
    });
  });
};

main();
