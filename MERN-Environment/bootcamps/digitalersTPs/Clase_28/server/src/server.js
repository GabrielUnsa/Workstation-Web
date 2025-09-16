/* Primeras Configuraciones antes de modularizarlo
const httpServer = require("http").createServer();
const io = require("socket.io")(httpServer, {
  cors: {
    origin: ["http://127.0.0.1:5500", "http://localhost:550"],
    allowedHeader: ["*"],
    credential: false,
  }
});

io.on("connection", (socket) => {
  
  console.log('Conectamos el socket con el id: ', socket.id);

  // socket.on('msg:input', (msg) => {
  //   socket.emit('msg:response', `New item added to the list: ${msg}`);
  // });

  socket.on("disconnect", (reason) => {
    console.log(`Socket disconnected ${socket.id}, Reason: ${reason}`)
  });
});

httpServer.listen(5000, () => {
  console.log('Listening on port 5000');
}); */

const httpServer = require ("http").createServer();

const createApp = require('./app');
const createSocket = require('./socket');
const { app: { socketsMiddleware }} = require('./middlewares');

let sockets = [];

const main = async () => {
  const io = await createSocket(httpServer);

  io.on('connection', socket =>{
    sockets[socket.id] = socket;
    socket.on('disconnect', () => {
      delete sockets[socket.id];
    });
  });

  const app = await createApp();
  app.use(socketsMiddleware(sockets));

  app.get('/', (req, res) => {
    res.json({ sockets: req.sockets });
  });

  [[app, 'App', 4000], [httpServer, 'Socket', 5000]].forEach(([server, name, port]) => {
    server.listen(port, () => {
      console.log(`[${name}] Listening on port [${port}]`);
    });
  });

};

main();

