var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.listen(3000, function(){
 console.log('server listening');
});

app.use(express.static('assignment'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

app.get('/search', function(req,res){
    res.sendFile(__dirname+'/assignment/searchAssign.html');
});

app.post('/send_search_text', function(req,res){

    res.render('assignmentView.ejs', req.body);
});

app.post('/receive_ajax', function(req, res){
    console.log('ajax json data: '+JSON.stringify(req.body))
})