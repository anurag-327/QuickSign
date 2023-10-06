const mongoose=require("mongoose");
const dotenv=require('dotenv').config();
mongoose.set("strictQuery", false);


mongoose.connect("mongodb+srv://anurag-327:IZw3mlCF0WwjrIm7@cluster0.bg87uji.mongodb.net/QuickSign?retryWrites=true&w=majority")
.then(()=>console.log("Database connected successully"))
.catch(err => console.log("error setting up database",err))





