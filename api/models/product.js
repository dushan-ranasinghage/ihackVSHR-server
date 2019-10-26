const mongoose = require('mongoose');

//the model data set needed and the correspoding collection
const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    type: String,
    title: String,
    url: { type: String, required: true}
},{ collection : 'products' });

module.exports = mongoose.model('Product', productSchema);