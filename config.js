/**
 * Configuration settings for the application.
 * Adjust these settings based on your environment and requirements.
 */
const CONFIGURATIONS = {
    // Port on which the server will listen for incoming connections
    serverPort: 8080,

    // Database host address
    dbHost: '0.0.0.0',

    // Database port
    dbPort: 27017,

    // Database name
    db: 'Sociopedia',

    // Redis server port
    redisPort: 6379,

    // Redis server host
    redisHost: 'localhost',

	// Default cache expiry time in seconds
	defaultCacheExpiry:30,
};

// Exporting the configuration object for use in other parts of the application
module.exports = CONFIGURATIONS;
