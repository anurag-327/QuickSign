const router=require("express").Router();
const User=require("../model/User")
const Application=require("../model/Application")
const Authorization=require("../model/Authorization")
const jwt=require("jsonwebtoken");
const { verifyApplication } = require("../controller/verifyToken");



router.post("/verifyuser",verifyApplication,async (req,res) =>
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
        return res.status(500).json({status:500,message:error.message})
    }
});


module.exports=router;