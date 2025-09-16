const { Router } = require('express');

const getProduct = require('./get');
const createProduct = require('./post');

const router = Router();

router.route('/product')
  .get(getProduct)
  .post(createProduct);

module.exports = router;
