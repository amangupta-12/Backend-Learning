const mongoose = require('mongoose');



// Here we used async and await 
// bcz, database connections takes time
// so the node.js we wait till the db connects
async function connectDB(){

    await mongoose.connect("mongodb://127.0.0.1:27017/backend-journey");
// we are using local mongodb hence the backend-journey is the name of the db.
//  and rest is the system name and port name 

    console.log("Database connected");
}

module.exports = connectDB;