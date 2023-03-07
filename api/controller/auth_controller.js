const User=require("../model/User")
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")

// Controller for register
module.exports.register=async(req,res) => 
{
    const {name,email,phonenumber,password}=req.body;
    try{
        const user= await User.findOne({email:email});

        if(user)
        {
            return res.status(401).json({status:401,message:"user already exists"});
        }
        else
        {
            const newuser= new User({
                name:name,
                phonenumber:phonenumber,
                email:email,
                password:CryptoJS.AES.encrypt(password,process.env.CRYPTOJS_SEC_KEY).toString(),
                // profile:profile || ''
            })
            const result=await newuser.save();
            if(result)
            return res.status(201).json({status:201,token:tokengenerator(result._id)});
            else
            return res.status(500).json({status:500,message:"error registering user"});
        }
    }catch(err) 
    {
        return res.status(500).json({status:500,message:err.message});
    }
}

// Controller for login
module.exports.login=async(req,res) => 
{
    const {email,password}=req.body;
    try{
        const user= await User.findOne({email:email});
        if(user)
        {
            var decryptedpassword = CryptoJS.AES.decrypt(user.password,process.env.CRYPTOJS_SEC_KEY).toString(CryptoJS.enc.Utf8);
            if(password===decryptedpassword)
            {
                return res.status(200).json({status:200,token:tokengenerator(user._id)});
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




const tokengenerator = (_id) =>
{
    return jwt.sign({_id:_id},process.env.JWT_SEC_KEY,{expiresIn:"3d"});
}
