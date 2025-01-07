const express = require('express');
const cors = require('cors');
const { log: logger } = require('console');
const router = require('./router');
const app = express();
const PORT = 4000;

const main = async() => {
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(cors());
	await router(app);
	app.listen(PORT, () => {
		logger(`Listening on port ${PORT}`);
	});
};

main();
