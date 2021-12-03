const express = require('express');
const router= express.Router();
const blogController = require('../app/controller/blogController');

router.get('/:id', blogController.blog_detail);
router.get('/', blogController.blog);

module.exports= router;