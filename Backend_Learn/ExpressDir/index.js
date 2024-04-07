const express = require('express');
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
})

app.use((req,res)=>{
    
    console.log("request recieved");
    let code = "<h1>Wazuupp</h1><button>hi</button>"
    res.send(code);


})