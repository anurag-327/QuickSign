const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:
    {
        type:String,
        required:true,
    },
    profile:{
        type:String,
        default:"https://github.com/anurag-327/QuickSign/assets/98267696/381eb2f4-0245-417b-8b71-56ff3ead9797"  
    },
    verificationStatus:{
        type:Boolean,
        default:true
    }
},{
    timestamps:true
})

module.exports= mongoose.model("User",UserSchema);