
router=require('express').Router();
const classeCtr=require('../controllers/classeController');

router.use((req, res, next)=> {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With ,Content-Type, Accept");
    next();
  
    router.options("*",(req,res)=>{
      res.header("Access-Control-Allow-Methods", "PUT, GET,POST");
      res.send();
    });
    
});

router.post('/',classeCtr.add);
router.get('/', classeCtr.getAll);

module.exports = router;
