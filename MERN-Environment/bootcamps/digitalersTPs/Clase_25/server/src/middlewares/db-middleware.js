const mongoClient = require('../libs/mongo');
module.exports = async (req, res, next) => {
  const database = await mongoClient();
  req.db = database;
  next();
};
