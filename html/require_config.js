//require_config.js: Requirejs configuration.

module.exports = {
        nodeRequire: require,
        baseUrl: ".",
        paths: {
		"text": "lib/text",
		"file": "lib/file.min",
		"rsvp": "lib/rsvp.min",
		"log": "lib/log.min"
	},
        bundles: {},
	suppress: {
		nodeShim: true
	},
	shim: {}
};
