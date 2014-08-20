/**
 * https://github.com/sindresorhus/grunt-concurrent
 *
 * As a speed enhancement execute tasks at the same time. These sets of tasks
 * are called by aliases.yaml. Please consider carefully which tasks can run
 * concurrently as some tasks are based on the output of other tasks.
 */

'use strict';
module.exports = {
	//no newer: here, re-create all files

	//linting of source javascript, cleaning of distribution folder
	//install bower components via task instead of directly calling "bower install"
	//this way, all files are set up in the correct location (which is set up via package.json)
	first: ['jshint', 'clean:dist', 'modernizr'],

	//generate css files, sprites and optimize images, concatenate javascript files
	//concatened scripts will be used for unit testing in next step
	second: ['sass:dist', 'sprite', 'imagemin', 'concat', 'copy'],

	//set vendor-prefixes in generated css, do unit tests
	third: ['autoprefixer', 'mocha'],

	//minify javascript
	fourth: ['uglify:dist', 'csslint:lax'],

	//versioning of wordpress files once css and javascript is ready
	fifth: ['version', 'notify:build'],

	//only watch for newer files for development. Actually, only the watch tasks should look for newer files...
	firstDevelopment: ['newer:jshint', 'clean:dist', 'modernizr'],

	secondDevelopment: ['sass:development', 'sprite', 'newer:imagemin', 'concat'],

	//set vendor-prefixes in generated css on newer files, do unit tests
	thirdDevelopment: ['newer:autoprefixer', 'mocha'],

	//minify javascript: don't compress, preserve comments, add sourcemap
	fourthDevelopment: ['uglify:development', 'csslint:strict'],

	//versioning of wordpress files once css and javascript is ready
	fifthDevelopment: ['version', 'notify:development'],

	//ask for safety reason
	firstQuestion: ['prompt:sass'],
	secondQuestion: ['sass:development']
};