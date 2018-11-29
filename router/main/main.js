var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')

// main page only allows to access when it owns session info(login info)
router.get('/', function(req, res){
    console.log('main.js connect success', req.user);
    var id = req.user;
    if(!id) res.render('login.ejs');
    // res.sendFile(path.join(__dirname, "../../public/main.html"));
    res.render('main.ejs', {'id':id});
});

module.exports = router;