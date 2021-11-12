const { createChallenge, retrieveChallengeById, updateChallenge, retrieveChallengesByCategory, createCommentOnChallenge, retrieveCommentsByChallenge } = require('../data-access/challenges');

async function addChallenge (data) {
    try {
        const result = createChallenge(data);
        return result;
    } catch (err){
        throw new Error(err);
    }
};

async function readChallengeById (challengeId) {
    try {
        const result = await retrieveChallengeById (challengeId);
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

async function modifyChallenge (data, challengeId) {
    try {
        const result = await updateChallenge(data, challengeId);
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

async function readChallengesByCategory (category) {
    try {
        const result = await retrieveChallengesByCategory(category);
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

async function addCommentOnChallenge (data, challengeId) {
    try {
        const result = await createCommentOnChallenge(data, challengeId);
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

async function readCommentsByChallenge (challengeId) {
    try {
        const result = await retrieveCommentsByChallenge(challengeId);
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = { addChallenge, readChallengeById, modifyChallenge, readChallengesByCategory, addCommentOnChallenge, readCommentsByChallenge };