const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const PORT=process.env.PORT || 5000;
const mongoose=require("./controller/mongoose")
var cors = require('cors')
app.use(cors())
app.use(express.json({limit: '25mb'}));

app.get("/",(req,res)=>
{
    return res.json("API Running Successfully!")
})


// api to handle user login and registration
app.use("/api/auth",require("./routes/auth"));
// api to handle applications
app.use("/api/application",require("./routes/application"));
// api to handle OAuth
app.use("/api/OAuth",require("./routes/OAuth"));
// api for fetching data 
app.use("/api/data",require("./routes/data"))
// developers api
app.use("/api/developers",require("./routes/developers"))

app.use((req,res,next)=>
{
    return res.json({status:404,message:"No Such route exists!"})
})
app.listen(PORT,()=>
{
    console.log(`server running at port ${PORT}`)
})