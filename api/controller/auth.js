const User=require("../model/User")
const Application=require("../model/Application")
const Authorization=require("../model/Authorization")
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")
// Controller for registration
module.exports.register=async(req,res) => 
{
    try{
        const {name,email,password}=req.body;
        const user= await User.findOne({email:email});
        if(user)
        {
            return res.status(401).json({status:401,message:"user already exists"});
        }
        else
        {
            const newuser= new User({
                name:name,
                email:email,
                password:CryptoJS.AES.encrypt(password,process.env.CRYPTOJS_SEC_KEY).toString(),
            })
            const result=await newuser.save();
            if(result)
            return res.status(201).json({status:201,token:tokengenerator(result._id)});
            else
            return res.status(500).json({status:500,message:"Error registering user"});
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
            var decryptrdPassword = CryptoJS.AES.decrypt(user.password,process.env.CRYPTOJS_SEC_KEY).toString(CryptoJS.enc.Utf8)
            if(password===decryptrdPassword)
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

// controller to delete user's account

module.exports.delete=async(req,res) =>
{
    try {
        const userId=req.params.id;
        const userDetails=await User.findById(userId);
        if(userDetails)
        {
            if(req.user._id==userDetails._id)
            {
                User.findByIdAndDelete(userId, async function (err, docs) { 
                    if (err){ 
                        return res.status(500).json({status:500,message:"Failed to delete user"})
                    } 
                    else{
                        // delete applications
                        const application=await Application.deleteMany({developer:req.user._id});
                        // delete authorizations
                        const authorization=await Authorization.deleteMany({userId:req.user._id});
                        return res.status(200).json({status:200,message:"Successfullly deleted user"})
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
            return res.status(404).json({status:404,message:"User Not Found"})
        }
    } catch (error) {
        return res.status(500).json({status:500,message:err.message})
    }
}
module.exports.resetPassword=async (req,res)=>
{
    try{
        const {oldPassword,newPassword}=req.body;
        const user= await User.findById(req.user._id);
        if(user)
        {
            let userPass=user.password
            var decryptedPassword = CryptoJS.AES.decrypt(user.password,process.env.CRYPTOJS_SEC_KEY).toString(CryptoJS.enc.Utf8)
            if(oldPassword===decryptedPassword)
            {
                const updatedUser= await User.findByIdAndUpdate(user._id,{password:CryptoJS.AES.encrypt(newPassword,process.env.CRYPTOJS_SEC_KEY).toString()},{new:true})
                if(updatedUser)
                {
                    return res.status(200).json({status:200,message:"success"}); 
                }
                else
                {
                    return res.status(500).json({status:403,message:"failed to update Password"});
                }
            }
            else
            {
                return res.status(403).json({status:403,message:"Wrong password"});
            }
        }
        else
        {
            return res.status(404).json({status:403,message:"User Not Found"});
        }
        
    }catch(err)
    {
        return res.status(500).json({status:500,message:err.message}); 
    } 
}
module.exports.verifyEmail=async (req,res)=>
{
    try{
        const {email}=req.query;
        const user= await User.findOne({email:email}).select("_id email");
        if(user)
        {
            return res.status(200).json(user);
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

module.exports.update=async(req,res) =>
{
    try {
        const {field,value}=req.body;
        let x;
        switch(field)
        {
            case "name":
               x={"name":value}
               break;
            case "profile":
                x={"profile":value}
                break;
            default :
               return res.status(404).json({status:404,message:"No such field exist"})                   
        }
        const result=await User.findByIdAndUpdate(req.user._id,x,{new:true}).select("-password");
        if(result)
            return res.status(200).json({status:200,message:"Information updated",user:result})
        else
            return res.status(500).json({status:500,message:"Failed to update Information"})      
            
    } catch (err) {
        return res.status(500).json({status:500,message:err.message})
    }
}


const tokengenerator = (_id) =>
{
    return jwt.sign({_id:_id},process.env.JWT_SEC_KEY,{expiresIn:"10d"});
}
