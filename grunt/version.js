/**
 * Configures grunt-wp-assets task.
 * Adds hash to filename, updates PHP-Script with new filenames
 *
 * TODO: enable hashing for generated images
 */

'use strict';
module.exports = {
	assets: {
		options: {
			algorithm: 'sha1',
			length: 6,
			format: false,
			rename: true,
			manifest: '<%= package.basedir %>/assets/dist/manifest.json',
		},
		files: {
			'<%= package.basedir %>/lib/scripts.php': [
				'<%= package.basedir %>/assets/dist/css/main.min.css',
				'<%= package.basedir %>/assets/dist/js/scripts.min.js'
			]
		}
	}
};