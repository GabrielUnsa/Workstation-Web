const socketIO = require('socket.io');

const { corsConfig } = require('./config');

module.exports = async (httpServer) => {
  const io = socketIO(httpServer, {
    cors: corsConfig,
  });
  return io;
};
