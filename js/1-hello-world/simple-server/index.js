/*
Use require to get modules installed through npm
and that exist in package.json or require modules from local files
here the module is assigned to the variable express
*/
var express = require('express')

/*
the primary export of the express module is a function that when called
crated an app
*/
var app = express()


/*
This is a route handler that is responsible for handling request towards
the /ping route. Its a function that takes the arguments req, and res
and by calling res.send sends a response the the client
*/
function routeHandler(req, res) {
  console.log('Got request to:', req.url)
  return res.send('pong')
}


/*
Here the routeHandler is mounted to express. Its done by calling the
app.get method. The first argument is the route that when matched should result
in our routeHandler getting called. The name of the method (get) tells us that
only GET request will be matched.

We will later go into details about how this works

*/
app.get('/ping', routeHandler)



/*
onConnect is a simple function that when called will log a message describing that 
we are listening to a port
*/
function onConnect() {
  console.log('Im listening to port: ', 3000)
}


/*
when app.listen is called our web-app starts to listen for incoming requests
on, in this case, port 3000. The second argument is our function/callback that will 
be called once the server is listening
*/
app.listen(3000, onConnect)