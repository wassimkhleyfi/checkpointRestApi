const express = require("express");
require('dotenv').config()
const dbConnect=require('./config/connectDB')

const app=express();

// connect DB
dbConnect();

// middleware body Parser
app.use(express.json());


// Create routes
app.use("/api/contact",require("./routes/contacts"));


// running server
const PORT=process.env.PORT;

app.listen(PORT, (err)=>
err? console.error(err)
: console.log("server is running"))