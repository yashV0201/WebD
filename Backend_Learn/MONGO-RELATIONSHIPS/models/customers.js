const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(()=>{
    console.log("connected to DB");
}).catch(err=>console.log(err));
    

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const customerSchema = new Schema({
    name: String,
    orders:[
        {
            type: Schema.Types.ObjectId,
            ref:"Order"
        }
    ]
});


const orderSchema = new Schema({
    item: String,
    price: Number
});

const Order = mongoose.model("Order",orderSchema);
const Customer = mongoose.model("Customer",customerSchema);

const addCustomer = async()=>{
    let cust1 = new Customer({
        name:"Yash",
    });

    let order1 = await Order.findOne({item:"samosa"});
    let order2 = await Order.findOne({item:"coldrink"});
    cust1.orders.push(order1);
    cust1.orders.push(order2);

    let res = await cust1.save();
    console.log(res);
}

addCustomer();



// const addOrders = async()=>{
//     let res = await Order.insertMany([
//         {item:"samosa",price:12},
//         {item:"chips",price:10},
//         {item:"coldrink",price:20}
//     ]);
//     console.log(res);
// }

// addOrders();