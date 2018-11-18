var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

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
router.get('/', function(req, res){
	console.log('join index connect success');
	res.render('join.ejs', {message:'임시'});
});

passport.use('local-join', new LocalStrategy({
	usernameField:'email',
	passwordField:'password',
	passReqToCallback: true
	}, function(req, email, password, done){
		console.log('local-join callback called')
	}
));

// router.post('/', function(req, res){
// 	var body = req.body;
// 	var email = body.email;
// 	var name = body.name;
// 	var password = body.password;
	
// 	var sql = {user_name: name, user_email: email, user_password:password};
// 	var query = connection.query('insert into node_inflearn_user set ?', sql, function(err,rows){
// 		if(err){ throw err;}	
// 		else{
// 			res.render('welcome.ejs', {'seq': rows.insertId, 'name': name});
// 		}
// 	})
// })
 
module.exports = router;