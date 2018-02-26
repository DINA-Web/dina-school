# Introduction

In this lesson we will install and use ESLint, Prettier and Jest. ESLint is used to find errors or undesirable patterns in the code, according to a set of rules. Prettier is a tool for automatic code formatting, ensuring that the code has a consistent look across the code base, without developers getting stuck in formatting arguments (e.g. when to break a line and when to indent). Jest is a tool for writing and running tests.

We have taken the ES6 server code from the previous lesson and put it in the file `src/server/index.js`. In the root `index.js` we are simply requiring that file. This is because we want all our code in the `src` folder so that we can specify that linting and testing should be run on that folder and not other files.

# Setup

Install existing dependencies

```
npm install
```

Start server

```
nodemon src/server/index.js
```

Navigate to [http://localhost:3000/ping](http://localhost:3000/ping) in a browser and verify that you get a `pong` back.

# Prettier

Let's install [prettier](https://github.com/prettier/prettier), to simplify code formatting.

```
npm i -D prettier
```

`npm i -D` is short for `npm install --save-dev`.

Configuration of prettier is kept in a file `.prettierrc` in the root. Let's add that with those options (you can read about them in their docs):

```json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

Next, let's add a script in `package.json`, under the `scripts` key, so that we can easily run prettier.

```json
"prettier": "prettier --write 'src/**/*.js'",
```

Now, we can use `npm run prettier` to run prettier on all files in src that end with `.js` and writes the changes to the file.

You can try to mess up the code formatting in the server file, e.g. add a bunch of semi-colons at the end of a line and save the file. Then run the prettier command and you can see that those are removed.

## ESLint

In addition to prettier, we want to use [ESLint](https://eslint.org/) to get help following conventions and avoiding bugs while writing code.

We will use Airbnb's [eslint-config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) to follow their [JavaScript style guide](https://github.com/airbnb/javascript).

Along with the Airbnb config, we will also need to install some plugins. For your convenience, here's a one-line install command:

```
npm i -D eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier
```

Similar to prettier, we also need to add an `.eslintrc` file in the root to configure ESLint. Below is a basic example, and in the [finished-example](../finished-example/.eslintrc)) there is a more complete one, including some custom rule settings that we currently use.

```json
{
  "extends": ["eslint-config-airbnb-base", "prettier"],
  "plugins": ["jest", "prettier"]
}
```

To run ESLint from the command line we also need to install those packages globally.

```
npm i -g eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-jest eslint-plugin-prettier
```

Then add those scripts to package.json. The `--fix` flag means ESLint will automatically fix the errors that are fixable. Since we use the ESLint prettier plugin, ESLint will also fix errors according to prettier.

```json
"lint": "eslint 'src/**/*.js'",
"lint:fix": "eslint 'src/**/*.js' --fix",
```

Try it with by making some error and run

```
npm run lint:fix
```

## Jest

We'll leave it as an exercise to install [Jest](https://www.npmjs.com/package/jest) and read about the syntax for writing unit tests. Refer to the [finished-example](../finished-example/src/routeHandlers/ping/index.test.js) for guidance. Also, you will need to update the `.eslintrc` with a setting for the Jest globals.

```json
"env": {
  "jest/globals": true
},
```

## debug logging

The [`debug`](https://www.npmjs.com/package/debug) package enables configurable logging, based on an environment variable, so it is easy to decide which logs are displayed. The [finished-example](../finished-example/src/server/index.js) has an example.
