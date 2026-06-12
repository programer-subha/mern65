const express=require('express')
const usercontroler=require('../controler/userControler')
const router=express.Router();
router.post("/adduser",usercontroler.Adduser)



module.exports=router;