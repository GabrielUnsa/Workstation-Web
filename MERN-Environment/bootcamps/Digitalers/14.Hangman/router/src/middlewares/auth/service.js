const redis = require('redis');
const { promisify } = require('util');

const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);

module.exports = async (req, res, next) => {
	const { headers: { 'service-name': serviceName, 'service-token': serviceToken } } = req;
	const token = await getAsync(`${serviceName}ServiceToken`);
	return token == serviceToken ? next(): next('Could not authenticate the current service');
};
