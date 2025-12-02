const fs= require('fs');
let rs= fs.createReadStream('./demo.txt');

rs.on("open",()=>{
    console.log("hello")
})
rs.on("error",()=>{
    console.log("there is a error")
})
   
