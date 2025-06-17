const User = require("../models/UserModels");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.addProduct = async (req,res)=>{
    const { name , price , description, image , inStock } = req.body;
    try{
        

      
    }catch(err){
        console.log(err);
        res.status(500).json({msg : "Failed to add product  " });
    }
}

exports.loginUser = async (req,res)=>{
    const { name , email , password } = req.body;

    try{
        const user = await User.findById({email : email});
        if(!user){
            return res.status(400).json({msg : "Invalid credentials"});
        }
        const HashPassword = user.password 
        
        const isMatch = await bcrypt.compare(password, HashPassword);
        if(!isMatch){
            res.status(400).json({msg : "Invalid credentials"});
        }

        res.status(201).json({msg : "User Login success", user : user});
    }catch(err){
        res.status(500).json({msg : "Server error Registeration failed" });
    }
}

exports.updateUser = (req, res)=>{
 console.log("sds")
}

