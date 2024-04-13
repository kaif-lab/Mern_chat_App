const express =  require("express");

 const app = express();

 app.get("/", (req,res)=>{
    res.send("checking ");
 })

 app.listen(5000, console.log("server started on PORT 5000"))