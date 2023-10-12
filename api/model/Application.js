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
    logo:{type:String,default:"https://github.com/anurag-327/QuickSign/assets/98267696/373a8c6a-6e65-4b02-9ba6-27cdf49ea4b8"},
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