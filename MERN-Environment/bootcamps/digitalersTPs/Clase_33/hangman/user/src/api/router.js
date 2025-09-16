const { Router } = require('express');

const user = require('./user/router');

const router = new Router();

router.use('/api', [user]);

module.exports = router;

