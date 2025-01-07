const { Router } = require('express');
const wordRoutes = require('./words');
const router = Router();
router.use('/words', wordRoutes);
module.exports = router;
