const { MongoClient } = require('mongodb');
const { info: logger } = require('console');

const { MONGODB_URL, MONGODB_DBNAME } = process.env;

const mongoClient = new MongoClient(MONGODB_URL);

const collections = {};

const connection = async () => {
  await mongoClient.connect();
  const db = mongoClient.db(MONGODB_DBNAME);

  collections.user = db.collection('users');

  logger('Mongo database connected on localhost:27017');
};

module.exports = {
  connection,
  collections,
};
