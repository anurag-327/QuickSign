const Organization=require("../model/Organization")
const CryptoJS=require("crypto-js");
const { v4: uuidv4 } = require('uuid');
const jwt=require("jsonwebtoken")

module.exports.register=async(req,res) =>
{
    try{
        const {name,email,password,address,contact,link,profile}=req.body;
        const organization= await Organization.findOne({email:email});

        if(organization)
        {
            return res.status(401).json({status:401,message:"Organization already registered"});
        }
        else
        {
            const neworg= new Organization({
                name:name,
                email:email,
                contact:contact,
                address:address,
                link:link,
                profile:profile || '',
                status:"verified",
                API_KEY:uuidv4(),
                password:CryptoJS.AES.encrypt(password,process.env.CRYPTOJS_SEC_KEY).toString(),
                
            })
            const result=await neworg.save();
            if(result)
            return res.status(201).json({status:201,token:tokengenerator(result._id,result.name,result.email)});
            else
            return res.status(500).json({status:500,message:"error registering organization"});
        }
    }catch(err) 
    {
        console.log(err.message)
        return res.status(500).json({status:500,message:err.message});
    }
    return res.json(req.body)
}
module.exports.login=async(req,res) => 
{
    const {email,password}=req.body;
    try{
        const result= await Organization.findOne({email:email,status:"verified"});
        if(result)
        {
            var decryptedpassword = CryptoJS.AES.decrypt(result.password,process.env.CRYPTOJS_SEC_KEY).toString(CryptoJS.enc.Utf8);
            if(password===decryptedpassword)
            {
                return res.status(200).json({status:201,token:tokengenerator(result._id,result.name,result.email)});
            }
            else
            {
                return res.status(403).json({status:403,message:"Wrong password"});
            }
        }
        else
        {
            return res.status(404).json({status:404,message:"Organization is not registered"});
        }
    }catch(err)
    {
        console.log(err.message)
        return res.status(500).json({status:500,message:err.message}); 
    } 
}
module.exports.resetPassword=async (req,res)=>
{
    try{
        const {password,_id}=req.body;
        const user= await Organization.findByIdAndUpdate(_id,{password:CryptoJS.AES.encrypt(password,process.env.CRYPTOJS_SEC_KEY).toString(),},{new:true})
        if(user)
        {
            return res.status(200).json({status:200,message:"success"}); 
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
        const user= await Organization.findOne({email:email}).select("_id email");
        if(user)
        {
            return res.status(200).json(user);
        }
        else
        {
            return res.status(404).json({status:404,message:"Organization doesnot exist"});
        }
    }catch(err)
    {
        return res.status(500).json({status:500,message:err.message}); 
    } 
}
module.exports.getOrganization=async(req,res)=>
{
    try{
        const organization=await Organization.findOne({_id:req.user._id,status:"verified"}).select("-address -password -createdAt -updatedAt");
        if(organization)
        {
            return res.status(200).json(organization);
        }
        else{
            return res.status(404).json({status:404,message:"Couldn't get user"});  
        }

    }catch(err)
    {
        return res.status(500).json({status:500,message:err.message});
    }
}
module.exports.verifyOrganization=async(req,res)=>
{
    try{
        const {_id}=req.body;
        const user=await Organization.findByIdAndUpdate(_id,{status:"verified",API_KEY:tokengeneratorcopy(_id)},{new:true});
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
module.exports.deleteOrganization=async(req,res)=>
{
    try{
        const {_id}=req.body;
        const user=await Organization.findByIdAndDelete(_id);
        return res.status(200).json("success");
        // if(user)
        // {
        // }
        // else{
        //     return res.status(404).json({status:404,message:"Couldn't get user"});  
        // }

    }catch(err)
    {
        return res.status(500).json({status:500,message:err.message});
    }
}


const tokengenerator = (_id,name,email) =>
{
    return jwt.sign({_id:_id,name:name,email:email},process.env.JWT_SEC_KEY);
}
const tokengeneratorcopy = (_id) =>
{
    return jwt.sign({_id:_id},process.env.JWT_SEC_KEY);
}