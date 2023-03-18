const User=require("../model/User")
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")


module.exports.OAuth=async(req,res) => 
{
    const {email,password}=req.body;
    try{
        const user= await User.findOne({email:email}).select(" -createdAt -updatedAt");
        if(user)
        {
            var decryptedpassword = CryptoJS.AES.decrypt(user.password,process.env.CRYPTOJS_SEC_KEY).toString(CryptoJS.enc.Utf8);
            if(password===decryptedpassword)
            {
                const details={
                    email:user.email,
                    name:user.name,
                    // profile:user.profile,
                    phonenumber:user.phonenumber

                }
                return res.status(200).json({status:200,token:tokengenerator(user._id),user:details});
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
        console.log(err.message)
        return res.status(500).json({status:500,message:err.message}); 
    } 
}


const tokengenerator = (_id) =>
{
    return jwt.sign({_id:_id},process.env.JWT_SEC_KEY,{expiresIn:"3d"});
}
