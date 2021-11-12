const express = require('express');
const { postUser } = require('../controllers/users');

let usersRouter = express.Router();

usersRouter.post('/', postUser);

module.exports = { usersRouter };