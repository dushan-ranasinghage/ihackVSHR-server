const express = require('express');
const router = express.Router();

const users = require('../models/user')


router.get('/username/:userId/password/:password', (req, res, next) => {
    const user_name = req.params.userId;
    const password = req.params.password;
    console.log( req.params.password);
    users.find({ user_name: user_name,user_password:password })
        .exec()
        .then(doc => {
            console.log(doc[0]==undefined);
            res.status(200).json(!(doc[0]==undefined));
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err })
        })
});

router.get('/', (req, res, next) => {
    console.log("wrong");
   
    users.find().
        exec().
        then(docs => {
        
            res.status(200).json(docs)
        }).
        catch(err => {
            res.status(500).json({
                error: err
            });
        })
});
router.post('/', (req, res, next) => {
    console.log(req);
    const user = new users({
        _id: new mongoose.Types.ObjectId(),
        user_name: req.body.username,
        password: req.body.password,
        
    });
    user.save().then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdProduct: user
    });
});



module.exports = router;