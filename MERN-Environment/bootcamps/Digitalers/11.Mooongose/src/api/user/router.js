const { Router } = require('express');

const get = require('./get');
const getById = require('./get-by-id');
const remove = require('./remove');
const put = require('./put');
const post = require('./post');

const router = Router();

router.route('/user')
  .post(post)
  .get(get);

router.route('/user/:id')
  .get(getById)
  .put(put)
  .delete(remove);

module.exports = router;
