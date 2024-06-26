const express = require('express');
const app = express();
const path = require("path");

// console.dir(app);

let port = 3000;

app.set("view engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.render("home.ejs");
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    res.render("instagram.ejs",{username});
})

app.get("/rolldice",(req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num: diceVal});
})


app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
})

