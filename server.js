var express = require('express');

var path = require('path');

var app = express();

var bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, './client/static')));
//app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require('./config/mongoose.js');

require('./config/routes.js')(app);


// app.listen(8008, function() {
//   console.log('cool stuff on: 8008');
// });
var socket_id ;
var users = [];
var messages =[];
var server = app.listen(8008, function() {
 console.log("listening on port 8008");
})
var io = require('socket.io').listen(server) 
io.sockets.on('connection', function (socket) {

	socket_id = socket.id;
	// socket.on("hello", function(data) {
	// 	console.log(data.test);
	// })
	
	socket.on('got_new_message',function (data){
		//console.log(data);
		users.push({name: data.name, id: socket_id});
		//messages.push({user_name : data.name , message : data.message});
		//console.log(users);
		io.emit("post_new_message", {user: data.name , new_message: data.message})
	})

 	socket.on('disconnect', function () {
 		//console.log(socket.id);
 		var len = users.length;
 		var logged_out_user;
 		for(var i =0; i<len; i++){
 			if(socket.id === users[i].id)
 			{
 				logged_out_user = users[i].name ;
 			}
 		}
    	io.emit('user_left',{name : logged_out_user }); 
  	});
});