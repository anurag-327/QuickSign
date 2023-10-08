const mongoose=require("mongoose")

const ApplicationSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    homepageURL:{
        type:String,
        required:true
    },
    callbackURL:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        default:true
    },
    logo:{type:String},
    clientSecret:{
        type:String,
        required:true
    },
    developer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports= mongoose.model("Application",ApplicationSchema);