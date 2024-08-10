const express=require("express");
const app=express();
const path=require("path");
const Chat=require("./models/chat");
const mongoose=require("mongoose");
const methodOverride=require("method-override")
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
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"))



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

app.post("/chats",(req,res)=>{
    let {from,to,message}=req.body;
    let newChat=new Chat({
        from:from,
        to:to,
        message:message,
        created_at:new Date()
    });
    newChat.save()
        .then(()=>{
        console.log("chat was saved")
    }).catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
})

app.get("/chats/:id/edit",async (req,res)=>{
    let {id}=req.params;
    let chat =await Chat.findById(id)
    res.render("edit.ejs",{chat})
})

app.put("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let {message:newMessage}=req.body;
    let updatedChat= await Chat.findByIdAndUpdate(id,{message:newMessage},{runValidators:true,new:true})
    console.log(updatedChat)
    res.redirect("/chats");
})

app.delete("/chats/:id",async (req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findByIdAndDelete(id);
    res.redirect("/chats")
    console.log(chat);
})