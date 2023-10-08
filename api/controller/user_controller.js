const User=require("../model/User")
const Organization=require("../model/Application")
module.exports.getUser=async(req,res)=>
{
    try{
        const user=await User.findOne({_id:req.user._id})
        .populate({path:"access"})
        if(user)
        {
            return res.status(200).json(user);
        }
        else{
            return res.status(404).json({status:404,message:"Couldn't get user"});  
        }

    }catch(err)
    {
        console.log(err)
        return res.status(500).json({status:500,message:err.message});
    }
}

