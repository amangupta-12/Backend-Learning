const mongoose = require('mongoose')


const postSchema =  new mongoose.Schema({
    image:String,
    caption:String,
})

const postModel =  mongoose.model("post",postSchema) 

// "post" is the name of the collection  
// In DB, the similar data are stored in a collection.

module.exports = postModel;