const express = require('express');
const app =  express();
const NoteModel = require('../model/notemodel');
const noteModel = require('../model/notemodel');

app.use(express.json()); 
app.post("/notes",async(req,res)=>{

    const data = req.body;           // notes{title,description}
     await NoteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message:"Note created"
    })
})

app.get("/notes", async (req,res)=>{
    const notes = await noteModel.find(); // give data in form of array of objects  

    // we also have findOne -> return only one data 
    const note = await noteModel.findOne({
        "title":"title1" // if it exist then will show in the client else shows as null
    })
// Diffrence btn find | findOne 
// find -> [{},{}] OR []
// findOne -> {} OR null 
    
    res.status(200).json({
        message:"Note Fetched Successfully",
        notes:notes
    })
     
})

app.delete("/notes/:id",async (req,res)=>{
    res.status(200).json({
        message:"Note deleted successfully"
    })

    const id =  req.params.id;

    await noteModel.findOneAndDelete({
        _id : id // here in id we have to put the id that given in db.
    })
})

app.patch("/notes/:id",async(req,res)=>{
    res.status(200).json({
        message:"Note updated successfully"
    })
    const id =  req.params.id;
    const description =  req.body.description
    await noteModel.findOneAndUpdate({_id : id},{description:description})
})

module.exports = app;