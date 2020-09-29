let classe=require('../models/classeModel');

module.exports = {
    add:(req,res)=>{
		var entite=(req.body.classe===undefined) ? JSON.stringify(req.body) : req.body.classe;
		entite=JSON.parse(entite);
		try {
			var obj=new classe(entite);
			obj.save().then((result) => {
				const response={
					status:200,
					message:"l'insertion a réussi",
					data:result
				}
				 res.json(response);
			}).catch((err) => {
				const response={
					status:251,
					message:"l'insertion a échoué à cause d'une erreur provenant de MongoDb",
					message:err
				}
				 res.json(response);
			});
		} catch (error) {
			const response={
				status:200,
				message:"l'insertion a échoué a cause d'une errreur de paramètre",
				data:error
			}
			 res.json(response);
		}
	},
	
	getAll:(req,res)=>{
		try {
			classe.find().then((result) => {
				const response={
					status:200,
					data:result
				}
				 res.json(response);
			}).catch((err) => {
				return res.status(400).json({ message: err });
			});
			
		} catch (error) {
			return res.status(400).json({ message: err });
		}
	}
};