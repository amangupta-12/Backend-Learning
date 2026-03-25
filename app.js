const express = require('express');
const app = express();
const cookieParser =  require('cookie-parser')

const authRoutes = require('../Routes/auth.routes')

app.use(express.json());

app.use(cookieParser()); // middleware
app.use("/api/auth",authRoutes) // prefix 

module.exports = app;