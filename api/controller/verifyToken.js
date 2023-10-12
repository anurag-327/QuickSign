const jwt=require("jsonwebtoken");
const User=require("../model/User");
const Application = require("../model/Application");
const verifyToken=async (req,res,next) =>
{
    try{
        const authHeader=req.headers.authorization;
        if(authHeader && authHeader.startsWith("Bearer"))
        {
            try{
                const token=authHeader.split(' ')[1];
                jwt.verify(token,process.env.JWT_SEC_KEY,async (err,user) =>
                {
                    if(err) return res.status(403).json({status:403,message:"Invalid token"});
                    req.user={_id:user._id};
                    next();
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

const verifyApplication=async(req,res,next)=>
{
    try{
        const authHeader=req.headers.api;
        if(authHeader)
        {
            try{
                const token=authHeader;
                const application=await Application.findOne({clientSecret:token})
                if(application)
                {
                    req.application=application
                    next();
                }
                else
                {
                    return res.status(403).json({status:403,message:"Invalid APPLICATION token"});
                }
            }catch(err)
            {
                return res.status(401).json({status:401,message:"Authorisation failed"})
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

const verifyAPIKey=async(req,res,next)=>
{
    try{
        const authHeader=req.headers.api;
        if(authHeader)
        {
            try{
                const token=authHeader;
                jwt.verify(token,process.env.JWT_SEC_KEY,async (err,user) =>
                {
                    if(err) return res.status(403).json({status:403,message:"Invalid ORGANIZATION token"});
                    req.user=user;
                    next();
                })
            }catch(err)
            {
                return res.status(401).json({status:401,message:"Authorisation failed"})
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
module.exports={verifyToken,verifyApplication,verifyAPIKey};