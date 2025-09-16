const { MongoClient } = require('mongodb');

const { DB_URL, DB_NAME } = process.env;

class MongoDbClient {
  constructor(dbName) {
    this.dbName = dbName;
  }

  async connect() {
    const client = new MongoClient(DB_URL);
    await client.connect();
    return client.db(this.dbName);
  }
}

let database;
module.exports = async () => {
  if (!database) {
    console.log('pass here');
    const mongoClient = new MongoDbClient(DB_NAME);
    database = await mongoClient.connect();
  }
  return database;
};
