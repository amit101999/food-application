const mongoose = require('mongoose');

const RestSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
        } ,
    location : {
        type : String,
        required : true
        } ,
    contact :{
        type : Number,
        required : true
    } , 
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User' 
    },
    status :{
        type : String,
        enum : ['open', 'closed'],
        default : 'open' 
    },
} , {timestamps: true})