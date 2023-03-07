const Organization=require("../model/Organization")
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")

module.exports.register=async(req,res) =>
{
    const {name,email,password,address,contact,link,profile}=req.body;
    try{
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
                password:CryptoJS.AES.encrypt(password,process.env.CRYPTOJS_SEC_KEY).toString(),
            })
            const result=await neworg.save();
            if(result)
            return res.status(201).json({status:201,APIKEY:tokengenerator(result._id,result.name,result.email)});
            else
            return res.status(500).json({status:500,message:"error registering organization"});
        }
    }catch(err) 
    {
        return res.status(500).json({status:500,message:err.message});
    }
    return res.json(req.body)
}
module.exports.login=async(req,res) => 
{
    const {email,password}=req.body;
    try{
        const result= await Organization.findOne({email:email});
        if(result)
        {
            var decryptedpassword = CryptoJS.AES.decrypt(result.password,process.env.CRYPTOJS_SEC_KEY).toString(CryptoJS.enc.Utf8);
            if(password===decryptedpassword)
            {
                return res.status(200).json({status:201,APIKEY:tokengenerator(result._id,result.name,result.email)});
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

const tokengenerator = (_id,name,email) =>
{
    return jwt.sign({_id:_id,name:name,email:email},process.env.JWT_SEC_KEY);
}