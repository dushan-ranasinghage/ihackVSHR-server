const mongoose = require('mongoose');

//the model data set needed and the correspoding collection
const vehicleSchema = mongoose.Schema({
   // id:Number,
    vehicle_reg_no:String,
    brand:String,
    model_no:String,
    service_description:String,
    parts_added:Array,
    customer_name:String,
    repair_date:Date,
    cost:Number,
    milage:Number,
    existing_condition:String,
    service_center:String,
    is_approved:Boolean
    
 
},{ collection : 'vehiclehistory' });




module.exports = mongoose.model('vehicles', vehicleSchema);