let figlet = require("figlet");

figlet("Figlet.js", function(err, data){
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});