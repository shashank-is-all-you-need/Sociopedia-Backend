// Importing the Express module and creating a router
const express = require('express');
const router = express.Router();

// Importing bodyParser for handling JSON data in requests
const bodyParser = require('body-parser');

// Using bodyParser middleware to parse incoming JSON data
router.use(bodyParser.json());

// Importing the testService for handling user-related operations
const testService = require('../services/test-service');

// Handling POST request to create a user
router.post('/createUser', createUserCallback);

/**
 * Callback function for handling the creation of a user.
 * Sends a JSON response with the result of the operation.
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
function createUserCallback(req, res, next) {
    testService.createUser()
        .then((data) => {
            res.json({"data": data, "msg": "User created"});
        })
        .catch(err => next(err));
}

// Exporting the router for use in other parts of the application
module.exports = router;
