const { addChallenge, readChallengeById, modifyChallenge, readChallengesByCategory, addCommentOnChallenge, readCommentsByChallenge } = require('../use-cases/challenges')

async function postChallenge (req, res) {
    try {
        let newChallenge = req.body;
        const result = await addChallenge(newChallenge);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message});
    }
};

async function getChallengeById (req, res) {
    try {
        const result = await readChallengeById(req.params.id);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message})
    }
}

async function patchChallenge (req, res) {
    try {
        const result = await modifyChallenge(req.body, req.params.id);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message});
    }
};

async function getChallengesByCategory (req, res) {
    try {
        const result = await readChallengesByCategory(req.params.id);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message});
    }
}

async function postCommentOnChallenge (req, res) {
    try {
        const result = await addCommentOnChallenge(req.body, req.params.id);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message})
    }
}

async function getCommentsByChallenge (req, res) {
    try {
        const result = await readCommentsByChallenge(req.params.id);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message});
    }
}

module.exports = { postChallenge, getChallengeById, patchChallenge, getChallengesByCategory, postCommentOnChallenge, getCommentsByChallenge };
