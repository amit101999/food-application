const User = require("../models/UserModels");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });

        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            name, email, password: hashPassword
        })
        if (!newUser) {
            return res.status(400).json({ msg: "Registration failed" });
        }


        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1d' })

        res.cookie("user-token", token, {
            maxAge: 60 * 60 * 24 * 1000,
            secure: false,
            httpOnly: true,
            sameSite: "none"
        }).status(201).json({ msg: "User registered successfully", user: newUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "Server error Registeration failed" });
    }
}

exports.loginUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await User.findById({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid credentials" });
        }
        const HashPassword = user.password

        const isMatch = await bcrypt.compare(password, HashPassword);
        if (!isMatch) {
            res.status(400).json({ msg: "Invalid credentials" });
        }

        res.status(201).json({ msg: "User Login success", user: user });
    } catch (err) {
        res.status(500).json({ msg: "Server error Registeration failed" });
    }
}

exports.updateUser = (req, res) => {
    console.log("sds")
}

