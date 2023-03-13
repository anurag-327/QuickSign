const User=require("../model/User")
const Organization=require("../model/Organization")
module.exports.getUser=async(req,res)=>
{
    try{
        const user=await User.findById(req.user._id).select("-password -updatedAt").populate({path:"access",populate:{path:"company",select:"name link type contact profile"}});
        if(user)
        {
            return res.status(200).json(user);
        }
        else{
            return res.status(404).json({status:404,message:"Couldn't get user"});  
        }

    }catch(err)
    {
        return res.status(500).json({status:500,message:err.message});
    }
}

