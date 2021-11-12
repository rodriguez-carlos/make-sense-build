const express = require('express');
const cors = require('cors');
const { usersRouter } = require('./src/routes/users')
const { challengesRouter } = require('./src/routes/challenges');
const { companiesRouter } = require('./src/routes/companies');
const app = express();
const port = 5000;


app.use(express.json());
app.use(cors())

app.use('/users', usersRouter)
app.use('/companies', companiesRouter)
app.use('/challenges', challengesRouter)


app.listen(port, () => {
    console.log(`Server is live on port ${port}`);
});