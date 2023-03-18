const mongoose=require("mongoose");
const dotenv=require('dotenv').config();
mongoose.set("strictQuery", false);


// mongoose.connect(process.env.MONGO_URl)
// .then(()=>console.log("Database connected successully"))
// .catch(err => console.log("error setting up database"))

mongoose.connect(`mongodb+srv://anurag-327:${process.env.MONGO_ATLAS}@cluster0.bg87uji.mongodb.net/QuickSign?retryWrites=true&w=majority`)
.then(()=> console.log("Database connected sucessfully"))
.catch(err => console.log(err.message))




