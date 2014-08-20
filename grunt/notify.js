/**
 * https://github.com/dylang/grunt-notify
 *
 * Growl user notifications.
 */

'use strict';
module.exports = {
	watch: {
		options: {
			message: 'Watch task finished running \nYOU ARE AWESOME!', //required
		}
	},
	build: {
		options: {
			message: 'Release build complete.'
		}
	},
	development: {
		options: {
			message: 'Development build complete.'
		}
	},
	deploy: {
		options: {
			message: 'Project successfully deployed.'
		}
	},
};