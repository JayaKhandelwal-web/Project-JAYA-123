import express from "express";
import session from "express-session";
import web from "./routes/web.js";

const app= express();

app.use(session({
    name:"rajeshsession",
    secret:"iamkey",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:200000}
}))



app.use("/", web);

app.listen(3000, ()=>{
    console.log("server run on 3000");
})
