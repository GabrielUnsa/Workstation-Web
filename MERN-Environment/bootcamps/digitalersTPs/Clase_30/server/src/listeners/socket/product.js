const mainEmitter = require('../../events/main');
const mongodbClient = require('../../db/mongo');

module.exports = (sockets) => {
  mainEmitter.on('product: created', async (productId) => {
    const { _id: id, ...product } = await mongodbClient.findById('products', productId);
    await new Promise( (res) => {
      setTimeout( () => {
        res();
      }, 10000);
    });

    Object.values(sockets).forEach( (socket) => {
      socket.emit('product: created', {
        id,
        ...product,
      });
    });
  });
};
