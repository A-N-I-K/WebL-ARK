var Rcon = require("./node-rcon");

var conn = new Rcon('192.168.0.196', 32330, 'quagganland');

conn.on('auth', function() {
	console.log("Authed!");

}).on('response', function(str) {
	console.log("Got response: " + str);

}).on('end', function() {
	console.log("Socket closed!");
	process.exit();

});

conn.connect();

c = 5

/**
 * 
 */

function add(a, b) {

	return a + b + c

}