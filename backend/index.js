const express = require('express')
const mongoose= require('mongoose')
const app=express();
const StuRoute = require('./routes/stuRoute');
const cors = require('cors')
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());
app.use(bodyParser.json())
app.use("students",StuRoute);
mongoose.connect("mongodb://127.0.0.1.27017/mohitdb").then(()=>{
    console.log("DB succefuulyy ");
})

app.listen(9999,()=>{
    console.log("server running on port 9999")
})



