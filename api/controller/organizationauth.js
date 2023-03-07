const User=require("../model/User")
const CryptoJS=require("crypto-js")
const jwt=require("jsonwebtoken")
const dotenv=require("dotenv").config()
module.exports.register=async(req,res) =>
{
    const {email,password}=req.body;
    try{
        const user=await User.findOne({email:email})
        if(user)
        {
            var decryptedpassword = CryptoJS.AES.decrypt(user.password,process.env.CRYPTOJS_SEC_KEY).toString(CryptoJS.enc.Utf8);
            if(password===decryptedpassword)
            {
                return res.status(200).json({name:user.name,email:user.email,phonenumber:user.phonenumber});
            }
            else
            {
                return res.status(403).json({status:403,message:"Wrong password"});
            }
        }
        else
        {
            return res.status(404).json({status:404,message:"User doesnot exist"});
        }
    }catch(err)
    {
        return res.status(500).json({status:500,message:err.message}); 
    }
}

