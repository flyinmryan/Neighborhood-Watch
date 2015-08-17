var express = require('express');

var path = require('path');

var app = express();

var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, './client')));
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require('./config/mongoose.js');

require('./config/routes.js')(app);


app.listen(8888, function() {
  console.log('cool stuff on: 8888');
});