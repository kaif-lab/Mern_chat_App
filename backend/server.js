const express =  require("express");
const {chats}= require("./data/data")
const  dotenv =  require("dotenv")

 const app = express();
dotenv.config();

 app.get("/", (req,res)=>{
    res.send("checking ");
 })
 app.get('/api/chat',(req,res)=>{
    res.send(chats)
 })
 app.get("/api/chat/:id",(req,res)=>{
    // console.log(req.params.id)
    const single_chat =  chats.find((c)=>c._id === req.params.id);
    res.send(single_chat)


 })

 const PORT = process.env.PORT || 5000
 app.listen(5000, console.log("server started on PORT 5000"))