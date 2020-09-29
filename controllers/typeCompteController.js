var typeCompte=require('../models/typeCompteModel')

module.exports={
    add:(req,res)=>{
      var entite=(req.body.type===undefined) ? JSON.stringify(req.body) : req.body.type;
      entite=JSON.parse(entite);
      var obj=new typeCompte(entite);
      obj.save().then((result) => {
           res.json({
               status:200,
               data:result
           });
      }).catch((err) => {
           res.json({
               status:404,
               message:err
           });
      });
    }
};