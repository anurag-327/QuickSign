const router=require("express").Router();
const {verifyToken}=require("../controller/verifyToken")
const data_controller=require("../controller/dataController")

router.get("/getdata",verifyToken,data_controller.getData);
router.get("/getuser",verifyToken,data_controller.getUser);
router.get("/getapplications",verifyToken,data_controller.getApplications);
router.get("/getapplication/:id",verifyToken,data_controller.getApplication);


module.exports=router;