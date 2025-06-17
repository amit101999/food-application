const mongoose = require('mongoose');

const createDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL)
            console.log('Connected to MongoDB');
    }catch(err){
        console.log('Failed to connect to MongoDB:', err)
    }
} 

module.exports = createDb;