const { MongoClient, ObjectId } = require('mongodb');

const { DATABASE_URL } = process.env;

const { log: logger } = require('console');

class MongoDb {
  constructor() {
    this.client = new MongoClient(DATABASE_URL);
  }

  set db(dbName) {
    this.clientDb = this.client.db(dbName);
  }

  get db() {
    return this.clientDb;
  }

  async connect() {
    await this.client.connect();
    this.db = 'sockets';
    logger('Mongodb connected to db socket');
  }

  findById(collection, id) {
    return this.db.collection(collection).findOne({ _id: ObjectId(id) });
  }
}

let mongodbClient;
module.exports = (() => {
  if (!mongodbClient) {
    mongodbClient = new MongoDb();
  }
  return mongodbClient;
})();
