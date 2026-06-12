const paymentverification=(req,res,next)=>{
if(req.query.ispayment){
    next()
}
else{
    res.status(400).send("invalid payment")
}
}
module.exports=paymentverification