const router=require("express").Router();
const OAuth_Controller=require("../controller/OAuth_Controller")
const {verifyToken,verifyOrganization}=require("../controller/verifyToken")
// OAuth API
router.post("/",OAuth_Controller.OAuth)
// OAuth verification API
router.post("/verify",verifyOrganization,OAuth_Controller.verifyUser)
module.exports=router;