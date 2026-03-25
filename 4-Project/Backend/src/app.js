const express = require('express');
const multer = require('multer');
const uploadFile = require("../services/storage.service")
const postModel = require("../Model/postModel")
const cors = require("cors")


const app = express();
app.use(cors())
app.use(express.json());


const upload = multer({ storage: multer.memoryStorage() })
// multer is a middleware  allow to store the data if type file.


app.post('/create-post', upload.single("image"), async (req, res) => {

    const result = await uploadFile(req.file.buffer)
    if(!req.file){
        return res.status(400).json({
           error:'No file'
            
        })
    }

    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post created successfully",
        post
    })

})

app.get("/posts", async (req, res) => {

    const posts = await postModel.find()


    return res.status(200).json({
        message: "Posts fetched successfully",
        posts
    })

})


module.exports = app;
