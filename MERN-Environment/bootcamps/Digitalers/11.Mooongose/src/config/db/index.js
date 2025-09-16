const mongoose = require('mongoose');
const { log: logger } = require('console');

const { DATABASE_URL } = process.env;

module.exports = async () => {
  await mongoose.connect(DATABASE_URL);
  logger(`Database connected to ${DATABASE_URL}`);
};
