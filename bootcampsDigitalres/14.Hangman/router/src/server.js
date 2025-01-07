require('dotenv-flow').config();
const express = require('express');
const cors = require('cors');
const { info: logger } = require('console');
const fetch = require('node-fetch');

const serviceAuthMdw = require('./middlewares/auth/service');

const { NODE_ENV, PORT } = process.env;

const main = async () => {
	const app = express();
	
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	if (NODE_ENV === 'local') app.use(cors());

	app.use(serviceAuthMdw);

	app.all('/api/*', async (req, res) => {
		const serviceName = req.url.replace('/api/', '').split(/\/|\?/)[0].toUpperCase();
		const baseServiceUrl = process.env[`${serviceName}_SERVICE_URL`];

		const response = await fetch(
			`${baseServiceUrl}${req.url}`,
		);

		const responseJson = await response.json();
		return res.status(response.status).json(responseJson);
	});

	// eslint-disable-next-line  no-unused-vars
	app.use((err, req, res, next) => {
		if (err === 'Could not authenticate the current service') {
			return res.status(401).json({ message: err });
		}

		return res.status(500).json({ message: err });
	});

	app.listen(PORT, () => {
		logger(`Router is running on localhost:${PORT}`);
	});
};

main();
