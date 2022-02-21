const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute=require('./routes/user');
const authRoute=require('./routes/auth');
const postRoute=require('./routes/posts');
const conversationRoute=require('./routes/conversations');
const messageRoute=require('./routes/messages');
const multer=require('multer');
const path=require("path");
dotenv.config();
const app = express();
//mongo connection query
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("connected to mongo database");
});


app.use("/images",express.static(path.join(__dirname,"public/images")));
//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

const storage=multer.diskStorage(

  {
    destination:(req,file,cb)=>{
      cb(null,"public/images/post");
    },
    filename:(req,file,cb)=>{
      const d=new Date();
      
      cb(null,d.getDate()+d.getHours()+file.originalname);
    },
  }
)
const upload=multer({storage});
app.post("/api/upload",upload.single("file"),(req,res)=>{
try {
  return res.status(200).json("File uploaded sucessfully")
} catch (error) {
  console.log(error);
}


})

app.get("/",(req,res)=>{res.send("welcome to home page")})
app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/posts",postRoute);
app.use("/api/conversations",conversationRoute)
app.use("/api/messages",messageRoute)
//running server on 5000
app.listen(5000, () => { 
  console.log("Backend server is running");
});



