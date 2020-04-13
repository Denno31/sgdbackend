const express = require('express');

const covidRouter = require('./routes')

const app = express();
app.use(express.json())

const port = 5000 || process.env.PORT;
app.use('/api/v1/on-covid-19',covidRouter)
app.listen(port,() => {
    console.log(`Server is running on ${port}`)
});