const express = require('express');
const morgan = require('morgan');
const covidRouter = require('./routes')
const xmlMiddleware = require('xml-express-middleware').xml;
const fs = require('fs');
const path = require('path');

const app = express();

const logs = fs.createWriteStream(path.join(__dirname, 'logs.log'), { flags: 'a' })
app.use(express.json())
app.use(xmlMiddleware())
app.use(morgan(':method \t\t :url \t\t :status \t\t :response-time ms', { stream: logs }))
const port =  process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.use('/api/v1/on-covid-19',covidRouter)
app.listen(port,() => {
    console.log(`Server is running on ${port}`)
});