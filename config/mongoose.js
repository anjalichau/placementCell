
// const mongoose = require("mongoose");

// mongoose.set('strictQuery', false);
// mongoose.connect("mongodb://localhost:27017/iamROARe_placementCell");


// connection of mongoDB database

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

let urlPassword= `FIoHdC8OQCyM8lRP`
let urlmain= `mongodb+srv://iamroarbeast:${urlPassword}@prajapati1.et4v46y.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(`${urlmain}`,{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));

// mongoose.connect('mongodb://0.0.0.0:27017/iamROARe_placementCell22222',{
//     useNewUrlParser: true, 
//     useUnifiedTopology: true
// })
// .then(db => console.log('DB is connected'))
// .catch(err => console.log(err));

// const db= mongoose.connection;
// db.on("error", console.error.bind(console,"Error in connection to Mongodb"));


// db.once("open", function(){
//     console.log("Successfully connected to Database :: MongoDB");

    
// });

// module.exports =db;
