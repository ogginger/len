//main.js: Main entry point for the linux, express, and node stack.

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"file",
	"express"
], function(
	file,
	express,
	IndexTemplate
) {
	console.log("main.js initialized successfully!");
	var app = express();

	app.get("/", function( request, response ) {
		file.get( __dirname + "/html/index.html" ).then(function( Body ) {
			response.send( Body );
		});
	});

	app.get("/*", function( request, response ) {
		file.get( __dirname + "/html/" + request.path ).then(function( Body ) {
			response.send( Body );
		}).catch(function( error ) {
			response.send( error );
		});
	});

	app.listen( 80, function() {
		console.log("CDN started. Listening on port 80.");
	});
});
