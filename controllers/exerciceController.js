var exercice=require('../models/exerciceModel');

module.exports = {
    add: (req,res)=>{
        var entite=(req.body.exercice===undefined) ? JSON.stringify(req.body) : req.body.exercice
        entite=JSON.parse(entite)
        try {
            var obj=new exercice(entite)
            obj.save().then((result) => {
                 res.json({
                     status:200,
                     message:"Insertion réussie",
                     data:result
                 });
            }).catch((err) => {
                return res.status(400).json({ message: err });
            });
        } catch (error) {
             res.json({
                 message: 'Erreurs dans les paramètres fournis',
                 erreur:error
             });
        }
    },
    getAll: (req,res)=>{
        try {
            exercice.find().then((result) => {
                 res.json({
                     status:200,
                     data:result
                 });
            })
        } catch (error) {
            console.error(error);
        }
    }
}