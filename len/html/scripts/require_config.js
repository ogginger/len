//require_config.js: Requirejs configuration.

module.exports = {
        nodeRequire: require,
        baseUrl: ".",
        paths: {},
        bundles: {},
	suppress: {
		nodeShim: true
	},
	shim: {}
};
