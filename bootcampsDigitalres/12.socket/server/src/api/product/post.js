const mainEmitter = require('../../events/main');
const mongodbClient = require('../../db/mongo');

module.exports = async (req, res) => {
  const { body: { name, stock } = {} } = req;
  if (!name || Number.isNaN(Number(stock))) {
    return res.status(400).json({ error: 'Product should have name and stock' });
  }
  const cleanName = name.trim();
  const model = mongodbClient.db.collection('products');
  const product = await model.findOne({ name: cleanName });
  if (product) {
    res.status(400).json({ error: `Product with name ${cleanName} already exists` });
  }
  const { insertedId: productId } = await model.insertOne({
    name: cleanName,
    stock: Number(stock),
  });
  mainEmitter.emit('product:created', productId);
  return res.json({ message: 'Product created', id: productId });
};
