const mongoose = require('mongoose');
const Post = mongoose.model('Post');

function postsRoutes(app){
    app.get('/api/posts', (req, res) => {
        Post
            .find({})
            .sort('-created') //sort from new to last
            .limit(Number(req.query.limit || 20)) //limit the number of posts to show
            .offset(Number(req.query.offset || 0)) // start from
            .then(list => res.json(list).end())
    })
        .post('/api/posts',(req , res) =>{
            const user = new Post(req.body);
            user.save()
                .then(post => res.json(post).end())
                .catch(err => res.status(400).json(err).end())
        })
        .get('/api/posts/:postId' , (req , res) =>{
            Post
                .findById(req.params.postId)  // get the Id as string
                .then((post) => res.json(post).end()) // return the object after the delete
                .catch(err => res.status(400).json(err).end())

        }).delete('/api/posts/:postId' , (req , res) =>{
            Post
                .findById(req.params.postId)  // get the Id as string
                .then(post => post.remove())
                .then((post) => res.json(post).end()) // return the object after the delete
                .catch(err => res.status(400).json(err).end())

        })
        .put('/api/posts/:postId', (req , res)=>{
            Post.findById(req.params.userId)  // get the Id as string
                .then(post =>Object.assign(post,req.body)) // add the new info to the object
                .then(post => post.save())
                .then((post) => res.json(post).end()) // return the object after the edit
                .catch(err => {
                    console.error(err);
                    res.status(400).json({message: ' failed to update'}).end()
                })
        })

}

module.exports= postsRoutes;
