const mongoose = require('mongoose');


mongoose.model('User', {
    name: String,
    username: {
        type: String,
        require: true, // must enter name
        unique: true, // check if there is the same name in the DB
        validate(value){
            return  value.length >2; // can do .length > 4 - value.includes('@') &&s
        }
    },
    password : String,
    birthDate : Date,
    gender : {
        type:String,
        enum: ['f' , 'm']
    },
    // githubLink : String,
    about : String
});
