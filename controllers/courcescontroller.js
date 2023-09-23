let Event=require('../models/event')
const {body,validationResult}=require('express-validator')//middleware
const utilities=require('../utils/httputilities')
const getallcources= async(req, res) => {
    //get all cources fom database using course model
   const events=await Event.find()
    //res.json(cources)//sending jason  //standered way below
    res.render('pages/events.ejs',{events})//sending jason
    }
const getcourse=async  (req, res) => {
     //   const courseId=+req.params.courceId//to make id dynamic
       //const course=cources.find((course)=>course.id===courseId)
    try{ let event=await Event.findById(req.params.courceId)
      // res.json(course);//send data as jason
      res.render('pages/single.ejs',{event})
    }
    catch(err){ res.status(400).json({message:"Error getting courses"})}
   
}


     const addcourse=async (req,res)=>{
//req.body  :the written reqwest data
     
    //console.log(req.body);
    //const errors=validationResult(req);//result of errors if happend
    //console.log(errors.json())//errors in jason shape
    //cources.push({id:cources.length+1,...req.body});
   const newcource= new Event({title:req.body.title,price:req.body.price,description:req.body.description})
   await newcource.save();
    res.redirect('http://localhost:5000/')
    
     }
    const updatecourse=async(req,res)=>{
    //    let courceId=+req.params.courceId;
      //  let course=cources.find((course)=>course.id===courceId)
        //course={...course,...req.body}
        try{
       const updatedco=await Event.updateOne({_id:req.params.courceId},{$set:{...req.body}})
    return res.status(200).json(updatedco);
        }
        catch(err){
            return res.status(400).json({status:utilities.ERROR});
        }
    }
    const deletecourse=async(req,res)=>{
       // let courceId=+req.params.courceId;
        
       //cources=cources.filter((ele)=>{ele.id!==courceId});
const deleteddata=await Event.deleteOne({_id:req.params.courceId})
        //res.json({status:true,msg:deleteddata})
        res.redirect('http://localhost:5000/api/cources#')
    }
    
    module.exports={getallcources,getcourse,deletecourse,updatecourse,addcourse}