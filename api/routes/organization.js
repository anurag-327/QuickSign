const router=require("express").Router();
const organization_controller=require("../controller/organization")

// route to register as organization
router.post("/register",organization_controller.register)
// route to handle login
router.post("/login",organization_controller.login);
module.exports=router