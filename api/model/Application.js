const mongoose=require("mongoose")

const ApplicationSchema=new mongoose.Schema({
    applicationName:{
        type:String,
        required:true,
        unique:true
    },
    homepageURL:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    callbackURL:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    profile:{type:String},
    clientSecret:{
        type:String,
        required:true
    }
})

module.exports= mongoose.model("Application",ApplicationSchema);