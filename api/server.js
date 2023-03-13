const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const PORT=process.env.PORT || 5000;
const mongoose=require("./controller/mongoose")
var cors = require('cors')
app.use(cors())
app.use(express.json({limit: '25mb'}));
const sendOTP_controller=require("./controller/sendOTP_controller")
app.get("/",(req,res)=>
{
    return res.json("API Running Successfully!")
})
app.post("/sendOTP",sendOTP_controller.sendOTP)
app.use("/api/auth/user",require("./routes/auth"))
app.use("/api/auth/organization",require("./routes/organization"))
app.use("/api",require("./routes/user"))
app.use("/api/organization/auth",require("./routes/organizationauth"))
app.use("/api/admin",require("./routes/admin"))
app.use((req,res,next)=>
{
    return res.json("No Such route exists!")
})
app.listen(PORT,()=>
{
    console.log(`server running at port ${PORT}`)
})