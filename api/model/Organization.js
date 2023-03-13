const mongoose=require("mongoose")

const OrganizationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true,
    },
    contact:{
        type:String,
        required:true
    },
    type:{
        type:String,
        default:"organization"
    },
    status:{
        type:String,
        default:"pending"
    },
    profile:{type:String},
    link:{
        type:String,
        required:true
    }

})

module.exports= mongoose.model("Organization",OrganizationSchema);