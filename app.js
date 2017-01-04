var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) { res.status(200).send("Hello Worlds!"); });

app.listen(port, function() {
  console.log("Listening on port " + port);
})

app.post('/hello', function(req, res, next){
  var userName = req.body.user_name
})