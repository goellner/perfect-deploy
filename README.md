# PERFECT DEPLOY

###Table of contents###

- [Quick-Guide](#quick-guide)
- [Introduction](#introduction)
- [Setup](#setup)
    - [GIT setup](#git-setup)
    - [Server configuration](#server-configuration)
    - [Composer configuration](#composer-configuration)
    - [Bower configuration](#bower-configuration)
    - [Grunt configuration](#grunt-configuration)
    - [Wordpress-Configuration](#wp-configuration)
    - [htaccess-Configuration](#htaccess-configuration)
- [Project initialisation](#project-initialisation)
- [Further project configuration](#further-project-configuration)
    - [CSS configuration](#css-configuration)
    - [Javascript configuration](#javascript-configuration)
- [Commands](#commands)
    - [During development](#during-development)
    - [Deployment](#deployment)
    - [Rollback](#rollback)
    - [Update Plugins](#update-plugins)
    - [Update Packages (e.g Wordpress)](#update-packages)
    - [Shared Folder  Synchronisation](#shared-folder-synchronisation)
- [Behind the scenes](#behind-the-scenes)
- [Authors](#authors)


##<a name="quick-guide"></a>Quick-Guide

If you are already familiar with PERFECT DEPLOY and just need a quick reminder on how to set up a new project, this section is for you:

- Clone perfect-deploy to empty folder
- Edit composer.json to define which server-side libraries you need (e.g. Wordpress + Plugins, Laravel, Typo3, various PHP-Libaries etc.)
- Edit bower.json to define which frontend-libraries you need (e.g. jQuery, Bootstrap, Angular, RequireJs etc.)
- Edit secret.json.example to define your server environments and rename to secret.json (this won't be checked into Git)
- Edit package.json: Project information (Name, URL, Git-URL), base directory, keepReleases
- Call "npm install" to download necessary node-modules as defined in package.json
- Call "grunt init" to initialise project (does Composer and Bower installs, basic Grunt-setup)
- Adjust .csslintrc for CSS linting, .jshintrc for Javascript linting and .editorconfig for common editor setup (like Atom or Sublime)
- Edit the different wp-configs to match your databases
- Edit the different htaccess files to match your subdomain


===
## <a name="introduction"></a>Introduction

**What is PERFECT DEPLOY?**

PERFECT DEPLOY is a set of tools to facilitate the setup of typical online projects like websites or microsites. With a couple of settings you should have a running site with a perfect frontend setup und deployment script. It's for very small to medium projects.

This tool is used for:

- Managing backend components/libraries<br>
    - <a href="https://getcomposer.org/">Composer</a> is used to load PHP libraries like Symfony, Laravel or Wordpress.
- Managing frontend components/libraries<br>
    - <a href="http://bower.io/">Bower</a> is used to load frontend components and frameworks like jQuery, Zepto, Bootstrap or Foundation.
- Optimization, compression and testing of CSS, JS and additional assets via Grunt Taskrunner.
- Deployment to various servers via Grunt Taskrunner and shell commands.

**What do you need to use PERFECT DEPLOY?**

Any serious frontend developer probably already has the following tools installed:

**Your local computer**:
- <a href="http://nodejs.org/">Node.js</a>
- <a href="https://getcomposer.org/">Composer</a>
- <a href="http://gruntjs.com/">Grunt</a>
- <a href="http://bower.io/">Bower</a>
- <a href="http://git-scm.com/">GIT</a>

**Server** (Development, Staging or Production):
- SSH
- SFTP (probably via SSH)

All shell-scripts are based on BASH, other environments are not tested.


## <a name="setup"></a>Setup

### <a name="git-setup"></a>GIT setup

Step by step:

1. Generate a new GIT repository. This might be in Github, on a remote server (via SSH) or even on your local machine. Use this to init a bare GIT repo (replace "example" with your project name, it's always good practice to define naming conventions for projects beforehand):

```
git --bare init example.git
```
You probably don't need to set up a post-receive-hook (sometimes used to automatically copy files on commit), we will use Grunt to deploy to various staging and production servers.

2. Check out your new project in your favourite software.

Via terminal:
```
git clone https://github.com/USERNAME/example/"
```
Be sure to clone into an empty directory.

Or use a nice GUI like <a href="http://www.sourcetreeapp.com/">SourceTree</a> to clone your shiny new repository.

If you set up your GIT repo on your own server, the URL might look something like this (~ is the home-directory of the specified SSH user):

```
ssh://YOUR_SSH_USER@YOUR_SERVER.COM/~/git/example.git/
```

3. Now clone PERFECT DEPLOY to your (still empty) project directory:

```
git clone https://github.com/kollerebbe/perfect-deploy/"
```


===
### <a name="server-configuration"></a>Server configuration

SSH Keys play a vital role during the deployment process and are generally very helpful (if you are not working on a public computer). Using SSH keys you don't have to enter complicated SSH passwords anymore.

Here is a short tutorial on how to set up your SSH keys (on your computer and on the server).

Create SSH Key (enter your own email address):

```ssh-keygen -t rsa -C 'user@email.com'```

Use the suggested folder (just press enter).

Enter a password. Make this a secure password, this password will be used to encrypt the SSH keys.

You can check, which keys are being loaded:

```ssh-add -l```

If none are listed:

```ssh-add ```

Now you should have keys:

```ssh-add -l```

Show the public-part of the key (this will be copied to the server, the private part always remains and your local machine and is used to authorize your computer):

```ssh-add -L```

Copy this to the clipboard.

Now connect to the remote server:

```
ssh SSH_USER@TARGET_SERVER.COM
cd ~
```

Create the .ssh-folder (the -p parameter checks if the folder already exists):

```mkdir -p .ssh```

Copy the public key to the Authorized Keys:

```echo "ssh-rsa .../.ssh/id_rsa" >> .ssh/authorized_keys```

```chmod 700 .ssh chmod 500 .ssh/authorized_keys```

Now you should be able to connect to the server without entering the SSH password

```ssh SSH_USER@TARGET_SERVER.COM```


===
### <a name="composer-configuration"></a>Composer configuration

Composer automatically downloads backend components and their dependencies. Have a look at <a href="http://packagist.org/">packagist.org</a> to find the packages you can automatically download for your project.

If you are doing a Wordpress project you will find plugins at <a href="http://wpackagist.org/">wpackagist.org</a>.

Now edit **composer.json** to configure your backend dependencies. The composer.json in PERFECT DEPlOY is pre-configured for a typical Wordpress installation. It looks like this:

Keep in mind that you can use '*' to load the most current version instead of using a version number (this is however not recommended).


```json
{
    "repositories": [
        {
            "type": "package",
            "package": {
                "type": "webroot",
                "name": "wordpress/wordpress",
                "version": "3.9.1",
                "dist": {
                    "url": "https://wordpress.org/wordpress-3.9.1.zip",
                    "type": "zip"
                },
                "require": {
                    "fancyguy/webroot-installer": "1.0.0"
                }
            }
        },
        {
                    "type":"composer",
                    "url":"http://wpackagist.org"
        }
    ],
    "require": {
        "wordpress/wordpress": "*",
        "wpackagist-plugin/wordpress-seo": "*",
        "wpackagist-plugin/duplicate-post": "*",
        "wpackagist-plugin/2-click-socialmedia-buttons": "*",
        "wpackagist-plugin/ajax-thumbnail-rebuild": "*"
    },
    "extra": {
        "installer-paths": {
                    "htdocs/app/plugins/{$name}/": ["type:wordpress-plugin"]
                },
        "webroot-dir": "htdocs/wp",
        "webroot-package": "wordpress/wordpress"
    }
}
```

Unfortunately Wordpress doesn't come with it's own composer.json yet so we need to use a little helper called "fancyguy/webroot-installer" to install Wordpress into it's own directory. Of course, you can configure other frameworks like Laravel, Facebook SDK or similiar in composer.json.

The composer.lock-file is checked in as well - if you want to update packages run "composer update", this will update the packages and the lock file.


===
### <a name="bower-configuration"></a>Bower configuration

Bower is used to load frontend dependencies. You can find packages at <a href="http://bower.io/search/">bower.io</a>

Edit **bower.json** to configure your frontend dependencies. During first initialisation (see Chapter TODO) the Bower components will be automatically downloaded. If you need to add, remove or update components later on, edit the bower.json and do a bower:install like this:

``grunt bower:install``


===
### <a name="grunt-configuration"></a>Grunt configuration

The Grunt Taskrunner plays the most important role in PERFECT DEPLOY.

Grunt basically does everything:

* CSS compiling from SASS, vendor-prefing, minification
* Javascript testing, concatination, minification
* image optimization and spritesheet generation
* server-deployment

Using the Grunt plugin "load-grunt-tasks" and "load-grunt-config" the indiviual tasks are separated into their own configuration files in the "grunt"-directory.

If you want to adjust indiviual tasks, you will find a link to their respective Github-Pages within the task configuration.

There are two files you need to edit before project initialisation: **package.json** and **secret.json**.

**package.json**

Besided editing basic project information like name, author or version you need to edit the following:

- basedir: path to the home-directory of your theme. PERFECT DEPLOY expects a subdirectory "assets" and within assets two subdirectories called "src" and "dist". "src" (for source) will contain all your frontend source-files, the "dist" (for distribution) folder will contain all optimized files. <br><br>A word of warning: the "dist"-folder will be completely deleted every time the project is built by Grunt so don't just copy files in there.

- keepReleases: defines how many releases should remain on the server on deployment (to quickly change to an older version if needs be).

**secret.json**

The secret.json contains the various servers you want to deploy to. The secret.json won't be committed to GIT (as defined in the .gitignore file), sensitive information should never be committed. Passwords should be set up in SSH keys, as explained above. You need to manually set up your secret.json, use the provided secret.json.example as a starter.

Setup of "secret.json":

```json
{
	"repository": {
		"url": "user@host.com:~/git/example.git"
	},
	"server": {
		"production": {
			"host": "ssh.superserver.com",
			"user": "admin",
			"path": "/var/www/example.com/"
		},
		"staging": {
			"host": "ssh.superserver.com",
			"user": "admin",
			"path": "/var/www/example.com/"
		},
		"testing": {
			"host": "ssh.supergeil.com",
			"user": "admin",
			"path": "/var/www/example.com/"
		},
		"development": {
			"host": "ssh.superserver.com",
			"user": "admin",
			"path": "/var/www/example.com/"
		}
	}

}
```

* "repository": Enter the URL of your GIT repository
* "server": the system is configured to use four different servers:
    * "production": the live environment on the target server
    * "staging": a stating environment on the target server to test in real-life conditions before deploying to live
    * "testing": a testing environment for the quality assurance team
    * "development": a testing server for the development team

Enter the host, username and path for every server.


===
### <a name="wp-configuration"></a>Wordpress-Configuration

To make Wordpress ready for deployment on one of the four servers (production, staging, testing, development), you have to specify the db-connection first.
To do so, simply enter the db-details in the config files:

* wp-config-production.php
* wp-config-staging.php
* wp-config-testing.php
* wp-config-development.php

You don´t have to rename them or move them to a different destination. The deployment tool takes care of that for you.


===
### <a name="htaccess-configuration"></a>htaccess-Configuration

To fit your needs you have to modify the htaccess files and replace "yoursubdomain" with your subdomain:

*.htaccess-production
*.htaccess-staging
*.htaccess-testing
*.htaccess-development

Like with the wp-configs before you don´t have to rename or move anything, because the deployment tool takes care of that.

===
## <a name="project-initialisation"></a>Project initialisation

Now that you have set up composer.json, bower.json, package.json and secret.json you are ready to initialise the project.

Open up your terminal and execute the following commands:

* ```npm install```<br>Loads the Node dependencies as defines in package.json.
* ```grunt init```<br>This command executes "composer install" to load backend dependencies based on compser.json, "bower install" to load frontend dependencies based on bower.json and "grunt" which finally builds a first version of our project.

You only need to call these two commands once.


## <a name="further-project-configuration"></a>Further project configuration


### <a name="css-configuration"></a>CSS configuration


#### LESS instead of SASS

The provided setup is based on SASS. If you are so inclined you can easily replace SASS by LESS by adding the Grunt task:

```npm install grunt-contrib-less --save-dev```

removing the SASS task

```npm uninstall grunt-contrib-sass --save-dev```

and switching out the SASS-task by your LESS-task in grunt/concurrent.js.


#### Task-Configuration

Edit **csslint.js** and **sass.js** if you have other paths than the standard assets/src/css and assets/dist/css paths.

#### Auto-Prefixer

The Grunt-Auto-Prefixer task will automatically add the necessary vendor-prefixes so you don't have to.

```a {
  transition: transform 1s
}```

will be compiled to

```a {
  -webkit-transition: -webkit-transform 1s;
  transition: -ms-transform 1s;
  transition: transform 1s
}```


#### CSS-Lint

Generated CSS-files are automatically being linted against .csslintrc. Edit this file to configure the settings (keep in mind that not all tests are actually sensible).


### <a name="javascript-configuration"></a>Javascript configuration

Javascript files are automatically concatened and uglified (no ugflication during development though). To configure the details edit **concat.js**. The uglifying-tasks is based on the concatened scripts.


#### JS-Hint

Javascript files are hinted against **.jshintrc**. Edit this file to set hinting options.


#### Unit-Testing

A rudimentary test is set up in assets/src/tests. Use <a href="http://mochajs.org/">Mocha</a> and the <a href="http://chaijs.com/">Chai Assertion Library</a> to define your tests.


===
## <a name="commands"></a>Commands

### <a name="during-developments"></a>During development

Use ```grunt watch``` to automatically compile changed files. This will create uncompressed and annotated files.

If you have the Live-Reload Browser-extension installed it automatically reloads the page as well (add the appropriate code theo the <head>).

If you just need to build the development version of your project call:

```grunt dev```

This will executes the commands as defined in  `aliases.yaml` and  `grunt/concurrent.js`.

===
### <a name="deployment"></a>Deployment

Deployment is probably the most complex task. You're done with your local development and want to deploy to a testing or live server. Make sure everything is committed to GIT (the repository must be clean because it's getting cloned by the deploy mechanism).

After committing everything you should update the version of your project:

* ```grunt bump```<br>This patches your project, e.g. your version is raised from 0.0.1 to 0.0.2.
* ```grunt bump:minor```<br>This raises the version number by a minor, e.g. from 1.2.1 to 1.3.0.
* ```grunt bump:major```<br>This raises your major version number, e.g. from 2.4.2 to 3.0.0.

This will automatically tag your project in GIT with the new version number. Based on this we can now build a clean release-version of the project.

Now build the project - behind the scenes Grunt will clone the project to a build folder, execute a "npm install", "composer install", "bower install" and a "grunt" to cleanly build everything from scratch:

```grunt build```

Next we can deploy to one of the four servers defined in secret.json:

```grunt deploy```

===
### <a name="rollback"></a>Rollback

In case something went wrong there is an easy rollback mechanism:

```grunt rollback```

You will get prompted on which server the rollback should occur, then the current version will get replaced by the version before (remember the keepReleases-setting in package.json?). We only change the symlink to the older version.

===
### <a name="update-plugins"></a>Update Plugins

For a perfectly working Grunt installation it´s necessary to keep your plugins updated.
To do so, simply use the following command:

```grunt devupdate```

Dev-update takes care of getting the best-working updates for your project and on top of that updates your devDependencies.

===
### <a name="update-packages"></a>Update packages (e.g Wordpress)

In case of a new Wordpress release (or something similar), you have to update the dependency data in the composer.json by updatig the version number and the dist-link.

After doing that run the following command:

```composer update```

The composer then updates all packages to the specified version numbers and creates a new composer.lock file which includes the most recent dependencies. You don´t have to remove the old composer.lock file manually, it simply gets overwritten.

Running the ```grunt init``` command would actually do the same thing, because it includes the ```composer update``` task. So it´s up to you which one you prefer.


===
### <a name="shared-folder-synchronisation"></a>Shared Folder Synchronisation

In case of a Wordpress installation we don't commit the "uploads"-folder to GIT. Since we like to keep the uploads synchronized between servers there are two commands to help you:

```grunt syncUp```

```grunt syncDown```

grunt syncUp copies the local files to the server.

grunt syncDown copies the files from the server to your local machine.

A prompt will ask in each case which server you want the files to be copied from/to.


===
## <a name="behind-the-scenes"></a>Behind the scenes


**Used Grunt plugins**

- aliases<br>defines aliases for tasks
- autoprefixer<br>adds vendor-prefixes for CSS properties
- bower<br>Dependency Management for Frontend components.
- bump<br>Raising the project version number.
- clean<br>deletes files
- concat<br>concatenates javascript files
- concurrent<br>parallel execution for tasks (for speed improvement, this is not Gulp :( )
- copy<br>copies files, needed for copying unmodified files to dist-folder
- csslint<br>checks CSS for errors.
- devUpdate<br>automatically update Grunt plugins
- imagemin<br>image optimization.
- jshint<br>checks javascript for errors.
- mocha<br>javascript unit testing.
- modernizr<br>builds a custom modernizr.js based on your tests.
- newer<br>only compile modified files (performance improvement for Grunt).
- notify<br>notifies user.
- prompt<br>enables user input during Grunt tasks.
- sass<br>SASS-compiler based on Ruby on Rails.
- sftp<br>needed for uploading the project-build-file.
- shell<br>enables Grunt to execute shell-commands.
- sprite<br>generates standard and retain spritesheets.
- sshconfig<br>defines servers by reading the secret.json
- sshexec<br>executes shell-commands on target-server.
- uglify<br>minifies javascript files.
- version<br>hashes generated css und javascript files
- watch<br>watches modified files and offers live reloading.
- wordpressdeploy<br>enables database-migration for Wordpress installations


## <a name="authors"></a>Authors

* Stefan G&ouml;llner: main author
* Tobias B&ouml;hning
* Marcel Berger
* Wadim Filippov
