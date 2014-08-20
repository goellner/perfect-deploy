/**
 * https://github.com/gruntjs/grunt-contrib-imagemin
 *
 * Image optimization for gif, jpeg and png files.
 */

'use strict';
module.exports = {
	
	dist: { // Another target
		options: { // Target options
			optimizationLevel: 3,  //png. Select optimization level between 0 and 7.
			progressive: true, //jpg. Lossless conversion to progressive.
			interlaced: true //gif. Interlace gif for progressive rendering.
		},
		files: [{
			expand: true, // Enable dynamic expansion
			cwd: '<%= package.basedir %>/assets/src/img/', // Src matches are relative to this path
			src: '*.{gif,jpeg,jpg,png}', // Actual patterns to match, with subdirectories: {,*/}*.{gif,jpeg,jpg,png}
			dest: '<%= package.basedir %>/assets/dist/img/' // Destination path prefix
		}]
	}
};