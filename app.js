var express = require('express')
var app = express()
var bodyParser = require('body-parser');
var mysql = require('mysql');
var connection = mysql.createConnection({
	/**DB 정보 */
});

connection.connect();
// .then(conn => {
// 	conn.query('SELECT "Hello world!" as my_message') // Execute a query                                                                                                                                
// 		.then(result => { // Print the results                                                                                                                                            
// 			for (row of result) {
// 				console.log(row)
// 			}
// 		})
// 		.then(conn.destroy()) // Close the connection                                                                                                                                     
// })

app.listen(3000, function() {
	console.log("start! express server on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

// url routing
app.get('/', function(req, res){
	
	res.sendFile(__dirname+"/public/main.html");
});

app.get('/main', function(req, res){
	
	res.sendFile(__dirname+"/public/main.html");
});
 
app.post('/email_post', function(req, res){
	console.log(req.body.email);
	// res.send('<h1> what did you type your email address? </h1>'+req.body.email);
	res.render('email.ejs', {'email': req.body.email});
});

app.post('/ajax_send_email', function(req,res){
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
