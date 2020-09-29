var sorteCompte=require('../models/sorteCompteModel')

module.exports={
    add:(req,res)=>{
        var entite=(req.body.sorte===undefined) ? JSON.stringify(req.body) : req.body.sorte;
        entite=JSON.parse(entite);
        try {
            obj=new sorteCompte(entite);
            obj.save().then((result) => {
                 res.json({
                     status:200,
                     data:result
                 });
            }).catch((err) => {
                 return res.status(400).json({ message: err });
            });
        } catch (error) {
             res.json({
                 status:400,
                 message:"l'insertion a echoué pour raison d'une erreur dans la requette"
             });
        }
    },
    getAll:(req,res)=>{
        sorteCompte.find().then((result) => {
             res.json({
                 status:200,
                 data:result
             });
        }).catch((err) => {
             res.json({
                 status:404,
                 mesage:err
             });
        });
    }
}