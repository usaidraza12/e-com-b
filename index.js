const express= require("express");
const userouter= require("./routes/router")
const cors= require("cors")
const app=express();
const connectDB= require('./module/db')
const mongoose= require("mongoose");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT || 8001;
const dotenv = require('dotenv');
const path = require("path");


dotenv.config();

// Static folder serve
// app.use('./uploads', express.static(path.join(__dirname, 'image')));
// index.js ya app.js
// app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(cookieParser())


connectDB()


app.use("/",userouter);




// Update cart item quantity

app.listen(PORT,()=>{
    console.log(`express ${PORT}`)
})