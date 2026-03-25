const mongoose = require('mongoose');
//const { title } = require('node:process');

// we are creating the schema of the notes app
const noteSchema =  new mongoose.Schema({
    title:String,
    description:String,
})

// we are creating this noteModel for performing the CRUD ops
 const noteModel = mongoose.model("note",noteSchema);


 module.exports = noteModel;