const express=require('express');
const mongoose=require('mongoose')
const UserModel=require('./Model/UserSchema')
const cors=require('cors')
require('dotenv').config()

const app=express();
app.use(express.json())
app.use(cors({origin:'*'}));
const port=3000;
const URL=process.env.MONGO_URL
const Connect=async ()=>{
    try{    
            app.listen(port,()=>{
                console.log('Server started at port:',port);
            })
            await mongoose.connect(URL)
            console.log("Connected to Database")
    }catch(e) {
        console.log("error connecting to database:",e)
    }
}
Connect();

app.post('/create',async(req,res)=>{
    const {name,age,year}=req.body;
    try{
        const New=new UserModel({name,age,year});
        await New.save();
        res.status(201).json({message:"Content saved"})
    }catch(e){
         res.status(500).json({
            message:"Error saving content"
        })
    }
})

app.get('/age',async (req,res)=>{
    try{
        let res= await UserModel.find({key:age>=20})
        res.status(201).json({message:res});
    }catch(e){
        console.log(e)
    }
})