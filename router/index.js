var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')

var main = require('./main/main')
var email = require('./email/email')

// url routing
router.get('/', function(req, res){
	console.log('indexjs / path loaded ')
	res.sendFile(path.join(__dirname,"../public/main.html"));
});

router.use('/main', main);
router.use('/email', email);

module.exports = router;