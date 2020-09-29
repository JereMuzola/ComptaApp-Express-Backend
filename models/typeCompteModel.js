//*********************************************************************************************************
//* Explanation 
//* Author : Skynet 
//*********************************************************************************************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var typeCompteModel  = new mongoose.Schema({

    //your fields name goes here

    numero: {
        type: String,
        required: true,
        unique:true
    },
    libelle: {
        type: String,
        required: true,
        unique:true
    },
    description: {
        type: String
    }
});

module.exports = mongoose.model('typeCompte', typeCompteModel);