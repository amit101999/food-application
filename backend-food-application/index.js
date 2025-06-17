const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db')

const userRouter = require("./routes/userRoutes")
const productRouter = require("./routes/ProductRoutes")

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))
app.use(cookieParser())

connectDB()

app.use("/api/users", userRouter)
app.use("/api/products", productRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})