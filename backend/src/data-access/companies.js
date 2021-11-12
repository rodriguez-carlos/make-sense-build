const { db } =  require('../../db-connection');

const companiesCollection = db.collection('companies');

const createCompany = async (data) => {
    try {
        data.imageBlob
        const newCompany = await companiesCollection.add(data);
        return newCompany;
    } catch (err) {
        throw new Error(err);
    }
};

const retrieveCompanyById = async (companyId) => {
    try {
        const company = await companiesCollection.doc(companyId).get();
        if(company.exists) return company.data();
        return "No such company";
    } catch (err) {
        throw new Error(err);
    }
}


module.exports = { createCompany, retrieveCompanyById };