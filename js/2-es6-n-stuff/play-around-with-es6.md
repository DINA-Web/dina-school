## Developer experience 1 - nodemon

As we go we will improve the developer experience. During the coming lessions we will add, automatic formatting of code, linting tests and more. Now we will start with live reload using nodemon.

Nodemon will be installed as a global package using

```
npm install -g nodemon
```
Before running the command check which node version you are running 

```
node -v
```

The global packages are installed scoped under the current node version so if you change node version you have to install it again.

Test it:
Create an file called index.js in our new project. Add a simple log statement.
run the file with:

```
nodemon index.js
```

change the log and save and notice that the file is run again with the changes


## es6
es6 or ECMAScrip 6 or ECMAScript 2015. Is the 6th edition of javascript ECMAScrip standard and adds significant new syntax for writing complex applications. 

Later versions of node supports es6 syntax but before that it was still possible to use es6 if you first transpiled the code using a library called babel.  

Make sure you are using node v8.9.1 and continiue in index.js


## rewrite server to es6
Create a new file called server.js in es6-playground and change to es6. Use the const keyword and the fat-arrow for declaring functions