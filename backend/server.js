const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute=require('./routes/user');
const authRoute=require('./routes/auth');
const postRoute=require('./routes/posts');
dotenv.config();
const app = express();
//mongo connection query
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connected to mongo database");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{res.send("welcome to home page")})
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
//running server on 5000
app.listen(5000, () => {
  console.log("Backend server is running");
});



