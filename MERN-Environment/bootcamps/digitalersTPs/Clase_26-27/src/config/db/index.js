const mongoose = require('mongoose');
const { log: logger } = require('console');
const {URL_DATABASE} = process.env;

module.exports = async () => {
 await mongoose.connect(URL_DATABASE);
 logger(`Database connected`);
};
