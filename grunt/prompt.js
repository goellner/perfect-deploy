/**
 * https://github.com/dylang/grunt-prompt
 *
 * Configures user input prompts. See aliases.yaml for tasks which run after the prompts.
 */

'use strict';
var grunt = require('grunt');

module.exports = {
	deployPrompt: {
		options: {
			questions: [
				{
					config: 'sftp.deploy.options.config',
					type: 'list',
					message: 'Which server do you want to deploy to?',
					choices: [
					{
						value: 'development',
						name: 'Development'.magenta +
						'   Deploy to development server (e.g. development.example.com)'
					},
					{
						value: 'testing',
						name: 'Testing'.magenta +
						'       Deploy to testing server (e.g. testing.example.com)'
					},
					{
						value: 'staging',
						name: 'Staging'.magenta +
						'       Deploy to staging server (e.g. staging.example.com)'
					},
					{
						value: 'production',
						name: 'Production'.magenta +
						'    Deploy to production / live server (e.g. www.example.com)'
					}
					]

				},
				{
					config: 'confirmDeploy',
					type: 'confirm',
					default: false,
					message: 'Are you sure you want to do deploy?'.red
				}
			],
			then: function(results){
				var answer = results['sftp.deploy.options.config'];

				var host = grunt.config.get('secret.server.'+answer+'.host');
				var user = grunt.config.get('secret.server.'+answer+'.user');
				var path = grunt.config.get('secret.server.'+answer+'.path');
				
				if(host  === "hostname" && user === "ssh-username" && host  === "serverpath"){
					grunt.fail.fatal('The selected server "' + answer +'" is not configured yet. Please do that first!');
				}

				else{
					if (results.confirmDeploy) {
						var whichServerPath = grunt.config.get('sshconfig.'+answer+'.path');
						grunt.option('whichServerPath', whichServerPath);
						grunt.option('whichServerEnv', answer);
					}
					else {
						grunt.fail.fatal('User aborted the deploy process!');
					}
				}
				

			},
		}
	},
	syncDown: {
		options: {
			questions: [
				{
					config: 'sftp.deploy.options.config',
					type: 'list',
					message: 'Which server do you want to sync from?',
					choices: [
					{
						value: 'development',
						name: 'Development'.magenta +
						'   Sync from development server (e.g. development.example.com)'
					},
					{
						value: 'testing',
						name: 'Testing'.magenta +
						'       Sync from testing server (e.g. testing.example.com)'
					},
					{
						value: 'staging',
						name: 'Staging'.magenta +
						'       Sync from staging server (e.g. staging.example.com)'
					},
					{
						value: 'production',
						name: 'Production'.magenta +
						'    Sync from production / live server (e.g. www.example.com)'
					}

					],

				},
				{
					config: 'confirmDeploy',
					type: 'confirm',
					default: false,
					message: 'Are you sure you want to do sync from this server?'.red
				}
			],
			then: function(results){
				var answer = results['sftp.deploy.options.config'];
				var host = grunt.config.get('secret.server.'+answer+'.host');
				var user = grunt.config.get('secret.server.'+answer+'.user');
				var path = grunt.config.get('secret.server.'+answer+'.path');
				
				if(host  === "hostname" && user === "ssh-username" && host  === "serverpath"){
					grunt.fail.fatal('The selected server "' + answer +'" is not configured yet. Please do that first!');
				}
				else{
					if (results.confirmDeploy) {
						var whichServerPath = grunt.config.get('sshconfig.'+answer+'.path');
						var whichServer = grunt.config.get('sshconfig.'+answer+'.host');
						var whichServerUser = grunt.config.get('sshconfig.'+answer+'.username');
						grunt.option('whichServerPath', whichServerPath);
						grunt.option('whichServerEnv', answer);
						grunt.option('whichServer', whichServer);
						grunt.option('whichServerUser', whichServerUser);
					}
					else {
						grunt.fail.fatal('User aborted the sync process!');
					}
				}
			},
		}
	},
	syncUp: {
		options: {
			questions: [
				{
					config: 'sftp.deploy.options.config',
					type: 'list',
					message: 'Which server do you want to sync to?',
					choices: [
					{
						value: 'development',
						name: 'Development'.magenta +
						'   Sync to development server (e.g. development.example.com)'
					},
					{
						value: 'testing',
						name: 'Testing'.magenta +
						'       Sync to testing server (e.g. testing.example.com)'
					},
					{
						value: 'staging',
						name: 'Staging'.magenta +
						'       Sync to staging server (e.g. staging.example.com)'
					},
					{
						value: 'production',
						name: 'Production'.magenta +
						'    Sync to production / live server (e.g. www.example.com)'
					}

					],

				},
				{
					config: 'confirmDeploy',
					type: 'confirm',
					default: false,
					message: 'Are you sure you want to do sync to this server ?'.red
				}
			],
			then: function(results){
				var answer = results['sftp.deploy.options.config'];
				var host = grunt.config.get('secret.server.'+answer+'.host');
				var user = grunt.config.get('secret.server.'+answer+'.user');
				var path = grunt.config.get('secret.server.'+answer+'.path');
				
				if(host  === "hostname" && user === "ssh-username" && host  === "serverpath"){
					grunt.fail.fatal('The selected server "' + answer +'" is not configured yet. Please do that first!');
				}
				else{
					if (results.confirmDeploy) {
						var whichServerPath = grunt.config.get('sshconfig.'+answer+'.path');
						var whichServer = grunt.config.get('sshconfig.'+answer+'.host');
						var whichServerUser = grunt.config.get('sshconfig.'+answer+'.username');
						grunt.option('whichServerPath', whichServerPath);
						grunt.option('whichServerEnv', answer);
						grunt.option('whichServer', whichServer);
						grunt.option('whichServerUser', whichServerUser);
					}
					else {
						grunt.fail.fatal('User aborted the sync process!');
					}
				}
			},
		}
	},
	rollback: {
		options: {
			questions: [
				{
					config: 'sftp.deploy.options.config',
					type: 'list',
					message: 'On witch server do you want to execute a rollback?',
					choices: [
					{
						value: 'development',
						name: 'Development'.magenta +
						'   Rollback on development server (e.g. development.example.com)'
					},
					{
						value: 'testing',
						name: 'Testing'.magenta +
						'       Rollback on testing server (e.g. testing.example.com)'
					},
					{
						value: 'staging',
						name: 'Staging'.magenta +
						'       Rollback on staging server (e.g. staging.example.com)'
					},
					{
						value: 'production',
						name: 'Production'.magenta +
						'    Rollback on production / live server (e.g. www.example.com)'
					}

			],

			},
					{
						config: 'confirmDeploy',
						type: 'confirm',
						default: false,
						message: 'Are you sure you want to do execute a rollback on this server ?'.red
					}
			],
			then: function(results){
				var answer = results['sftp.deploy.options.config'];
				var host = grunt.config.get('secret.server.'+answer+'.host');
				var user = grunt.config.get('secret.server.'+answer+'.user');
				var path = grunt.config.get('secret.server.'+answer+'.path');
				
				if(host  === "hostname" && user === "ssh-username" && host  === "serverpath"){
					grunt.fail.fatal('The selected server "' + answer +'" is not configured yet. Please do that first!');
				}
				else{
					if (results.confirmDeploy) {
						var whichServerPath = grunt.config.get('sshconfig.'+answer+'.path');
						grunt.option('whichServerPath', whichServerPath);
						grunt.option('whichServerEnv', answer);
					}
					else {
						grunt.fail.fatal('User aborted the rollback process!');
					}
				}
			},
		}
	},

};


