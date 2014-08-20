/**
 * https://www.npmjs.org/package/grunt-dev-update
 */

'use strict';
module.exports = {
	main: {
		options: {
			updateType: 'force', //just report outdated packages
			reportUpdated: false, //don't report already updated packages
			semver: true, //use package.json semver rules when updating
			packages: { //what packages to check
				devDependencies: true, //only devDependencies
				dependencies: false
			},
			packageJson: null //find package.json automatically
		}
	}
};