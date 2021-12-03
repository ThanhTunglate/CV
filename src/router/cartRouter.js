const cartController = require('../app/controller/cartController');
const express = require('express');
const router = express.Router();

router.get('/', cartController.cart);

module.exports = router;