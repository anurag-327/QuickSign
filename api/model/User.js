const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phonenumber:{
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
    profile:{type:String},
    type:{
        type:String,
        default:"user"
    },
    access:[{
        company:{type:mongoose.Schema.Types.ObjectId,ref:"Organization"}
    }]
},{
    timestamps:true
})

module.exports= mongoose.model("User",UserSchema);