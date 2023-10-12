const router=require("express").Router(); 
const auth_controller=require("../controller/auth.js")
const {verifyToken}=require("../controller/verifyToken")

// route to handle registration
router.post("/register",auth_controller.register)
// route to handle login
router.post("/login",auth_controller.login);
// route to delete user
router.delete("/delete/:id",verifyToken,auth_controller.delete)
// route to update data
router.put("/update",verifyToken,auth_controller.update)

router.put("/resetpassword",verifyToken,auth_controller.resetPassword)
// route to verify Email
router.get("/verifyemail",verifyToken,auth_controller.verifyEmail)
module.exports=router