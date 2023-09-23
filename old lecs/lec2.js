let file=require('node:fs')
const { stringify } = require('node:querystring')
//read file
/*const content=file.readFileSync("./hello.txt","utf-8")//blocking code that excecute first before the second line tip:end up with(sync)its blocking
console.log(content)
console.log("finish")*/
//call back function handels the block to excecute in a syncronus way
/* //read file doesnot block code
const content2=file.readFile("./hello.txt","utf-8",(err,data)=>{
if(err)
{console.log(err)}
else if(data)
{console.log(data)}
})
*/
//write file
//file.writeFile("./userss.json",JSON.stringify([{id:12345}]),'utf8',(err)=>{if(err){console.log("not working")}})

//delete file
//file.unlink("./file.json",(err)=>{if(err)console.log("no")})
/////////////////////////////
//see buffer section in nodejs docs
//working with large data using streams
//streams[readable,wrirable] while reading it reads chunk by chunk
/*const rstream=file.createReadStream("./hello.txt",'utf-8')
const wrstream=file.createWriteStream("./stream.txt",'utf-8')//devide file into chunks
rstream.on("data",(chunk)=>{wrstream.write(chunk)
})*/

/*npm
npm init :initiate package
npm init --yes ::initiate default package 
npm install lodash: setup npm package
npm --help :to show all comands of npm 
*/
// lodash:functions of javascript
const _=require("lodash")
/**
  * npm install -g nodemon
 * npm install --save-dev nodemon
 */
//




