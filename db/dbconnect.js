const dbconnect = () => {

    //dB connection//////////
    const mongoose = require("mongoose");
    
    const conn_str = "mongodb+srv://piwa:rakel1990@cluster0.cgja9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

    mongoose.connect(
        conn_str,
        { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        },(err) => {
            if (err) {
                console.log("error in connection",err);
            } else {
                console.log("mongodb is connected");
        }});
}

module.exports = dbconnect;