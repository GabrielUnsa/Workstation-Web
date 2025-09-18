const { MongoClient, ObjectId } = require('mongodb');

const { URL_DATABASE } = process.env;

class MongoDb{
  constructor(){
    this.client = new MongoClient(URL_DATABASE);
  }
  
  set db(dbName){
    this.clientDb = this.client.db(dbName);
  }

  get db(){
    return this.clientDb;
  }

  async connect(){
    await this.client.connect();
    this.db = 'sockets';
    console.log('Mongodb connected to db socket');
  }

  findById(collection, id){
    return this.db.collection(collection).findOne({ _id: new ObjectId(id) });
  }
};

let mongodbClient;
module.exports = (() => {
  if (!mongodbClient){
    mongodbClient = new MongoDb();
  }
  return mongodbClient;
})();
