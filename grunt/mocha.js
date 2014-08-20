/**
 * https://github.com/kmiyashiro/grunt-mocha
 *
 * Mocha unit testing. Use Chai (http://chaijs.com/) to describe your tests.
 */

'use strict';
var grunt = require('grunt');

module.exports = {
	test: {
		//This defines which HTML spec files to run using PhantomJS. 
		//These are the same files you would open to run tests in a browser.
		src: ['<%= package.basedir %>/assets/src/tests/**/*.html'],
		options: {

			//PhantomJS timeout in milliseconds.
			timeout: 10000,

			//Display a Growl notification when all tests successfully pass.
			growlOnSuccess: true,

			//grunt-mocha injects a script into the PhantomJS instance that loads your HTML spec files
			run: (typeof grunt.config('runMochaTest') === "undefined") ? true : grunt.config('runMochaTest'),

			//Call grunt.warn and exit the grunt task on the first failed test
			bail: false,
			
			//Fail and output script errors
			logErrors: false
		},
	},
};