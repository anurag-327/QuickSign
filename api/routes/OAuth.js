const router=require("express").Router();
const OAuth_Controller=require("../controller/OAuth_Controller")

// OAuth API
router.post("/",OAuth_Controller.OAuth)
module.exports=router;