const express=require("express");
const app=express();
const path=require("path");
const Chat=require("./models/chat");
const mongoose=require("mongoose");
let port=8080;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

main()
    .then(()=>{
        console.log("connection successfull")
    })
.catch(err=>
    console.log(err)
);

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")));



app.listen(port,()=>{
    console.log("server is listening on port : ",port)
})

app.get("/",(req,res)=>{
    res.send("success")
})

app.get("/chats", async (req,res) =>{
    let chats=await  Chat.find()
    console.log(chats)
    res.render("index.ejs",{chats})
})

app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
})