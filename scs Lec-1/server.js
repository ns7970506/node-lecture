const express = require('express')

const app =  express() // server ka instance create karna

app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.listen(3000) // server ko start karne ke liye

