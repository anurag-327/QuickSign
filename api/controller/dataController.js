const User=require("../model/User")
const Application=require("../model/Application")
const Authorization=require("../model/Authorization")

module.exports.getData=async(req,res)=>
{
    try{
        const user=await User.findOne({_id:req.user._id}).select("-password")
        const applications=await Application.find({developer:req.user._id})
        const authorizations=await Authorization.find({userId:req.user._id}).populate({path:"clientId",select:"name homepageURL logo description"})
        if(user && applications)
        {
            return res.status(200).json({status:200,data:user,applications:applications,authorizations:authorizations});
        }
        else{
            return res.status(404).json({status:404,message:"Couldn't get data"});  
        }

    }catch(err)
    {
        console.log(err)
        return res.status(500).json({status:500,message:err.message});
    }
}

module.exports.getUser=async(req,res)=>
{
    try{
        const user=await User.findOne({_id:req.user._id}).select("-password")
        if(user)
        {
            return res.status(200).json({status:200,data:user});
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
module.exports.getApplications=async(req,res)=>
{
    try{
        const applications=await Application.find({developer:req.user._id}).populate({path:"developer",select: "name email profile"})
        if(applications)
        {
            return res.status(200).json({status:200,data:applications});
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
module.exports.getApplication=async(req,res)=>
{
    try{
        const applicationId=req.params.id;
        const application=await Application.findOne({_id:applicationId,developer:req.user._id})
        .populate({path:"developer",select: "name email profile"})
        if(application)
        {
            return res.status(200).json({status:200,data:application});
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