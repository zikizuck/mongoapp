const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require ('./models');


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

////
require('./routes/users')(app); // from users.js we created func for the app
////


app.listen(port, () => console.log(`App listening on port ${port}!`));
