// now with mongoose

const mongoose = require ('mongoose');

//in the real worl we will input the mongodb likr this

// const mongodbUri = process.env.MONGODB_URI || "mongodb://heroku_qv5n236q:ai66gl30jct9toenb3ic28kf98@ds349628.mlab.com:49628/heroku_qv5n236q";

mongoose
    .connect('mongodb://heroku_qv5n236q:ai66gl30jct9toenb3ic28kf98@ds349628.mlab.com:49628/heroku_qv5n236q', {useNewUrlParser: true})
    .catch(()=> process.exit(1));


require('./user');
require('./post');
