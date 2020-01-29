//main.js: Main entry point for index.html.

requirejs.config({
	nodeRequire: require,
	baseUrl: ".",
	paths: {},
	bundles: {},
	suppress: {
		nodeShim: true
	},
	shim: {}
 });

requirejs([], function() {
	console.log("main.js initialized successfully!");
});
