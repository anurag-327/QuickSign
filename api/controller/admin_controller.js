const Organization=require("../model/Application")
module.exports.getOrganizations=async (req,res) =>
{
    try{
        const user=await Organization.find().select("-password -createdAt -updatedAt");
        return res.status(200).json(user);

    }catch(err)
    {
        return res.status(500).json({status:500,message:err.message});
    }
}