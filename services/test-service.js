/**
 * Asynchronous function to create a user.
 * @returns {Promise<Object>} A Promise that resolves with the user object.
 */
async function createUser() {
    // Create an object with initial user data
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
