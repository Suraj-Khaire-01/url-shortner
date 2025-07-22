const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController.js');

// Home page route
router.get('/', urlController.homePage);

// Shorten URL route
router.post('/shorten', urlController.shortenUrl);

// Redirect route
router.get('/:code', urlController.redirectUrl);

module.exports = router;