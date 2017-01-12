var express  = require('express'),
	app      = express(),
	http     = require('http').Server(app),
	io       = require('socket.io')(http);

// set the static files location (ex. /public/img will be /img for users)
app.use(express.static('public'));

//listen for users
var server = http.listen(3000, function(){
	console.log('TZ now running');
	console.log('listening on *:3000');
});