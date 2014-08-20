/**
 *
 */

'use strict';

module.exports = {

		deploy: {
			files: {
				"./": "build/build.tar.gz"
			},
			options: {
				config: 'production'
			}
		}
};
