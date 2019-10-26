const express = require('express');
const router = express.Router();

const Vehicle = require('../models/vehicle')

router.post('/', (req, res, next) => {
console.log(req.body.vehicle_reg_no);
const vehicle = new Vehicle({
    id: 1,
    vehicle_reg_no:req.body.vehicle_reg_no,
    brand:req.body. brand,
    model_no:req.body. model_no,
    service_description:req.body.service_description,
    parts_added:req.body.parts_added,
    customer_name:req.body.customer_name,
    repair_date:req.body.repair_date,
    cost:req.body.cost,
    milage:req.body.milage,
    existing_condition:req.body.existing_condition,
    service_center:req.body.service_center
});
//console.log("hit");
//console.log(vehicle);
vehicle.save().then(result => {
    console.log(result);
}).catch(err => console.log(err));
res.status(201).json({
    message: 'Handling POST requests to /products',
    createdProduct: product
});
});

router.get('/', (req, res, next) => {
    Vehicle.find().
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
module.exports = router;