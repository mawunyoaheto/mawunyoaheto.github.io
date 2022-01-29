const calc = require('../controller/calculate');
const router = require('express').Router();

router.post('/', calc.numberOperation);
// router.post('/subtract', calc.subtract);
// router.post('/multiply', calc.multiply);
// router.post('/divide', calc.divide);
router.get('/results',(req, res)=>{

    console.log(req.query);
    res.send('The answer is: '+req.query.results);
});

module.exports = router;