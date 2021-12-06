const express = require('express')
const router = express.Router()
const product = require('../controller/product');

router.post('/',product.create);
router.get('/',product.findAll);
router.put('/:id',product.put);
router.delete('/:id',product.delete);

module.exports = router
