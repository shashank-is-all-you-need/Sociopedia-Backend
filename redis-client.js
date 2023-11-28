// Import the ioredis library for Redis connectivity
const Redis = require('ioredis');

// Import configuration settings
const CONFIGURATIONS = require('./config');

// Create a Redis client instance
const redisClient = Redis.createClient({
    host: CONFIGURATIONS.redisHost, // Update with your Redis server host
    port: CONFIGURATIONS.redisPort, // Update with your Redis server port
});

// Event listener for the 'connect' event
redisClient.on('connect', function() {
    console.log('Connected to Redis!');
});

// Event listener for the 'error' event
redisClient.on('error', function(err) {
    console.error('Redis connection error:', err);
});

// Export the Redis client instance for use in other parts of the application
module.exports = redisClient;
