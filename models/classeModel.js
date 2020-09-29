//*********************************************************************************************************
//* Explanation 
//* Author : Skynet 
//*********************************************************************************************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var classeModel  = new mongoose.Schema({

    //les champs du modèle sont défins ici

    numero: {
        type: String,
        require:true,
        unique:true
    },
    libelle: {
        type: String,
        require: true,
        unique:true
    },
    description:{
        type:String
    }
});

classe = mongoose.model('classe', classeModel);
module.exports = classe;