const mongoose=require("mongoose")
const AuthorisationSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },
        applicationId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Application"
        },
    },
    {
        timestamps:true
    }
)
module.exports=mongoose.model("Authorisation",AuthorisationSchema)