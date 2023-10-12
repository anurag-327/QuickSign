const Application=require("../model/Application")
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")
const { v4: uuidv4 } = require('uuid');

// Controller to register application
module.exports.register=async(req,res) => 
{
    try{
        const body=req.body;
        const newApplication= new Application({
            ...body,
            developer:req.user._id,
            clientSecret:uuidv4().split("-").join("")
        })
        const application=await newApplication.save();
        if(application)
           return res.status(201).json({status:201,application});
        else
           return res.status(500).json({status:500,message:"Error registering user"});
    }catch(err) 
    {
        return res.status(500).json({status:500,message:err.message});
    }
}

module.exports.delete=async(req,res) =>
{
    try {
        const applicationId=req.params.id;
        const applicationDetails=await Application.findById(applicationId);
        if(applicationDetails)
        {
            if(req.user._id==applicationDetails.developer)
            {
                Application.findByIdAndDelete(applicationId, function (err, docs) { 
                    if (err){ 
                        return res.status(500).json({status:500,message:"Failed to delete application"})
                    } 
                    else{ 
                        return res.status(200).json({status:200,message:"Successfullly deleted application"})
                    } 
                }); 
            }
            else
            {
                return res.status(405).json({status:405,message:"Method Not Allowed"})
            }
        }
        else
        {
            return res.status(404).json({status:404,message:"Application Not Found"})
        }
    } catch (error) {
        return res.status(500).json({status:500,message:err.message})
    }
}

module.exports.update=async(req,res) =>
{
    try {
        const body=req.body;
        const applicationId=body.applicationId
        const applicationDetails=await Application.findById(applicationId);
        const x={
            name:body.name,
            description:body.description,
            homepageURL:body.homepageURL,
            callbackURL:body.callbackURL
        }
        if(applicationDetails)
        {
            if(req.user._id==applicationDetails.developer)
            {
                const result=await Application.findByIdAndUpdate(applicationId,x,{new:true}).select("-password");
                if(result)
                   return res.status(200).json({status:200,message:"Information updated",application:result})
                else
                   return res.status(500).json({status:500,message:"Failed to update Information"})      
            }
            else
            {
                return res.status(405).json({status:405,message:"Method Not Allowed"})
            }
        }
    } catch (err) {
        return res.status(500).json({status:500,message:err.message})
    }
}




const tokengenerator = (_id) =>
{
    return jwt.sign({_id:_id},process.env.JWT_SEC_KEY,{expiresIn:"3d"});
}
