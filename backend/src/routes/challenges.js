const express = require('express');
const { postChallenge, getChallengeById, patchChallenge, getChallengesByCategory, postCommentOnChallenge, getCommentsByChallenge } = require('../controllers/challenges');

let challengesRouter = express.Router();

challengesRouter.post('/', postChallenge);
challengesRouter.get('/:id', getChallengeById);
challengesRouter.patch('/:id', patchChallenge);
challengesRouter.get('/category/:id', getChallengesByCategory);
challengesRouter.patch('/:id/comments', postCommentOnChallenge);
challengesRouter.get('/:id/comments', getCommentsByChallenge);

module.exports = { challengesRouter };