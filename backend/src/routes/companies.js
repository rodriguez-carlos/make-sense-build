const express = require('express');
const { postCompany, getCompanyById } = require('../controllers/companies');

let companiesRouter = express.Router();

companiesRouter.post('/', postCompany);
companiesRouter.get('/:id', getCompanyById);

module.exports = { companiesRouter };