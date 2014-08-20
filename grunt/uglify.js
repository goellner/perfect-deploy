/**
 * https://github.com/gruntjs/grunt-contrib-uglify
 */

'use strict';
module.exports = {
	dist: {
		files: {
			'<%= package.basedir %>/assets/dist/js/scripts.min.js': [
				'<%= package.basedir %>/assets/dist/js/scripts.js'
				],
			'<%= package.basedir %>/assets/dist/js/vendor/jquery.min.js': [
				'<%= package.basedir %>/assets/src/bower_components/jquery/jquery.js'
				],
			'<%= package.basedir %>/assets/dist/js/vendor/require.min.js': [
				'<%= package.basedir %>/assets/src/bower_components/requirejs/require.js'
				]
		},
		options: {
			//preserve licencing information
			preserveComments : 'some',
			mangle: true,
			compress: true,
			beautify: false,
			report: 'min'
			// JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
			// sourceMap: 'htdocs/app/themes/hundebande/assets/js/scripts.min.js.map',
			// sourceMappingURL: '/app/themes/roots/htdocs/app/themes/hundebande/assets/js/scripts.min.js.map'
		}
	},
	development: {
		files: {
			'<%= package.basedir %>/assets/dist/js/scripts.min.js': [
				'<%= package.basedir %>/assets/dist/js/scripts.js'
				],
			'<%= package.basedir %>/assets/dist/js/vendor/jquery.min.js': [
				'<%= package.basedir %>/assets/src/bower_components/jquery/jquery.js'
				],
			'<%= package.basedir %>/assets/dist/js/vendor/require.min.js': [
				'<%= package.basedir %>/assets/src/bower_components/requirejs/require.js'
				]
		},
		options: {
			preserveComments : 'all',
			mangle: false,
			compress: false,
			beautify: true,
			report: false,
			// JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
			// sourceMap: 'htdocs/app/themes/hundebande/assets/dist/js/scripts.min.js.map',
			sourceMap: true
			// sourceMappingURL: '/app/themes/roots/htdocs/app/themes/hundebande/assets/dist/js/scripts.min.js.map'
		}
	}
};