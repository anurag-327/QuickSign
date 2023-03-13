const router=require("express").Router(); 
const auth_controller=require("../controller/auth_controller.js")
const {verifyToken}=require("../controller/verifyToken")

// route to handle registration
router.post("/register",auth_controller.register)
// route to handle login
router.post("/login",auth_controller.login);
// route to update data
router.put("/resetpassword",auth_controller.resetPassword)
// route to verify Email
router.get("/verifyemail",auth_controller.verifyEmail)
module.exports=router