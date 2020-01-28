//main.js: Main entry point for the linux, express, and node stack.

var requirejs = require("requirejs");
var config = require("./require_config");

requirejs.config(config);

requirejs([
	"express",
	"text!templates/index.html"
], function(
	express,
	IndexTemplate
) {
	console.log("main.js initialized successfully!");
	var app = express();

	app.get("/", function( request, response ) {
		response.send( IndexTemplate );
	});

	app.listen( 80, function() {
		console.log("CDN started. Listening on port 80.");
	});
});
