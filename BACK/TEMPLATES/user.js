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
        require:true
    },
    pasword:{
        type:String,
        trim:true,
        require:true
    },
    mail:{
        type:String,
        trim:true,
        require:true
    }
});

module.exports = mg.model("user",UserStruct);