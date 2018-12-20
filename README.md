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
2.  [Basic routing](https://expressjs.com/en/starter/basic-routing.html): Learn the basics of routing with Express. Read more in the [Routing guide](https://expressjs.com/en/guide/routing.html) and the API reference as needed.

##### Task

First copy [this folder](https://github.com/DINA-Web/dina-school/tree/master/js/3-lint-and-test/finished-example) from the repo and use it as starting point. Look in `package.json` to see the available scripts (and you can refer to [this README](https://github.com/DINA-Web/dina-school/blob/master/js/3-lint-and-test/start-here/README.md), if you want to know more about ESLint and Prettier. Also refer to the [editor setup](#editor-setup) section as needed.

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

### 2. React & JSX: Build a bare-bones UI

This task is centered around React and will let you build your first UI and connect it to the API built in the previous task.

#### React

> A JavaScript library for building user interfaces

As seen by the tagline, React has now become so big they chose to simply state a fact instead of promoting the features, but you can check out the [official website](https://reactjs.org/) if you want to read more. [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) is a nice article that explains what it means to work with (and think in) React.

JSX is introduced in the first Codecademy lesson, but you can also read about it in the [React docs](https://reactjs.org/docs/introducing-jsx.html).

##### Codecademy

Do the [Learn ReactJS: Part I](https://www.codecademy.com/learn/react-101) and [Learn ReactJS: Part II](https://www.codecademy.com/learn/react-102) lessons on Codecademy.

##### Official React tutorial

Do the [tutorial](https://reactjs.org/tutorial/tutorial.html) that guides you through building a tic-tac-toe game.

##### Other resources

Egghead has two video courses for beginners (in alphabetical order):

* [Start Learning React](https://egghead.io/courses/start-learning-react)
* [The Beginner's Guide to ReactJS](https://egghead.io/courses/the-beginner-s-guide-to-reactjs)

You can watch all of the lessons or look at the lesson titles and cherry-pick what you want/need.

##### React style guide

We follow most of Airbnb's style guide for [JavaScript](https://github.com/airbnb/javascript), which also covers [React and JSX](https://github.com/airbnb/javascript/tree/master/react). This also includes configuration for ESLint so you will get lint errors or warnings if your code does not adhere to the style guide. Please use the [ESLint config file](https://github.com/DINA-Web/dina-collections/blob/master/packages/ui/.eslintrc) from the DINA-Collections repo and install the [devDependencies](https://github.com/DINA-Web/dina-collections/blob/master/packages/ui/package.json) related to `eslint`.

##### Get started with "Create React App"

If you did the React tutorial you already installed [Create React App](https://github.com/facebook/create-react-app), now use it to create a new app for this task. (**Note:** The Todo API that you built in the previous task and the React app cannot run on the same localhost port. The easiest might be to change the port in the Todo API, e.g. to 4444.)

#### Fetch

> The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

Read about [using fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to make HTTP requests. You will need this to communicate with your Todo API.

#### Task

Build a UI that lets the user:

* Create todos
* View a list of all todos (optionally with some categories, e.g. "all", "finished" and "unfinished")
* Mark a todo as finished
* Edit the text of a todo item
* Remove a todo

This should use the API you built in the previous PBL task.

### 3. Sequelize: Rewrite Todo API to use a real database

This task requires you to install postgres and learn Sequelize so you can wire up your Todo API to a database and persist the data.

#### Install postgres

You are free to install postgres the way you want. An easy way is to use the DINA-Collections repo:

Clone [DINA-Collections](https://github.com/DINA-Web/dina-collections) and run:

`make setup-env`

`docker-compose -f docker-compose.dev.yaml up -d postgres`

This will start postgres in a container with default port (5432) exposed with settings (user and password) as specified in ./env/.postgres. This file will be created by running the setup-env command and you should be fine with the default settings.

#### Sequelize

> Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

We use the ORM [Sequelize](http://docs.sequelizejs.com/) for accessing postgres. Go to the [Getting started](http://docs.sequelizejs.com/manual/installation/getting-started) section and go through that.

You can also read this [article](https://sequelize.readthedocs.io/en/1.7.0/articles/express/), with related [source code](https://github.com/sequelize/express-example), about making a todo app with Sequelize and Express.

Then refer to the docs as necessary to complete the task.

#### Task

1.  Add a User model that can have many todos.
2.  Add a Todo model that belongs to a User.
3.  Rewrite the Todo API so it persists todos in the database.
4.  Load some initial data (users and todos) in the database.
5.  Adapt the UI so it can show all users and all tasks and also filter tasks by user.

### 4. Redux: Centralize frontend state management

> Redux is a predictable state container for JavaScript apps.

This task is about learning how to work with [Redux](https://redux.js.org/), which is a library we use to manage the centralized state in the frontend. React has built-in support for local state in components, but sometimes we want to have a central state that is accessible across components and that is what we use Redux for. Redux also has nice devtools that improves the developer and debugging experience.

#### Introduction

Before diving into learning the nitty-gritty, first read about the motivation, core concepts and three principles of Redux in the official [Introduction](https://redux.js.org/introduction). And then, to balance the excitement, read the article [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367), written by the creator of Redux after people started using it without first considering if they really need it.

#### Learn the basics

The [Learn Redux](https://redux.js.org/#learn-redux) section in the docs has a list of great resources. We recommend reading and watching at least those two:

1.  [Official basic walkthrough](https://redux.js.org/basics)
2.  [Getting started with Redux](https://egghead.io/courses/getting-started-with-redux) free video series by the creator of Redux

Then check out any other resources you want or move on to the next part.

#### Advanced usage

Advanced usage includes handling asynchronous actions (e.g. to make API calls) and middleware, to handle side-effects of actions (e.g. logging actions or saving to localStorage).

1.  [Offical advanced walkthrough](https://redux.js.org/advanced)
2.  [Building React Applications with Idiomatic Redux](https://egghead.io/courses/building-react-applications-with-idiomatic-redux) free video series by the creator of Redux
3. [Building Applications with React and Redux in ES6](https://www.pluralsight.com/courses/react-redux-react-router-es6) paid video series going through setup of environment, intro to React and Redux, connecting React & Redux, doing asynchronous things in Redux, testing and preparing for production
3.  [Flux Standard Action](https://github.com/redux-utilities/flux-standard-action), which is a convention we follow for the action objects.
4.  [Reselect](https://github.com/reactjs/reselect), a library for memoization of expensive state selectors.

You can also check out more of the resources listed in the docs.

#### Devtools

Before jumping into development, you might want to look at those:

* [redux-logger](https://github.com/evgenyrodionov/redux-logger)
* [redux-devtools](https://github.com/evgenyrodionov/redux-logger)
* [redux-devtools extension](https://github.com/zalmoxisus/redux-devtools-extension)

Adding `redux-logger` is a nice start.

#### redux-form

In DINA-Collections we use the library [`redux-form`](https://redux-form.com/) to make it easier to get advanced form features (e.g. validation, error messages and managing form states).

* Watch this video series: [manage-react-form-state-with-redux-form](https://egghead.io/courses/manage-react-form-state-with-redux-form)

Since forms are a core part of DINA, it is great to learn more about that library.

#### Task

1.  Rewrite your Todo application to use Redux to manage CRUD of todos. This includes adding actions, reducers, selectors, a thunk middleware (e.g. `redux-thunk`), perhaps `redux-logger`, and connecting your components to the state with `react-redux`.
2.  Add filtering of todos, e.g. based on their status of being done or not done and/or which user they belong to.
3.  Add simple search, e.g. have an input where the user can type and filter todos based on simple string matching of the todo title.
4.  Add a view where you show all the information about one specific todo. Then verify that when you go between the list view and the view of a specific todo, that any filtering and search inputs stay the same.
5. Rewrite all forms with `redux-form` and add buttons for Save, Reset and Cancel, where relevant, using the form state props provided by `redux-form`. Also add some simple client-side validation, e.g. making a field required and showing an error if user tries to submit without it.

### 5. Semantic UI: Make the UI look better with Semantic UI React

> Semantic is a development framework that helps create beautiful, responsive layouts using human-friendly HTML.
> Semantic UI React is the official React integration for Semantic UI.

[Semantic UI React](https://react.semantic-ui.com) offers a set of UI components that makes it quick and easy to build a UI with a decent look without writing any CSS. For more advanced usage, it also enables to customise the theme (e.g. color variables) and to make as detailed styling overrides as necessary to achieve what you want.

#### Installation

Read here how to install it in your project: https://react.semantic-ui.com/usage

#### Documentation

Then browse through the available components in the [documentation](https://react.semantic-ui.com).

#### Task

Rewrite your Todo app UI with Semantic UI components. At least use and configure (with props) the Grid, Header, Dropdown, Input, List and Button components.

### 6. Build a blog: Use everything you have learned

The goal of this assignment is to more freely build an application and consolidate the knowledge gained in the previous assignments. Below are the minimum functional requirements for the application, but feel free to play around. Whether to use a backend or not depends on the time available and the learning objectives for you.

#### Public pages

1. As a visitor, you can read what the blog is about
1. As a visitor, you can find a list of all blog posts
3. As a visitor, you can read each blog post on a page with a unique, human-readable URL
4. As a visitor, you can go to the next and previous blog post from each blog post, based on their publishing date

#### Admin interface

1. As a user, you can login to the admin interface through a link on the landing page
2. As a logged in user, you can create a new draft blog post
3. As a logged in user, you can choose to publish drafts and unpublish posts
4. As a logged in user, you can edit the content of existing drafts and posts
5. As a logged in user, you can change some styling (at least font family, font size, text color, background color) of the published posts
