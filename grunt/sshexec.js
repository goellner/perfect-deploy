/**
 *
 */

'use strict';

module.exports = {

	deploy: {
		command: [
				// after connecting to the server change into the right directory on the server
				// the grunt.option is set via the grunt prompt plugin
				'cd <%= grunt.option("whichServerPath") %>',
				'pwd',
				// create a shared directory and a release directory if they don't exist already and change into the release directory
				'mkdir -pv shared',
				'mkdir -pv shared/uploads',
				'mkdir -pv releases',
				// read symlink and write it to file. we keep it on the server for a future rollback
				'a=$(readlink current);b="releases/<%= package.version %>";if [ "$a" != "$b" ] ;then readlink current > .rollback;else echo same shit; fi',
				'cd releases',
				'pwd',
				// remove the directory with the name of the current version number and create a new one with the version number
				'rm -rfv <%= package.version %>',
				'mkdir -v <%= package.version %>',
				// unzip the build.tar.gz archive in the version folder
				'tar -zxf <%= grunt.option("whichServerPath") %>/build.tar.gz -C <%= grunt.option("whichServerPath") %>/releases/<%= package.version %>',
				// delete the archive
				'rm -rfv ../build.tar.gz',
				// Set the acces rights for folders
				'chmod -v 0755 ../releases',
				'chmod -v 0755 ../shared',
				'chmod -v 0755 ../shared/uploads',
				'find ./ -type d -print0 | xargs -0 chmod 755',
				'find ./ -type f -print0 | xargs -0 chmod 644',
				// symlink the newest release to the current folder. The server should always point in the current directory.
				'ln -sfnv releases/<%= package.version %> ../current',
				// count the directorys in the releases folder and give back the total count of the directorys
				'count=`find ./* -maxdepth 0 -type d | wc -l`',
				// calculate how much releases to delete
				// in package.json the variable "keepReleases" defines how many should be kept on the server
				'remove=$((count > <%= package.keepReleases %> ? count - <%= package.keepReleases %> : 0))',
				// execute the delete command and remove calculated number of directorys
				'find * -maxdepth 0 -type d | sed "s/^[0-9]\\./0&/; s/\\.\\([0-9]\\)$/.0\\1/; s/\\.\\([0-9]\\)\\./.0\\1./g; s/\\.\\([0-9]\\)\\./.0\\1./g" | sort -r | sed "s/^0// ; s/\\.0/./g" | tail -n $remove | xargs rm -rf {}',
				//

		].join(';'),
		options: {
			// gets the environment variable (e.g. "production") which is also set in grunt prompt
			config:'<%= grunt.option("whichServerEnv") %>'
		}
	},
	deployWP: {
		// commands only for Wordpress installations
		command: [
				// after connecting to the server change into the right directory on the server
				// the grunt.option is set via the grunt prompt plugin
				'cd <%= grunt.option("whichServerPath") %>',
				'pwd',
				// change into releases directory and current version directory
				'cd releases',
				'pwd',
				'cd <%= package.version %>',
				'pwd',
				// copy the wp-config-production.php to wp-config.php
				// same with .htaccess-production for example
				// symlink the uploads folder with shared/uploads
				'cp -v wp-config-<%= grunt.option("whichServerEnv") %>.php wp-config.php',
				'cp  -v .htaccess-<%= grunt.option("whichServerEnv") %> .htaccess',
				'ln -sfnv <%= grunt.option("whichServerPath") %>shared/uploads app/uploads'
			].join(';'),
			options: {
				config:'<%= grunt.option("whichServerEnv") %>'
			}
	},
	rollback: {
		command: [
			// after connecting to the server change into the right directory on the server
			// the grunt.option is set via the grunt prompt plugin
			'cd <%= grunt.option("whichServerPath") %>',
			'pwd',
			// Change into "releases" directory
			'cd releases',
			// Count the direcotorys and assign it to the variable "count"
			'count=`find ./* -maxdepth 0 -type d | wc -l`',
			// If the count is greater than "1" then symlink the current folder with the previous version, which is set in the .rollback file
			'if [ "$count" -gt 1 ]; then rollback=$(cat ../.rollback); ln -sfnv $rollback ../current; fi',
			// Count > 1 -> delete the first folder in the release directory. else exit with error.
			'if [ "$count" -gt 1 ]; then find * -maxdepth 0 -type d | sed "s/^[0-9]\\./0&/; s/\\.\\([0-9]\\)$/.0\\1/; s/\\.\\([0-9]\\)\\./.0\\1./g; s/\\.\\([0-9]\\)\\./.0\\1./g" | sort -r | sed "s/^0// ; s/\\.0/./g" | head -n1 | xargs rm -rfv {}; else echo There is just one release on the server! Can not execute the rollback command!; fi'
		].join(';'),
		options: {
			config:'<%= grunt.option("whichServerEnv") %>'
		}
	}
};

// TODO: exit code on failed rollback!
