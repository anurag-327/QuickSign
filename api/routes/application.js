const router=require("express").Router(); 
const application_controller=require("../controller/application")
const {verifyToken}=require("../controller/verifyToken")

// route to handle application addition
router.post("/register",verifyToken,application_controller.register)
// router to delete application
router.delete("/delete/:id",verifyToken,application_controller.delete)
// updated application info
router.put("/update",verifyToken,application_controller.update)

module.exports=router