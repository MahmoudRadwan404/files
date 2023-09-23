const express=require('express')
const app=express(),
expressLayout=require('express-ejs-layouts')
const mongoose = require('mongoose')
const url="mongodb+srv://mahmoudrdwan:nodejs123@learn-mongo-db.szlqwvz.mongodb.net/codezone?retryWrites=true&w=majority&appName=AtlasApp"
app.use(express.static(__dirname+"/public"))
app.use('/node_modules',express.static(__dirname+"/node_modules"))
app.set('view engine', 'ejs')
app.use(expressLayout)
 mongoose.connect(url).then(()=>{
    console.log("mongo works in now")
})
app.use(express.json())//body parser for reading the incoming body
//let {cources}=require("./data/cources")
//const courcesrouter=require("./routs/routs")
//app.use("/",courcesrouter)//localhost / =>/api/courcesبدل ما اكتب البداية ديه ديما في الاوامؤ انا هثبتها واباصي المختلف منعا للتكرار

////
app.listen(3000,()=>{
console.log("working...working...working...")
}) 