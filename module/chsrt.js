
const mongoose =require("mongoose");
const chartSchema = new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    },

},{timestamps :true})
