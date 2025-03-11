// Create web server
const express = require('express');
const app = express();

// Create a middleware function
app.use((req, res, next) => {
    console.log('Middleware function is called');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});

// Run the server and open the browser, you will see the output: "Hello World" and the message in the console "Middleware function is called".

// In this example, we have created a middleware function that logs a message to the console. The middleware function is called before the route handler function. This allows us to perform some common tasks such as logging, authentication, etc., before the route handler function is called.

// Middleware functions can also be used to modify the request and response objects. For example, you can add properties to the request object that can be accessed by the route handler function.

// Middleware functions can also be used to handle errors. If an error occurs in a middleware function, you can call the next function with an error object to pass the error to the error handling middleware.

// Middleware functions can also be used to terminate the request-response cycle. If a middleware function does not call the next function, the request-response cycle is terminated and the response is sent back to the client.

// Middleware functions can be used to perform a wide range of tasks such as logging, authentication, authorization, error handling, etc. They provide a flexible and powerful mechanism for building web applications in Node.js.

// In the next section, we will look at how to create custom middleware functions in Express. We will also look at how to use third-party middleware functions in Express.