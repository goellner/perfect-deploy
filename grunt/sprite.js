/**
 * https://github.com/Ensighten/grunt-spritesmith
 *
 * Generates spritesheet-files and CSS from individual image files.
 *
 * TODO: don't generate zero byte files if there are no images
 */

'use strict';
module.exports = {
	dist: {
		src: '<%= package.basedir %>/assets/src/img/sprites/*.png',
		destImg: '<%= package.basedir %>/assets/dist/img/spritesheet.png',
		destCSS: '<%= package.basedir %>/assets/src/sass/sprites.scss',
		padding: 2,
		cssFormat: 'scss',
		cssOpts: {
			functions: false
		},
	},
	distHD: {
		src: '<%= package.basedir %>/assets/src/img/sprites@2x/*.png',
		destImg: '<%= package.basedir %>/assets/dist/img/spritesheet@2x.png',
		destCSS: '<%= package.basedir %>/assets/src/sass/sprites@2x.scss',
		padding: 2,
		cssFormat: 'scss',
		cssOpts: {
			functions: false
		},
		cssVarMap: function (sprite) {
			sprite.name = sprite.name.replace(/@/,"-");
		}
	}
};