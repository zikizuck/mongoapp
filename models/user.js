const mongoose = require('mongoose');


mongoose.model('User', {
    name: String,
    username: {
        type: String,
        require: true, // must enter name
        unique: true, // check if there is the same name in the DB
        validate(value){
            return value.includes('@') && value.length >4; // can do .length > 4
        }
    },
    password : String,
    birthDate : Date,
    gender : {
        type:String,
        enum: ['f' , 'm']
    },
    githubLink : String,
    about : String
});
