const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main().then(()=>{console.log("connection successful")})
    .catch((err)=>console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chatsAll = [
    {
        from:"obiWan",
        to:"anakin",
        message:"report to temple ASAP",
        created_at: new Date()
    },
    {
        from:"yoda",
        to:"obiWan",
        message:"did that did you?",
        created_at: new Date()
    },
    {
        from:"obiWan",
        to:"yoda",
        message:"yes master",
        created_at: new Date()
    },
    {
        from:"anakin",
        to:"amidala",
        message:"i have to go, see you soon",
        created_at: new Date()
    },
    {
        from:"dooku",
        to:"obiWan",
        message:"how did yo-",
        created_at: new Date()
    }
]

Chat.insertMany(chatsAll);