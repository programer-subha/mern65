const mongoose=require('mongoose');
const dns=require("node:dns")
dns.setServers(['8.8.8.8'])
const Dbconn=async()=>{
     try {
        await mongoose.connect("mongodb+srv://subhagiri00001_db_user:12345@cluster0.01oidk0.mongodb.net/mern61?appName=Cluster0")
        console.log("connected to database sucessfully");
        
     } catch (error) {
        console.log("Database connection failed");
        console.log(error.message);
        
     }
}
module.exports=Dbconn