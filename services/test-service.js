// Importing utility functions for working with the cache
const { getValueForKey, setValueForKey } = require("../utils/cache");

/**
 * Asynchronous function to create a user.
 * @returns {Promise<Object>} A Promise that resolves with the user object.
 */
async function createUser(){
    // Example of using the cache utility to get a value for a key
    const value = await getValueForKey("user-id-123");
    const otpObject = JSON.parse(value?.value)

    const valueToStore = {"otp":"456772"}
    
    const insertKey = await setValueForKey("user-id-12534", JSON.stringify(valueToStore), 10);
    
    // Placeholder object for the user's data
    let objToInsert = {
        "userName": "params.userName", // Placeholder for the user's username
        "bookedSlots": [], // Empty array to represent booked slots
    };

    // Returning the object to be inserted
    return objToInsert;
}

// Exporting the createUser function for use in other parts of the application
module.exports = {
    createUser
};
