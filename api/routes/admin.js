const router=require('express').Router();
const admin_controller=require("../controller/admin_controller")
const organization_controller=require("../controller/organization_auth")
router.get("/getOrganizations",admin_controller.getOrganizations);
router.put("/verifyorganization",organization_controller.verifyOrganization);
router.delete("/deleteorganization",organization_controller.deleteOrganization);
module.exports=router;