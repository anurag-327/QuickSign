const User=require("../model/User")
const Application=require("../model/Application")
const Authorization=require("../model/Authorization")
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")

module.exports.verifyApplication=async (req,res,next) =>
{
    try{
        const {clientId,clientSecret}=req.body;
        const application=await Application.findOne({_id:clientId,clientSecret}).select("-_id -secretId -description -developer ");
        if(application)
        {
            req.application=application
            next();
        }
        else
        {
            return res.status(404).json({status:404,message:"Couldn't verify Application"});  
        }
    }catch (err) 
    {
        return res.status(500).json({status:500,message:err.message})
    }
}

module.exports.verifyUser=async (req,res,next) =>
{
    try{
        const authHeader=req.headers.authorization;
        if(authHeader && authHeader.startsWith("Bearer"))
        {
            try{
                const token=authHeader.split(' ')[1];
                jwt.verify(token,process.env.JWT_SEC_KEY,async (err,user) =>
                {
                    if(err) return res.status(403).json({status:403,mesaage:"Invalid Access token"});
                    const userDetails= await User.findById(user._id).select(" -createdAt -updatedAt -password ");
                    if(userDetails)
                    {
                        req.user=userDetails    
                        next();
                    }
                    else
                    {
                        return res.status(404).json({status:404,message:"User Not found"});
                    }
                })
            }catch(err)
            {
                return res.status(401).json({status:401,message:"authorisation failed"})
            }
        }
        else
        {
            return res.status(401).json({status:401,message:"No token provided/Invalid token"})
        }
    }catch (err) 
    {
        return res.status(500).json({status:500,message:err.message})
    }
}

module.exports.OAuth=async(req,res) => 
{
    try{
        const {clientId,clientSecret}=req.body;
        const authorization=await Authorization.findOne({userId:req.user._id,clientId:clientId})
        if(authorization)
        {
            // already authorized
            return res.status(200).json({status:200,authorization:true,application:req.application,token:tokengenerator(req.user._id)});
        }
        else
        {
            // not authorized for direct authorization
            return res.status(405).json({status:200,authorization:false,application:req.application});
        }
    }catch (err) 
    {
        return res.status(500).json({status:500,mesaage:err.message})
    }
}

module.exports.authorize=async(req,res) => 
{
    try{
        const {clientId,clientSecret}=req.body;
        const authorization=await Authorization.findOne({userId:req.user._id,clientId})
        if(authorization)
        {
            // already authorized
            return res.status(200).json({status:200,authorization:true,application:req.application,token:tokengenerator(req.user._id)});
        }
        else
        {
            // add authorization
            const newauth= new Authorization({
                userId:req.user._id,
                clientId
            })
            const result=await newauth.save();
            if(result)
            return res.status(201).json({status:201,authorization:true,application:req.application,token:tokengenerator(req.user._id)});
            else
            return res.status(500).json({status:500,message:"Error Authorizing user"});
        }
    }catch (err) 
    {
        console.log(err)
        return res.status(500).json({status:500,mesaage:err.message})
    }
}

module.exports.removeAuthorization=async (req,res,next) =>
{
    try{
       const {clientId}=req.body;
       Authorization.deleteOne({ userId:req.user._id,clientId }).then(function(){
        return res.status(200).json({status:200,message:"Deleted Successfully"});
    }).catch(function(error){
        return res.status(500).json({status:500,message:error.message})
        
    });
        
    }catch (err) 
    {
        return res.status(500).json({status:500,message:err.message})
    }
}
module.exports.getUser=async (req,res,next) =>
{
    try {
        const token=req.body.token;
        if(token)
        {
            jwt.verify(token,process.env.JWT_SEC_KEY,async (err,user) =>
            {
                if(err) return res.status(403).json({status:403,message:"Invalid user token"});
                const userId=user._id;
                const authorization=await Authorization.findOne({userId:userId,clientId:req.application._id}).populate({path:"userId",select:("name email username profile")})
                if(authorization)
                {
                    return res.status(200).json({status:200,data:authorization.userId});
                }
                else
                {
                    return res.status(404).json({status:404,message:"Authorization Not Found"});
                }
            })
        }
        else
        {
            return res.status(401).json({status:401,message:"No User token provided"})
        }
        
    } catch (error) {
        return res.status(500).json({status:500,message:err.message})
    }
}


const tokengenerator = (_id) =>
{
    return jwt.sign({_id:_id},process.env.JWT_SEC_KEY,{expiresIn:"2d"});
}
