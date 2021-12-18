const express = require('express');
const router = express.Router();
const adminController = require('../app/controller/admin/adminController');
const createController = require('../app/controller/admin/creatController');
const updateController = require('../app/controller/admin/updateController');

router.get('/product/update', updateController.update);
router.post('/product/store', createController.store);
router.get('/product/create', createController.create);
router.get('/', adminController.admin);

module.exports = router;