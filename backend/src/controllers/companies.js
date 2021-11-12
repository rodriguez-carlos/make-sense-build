const { addCompany, readCompanyById } = require('../use-cases/companies')

async function postCompany (req, res) {
    try {
        const newCompany = req.body;
        const result = await addCompany(newCompany);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message});
    }
};

async function getCompanyById (req, res) {
    try {
        const result = await readCompanyById(req.params.id);
        res.json({response: result});
    } catch (err) {
        res.status(400)
            .json({response: err.message});
    }
};

module.exports = { postCompany, getCompanyById };