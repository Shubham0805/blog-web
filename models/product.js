// making model of the product 
const mongoose = require('mongoose');


//making basic schema and then making model
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    }
 
});

const Product = mongoose.model('Product',productSchema);
module.exports = Product;