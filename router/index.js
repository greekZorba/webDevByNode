var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')

var main = require('./main/main')
var email = require('./email/email')
var join = require('./join/index')
var calculator = require('./calculator/calculator')

// url routing
router.get('/', function(req, res){
	console.log('indexjs / path loaded ')
	res.sendFile(path.join(__dirname,"../public/main.html"));
});

router.use('/main', main);
router.use('/email', email);
router.use('/join', join);
router.use('/calculator', calculator);

module.exports = router;