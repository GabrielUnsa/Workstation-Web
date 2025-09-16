const socketIO = require('socket.io');

const { corsConfig } = require('./config');
const socketListeners = require('./listeners/socket');

const sockets = {};

Object.values(socketListeners).forEach( (listener) => {
  listener(sockets);
});

module.exports = async (httpServer) => {
  const io = socketIO(httpServer, {
    cors: corsConfig,
  });
  
  io.on('connection', (socket) => {
    console.log('Socket Id: ', socket.id);
    sockets[socket.id] = socket;

    socket.on('disconnect', () => {
      delete sockets[socket.id];
    });
  });
  return io;
};
