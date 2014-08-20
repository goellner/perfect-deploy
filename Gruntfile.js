/**
 * Nothing to see here. Grunt-tasks are automatically loaded from grunt/-folder.
 * Some tasks need to be renamed in jitGrund.
 * Tasks are indivually configured in grunt/ and called in aliases-yaml and concurrent.js.
 *
 * TODO: sourcemap Generierung für JS-Files
 * TODO: Fix mysqldump feature
 */

'use strict';

module.exports = function(grunt) {

	// require it at the top and pass in the grunt instance
	require('time-grunt')(grunt);


	//load tasks based on dependencies in package.json. Actual task configuration in /grunt/TASKNAME.js
	require('load-grunt-config')(grunt, {

		init: true, //auto grunt.initConfig
		data: { //data passed into config.  Can use with <%= variableName %>
			variableName: false,
			secret: grunt.file.readJSON('secret.json')
		},
		jitGrunt: {
			sprite: 'grunt-spritesmith',
			version: 'grunt-wp-assets',
			sshexec: 'grunt-ssh',
			sshconfig: 'grunt-ssh',
			sftp: 'grunt-ssh',
			bower: 'grunt-bower-task',
			pull_db: 'grunt-wordpress-deploy',
			push_db: 'grunt-wordpress-deploy'
		}
	});
};
