var express = require('express')
var app = express()
var router = express.Router()
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

router.get('/list', function(req, res){
    res.render('movie.ejs')
})

// 1. get
router.get('/', function(req, res){
    var responseData = {};

	var query = connection.query('select title from movie',function(err, rows){
		if(err) throw err;
		if(rows.length){
            responseData.result = 1;
            responseData.data = rows;
		}else{
			responseData.result = 0;
		}
		res.json(responseData);
	})
})

module.exports = router;