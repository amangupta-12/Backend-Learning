// server ko start kar rha h 

// const app = require("./index")

// app.listen(3000,()=>{
//     console.log("server is running at 3000")
// })






// Here we are creating a mini notes app 

const express = require('express')

const app = express();

app.use(express.json()); // This is a middleware use to read the data 
// Now, the data is in json form so we use express.json.


app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

const notes = [] // created a array to store data 

// data is coming from frontend to server. (user is crating the notes on ui)
app.post("/notes",(req,res)=>{
  notes.push(req.body)

  res.status(201).json({ // we convert the message into json format and send it to thunder client.
    message:"Notes Created Successfully"
  })
})
// First API -> http://localhost:3000/notes (post) 

// now the data is stored in the notes array in array of objects. 
// then we have to send the data from server to frontend to show on the ui.

// so when we have to fetch data from server we use GET
app.get("/notes",(req,res)=>{
    
    res.status(200).json({
        message:"Notes fetched successfully",
        notes:notes   // here i print the notes arr in the get api 
    })
})
// Second API -> http://localhost:3000/notes (get) both the api are different .
// one post the data and the other get the data 


// Delete node 
app.delete("/notes/:index",(req,res)=>{ // link -> after : all the things are dynamic (index)

    const index =  req.params.index // here req.params.index = index from the link
     delete notes[index]
    res.status(200).json({
        message:"Note is deleted Successfully"
    })
})

// Patch API 
app.patch("/notes/:ind",(req,res)=>{

    const index = req.params.ind;
    const description = req.body.description;

    // if we doesnot pass any data this will run 
    if(!notes[index]){
        return res.status(404).json({
            message:"Note not found"
        })
    }

    notes[index].description = description;

    res.status(200).json({
        message:"Note updated successfully",
        note: notes[index]
    })
})
// The server will do the things that you are Progammed 
// This will only change the description of the notes 
// For updating the notes we have to create another for title.

// One problem is there in this application, the data that we are storing in the array is lost when the server id diconnected 
// so, to solve this problem, Database is introduced. 

