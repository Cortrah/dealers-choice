# Dealers Choice

A poker game client written in vue that uses ['Frame'](https://github.com/jedireza/frame) for it's server side api.

The poker hand evaluator logic is in this ['repo'](https://github.com/Cortrah/katas/tree/master/2016-05/js)

### Technology

Frame is built with the [hapi.js framework](https://github.com/hapijs/hapi) and
[toolset](https://github.com/hapijs). We're using
[MongoDB](https://github.com/mongodb/node-mongodb-native/) as a data store. We
also use [Nodemailer](https://github.com/andris9/Nodemailer) for email
transport.


### Frame demo

| endpoint                                                                 | username | password |
|:------------------------------------------------------------------------ |:-------- |:-------- |
| [https://hapiframe.herokuapp.com/](https://hapiframe.herokuapp.com/docs) | root     | root     |


### Requirements

You need [Node.js](http://nodejs.org/download/) and
[MongoDB](http://www.mongodb.org/downloads) installed and running.

We use [`bcrypt`](https://github.com/ncb000gt/node.bcrypt.js) for hashing
secrets. If you have issues during installation related to `bcrypt` then [refer
to this wiki
page](https://github.com/jedireza/frame/wiki/bcrypt-Installation-Trouble).


### Installation

```bash
$ git clone git@github.com:jedireza/frame.git && cd ./frame
$ npm install
```


### Setup

__WARNING:__ This will clear all data in existing `users`, `admins` and
`adminGroups` MongoDB collections. It will also overwrite `/config.js` if one
exists.

```bash
$ npm run setup

	> frame@0.0.0 setup /Users/jedireza/projects/frame
	> ./setup.js

	Project name: (Frame)
	MongoDB URL: (mongodb://localhost:27017/frame)
	Root user email: jedireza@gmail.com
	Root user password:
	System email: (jedireza@gmail.com)
	SMTP host: (smtp.gmail.com)
	SMTP port: (465)
	SMTP username: (jedireza@gmail.com)
	SMTP password:
	Setup complete.
```


### Running the app

## Make sure mongo is running

    mongod

## then start the server

```bash
$ npm start

	 > frame@0.0.0 start /Users/jedireza/projects/frame
	 > ./node_modules/nodemon/bin/nodemon.js -e js,md server

	 20 Sep 03:47:15 - [nodemon] v1.2.1
	 20 Sep 03:47:15 - [nodemon] to restart at any time, enter `rs`
	 20 Sep 03:47:15 - [nodemon] watching: *.*
	 20 Sep 03:47:15 - [nodemon] starting `node server index.js`
	 Started the plot device.
```

This will start the app using [`nodemon`](https://github.com/remy/nodemon).
`nodemon` will watch for changes and restart the app as needed.


## Then go into the client directory to start the client

    cd client
    npm run dev



### Frame Philosophy

 - Create a user system API
 - Don't include a front-end
 - Follow the [hapi coding conventions](http://hapijs.com/styleguide)
 - 100% test coverage
 - It's just JavaScript


### Features

 - Login system with forgot password and reset password
 - Abusive login attempt detection
 - User roles for accounts and admins
 - Facilities for notes and status updates
 - Admin groups with shared permissions
 - Admin level permissions that override group permissions


### Questions and contributing

Any issues or questions (no matter how basic), open an issue. Please take the
initiative to include basic debugging information like operating system
and relevant version details such as:

```bash
$ npm version

	 http_parser: '1.0',
	 node: '0.10.29',
	 v8: '3.14.5.9',
	 ares: '1.9.0-DEV',
	 uv: '0.10.27',
	 zlib: '1.2.3',
	 modules: '11',
	 openssl: '1.0.1h',
	 npm: '1.4.20',
	 frame: '0.0.0' }
```

Contributions welcome. Your code should:

 - include 100% test coverage
 - follow the [hapi.js coding conventions](http://hapijs.com/styleguide)

If you're changing something non-trivial, you may want to submit an issue
first.


### Running tests

[Lab](https://github.com/hapijs/lab) is part of the hapi.js toolset and what we
use to write all of our tests.

For command line output:

```bash
	$ npm test
	
	> frame@0.0.0 test /Users/jedireza/projects/frame
	> ./node_modules/lab/bin/lab -c
	
	..................................................
	..................................................
	..................................................
	..................................................
	..................................................
	.............................
	
	249 tests complete
	Test duration: 4628 ms
	No global variable leaks detected
	Coverage: 100.00%
```

With html code coverage report:

	npm run test-cover
	
	> frame@0.0.0 test-cover /Users/jedireza/projects/frame
	> ./node_modules/lab/bin/lab -c -r html -o ./test/artifacts/coverage.html && open ./test/artifacts/coverage.html
```

This will run the tests and open a web browser to the visual code coverage
artifacts. The generated source can be found in `/tests/artifacts/coverage.html`.


### License

MIT

### Don't forget

Mars Loves Reza.
