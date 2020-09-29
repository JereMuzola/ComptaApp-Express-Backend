//*********************************************************************************************************
//* Explanation 
//* Author : Skynet 
//*********************************************************************************************************
var mongoose = require('mongoose');
const classe = require('./classeModel');
const type = require('./typeCompteModel');
const sorte = require('./sorteCompteModel');
var Schema = mongoose.Schema;
var compteModel  = new mongoose.Schema({

    //your fields name goes here

    numero:{
        type:String,
        unique:true,
        required:true
    },
    libelle:{
        type:String,
        unique:true,
        required:true
    },
    description:{
        type:String,
    },
    classe:{
        type:Schema.Types.ObjectId,
        ref:'classe'
    }
    sorte:{
        type:Schema.Types.ObjectId,
        ref:'sorteCompte'
    }
    type:{
        type:Schema.Types.ObjectId,
        ref:'typeCompte'
    }
});

module.exports = mongoose.model('compte', compteModel);