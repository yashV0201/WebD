const express = require("express");
const app = express();
const ExpressError = require("./ExpressErrors");

const checkToken = (req,res,next)=>{
    let{token} = req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
}

app.get("/api",checkToken,(req,res)=>{
    res.send("data");
})

app.listen(8080,()=>{
    console.log("server is listening to port 8080");
})

app.use((err,req,res,next)=>{
    let{status,message} = err;
    res.status(status).send(message);
})