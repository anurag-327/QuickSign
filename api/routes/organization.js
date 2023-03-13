const router=require("express").Router();
const organization_controller=require("../controller/organization")
const {verifyToken}=require("../controller/verifyToken")
// route to register as organization
router.post("/register",organization_controller.register)
// route to handle login
router.post("/login",organization_controller.login);
// route to update data
router.put("/resetpassword",organization_controller.resetPassword)
// route to verify Email
router.get("/verifyemail",organization_controller.verifyEmail)

//get Organization

module.exports=router