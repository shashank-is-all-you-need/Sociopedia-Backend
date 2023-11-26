// Importing the Express module
const express = require('express');

// Importing CORS for Cross-Origin Resource Sharing
const cors = require('cors');

// Importing configuration settings
const CONFIG = require('./config');

// Importing the TestController for handling test-related routes
const TestController = require('./controllers/test-controller.js');

// Creating an Express application instance
const app = express();

// Using TestController for routes under "/sociopedia/test"
app.use("/sociopedia/test", TestController);

// Enabling Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Listening for incoming connections on the specified port
app.listen(CONFIG.serverPort, (err) => {
    if (!err) {
        // Server successfully started
        console.log(`Server started at Port ${CONFIG.serverPort}`);
    } else {
        // Failed to start the server
        console.error("Failed to start the server");
    }
});
