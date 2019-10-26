const mongoose = require('mongoose');

//the model data set needed and the correspoding collection
const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id:{ type: Number, required: true},
    user_name:String,
    user_emali:String,
    user_password:String,
    date:Date
    
 
},{ collection : 'users' });

module.exports = mongoose.model('users', userSchema);