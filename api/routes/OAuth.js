const router=require("express").Router();
const OAuth_Controller=require("../controller/OAuth_Controller")
const {verifyToken,verifyApplication}=require("../controller/verifyToken")
// OAuth API
router.post("/",[require("../controller/OAuth_Controller").verifyApplication,require("../controller/OAuth_Controller").verifyUser],OAuth_Controller.OAuth)
// authorise api
router.post("/authorize",[require("../controller/OAuth_Controller").verifyApplication,require("../controller/OAuth_Controller").verifyUser],OAuth_Controller.authorize)
// remove authorization
router.delete("/removeauthorization",verifyToken,OAuth_Controller.removeAuthorization)

router.post("/getdata",verifyApplication,OAuth_Controller.getUser)
module.exports=router;