const express = require('express');

const covidRouter = require('./routes')
const xmlMiddleware = require('xml-express-middleware').xml;

const app = express();
app.use(express.json())
app.use(xmlMiddleware())
const port =  process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.use('/api/v1/on-covid-19',covidRouter)
app.listen(port,() => {
    console.log(`Server is running on ${port}`)
});