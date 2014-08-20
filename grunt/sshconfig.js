/**
 * In this file the different environments are declared. For safety reasons, the credentials are in secret.json
 * secret.json is not commited to the .git directory
 * Authentification is set to SSH Keys, so you need to have your public key on the server!
 *
 * TODO: maybe add database options to the environments for syncing options ?
 */

'use strict';

var basePath = 'build/';

module.exports = {

	// example secret.json:
	/* ------------------------------------------------------
	{

		"server": {
			"production": {
				"host": "domain.com",
				"user": "admin",
				"path": "/var/www/domain.com/"
			},
			"staging": {
				"host": "domain.com",
				"user": "admin",
				"path": "/var/www/domain.com/"
			},
			"testing": {
				"host": "testing.com",
				"user": "testuser",
				"path": "/var/www/testing.com/"
			},
			"development": {
				"host": "dev.domain.com",
				"user": "admin",
				"path": "/var/www/development.domain.com/"
			}
		}

	}

	------------------------------------------------------ */

	production: {
		host: '<%= secret.server.production.host %>',
		port: 22,
		username: '<%= secret.server.production.user %>',
		path: '<%= secret.server.production.path %>',
		agent: process.env.SSH_AUTH_SOCK,
		showProgress: true,
		srcBasePath: basePath
	},
	staging: {
		host: '<%= secret.server.staging.host %>',
		port: 22,
		username: '<%= secret.server.staging.user %>',
		path: '<%= secret.server.staging.path %>',
		agent: process.env.SSH_AUTH_SOCK,
		showProgress: true,
		srcBasePath: basePath
	},
	testing: {
		host: '<%= secret.server.testing.host %>',
		port: 22,
		username: '<%= secret.server.testing.user %>',
		path: '<%= secret.server.testing.path %>',
		agent: process.env.SSH_AUTH_SOCK,
		showProgress: true,
		srcBasePath: basePath
	},
	development: {
		host: '<%= secret.server.development.host %>',
		port: 22,
		username: '<%= secret.server.development.user %>',
		path: '<%= secret.server.development.path %>',
		agent: process.env.SSH_AUTH_SOCK,
		showProgress: true,
		srcBasePath: basePath
	}

};