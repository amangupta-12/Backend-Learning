const app = require("./app");
const connectDB = require("../database/db");

connectDB();

// here we connect the server to the db 
// now we work on the same notes application using db.

// When we have to create a db , we have to give the schema (structure) of the db
// In the schema, we give the datatype and how the data stores.
// so in notemodel we are creating the schema 

app.listen(3000,()=>{
    console.log("Server running on port 3000")
})