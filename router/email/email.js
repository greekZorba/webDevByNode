var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

// Database setting
var connection = mysql.createConnection({
	host: 'localhost',
	port: '3306',
	user: 'zorba',
	password: 'zorba',
	database: 'testDB'
});

connection.connect();

// Router
router.post('/form', function(req, res){
	console.log(req.body.email);
	res.render('email.ejs', {'email': req.body.email});
});

router.post('/ajax', function(req,res){
	var email = req.body.email;
	var responseData = {};

	var query = connection.query('select user_name from node_inflearn_user where user_email="'+ email +'"',function(err, rows){
		if(err) throw err;
		if(rows[0]){
			responseData.userName = rows[0].user_name;
			responseData.result = 'ok';
		}else{
			responseData.userName = '';
			responseData.result = 'none';
		}
		res.json(responseData);
	})
	
})

module.exports = router;