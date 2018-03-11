## What is node?
Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code server-side. 

Node.js has an event-driven architecture capable of asynchronous I/O. These design choices aim to optimize throughput and scalability in Web applications with many input/output operations, as well as for real-time Web applications (e.g., real-time communication programs and browser games).

(Wikipedia)

## Installing node through nvm
Node Version Manager - Simple bash script to manage multiple active node.js versions. 

Follow install guidlines: [nvm](https://github.com/creationix/nvm)

## Installing node (node v4) through nvm

1. List available versions:

	```
	nvm ls-remote
	```

2. Install version v4.2.6:

	```
	nvm install v4.2.6 
	```

## Introduction npm
Npm ("Node Package Manager") is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js. It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry. The registry is accessed via the client, and the available packages can be browsed and searched via the npm website. The package manager and the registry are managed by npm, Inc. (Wikipedia)

Npm comes with node and no need to install separate: However visit [npm](https://www.npmjs.com/) and have a look

## Initial node project with npm

Create a folder and run:
	```
	npm init .
	```
	
Look at the created file package.json. It contains information about your project. Like version, name, authors and also its dependencies (in most cases the dependencies are hosted by npm).

Go to [npm - package.json](https://docs.npmjs.com/files/package.json) to read more about whats in there


## Install npm package express
Express is a fast unopinionated, minimalist web framework for Node.js. With atm > 36 000 starts on github its one of the most pupular npm pagages.


https://expressjs.com/

To install express run
	```
	npm install express
	```

Note that package.json is updated with express as a dependency and a node_modules folder with express and its dependencies have created.

Create a git ignore and add node_modules.

## Create simple web-app
Create a file called index.js. And follow commets in [index.js](https://github.com/DINA-Web/dina-school/blob/master/js/1-hello-world/simple-server/index.js)

To run:
	```
	node index.js	
	```

