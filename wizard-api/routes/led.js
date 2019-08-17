var express = require('express');
var router = express.Router();

var LedService = require('../services/ledService')

/* GET users listing. */
router.get('/', LedService.index);

module.exports = router;
