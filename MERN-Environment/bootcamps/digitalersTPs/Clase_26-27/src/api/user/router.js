const { Router } = require('express');
const get = require('./get');
const getById = require('./get-by-id');
const post = require('./post');
const put = require('./put');
const remove = require('./remove');

const router = Router(); 

router.route('/user')
    .get(get)
    .post(post);

router.route('/user/:id')
    .get(getById)
    .put(put)
    .delete(remove);

module.exports = router;
