//Node js
// const http=require("http")
// const server=http.createServer(
//     (req,res)=>{
//         if(req.url=="/"){
//             res.end("hello welcome to our first server service page")
//         }
//        else if(req.url=="/login"){
//         res.end("you are login")
//        }
//        else if(req.url=="/contact"){
//         res.end("you are on contact page")
//        }
//     }
// )
// server.listen(3000,()=>{
//     console.log("server is runing on port http://localhost:3000/")
// })
// express JS
// const express=require("express")
// const app=express()
// app.use('/myimages',express.static('public'))  // hare the middleware is express.static give the acess public folder
// const userdata=[
// {id:1,Name:"john",age:25},
// {id:2,Name:"alex",age:30},
// {id:3,Name:"bob",age:35}
// ]
// function coursepaymentmiddleware(req,res,next){
//     if(req.query.amount=="3500")
//     {
//         next()
//     }
//     else{
//         res.status(401).send("unauthorized")
//     }
// }
// function paymentscreenshortmiddleware(req,res,next){
//     if(req.query.ss=="ok"){
//         next()
//     }
//     else{
//         res.status(401).send("ss is not given")
//     }
// }
// app.get("/course",coursepaymentmiddleware,(req,res,)=>{
   
//    res.send("course acess Sucessfull")
// })
// app.get("/certificate/:name",coursepaymentmiddleware,paymentscreenshortmiddleware,(req,res)=>{
   
//    res.send(`conlatulations to ${req.params.name} get your certificate`)
// })

// app.get("/",(req,res)=>{
//     res.send("Hello World")
// })
// app.get("/service",(req,res)=>
// {
//     res.send("Hello This is somnath service")
// })
// app.get("/acessdata",(req,res)=>{
//     res.json(userdata)
// })
// app.get("/profile/:userName/:password",(req,res)=>{
//     res.send(`This is ${req.params.userName} and password ${req.params.password} profile`) 
// })
// app.listen(4000,()=>{
//     console.log("server is runing on http://localhost:4000/")
// })

const express=require('express')
const path=require('path')
const baserouter=require("./src/router/baseRouter")
const paymentverification=require("./src/middleware/paymentmiddleware")

const Dbconn=require("./db/dbconn")
const userRouter=require("./src/router/userRouter")
const app=express()

app.use(express.json())
app.use("/screnshort", paymentverification,express.static('public'))
//app.get("/",)
app.use(baserouter)

//app.get("/profile/:name/:age",paymentverification)
app.use(userRouter)
Dbconn().then(()=>{
app.listen(4000,(req,res)=>{
    console.log("server is runing on port http://localhost:4000/");
})

    

})