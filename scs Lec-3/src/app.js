const express = require('express');
const noteModel = require('./model/note.model')
const app = express();

app.use(express.json())
// post method

app.post("/notes",async (req,res)=>{
    const data = req.body
   await noteModel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message: "Notes Created "
    })
})
// get method
app.get('/notes', async (req,res)=>{

    const notes = await noteModel.find()

    res.status(200).json({
        message : "notes fetched successfully",
        notes : notes
    })
})


/* 
find => [{} , {}]  or []
findOne => {} or null
*/

// delete method

app.delete('/notes/:id',async(req,res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id: id
    })
    res.status(200).json({
        message: "notes deleted successfully"
    })
})


// patch method
   app.patch('/notes/:id',async(req,res)=>{
        const id = req.params.id
        const description = req.body.description

        await noteModel.findOneAndUpdate(
            {
            _id:id
        },
        {
            description: 'description updated'
        }
    )

    res.status(200).json({
        message: "Notes updated successfully"
    })
   })

module.exports = app
