const express  = require('express');

const app = express(); // server ka instance cretae kar rhe h 

app.get(("/aman"),(req,res)=>{
    res.send("Hello Guys")
})
// req -> the data comes from frontend in req 
// res -> res send the data from backaend to frontend

app.listen(3000); // server ko start karne ke liye 

// here 3000 is a port 
// In our system there are different section like 
// email-25  files-20  server-3000
// therefore if we have to visit to that port we have to use that port number.

