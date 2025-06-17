const mongoose  = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    } , 
    price : {
        type: Number,
        required: true
    },
    category: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Category' ,
        required: true      
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Restaurant' 
    },
    description: {
        type: String,
    },
    image:{
        type: String,
        required: true
    } ,
    inStock :{
        type: Boolean,
        required: true
    },

} , { timestamps : true})


module.exports = mongoose.model('Product', ProductSchema);