const { db } =  require('../../db-connection');

const usersCollection = db.collection('users');

const createUser = async (data) => {
    try {
        const newUser = await usersCollection.add(data);
        return newUser;
    } catch (err) {
        throw new Error(err);
    }
};



module.exports = { createUser };