const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {connect} = require ('./models');





connect().then(db =>{
    console.log('DB is connected');
    const app = express();
    const port = 3000;

    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan('combined'));

    app.get('/api/users', (req, res) => {
        db.collection('users')
            .find({})
            .toArray()
            .then(list => res.json(list).end())
    });
    app.post('/api/users', function (req, res) {
        db.collection('users')
            .insert({})
            .toArray()
            .then(list =>res.json(list).end())

        res.send('Got a POST request')
    });
    app.put('/api/users', function (req, res) {
        res.send('Got a PUT request at /user')
    });
    app.delete('/api/users', function (req, res) {
        res.send('Got a DELETE request at /user')
    });

    app.listen(port, () => console.log(`App listening on port ${port}!`));

});

