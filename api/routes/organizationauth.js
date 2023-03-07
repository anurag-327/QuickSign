const router=require("express").Router();
const organigationauth_controller=require("../controller/organizationauth");
const {verifyOrganization}=require("../controller/verifyToken")

// route to register using quicksign
router.post("/register",verifyOrganization,organigationauth_controller.register)
module.exports=router;