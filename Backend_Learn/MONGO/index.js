const mongoose = require("mongoose");
main().then(()=>{
    console.log("connextion successful");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age: Number
})

const User = mongoose.model("User",userSchema);

User.find({age:{$gte: 30}})
    .then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })



// User.insertMany([
//     {name:"Tony", email:"tony@xyz.io",age:50},
//     {name:"Peter", email:"peter@xyz.io",age:30},
//     {name:"Bruce", email:"bruce@xyz.io",age:47}
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// const user2 = new User({
//     name:"Eve",
//     email:"eve@xyz.io",
//     age:28
// })

// user2.save().then(()=>{
//     console.log("user saved successfully");
// }).catch((err)=>{
//     console.log(err);
// });