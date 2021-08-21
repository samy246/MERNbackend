//Thirdparty mod
const express = require("express");
const app= express();
const mongoose=require('mongoose');
const morgan=require('morgan');
const cors=require('cors');
// app.use("/",(req,res)=>
// {
//     res.json("Hi Friends");
// })

//middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//Router
const infoRouter =require("./router");
app.use("/info",infoRouter);

//Listen Port
app.listen(2000,()=>{
    console.log("Server started ok 2000");
})


//DB Connection
mongoose.connect('mongodb://localhost:27017/myappp',
{ useNewUrlParser: true ,useUnifiedTopology: true },(err)=>{
    if(!err){
        console.log("DB Connected Successfully");
    }
})
