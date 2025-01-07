const { Router } = require('express');
const product = require('./product/routes');

const router = Router();

router.use('/api', [product]);
module.exports = router;
