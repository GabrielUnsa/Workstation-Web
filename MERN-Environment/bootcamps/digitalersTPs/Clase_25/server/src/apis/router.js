const { Router } = require('express');
const wordApis =  require('./word/router');
const router = Router();

router.use('/api', [wordApis]);
module.exports = router;
