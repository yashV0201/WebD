const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=>{
    console.log("connected to DB");
}).catch(err=>console.log(err));
    

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema = new Schema({
    username:String,
    email:String
})

const postSchema = new Schema({
    content:String,
    likes:Number,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
})

const User = mongoose.model("User",userSchema);
const Post = mongoose.model("Post",postSchema);


const addData = async ()=> {
    let user1 = await User.findOne({username:"yash_v7"});

    let post2 = new Post({
        content:"goodbye",
        likes:224,
    })

    post2.user=user1;
    await post2.save();

}

addData();

