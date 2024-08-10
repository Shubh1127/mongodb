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
    to:"diksha",
    message:"i love you",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"diksha",
    message:"i love you2",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"diksha",
    message:"i love you3",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"diksha",
    message:"i love you4",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"diksha",
    message:"i love you5",
    created_at:new Date(),
    },
    {
    from:"shubham",
    to:"diksha",
    message:"i love you6",
    created_at:new Date(),
    },
]

Chat.insertMany(allChats)