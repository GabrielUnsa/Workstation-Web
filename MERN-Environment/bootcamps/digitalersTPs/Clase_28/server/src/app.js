const express = require('express');
const cors = require('cors');
const { corsConfig } = require('./config');
const app = express();

module.exports = async () => {

    app.use(cors(corsConfig));

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    return app;
};