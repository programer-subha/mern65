const express=require("express")
const router=express.Router()
const {exampleapi,showalluser}=require("../controler/baseControler")
const paymentverification=require("../middleware/paymentmiddleware")
const {subha}=require("../controler/baseControler")
router.get("/",paymentverification,exampleapi)
router.get("/profile/:name/:age",subha)
router.get("/getalluser",showalluser)

module.exports=router