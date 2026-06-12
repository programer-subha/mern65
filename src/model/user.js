// const userdata = [
//  {
//     name: "gurudev", 
//     age: 22, 
//     collage: "Brainware"
// },
// {
//     name: "isan",
//     age: 22, 
//     collage: "Brainware"
// },
// {
//     name: "Avisheak",  
//     age: 22,
//     collage: "Brainware"
// },
// {
//     name: "susmita",
//     age: 22,
//     collage: "Brainware"
// },
    
// ];

// module.exports=userdata


const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})


const user=mongoose.model("user",userschema)
module.exports=user;