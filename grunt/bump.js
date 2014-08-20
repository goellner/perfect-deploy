/**
 * https://github.com/vojtajina/grunt-bump
 */

'use strict';
module.exports = {
	options: {
		files: ['package.json'],
		updateConfigs: [],
		commit: true,
		commitMessage: 'Release %VERSION%',
		commitFiles: ['package.json'],
		createTag: true,
		tagName: '%VERSION%',
		tagMessage: 'Version %VERSION%',
		push: true,
		pushTo: 'origin',
		gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d'
	}
};