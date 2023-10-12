const mongoose=require("mongoose")
const AuthorizationSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        clientId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Application"
        },
    },
    {
        timestamps:true
    }
)
module.exports=mongoose.model("Authorization",AuthorizationSchema)