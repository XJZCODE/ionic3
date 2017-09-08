// var db = require('../models/db');
var express = require('express'),
actions = require('../actions/methods');

var router = express.Router();
router.post('/authenticate',actions.authenticate);
router.post('/adduser', actions.addNew);


module.exports=router;