const express = require('express');
const router = express.Router();

const users = require('../models/vehicle')

router.get('/', (req, res, next) => {

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
