const { Router } = require('express');

const post = require('./post');

const router = new Router();

router.route('/user')
  .post(post);

module.exports = router;
