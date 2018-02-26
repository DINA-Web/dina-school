This lesson is about working with [Express](https://expressjs.com/en/4x/api.html) to build a Todo API with a mock database.

The synchronous-db example is the simplest, with all the relevant code in the same file and a synchronous database mock. It is a good exercise to refactor the synchronous example to have better code separation, e.g. each routeHandler in its own folder so that the server file is less cluttered.

The asynchronous-db example also introduces a mock database that has read and write operations that return Promises.

You can make requests to the API through the Postman desktop app (no signup required): https://www.getpostman.com/apps
