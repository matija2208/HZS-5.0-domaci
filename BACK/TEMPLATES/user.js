const mg = require("mongoose");

const UserStruct = new mg.Schema({
    ime:{
        type:String,
        trim:true,
        require:true
    },
    prezime:{
        type:String,
        trim:true,
        require:true
    },
    username:{
        type:String,
        trim:true,
        require:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        require:true
    },
    mail:{
        type:String,
        trim:true,
        require:true,
        unique:true
    }
});

module.exports = mg.model("user",UserStruct);