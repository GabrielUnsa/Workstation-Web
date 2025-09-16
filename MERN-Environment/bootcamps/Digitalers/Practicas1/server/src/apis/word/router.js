const { Router } = require('express');

const post = require('./post');
const { get, getById } = require('./get');
const put = require('./put');
const remove = require('./remove');

const router = Router();

router.route('/word')
  .get(get)
  .post(post);

router.route('/word/:id')
  .get(getById)
  .put(put)
  .delete(remove);

module.exports = router;
