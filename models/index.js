// now with mongoose

const mongoose = require ('mongoose');

mongoose
    .connect('mongodb://heroku_mjrklbvl:6an38k795kgunjropt3673dhm@ds033579.mlab.com:33579/heroku_mjrklbvl', {useNewUrlParser: true});
    // .catch(()=> process.exit(1));



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