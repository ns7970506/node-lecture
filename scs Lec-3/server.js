const app  = require('./src/app')

const connectDB = require('./db/db')

connectDB()





const PORT = 3000
app.listen (PORT,()=>{
    console.log(`server is running on ${PORT}`);
    
})