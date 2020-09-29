const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exerciceModel= new Schema({
    num_exercice:{
        type:String,
        required:true,
        unique:true
    },
    annee:{
        type:Number,
        required:true,
        unique:true
    },
    description:{
        type:String
    }
});
// Compile model from schema
var Exercice = mongoose.model('Exercice', exerciceModel );
module.exports = Exercice;