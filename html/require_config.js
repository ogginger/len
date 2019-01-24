//require_config.js: Requirejs configuration.

module.exports = {
        nodeRequire: require,
        baseUrl: ".",
        paths: {
		"text": "lib/text"
	},
        bundles: {},
	suppress: {
		nodeShim: true
	},
	shim: {}
};
