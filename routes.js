const router = require("express").Router();
const covid19ImpactEstimator = require('./estimator');
//var xml = require('xml');
const builder = new require('xml2js').Builder();

router.post('/',(req,res)=>{
    const data = req.body
    res.json(covid19ImpactEstimator(data));
})
router.post('/json',(req, res)=>{
    const data = req.body
    res.json(covid19ImpactEstimator(data));
});

router.post('/xml',(req, res)=>{
    const data = req.body
    res.type('application/xml');
    //console.log(xml(covid19ImpactEstimator(data)));
    //console.log(builder.buildObject(data));
   // res.send(xml(covid19ImpactEstimator(data)));
   res.xml(covid19ImpactEstimator(data));
});

module.exports = router;