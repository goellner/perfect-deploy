/**
 * Live reloading: https://github.com/gruntjs/grunt-contrib-watch#live-reloading
 */

'use strict';
module.exports = {

	sass: {
		files: [
			'<%= package.basedir %>/assets/src/scss/*.scss',

			//either include all scss-files or do it selectively (the latter is recommended...)
			'<%= package.basedir %>/assets/src/bower_components/bootstrap-sass/scss/*.scss',

			'<%= package.basedir %>/assets/src/scss/iconfont/*.scss'
		],
		tasks: ['clean:css', 'newer:sass:development', 'newer:autoprefixer:dist', 'version']
	},
	js: {
		files: [
			'<%= jshint.all %>'
		],
		tasks: ['clean:js', 'newer:jshint', 'concat', 'uglify:development', 'version', 'notify:watch']
	},
	livereload: {
		// Browser live reloading
		options: {
			livereload: true
		},
		files: [
			'<%= package.basedir %>/assets/dist/css/*.css',
			'<%= package.basedir %>/assets/dist/js/*.js',
			'<%= package.basedir %>/assets/dist/img/*.*',
			'<%= package.basedir %>/templates/*.php',
			'<%= package.basedir %>/*.php'
		]
	}
};