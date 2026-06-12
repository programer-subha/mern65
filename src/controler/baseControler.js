
const userdata=require("../model/user")
const exampleapi=(req,res)=>{
    res.send("Hello world");
}
const subha=(req,res)=>{
    res.send("Hello "+req.params.name+" age is "+ req.params.age)
}
const showalluser=(req,res)=>{
    if(req){
        return res.status(200).json({data:userdata,msg:"Data Fatch Sucessfull"})
    }

}
module.exports={
    exampleapi ,
    subha  ,
    showalluser     //naming export
}
//module.exports=exampleapi  //default export