const express=require('express')
const app=express()
app.use(express.json())
const {body,validationResult}=require('express-validator')//middleware
const router=express.Router()
const courcescont=require("../controllers/courcescontroller")
const pagecont=require("../controllers/pagecontroller")
router.get("/",pagecont.showevent )
router.get("/a",pagecont.showcontact )
router.get("/b",pagecont.createevent )
//router.get("/a",pagecont.showcontact )
router.get("/api/cources", courcescont.getallcources)

router.get("/api/cources/:courceId", courcescont.getcourse)

router.post("/api/cources",courcescont.addcourse)
/*router.post("/api/cources",(req,res)=>{
    const blog=new Event(req.body)
    blog.save()
    .then((result)=>{
        console.log("saved")
        res.redirect('http://localhost:5000/api/cources#')
    })
})*/

router.patch('/api/cources/:courceId',courcescont.updatecourse)

router.get('/api/cources/:courceId/delete',courcescont.deletecourse)

////
module.exports = router;