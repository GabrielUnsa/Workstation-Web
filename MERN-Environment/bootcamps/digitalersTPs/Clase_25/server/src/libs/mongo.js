const { MongoClient } = require('mongodb');
const { URL_MONGO_CONNECTION, DB_NAME } = process.env;

/*Patron de diseño Singleton*/

class MongoDBClient{
  constructor(dbName){
    this.dbName = dbName;
  }

  async connect(){
    const client = new MongoClient(URL_MONGO_CONNECTION);
    await client.connect();
    return client.db(this.dbName);
  }
}

let database;

module.exports = async () => {
  if(!database) { 
    const mongoClient = new MongoDBClient(DB_NAME);
    database = await mongoClient.connect();
  }
  return database;
};

