//main.js: Main entry point for the linux, express, and node stack.

var requirejs = require("requirejs");
var config = require("./require_config");

require.config(config);

require([], function() {});
