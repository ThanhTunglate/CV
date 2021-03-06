const express = require('express');
const router= express.Router();
const productController = require('../app/controller/productController');

router.get('/find/:brand', productController.find_brand);
router.get('/detail/:id', productController.product_detail);
router.get('/', productController.product);

module.exports = router;