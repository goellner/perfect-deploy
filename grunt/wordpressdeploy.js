/**
 *
 */

'use strict';
module.exports = {
	options: {
		backup_dir: "backups/"
		},
		production: {
			"title": "production",
			"database": "<%= secret.server.production.db_name %>",
			"user": "<%= secret.server.production.db_user %>",
			"pass": "<%= secret.server.production.db_password %>",
			"host": "<%= secret.server.production.db_host %>",
			"url": "<%= secret.server.production.url %>",
			"ssh_host": "<%= secret.server.production.user %>@<%= secret.server.production.host %>"
		},
		staging: {
			"title": "staging",
			"database": "<%= secret.server.staging.db_name %>",
			"user": "<%= secret.server.staging.db_user %>",
			"pass": "<%= secret.server.staging.db_password %>",
			"host": "<%= secret.server.staging.db_host %>",
			"url": "<%= secret.server.staging.url %>",
			"ssh_host": "<%= secret.server.staging.user %>@<%= secret.server.staging.host %>"
		},
		testing: {
			"title": "testing",
			"database": "<%= secret.server.testing.db_name %>",
			"user": "<%= secret.server.testing.db_user %>",
			"pass": "<%= secret.server.testing.db_password %>",
			"host": "<%= secret.server.testing.db_host %>",
			"url": "<%= secret.server.testing.url %>",
			"path": "<%= secret.server.testing.path %>",
			"ssh_host": "<%= secret.server.testing.user %>@<%= secret.server.testing.host %>"
		},
		development: {
			"title": "development",
			"database": "<%= secret.server.development.db_name %>",
			"user": "<%= secret.server.development.db_user %>",
			"pass": "<%= secret.server.development.db_password %>",
			"host": "<%= secret.server.development.db_host %>",
			"url": "<%= secret.server.development.url %>",
			"path": "<%= secret.server.testing.development %>",
			"ssh_host": "<%= secret.server.development.user %>@<%= secret.server.development.host %>"
		},
		local: {
			"title": "local",
			"database": "<%= secret.server.local.db_name %>",
			"user": "<%= secret.server.local.db_user %>",
			"pass": "<%= secret.server.local.db_password %>",
			"host": "<%= secret.server.local.db_host %>",
			"url": "<%= secret.server.local.url %>"
		}

};