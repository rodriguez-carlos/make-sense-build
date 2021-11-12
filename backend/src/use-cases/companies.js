const { createCompany, retrieveCompanyById } = require('../data-access/companies');

async function addCompany (data) {
    try {
        const result = await createCompany(data);
        return result;
    } catch (err) {
        throw new Error(err);
    }
};

async function readCompanyById (companyId) {
    try {
        const result = await retrieveCompanyById(companyId);
        return result;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = { addCompany, readCompanyById };