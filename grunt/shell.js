/**
 * https://github.com/sindresorhus/grunt-shell
 *
 * Shell commands for building a project, initialising the project and syncing of assets via rsync.
 */

'use strict';

module.exports = {
	build: {
		command: [
			// Deletes the old build folder, if there is one
			'rm -rf build',
			// Creates the build directory and cd into it
			'mkdir build',
			'cd build',
			// Clones the Repository from the Repo-Url and makes a checkout of the Version defined in package.json
			'git clone <%= secret.repository.url %> .',
			'git checkout <%= package.version %>',
			// Does a composer install, npm install and a grunt ( grunt task without "dev" )
			// The grunt task alone should always be the production version
			'composer install',
			'npm install',
			'grunt bower:install',
			'grunt',
			// Change into htdocs dir and make a build.tar.gz of all the files in it
			'cd htdocs',
			'tar -zcvf ../build.tar.gz .'
		].join('&&')
	},
	init: {
		command: [
			// do a composer install
			'composer install',

			'grunt bower:install',

			// grunt all the things
			'grunt'
		].join('&&')
	},
	syncDown: {
		command: [
			// sync from server
			'rsync -avzcC --stats <%= grunt.option("whichServerUser") %>@<%= grunt.option("whichServer") %>:<%= grunt.option("whichServerPath") %>/shared/uploads/* htdocs/app/uploads/'
		].join('&&')
	},
	syncUp: {
		command: [
			// sync to server
			'rsync -avzcC --stats htdocs/app/uploads/* <%= grunt.option("whichServerUser") %>@<%= grunt.option("whichServer") %>:<%= grunt.option("whichServerPath") %>/shared/uploads/'
		].join('&&')
	},

};