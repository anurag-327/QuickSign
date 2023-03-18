const router=require("express").Router();
const user_controller=require("../controller/user_controller")
const {verifyToken}=require("../controller/verifyToken")
const organization_controller=require("../controller/organization_auth")
router.get("/getuser",verifyToken,user_controller.getUser);
router.get("/getorganization",verifyToken,organization_controller.getOrganization);


module.exports=router;