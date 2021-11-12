const { createUser } = require('../data-access/users');

async function addUser (data) {
    try {
        const result = await createUser(data);
        return result;
    } catch (err) {
        throw new Error(err);
    }
};


module.exports = { addUser };