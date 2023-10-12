const mongoose=require("mongoose");
const dotenv=require('dotenv').config();
mongoose.set("strictQuery", false);


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Database connected successully"))
.catch(err => console.log("error setting up database",err))