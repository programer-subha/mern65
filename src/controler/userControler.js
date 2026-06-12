const user = require("../model/user");
const Adduser=async(req,res)=>{
    try {
        console.log(req.body);
        const User=new user(req.body);
        await User.save()
        return res.json({msg:"User Added sucessfully",data:req.body})
    } catch (error) {
        res.status(500).json({msg:"internal server error",error:error.message})
    }
}
const Getuser=async(req,res)=>{}
const Deleteuser=async(req,res)=>{}
const Updateuser=async(req,res)=>{}

module.exports={
    Adduser,
    Getuser,
    Deleteuser,
    Updateuser,
}