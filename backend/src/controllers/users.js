const { addUser } = require('../use-cases/users');

async function postUser (req, res) {
    try {
        const newUser = req.body;
        const result = await addUser(newUser);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message});
    }
};



module.exports = { postUser };