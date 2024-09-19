const mongoose=require("mongoose");
const Chat=require("./models/chat");

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

let allChats=[
    {
    from:"shubham",
    to:"harsh",
    message:"hello",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"himanshu",
    message:"greetings from shubham",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"dushyant",
    message:"ok",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"rohan",
    message:"hi",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"sarthak",
    message:"go",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"tanush",
    message:"agaim",
    created_at:new Date(),
    },
]

Chat.insertMany(allChats)
