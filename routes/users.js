
const mongoose = require('mongoose');
const User = mongoose.model('User')




function usersRoutes(app){
    app.get('/api/users', (req, res) => {
        User
            .find({})
            .then(list => res.json(list).end())
    })
        .post('/api/users',(req , res) =>{
            const user = new User(req.body);
            user.save()
                .then(user => res.json(user).end())
                .catch(err => res.status(400).json(err).end())
        })
        .get('/api/users/:userId' , (req , res) =>{
            User
                .findById(req.params.userId)  // get the Id as string
                .select('name birthDate gender about created')
                .then((user) => res.json(user).end()) // return the object after the delete
                .catch(err => res.status(400).json(err).end())

        }).delete('/api/users/:userId' , (req , res) =>{
            User
                .findById(req.params.userId)  // get the Id as string
                .then(user => user.remove())
                .then((user) => res.json(user).end()) // return the object after the delete
                .catch(err => res.status(400).json(err).end())

        })
        .put('/api/users/:userId', (req , res)=>{
                User.findById(req.params.userId)  // get the Id as string
                .then(user =>Object.assign(user,req.body)) // add the new info to the object
                .then(user => user.save())
                .then((user) => res.json(user).end()) // return the object after the edit
                .catch(err => {
                    console.error(err);
                    res.status(400).json({message: ' failed to update'}).end()
                })
        })

}

module.exports= usersRoutes;