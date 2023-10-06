const User=require("../model/User")
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")


module.exports.OAuth=async(req,res) => 
{
    try{
        const authHeader=req.headers.authorization;
        if(authHeader && authHeader.startsWith("Bearer"))
        {
            try{
                const token=authHeader.split(' ')[1];
                jwt.verify(token,process.env.JWT_SEC_KEY,async (err,user) =>
                {
                    if(err) return res.status(403).json({status:403,mesaage:"Invalid token"});
                    else
                    {
                        const userDetails= await User.findById(user._id).select(" -createdAt -updatedAt -password");
                        if(userDetails)
                        {
                                // add org id to user list
                                const orgs=userDetails.access;
                                
                                if(orgs.includes(req.body.organizationId)==false)
                                {
                                    orgs.push(req.body.organizationId);
                                    console.log(orgs)
                                    User.findByIdAndUpdate(user._id,{access:orgs},function (err, docs) { 
                                        if (err){ 
                                            return res.status(401).json({status:401,mesaage:"Authorisation failed"})
                                        } 
                                        // else{ 
                                        //     console.log("Updated User : ", docs); 
                                        // } 
                                    });
                                }
                                const details={
                                    email:userDetails.email,
                                    name:userDetails.name,
                                    // profile:userDetails.profile,
                                }
                                return res.status(200).json({status:200,token:tokengenerator(user._id),user:details});
                        }
                        else
                        {
                            return res.status(404).json({status:404,message:"User Not found"});
                        }
                    }                    
                })
            }catch(err)
            {
                return res.status(401).json({status:401,mesaage:"Authorisation failed"})
            }
        }
        else
        {
            return res.status(401).json({status:401,mesaage:"No token provided/Invalid token"})
        }
    }catch (err) 
    {
        return res.status(500).json({status:500,mesaage:err.message})
    }
}

module.exports.verifyUser=async (req,res,next) =>
{
    try{
            try{
                const token=req.body.token;
                jwt.verify(token,process.env.JWT_SEC_KEY,async (err,user) =>
                {
                    if(err) return res.status(403).json({status:403,mesaage:"Invalid Access token"});
                    else
                    {
                        const userDetails= await User.findById(user._id).select(" -createdAt -updatedAt -password -access");
                        if(userDetails)
                        {
                            return res.status(200).json({status:200,user:userDetails});
                        }
                        else
                        {
                            return res.status(404).json({status:404,message:"User Not found"});
                        }
                    }         
                    
                })
            }catch(err)
            {
                return res.status(401).json({status:401,mesaage:"Authorisation failed"})
            }
        
    }catch (err) 
    {
        return res.status(500).json({status:500,mesaage:err.message})
    }

}

const tokengenerator = (_id) =>
{
    return jwt.sign({_id:_id},process.env.JWT_SEC_KEY,{expiresIn:"1d"});
}
