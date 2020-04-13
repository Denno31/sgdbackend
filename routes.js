const router = require("express").Router();
const covid19ImpactEstimator = require('./estimator');
var xml = require('xml');

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
    
    res.send(xml(covid19ImpactEstimator(data)));
});

module.exports = router;