var router=require('express').Router();
var exerciceCtr=require('../controllers/exerciceController');

router.use((req, res, next)=> {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With ,Content-Type, Accept");
    next();
  
    router.options("*",(req,res)=>{
      res.header("Access-Control-Allow-Methods", "PUT, GET,POST");
      res.send();
    });
    
});

router.post('/', exerciceCtr.add);

router.get('/',exerciceCtr.getAll); 

module.exports=router;