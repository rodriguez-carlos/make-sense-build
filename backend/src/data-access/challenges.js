const { db } = require('../../db-connection');

const challengesCollection = db.collection('challenges');

const createChallenge = async (data) => {
    try {
        const newChallenge = await challengesCollection.add(data);
        return newChallenge; 
    } catch (err) {
        throw new Error(err);
    }
};

const retrieveChallengeById = async (challengeId) => {
    try {
        const challenge = await challengesCollection.doc(challengeId).get();
        if(challenge.exists) return challenge.data();
        return "Challenge does not exist";
    } catch (err) {
        throw new Error(err);
    }
}

const updateChallenge = async (data, challengeId) => {
    try {
        const challenge = await challengesCollection.doc(challengeId).get();
        if(!challenge.exists) return "Challenge does not exist. Cannot update";
        const updatedChallenge = await challengesCollection.doc(challengeId).set(data, {merge:true});
        return updatedChallenge;
    } catch (err) {
        throw new Error(err);
    }
}

const retrieveChallengesByCategory = async (category) => {
    try {
        const challengesByCategory = await challengesCollection.where('category', '==', category).get();
        challengesByCategoryArray = [];
        challengesByCategory.forEach(doc => challengesByCategoryArray.push({...doc.data(), challengeId: doc.id}))
        return challengesByCategoryArray;
    } catch (err) {
        throw new Error(err);
    }
}

const createCommentOnChallenge = async (data, challengeId) => {
    try {
        const challenge = await challengesCollection.doc(challengeId).get();
        if(!challenge.exists) return "Challenge not found. Cannot post comment.";
        const currentCommentsArray = await challenge.data().comments;
        const postedComment = await challengesCollection.doc(challengeId).set({
            comments: currentCommentsArray.concat(data),
        }, {merge:true})
        return postedComment;
    } catch (err) {
        throw new Error(err);
    }
}

const retrieveCommentsByChallenge = async (challengeId) => {
    try {
        const challenge = await challengesCollection.doc(challengeId).get()
        if(!challenge.exists) return "Challenge not found. Cannot get comments.";
        const currentCommentsArray = await challenge.data().comments;
        return currentCommentsArray;
    } catch (err) {

    }
}

module.exports = { createChallenge, retrieveChallengeById, updateChallenge, retrieveChallengesByCategory, createCommentOnChallenge, retrieveCommentsByChallenge };