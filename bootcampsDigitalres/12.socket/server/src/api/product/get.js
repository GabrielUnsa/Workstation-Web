const mongodbClient = require('../../db/mongo');

module.exports = async (req, res) => {
  const model = mongodbClient.db.collection('products');
  const products = await model.find({}).toArray();
  const formattedProducts = products.map(({ _id: id, ...product }) => ({ id, ...product }));
  return res.json(formattedProducts);
};
