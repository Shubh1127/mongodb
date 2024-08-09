const express=require("express");
const app=express();
const mongoose=require("mongoose");

let port=8080;

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp')
}

main().catch(err=>
    console.log(err)
);

app.listen(port,()=>{
    console.log("server is listening on port : ",port)
})

app.get("/",(req,res)=>{
    res.send("success")
})