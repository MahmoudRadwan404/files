const mongoose = require('mongoose')
const courceSchma=new mongoose.Schema({
    title:{
type:String,
requied:true
    },
    price:{
type:Number,
requied:true
    },
    discription:{
        type:String,
        requied:true
    }
})
module.exports=mongoose.model('Event',courceSchma)