const apiRoutes = require('./api');
module.exports = async( app ) => {
	app.use('/api', apiRoutes );
};
