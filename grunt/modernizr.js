/**
 * https://github.com/Modernizr/grunt-modernizr
 *
 * Builds a custom modernizr file based on the tests you use in your javascript files 
 * (plus some standard test defined below).
 */

'use strict';
module.exports = {
	dist: {
		// [REQUIRED] Path to the build you're using for development.
		"devFile" : "<%= package.basedir %>/assets/src/bower_components/modernizr/modernizr.js",

		// [REQUIRED] Path to save out the built file.
		"outputFile" : "<%= package.basedir %>/assets/dist/js/vendor/modernizr-custom.js",

		// Based on default settings on http://modernizr.com/download/
		"extra" : {
			"shiv" : true,
			"printshiv" : false,
			"load" : true,
			"mq" : false,
			"cssclasses" : true
		},

		// Based on default settings on http://modernizr.com/download/
		"extensibility" : {
			"addtest" : false,
			"prefixed" : false,
			"teststyles" : false,
			"testprops" : false,
			"testallprops" : false,
			"hasevents" : false,
			"prefixes" : false,
			"domprefixes" : false
		},

		// By default, source is uglified before saving
		"uglify" : true,

		// Define any tests you want to implicitly include.
		"tests" : [],

		// By default, this task will crawl your project for references to Modernizr tests.
		// Set to false to disable.
		"parseFiles" : true,

		// When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
		// You can override this by defining a "files" array below.
		// NOTE add files here if you develop your own classes in subdirectories
		"files" : {
			"src": ['<%= package.basedir %>/assets/src/js/**/*.js']
		},

		// When parseFiles = true, matchCommunityTests = true will attempt to
		// match user-contributed tests.
		"matchCommunityTests" : false,

		// Have custom Modernizr tests? Add paths to their location here.
		"customTests" : []
	}
};