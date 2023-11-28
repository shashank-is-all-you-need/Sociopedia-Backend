// Importing default cache expiry from config file
const { defaultCacheExpiry } = require('../config');

// Importing the Redis client instance
const redisClient = require('../redis-client.js'); 

/**
 * Function to set the value for the key if it doesn't exist
 * @param {string} key - The key to set.
 * @param {string} value - The value to set for the key.
 * @param {number} expirationInSeconds - Expiration time in seconds (default is from config).
 * @returns {Object} - An object indicating the success of the operation.
 */
const setValueForKey = async (key, value, expirationInSeconds = defaultCacheExpiry) => {
    try {
        // Set the value for the key with optional expiration time
        // NX indicated Not Exists. It sets the value only if key does not exists otherwise null is returned
        // EX indicates using expiry time
        const result = await redisClient.set(key, value, 'NX', 'EX', expirationInSeconds);

        if (result === 'OK') {
            // Key set successfully
            console.log(`Key ${key} set successfully.`);
            return { isSuccess: true };
        } else {
            // Key already exists
            console.log(`Key ${key} already exists.`);
            return { isSuccess: false, message: `Key ${key} already exists.` };
        }
    } catch (err) {
        // Handle errors during the set operation
        console.error(`Error setting value for key ${key}: ${err}`);
        return { isSuccess: false, err: err };
    }
};

/**
 * Function to get the value associated with the key
 * @param {string} key - The key to retrieve the value for.
 * @returns {Object} - An object containing the result of the operation.
 */
const getValueForKey = async (key) => {
    try {
        // Get the value associated with the key
        const value = await redisClient.get(key);

        if (value !== null) {
            // Key exists, log value
            console.log(`Value for key ${key}: ${value}`);
            return { isKeyExists: true, key: key, value: value };
        } else {
            // Key does not exist
            console.log(`Key ${key} does not exist.`);
            return { isKeyExists: false };
        }
    } catch (err) {
        // Handle errors during the get operation
        console.error(`Error getting value for key ${key}: ${err}`);
        return { isKeyExists: false, err: err };
    }
};

// Exporting the functions for use in other parts of the application
module.exports = {
    setValueForKey,
    getValueForKey
};
