const http = require('http')
const express = require('express')
const server = http.createServer((req,res)=>{
   const app = express()

   app.use("/",(req,res,next)=>{
    console.log("came in first middleware",req.url,req.method);
    next();
    })

    app.use("/submit-details",(req,res,next)=>{
        console.log("came in second middleware",req.url,req.method);
        res.send('<p>second middleware</p>')
        })

})

const PORT = 3001;
server.listen(PORT,()=>{
    console.log(`server running on address http://localhost:${PORT}`);
    
})