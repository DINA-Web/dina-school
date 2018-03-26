# DINA-School

Currently this repo is focused on learning and using JavaScript. Below follows a curriculum to learn the language, based on freely available online resources. The main ones are:

* **[Eloquent JavaScript](http://eloquentjavascript.net/):** A crowdfunded book about JavaScript and programming, which is free to share with attribution.

* **[Codecademy](https://www.codecademy.com):** A site where you can "Learn to code interactively, for free." They also offer additional paid resources. Signup is required.

* **[freeCodeCamp](https://www.freecodecamp.org/):** Another site where you can "Learn to code for free." They also have open-source projects for nonprofits. Signup is required.

If you want to see "the docs" of JavaScript, Mozilla's [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript) is the recommended resource. For example, here is how to use the [`Array` `filter()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). If you have previously worked with Java, you might be interested in this introduction of [differences between JavaScript and Java](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#JavaScript_and_Java) from MDN.

Later, we intend to extend this with problem-based learning (PBL) tasks, where the developer will gradually learn about the fundamental technologies used in [DINA-Collections](https://github.com/DINA-Web/dina-collections), through building (and continuously refactoring) a todo-list application.

## Editor setup

Before diving into learning, here are some links that may be useful when you want to configure your editor.

* [Syntax highlighting](http://babeljs.io/docs/editors)
* [ESLint editor setup](https://eslint.org/docs/user-guide/integrations)
* [Prettier editor setup](https://prettier.io/docs/en/editors.html)

If you want to try a new theme, [@fredrikolovsson](https://github.com/fredrikolovsson) recommends [Oceanic Next](https://github.com/voronianski/oceanic-next-color-scheme).

## Learn JavaScript

For Codecademy, we will use the ["Introduction to JavaScript"](https://www.codecademy.com/learn/introduction-to-javascript) class and for freeCodeCamp we will cherry-pick exercises that you can find by clicking on ["Map"](https://www.freecodecamp.org/map) in the nav bar.

### Part 1

| Resource            | Read/do                                                                               |
| ------------------- | ------------------------------------------------------------------------------------- |
| Eloquent JavaScript | Chapters 1 & 2:<br>Values, Types, and Operators<br>Program Structure                  |
| Codecademy          | Lessons "Introduction" and "Control Flow"                                             |
| freecodeCamp        | Section "Basic Javascript", exercises "Comment your JavaScript Code" to "Word Blanks" |

### Part 2

| Resource            | Read/do                                                                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eloquent JavaScript | Chapter 3:<br>Functions                                                                                                                            |
| Codecademy          | Lessons "Functions" and "Scope"                                                                                                                    |
| freecodeCamp        | Section "Basic Javascript", exercises "Write Reusable JavaScript with Functions" to "Counting Cards" and exercises starting with "Generate Random" |

### Part 3

| Resource            | Read/do                                                                                                                                                                     |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Eloquent JavaScript | Chapters 4 & 5:<br>Data Structures: Objects and Arrays<br>Higher-order Functions                                                                                            |
| Codecademy          | Lessons "Arrays", "Loops", "Iterators", and "Objects"                                                                                                                       |
| freecodeCamp        | Section "Basic Javascript", exercises "Store Multiple Values in one Variable using JavaScript Arrays" to "Shopping List" and "Build JavaScript Objects" to "Profile Lookup" |

### Part 4

| Resource            | Read/do                                                             |
| ------------------- | ------------------------------------------------------------------- |
| Eloquent JavaScript | Chapters 6 & 7:<br>The Secret Life of Objects<br>Project: A Robot   |
| Codecademy          | Lesson "Classes"                                                    |
| freecodeCamp        | Section "Object Oriented and Functional Programming", all exercises |

### Part 5

| Resource            | Read/do                                                                                                                                   |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Eloquent JavaScript | Chapters 8 & 9:<br>Bugs and Errors<br>Regular Expressions                                                                                 |
| freecodeCamp        | Section "Basic Javascript", exercises "Sift through Text with Regular Expressions" to "Invert Regular Expression Matches with JavaScript" |

### Part 6

| Resource            | Read/do                |
| ------------------- | ---------------------- |
| Eloquent JavaScript | Chapter 10:<br>Modules |
| Codecademy          | Lesson "Modules"       |

### Part 7

| Resource            | Read/do                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------- |
| Eloquent JavaScript | Chapter 11:<br>Asynchronous Programming                                                       |
| Udacity             | [Interactive video course on Promises](https://udacity.com/course/javascript-promises--ud898) |
| Google Developers   | [Written primer on Promises](https://developers.google.com/web/fundamentals/primers/promises) |
| MDN                 | [Event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)               |

### Part 8

| Resource            | Read/do                                            |
| ------------------- | -------------------------------------------------- |
| Eloquent JavaScript | Chapters 18 & 20:<br>HTTP and Forms<br>Node.js<br> |

The other remaining chapters in Eloquent JavaScript are optional reading and mostly not directly relevant for the DINA-Collections project.

## PBL tasks

Learning resources and task specifications are yet to be determined. However, here is an initial idea of tasks:

1.  **Node & Express**: Write a Todo API with mock database
2.  **React & JSX**: Build a bare-bones UI
3.  **Sequelize**: Refactor API to use a real database
4.  **Redux**: Centralize frontend state management
5.  **Semantic UI**: Rebuild the UI with Semantic components

The purpose is for the new developer to get familiar with the main technologies used in DINA-Collections by working with them.

### 1. Node & Express: Write a Todo API with mock database

#### Node

Node is used to run the server and at this point that is all you need to know about Node.

We recommend using `nvm` to install and manage Node versions:

1.  [Install nvm](https://github.com/creationix/nvm#installation)
2.  Install Node.js version 8.9.1

```
nvm install 8.9.1
```

3.  Set Node v8.9.1 as default

```
nvm alias default v8.9.1
```

8.9.1 was the long-term stable (LTS) release of Node at the time when development of [DINA-Collections](https://github.com/DINA-Web/dina-collections) started. With `nvm` it is easy to change which version you run.

#### Express

What is [Express](https://expressjs.com)? This is what they say:

> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. With a myriad of HTTP utility methods and middleware at your disposal, creating a robust API is quick and easy. Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.

Express has great [API reference](https://expressjs.com/en/4x/api.html), [Getting started](https://expressjs.com/en/starter/installing.html) and [Guide](https://expressjs.com/en/guide/routing.html) sections. Below is how we suggest to combine reading with coding.

#### Postman

For a convenient development experience, we suggest using the free [Postman](https://www.getpostman.com/) desktop application to make requests to your server on localhost. In the Postman app you can save requests in a collection, so that you can quickly make all the requests you want during development.

#### Create basic routes

To learn about Express routes, you can look at Codecademy and/or the official Express guide.

##### Codecademy

Do the [Express routes](https://www.codecademy.com/learn/learn-express) lesson on Codecademy.

##### Official Express guide

Go through the following sections of "Getting started" (hover over the header in the menu to see links to the sections) in this order:

1.  [Hello world](https://expressjs.com/en/starter/hello-world.html): Play around with this, you can change the code in the browser and try it through the URL they provide.
2.  [Installing](https://expressjs.com/en/starter/installing.html): You can follow their instructions or copy [this folder](https://github.com/DINA-Web/dina-school/tree/master/js/3-lint-and-test/finished-example) from the repo and use as starting point.
3.  [Basic routing](https://expressjs.com/en/starter/basic-routing.html): Learn the basics of routing with Express. Read more in the [Routing guide](https://expressjs.com/en/guide/routing.html) and the API reference as needed.

##### Task

Then build an app that has those endpoints for CRUD (create, read, update, delete) of todos:

* `/todos`: GET, POST (create new todo, read all todos)
* `/todos/:id`: GET, PATCH, PUT, DEL (get todo, patch todo, update todo, delete todo)

To start with, you can use a plain JavaScript object, declared in the global scope of your server code, as your "database". If you want debugging support, you can look into the built-in [logging](https://expressjs.com/en/guide/debugging.html) that Express has.

#### Add middlewares

##### Codecademy

Do the [Express middleware](https://www.codecademy.com/learn/learn-express) lesson on Codecademy.

##### Official Express guide

1.  Follow the [Writing middleware](https://expressjs.com/en/guide/writing-middleware.html) guide and .
2.  Learn more about middlewares by reading the [Using middleware](https://expressjs.com/en/guide/using-middleware.html) guide.
3.  Read about [error handling in Express](https://expressjs.com/en/guide/error-handling.html).

##### Task

Implement request logging, request time and error handling middlewares on your Todo server (as described in the official guide step 1 and 3 above).

#### Read/write JSON-files (optional)

If you want to load your API with initial data and also be able to save the data at some point (e.g. you can add a middleware that writes the date after each request, or when making a POST request to a specific endpoint), you can read [this guide](<(http://stackabuse.com/reading-and-writing-json-files-with-node-js/)>) to using [Node's `fs` module](https://nodejs.org/docs/latest-v8.x/api/fs.html) for reading and writing files. You will want to use `readFileSync` to synchronously load the data before the server starts to listen and probably want to use the asynchronous `writeFile` to write to the file without blocking further operations.
