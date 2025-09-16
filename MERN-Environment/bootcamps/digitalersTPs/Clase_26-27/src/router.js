const { Router } = require('express');
const userApis = require('./api/user/router');

const router = Router();

router.use('/api', [userApis]);
module.exports = router;