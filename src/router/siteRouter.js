const express = require('express');
const router= express.Router();
const siteController = require('../app/controller/siteController');

router.get('/login', siteController.login);
router.get('/signup', siteController.signup);

module. exports = router;